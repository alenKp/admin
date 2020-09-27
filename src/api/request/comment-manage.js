import ajax from '@/api/axios'

/**
 * 获取评论列表
 * @method
 * @param {Object} params 分页信息
 * @return {Object} 返回值 包括code,msg,result
 */
export const commentList = (params = {}) =>
  ajax(
    '/api/vip-mall/manager/comment/listComment',
    {
      page: params.page,
      pageSize: params.pageSize,
      goodsId: params.goodsId,
      goodsName: params.goodsName,
      orderId: params.orderId,
      keyword: params.keyword,
      status: params.status,
      author: params.author
    },
    'POST'
  )

/**
 * 评论排序
 * @method
 * @param {Object} params 权限组的Id
 * @return {Object} 返回值 包括code,msg,result
 */
export const setCommentRank = (params = {}) =>
  ajax(
    '/api/vip-mall/manager/comment/setCommentRank',
    {
      id: params.id,
      rank: params.rank
    },
    'POST'
  )

/**
 * 修改评论状态
 * @method
 * @param {Object} params 权限组的Id
 * @return {Object} 返回值 包括code,msg,result
 */
export const updateStatus = (params = {}) =>
  ajax(
    '/api/vip-mall/manager/comment/updateCommentStatus',
    {
      id: params.id,
      status: params.status
    },
    'POST'
  )
