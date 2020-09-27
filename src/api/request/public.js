import http from '../axios'

/**
 * 根据条件查询内容列表
 * @method
 * @param {Object} params 内容参数信息
 * @return {Object} 返回值 包括code,msg,result
 */
export const getCategoryList = (params = {}) =>
  http(
    '/api/website/class/listClass',
    {
      type: params.type,
      status: params.status
    },
    'POST'
  )

/**
 * 查找账号（仅限管理后台调用）
 * @method
 * @param {Object} params 内容参数信息
 * @return {Object} 返回值 包括code,msg,result
 */
export const accountSearch = (params = {}) =>
  http(
    '/api/manager/accountSearch',
    {
      account: params.account,
      page: params.page,
      pageSize: params.pageSize
    },
    'POST'
  )
/**
 * 登录
 * @method
 * @param {Object} params 内容参数信息
 * @return {Object} 返回值 包括code,msg,result
 */
export const login = (params = {}) =>
  http(
    '/api/account/loginV2',
    {
      account: params.account,
      password: params.password,
      type: 1
    },
    'POST'
  )
/**
 * 查询自己的管理员权限信息
 * @method
 * @param {Object} params 内容参数信息
 * @return {Object} 返回值 包括code,msg,result
 */
export const getManagerList = () => http('/api/manager/detail', {}, 'POST')

/**
 * 获取用户信息
 * @method
 * @param {Object} params 内容参数信息
 * @return {Object} 返回值 包括code,msg,result
 */
export const getUserInfo = () =>
  http('/api/vip-mall/manager/user/getUserInfo', {}, 'POST')
/**
 * 刷新token
 * @method
 * @return {Object} 返回值 包括code,msg,result
 * @param {Object} token 本地token
 * @param {String} deviceId 设备id
 * @param {String} osLang 语言
 *
 */
