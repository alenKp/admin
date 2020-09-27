import BMF from 'browser-md5-file'
import { preUpload } from './request'

const AWS = require('aws-sdk/index')

// 创建s3对象
function createS3(awsInfo) {
  const { region, accessKeyId, secretAccessKey, sessionToken } = awsInfo
  return new AWS.S3({
    apiVersion: '2006-03-01',
    region: region,
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    sessionToken: sessionToken,
    leavePartsOnError: true
  })
}

/**
 * 下载模型文件
 * @method
 * @return {Promise} 返回值 文件file
 * @param {Object} awsInfo AWS.S3配置
 * @param {Object} params 请求参数
 * @param {Function} onprogress 加载事件
 * @param {Function} handleDownload
 */
export const downloadModelFile = (
  awsInfo,
  params,
  onprogress,
  handleDownload
) => {
  const s3 = createS3(awsInfo)
  const { bucket, fileKey } = params
  const s3Request = s3.getObject({
    Bucket: bucket,
    Key: fileKey
  })
  s3Request.on('httpDownloadProgress', onprogress)
  if (handleDownload) handleDownload(s3Request)
  return new Promise((resolve, reject) => {
    s3Request.send((err, data) => {
      if (!err) {
        const file = new Blob([data.Body])
        resolve(file)
      } else {
        reject(err)
      }
    })
  })
}

/**
 * 文件转换成MD5
 * @method
 * @return {MD5 []} 返回值 文件MD5列表
 * @param {File []} fileList 文件列表
 */
export const fileToMd5 = fileList => {
  const bmf = new BMF()
  const tasks = fileList.map(
    file =>
      new Promise((resolve, reject) => {
        bmf.md5(file, async (err, md5) => {
          !err ? resolve(md5) : reject(err)
        })
      })
  )
  return Promise.all(tasks)
}

/**
 * 上传文件
 * @method
 * @return {Promise} 返回值 上传结果
 * @param {Object} awsInfo AWS.S3配置
 * @param {File []} fileList 上传文件列表
 * @param {Number} fileType 文件类型
 */
export const uploadFiles = async (awsInfo, fileList, fileType) => {
  let timeout = 120
  const md5s = await fileToMd5(fileList)
  const { code, msg, result } = await preUpload(md5s, fileType)
  if (code === window.SUCC_CODE) {
    const { bucket, list } = result
    const s3 = createS3(awsInfo)
    const uploadList = fileList.map((file, index) => {
      const params = {
        Body: file,
        Bucket: bucket,
        Key: list[index].fileKey
      }
      return s3.upload(params)
    })

    const timer = setInterval(() => {
      if (timeout <= 0) {
        clearInterval(timer)
        uploadList.forEach(up => setTimeout(up.abort.bind(up), 0))
        throw new Error('Upload files timeout!')
      } else {
        timeout--
      }
    }, 1000)

    const queue = uploadList.map(
      upload =>
        new Promise((resolve, reject) =>
          upload.send((err, data) => {
            !err ? resolve(data) : reject(err)
          })
        )
    )
    const resultList = await Promise.all(queue)
    clearInterval(timer)
    return resultList
  } else if (code !== window.ERR_TOKEN_CODE) {
    throw new Error(msg)
  }
  return null
}
