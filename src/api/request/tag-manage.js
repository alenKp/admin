import ajax from '@/api/axios'

/**
 * 获取商品标签列表
 * @method
 * @param {Number} page
 * @param {Number} pageSize
 * @param {Boolen} isAll
 * @return {Object} 返回值 包括code,msg,result
 */
export const reqGetGoodsGroup = (params = {}) =>
  ajax(
    '/api/vip-mall/manager/tag/listTag',
    {
      page: params.page,
      pageSize: params.pageSize,
      classId: params.classId,
      name: params.name,
      status: params.status
    },
    'POST'
  )

/**
 * 根据商品分类查询标签列表
 * @method
 * @param {Number} id 0-新增 其他-修改
 * @param {String} name
 * @param {Number} rank
 * @return {Object} 返回值 包括code,msg,result
 */
export const groupTags = (params = {}) =>
  ajax(
    '/api/vip-mall/manager/tag/groupTags',
    {
      classId: params.classId
    },
    'POST'
  )
/**
 * 新增或修改商品标签
 * @method
 * @param {Number} id 0-新增 其他-修改
 * @param {String} name
 * @param {Number} rank
 * @return {Object} 返回值 包括code,msg,result
 */
export const reqEditGroup = (params = {}) =>
  ajax(
    '/api/vip-mall/manager/tag/putTag',
    {
      tag: {
        id: params.id,
        name: params.name,
        classId: params.classId,
        i18nNames: params.i18nNames
      }
    },
    'POST'
  )

/**
 * 修改标签状态
 * @method
 * @param {Number} id
 * @return {Object} 返回值 包括code,msg,result
 */
export const reqDeleteGroup = (id, status) =>
  ajax('/api/vip-mall/manager/tag/updateTagStatus', { id, status }, 'POST')
