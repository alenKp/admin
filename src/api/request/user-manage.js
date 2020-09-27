import ajax from '@/api/axios'
/**
 * 获取管理员列表
 * @method
 * @param {Number} page
 * @param {Number} pageSize
 * @param {Number} status
 * @param {Object} account 订单条件查询信息
 * @return {Object} 返回值 包括code,msg,result
 */
export const getManagerList = (page, pageSize, status, account) =>
  ajax(
    '/api/manager/list',
    {
      page,
      pageSize,
      status,
      account
    },
    'POST'
  )
/**
 * 新建管理员
 * @method
 * @param {String} account 权限组名称(模糊搜索)
 * @param {Object} nickName 用户标识
 * @param {Array} authGroupIds 用户标识
 * @return {Object} 返回值 包括code,msg
 */
export const addManager = (account, nickName, authGroupIds) =>
  ajax('/api/manager/add', { account, nickName, authGroupIds }, 'POST')

/**
 * 删除用户账号
 * @method
 * @param {Number} id 管理员账号Id
 * @param {Object} token 用户标识
 * @return {Object} 返回值 包括code,msg
 */
export const deleteManager = id => ajax('/api/manager/delete', { id }, 'POST')
/**
 * 禁用启用用户
 * @method
 * @param {Number} id 管理员账号Id
 * @param {Boolean} action 禁用或启用(true: 启用, false: 禁用)
 * @param {Object} token 用户标识
 * @return {Object} 返回值 包括code,msg
 */
export const enableManager = (id, action) =>
  ajax('/api/manager/enable', { id, action }, 'POST')

/**
 * 配置管理员权限组
 * @method
 * @param {Number} id 用户Id
 * @param {Array} authGroupIds 权限组ID
 * @param {String} nickName 用户昵称
 * @return {Object} 返回值 包括code,msg
 */
export const setManagerAuthGroups = (id, authGroupIds, nickName) =>
  ajax('/api/manager/attachAuthGroups', { id, authGroupIds, nickName }, 'POST')

/**
 * 权限组列表
 * @method
 * @param {Object} page 分页信息
 * @param {Object} pageSize 用户标识
 * @param {String} name 权限组名称(模糊搜索)
 * @return {Object} 返回值 包括code,msg,result
 */
export const getAGList = (page, pageSize, name) =>
  ajax('/api/authgroup/list', { page, pageSize, name }, 'POST')
