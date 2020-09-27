import http from '@/api/axios'

const POST = 'POST'

/**
 * 预上传请求
 * @method
 * @return {Object} 返回值 包括code,msg,result
 */
export const getAwsInfo = () => http('/api/account/getAliyunInfo', {}, 'POST')

/**
 * 预上传请求
 * @method
 * @param {Array} md5s 文件md5
 * @param {Number} fileType 上传文件类型 默认：0 - 模型文件， 1 - 头像文件 ，2 - 意见反馈文件 ， 3 - 评论文件
 * @param {Object} token 用户标识
 * @return {Object} 返回值 包括code,msg,result
 */
export const preUpload = (md5s, fileType) =>
  http('/api/file/preupload', { md5s, fileType }, POST)

/**
 * 获取商品类别列表
 * @method
 * @return {Object} 返回值 包括code,msg,result
 */
export const getGoodsType = () =>
  http('/api/website/goods/class/list', {}, POST)
