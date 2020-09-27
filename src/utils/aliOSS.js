/**
 *  Created by wangAlen on 2019-12-17 11:32
 */
import { getAwsInfo } from '@/utils/request'
import store from '@/store/index'
import STATUS_CODE from '@/api/code'
import DonMessage from '@/utils/message'
import Compressor from 'compressorjs'
import OSS from 'ali-oss'
const Message = new DonMessage()
/**
 * 图片压缩
 * @param {Object} file
 * @returns {Promise<unknown>} file
 * @constructor
 */
export const CompressorImg = file => {
  return new Promise((resolve, reject) => {
    new Compressor(file, {
      quality: 0.6,
      convertSize: 500 * 1024,
      success(result) {
        resolve(result)
      },
      error(err) {
        reject(err)
      }
    })
  })
}
/**
 * 阿里云接口构建oss对象
 * @param {String} fileType
 * @description 根据token请求oss接口，返回oss实列
 * @returns {Promise<{msg: (string|string|msg), status: string}>} Promise
 */
export const OssRequset = async (fileType = 'image') => {
  const aliyunOss = store.getters.aliyunOss
  let bucketType = null
  let _bucket = ''
  if (fileType === 'image') {
    bucketType = aliyunOss.image
  } else if (fileType === 'video') {
    bucketType = aliyunOss.video
  } else if (fileType === 'file') {
    bucketType = aliyunOss.file
  }
  const response = await getAwsInfo()
  _bucket = bucketType && bucketType.bucket

  return new Promise((resolve, reject) => {
    if (response.code === STATUS_CODE.success) {
      const {
        accessKeyId,
        secretAccessKey,
        sessionToken
      } = response.result.aliyunInfo
      if (!accessKeyId || !secretAccessKey || !sessionToken) {
        reject({
          status: 'error',
          msg: '错误信息：系统返回accessKeyId/secretAccessKey/sessionToken为空'
        })
        Message.error('系统错误，请联系运维')
      }
      const endpoint = aliyunOss.endpoint
      if (!_bucket) {
        Message.error('用户信息已过期，上传功能暂无法使用，重新登录后再试')
        reject({
          status: 'error',
          msg: '未能获取到系统bucket'
        })
      }
      resolve(
        new OSS({
          // 云账号AccessKey有所有API访问权限，建议遵循阿里云安全最佳实践，部署在服务端使用RAM子账号或STS，部署在客户端使用STS。
          endpoint: endpoint,
          accessKeyId: accessKeyId,
          accessKeySecret: secretAccessKey,
          bucket: _bucket,
          stsToken: sessionToken
        })
      )
    } else if (response.code !== STATUS_CODE.tokenError) {
      reject({
        status: 'error',
        msg: response.msg
      })
      Message.error(response.msg)
    } else {
      reject({
        status: 'error',
        msg: '上传失败，网络错误'
      })
      Message.error('上传失败，身份信息错误')
    }
  })
}
