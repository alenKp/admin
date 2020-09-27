import ajax from '@/api/axios'

/**
 * 权限组列表
 * @method
 * @param {Object} page 分页信息
 * @param {Number} pageSize
 * @param {String} name 权限组名称(模糊搜索)
 * @return {Object} 返回值 包括code,msg,result
 */
export const getAGList = (page, pageSize, name) =>
  ajax('/api/authgroup/list', { page, pageSize, name }, 'POST')

/**
 * 查询权限组所拥有的权限
 * @method
 * @param {Array} id 权限组的Id
 * @return {Object} 返回值 包括code,msg,result
 */
export const getAuthsById = id =>
  ajax('/api/authgroup/queryById', { id }, 'POST')

/**
 * 新建权限组
 * @method
 * @param {String} name 权限组名称(模糊搜索)
 * @param {String} description 分页信息
 * @return {Object} 返回值 包括code,msg
 */
export const addAG = (name, description) =>
  ajax('/api/authgroup/add', { name, description }, 'POST')

/**
 * 删除权限组
 * @method
 * @param {Number} id 权限组Id
 * @return {Object} 返回值 包括code,msg
 */
export const deleteAG = id => ajax('/api/authgroup/delete', { id }, 'POST')

/**
 * 给权限组分配权限
 * @method
 * @param {String} id 权限组Id
 * @param {Object} auths 权限列表
 * @return {Object} 返回值 包括code,msg,result
 */
export const disposeAuths = (id, auths) =>
  ajax('/api/authgroup/dispose', { id, auths }, 'POST')
