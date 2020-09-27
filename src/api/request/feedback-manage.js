import ajax from '@/api/axios'

/**
 * 根据条件查询意见反馈列表
 * @method
 * @param {Object} params 分页信息
 * @return {Object} 返回值 包括code,msg,result
 */
export const listFeedback = (params = {}) =>
  ajax(
    '/api/vip-mall/manager/feedback/listFeedback',
    {
      page: params.page,
      pageSize: params.pageSize,
      begin: params.begin,
      end: params.end,
      status: params.status
    },
    'POST'
  )

/**
 * 修改意见反馈
 * @method
 * @param {Object} params 分页信息
 * @return {Object} 返回值 包括code,msg,result
 */
export const updateFeedback = (params = {}) =>
  ajax(
    '/api/vip-mall/manager/feedback/updateFeedback',
    {
      remark: params.remark,
      status: params.status,
      id: params.id
    },
    'POST'
  )
