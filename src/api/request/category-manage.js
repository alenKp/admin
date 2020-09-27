/**
 *  Created by wangAlen on 2019-11-14 10:33
 */
import ajax from '../axios'

/**
 * 获取所有分类列表
 * @method
 * @param {Object} params
 * @return {Object} 返回值 包括code,msg,result
 */
export const getAllClass = () =>
  ajax('/api/vip-mall/manager/class/getClass', {}, 'POST')

/**
 * 根据类型查询分类列表
 * @method
 * @param {Object} params
 * @return {Object} 返回值 包括code,msg,result
 */
export const getGoodsCategory = (params = {}) =>
  ajax(
    '/api/vip-mall/manager/class/listClass',
    {
      type: params.type,
      status: params.status,
      relationId: params.relationId,
      fatherId: params.fatherId
    },
    'POST'
  )

/**
 * 新增或修改分类
 * @method
 * @return {Object} 返回值 包括code,msg,result
 * @param {Object} params
 */
export const setGoodsCategory = (params = {}) =>
  ajax(
    '/api/vip-mall/manager/class/putClass',
    {
      item: {
        fatherId: params.fatherId,
        picture: params.picture,
        name: params.name,
        rank: params.rank,
        id: params.id,
        type: params.type,
        url: params.url,
        relationId: params.relationId,
        i18nNames: params.i18nNames
      }
    },
    'POST'
  )
/**
 * 删除商品分类
 * @method
 * @return {Object} 返回值 包括code,msg,result
 * @param {Object} params
 */
export const delGoodsCategory = (params = {}) =>
  ajax(
    '/api/mall/manager/goods/class/delete',
    {
      id: params.id
    },
    'POST'
  )
/**
 * 修改分类状态
 * @method
 * @return {Object} 返回值 包括code,msg,result
 * @param {Object} params
 */
export const updateStatus = (params = {}) =>
  ajax(
    '/api/vip-mall/manager/class/updateClassStatus',
    {
      id: params.id,
      status: params.status
    },
    'POST'
  )
