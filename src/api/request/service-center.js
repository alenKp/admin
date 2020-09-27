/**
 *  Created by wangAlen on 2019-11-14 10:33
 */
import ajax from '@/api/axios'

/**
 * 查询服务列表
 * @method
 * @param {Object} params
 * @return {Object} 返回值 包括code,msg,result
 */
export const listFaq = (params = {}) =>
  ajax(
    '/api/vip-mall/manager/faq/listFaq',
    {
      page: params.page,
      pageSize: params.pageSize,
      keyword: params.keyword,
      fatherId: params.fatherId,
      status: params.status,
      classId: params.classId
    },
    'POST'
  )
/**
 * 新增或修改服务信息
 * @method
 * @return {Object} 返回值 包括code,msg,result
 * @param {Object} params
 */
export const putFaq = (params = {}) =>
  ajax(
    '/api/vip-mall/manager/faq/putFaq',
    {
      item: {
        classId: params.classId,
        describe: params.describe,
        content: params.content,
        title: params.title,
        rank: params.rank,
        id: params.id
      }
    },
    'POST'
  )
/**
 * 修改FAQ排序或状态
 * @method
 * @return {Object} 返回值 包括code,msg,result
 * @param {Object} params
 */
export const updateStatus = (params = {}) =>
  ajax(
    '/api/vip-mall/manager/faq/updatePartFaq',
    {
      id: params.id,
      rank: params.rank,
      status: params.status
    },
    'POST'
  )
