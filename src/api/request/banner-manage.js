import http from '@/api/axios'

// 新增、编辑广告
export const putAdvance = params =>
  http('/api/vip-mall/manager/advance/putAdvance', params, 'POST')

// 广告列表
export const listAdvance = params =>
  http('/api/vip-mall/manager/advance/listAdvance', params, 'POST')

// 修改广告状态
export const updateAdvanceStatus = params =>
  http('/api/vip-mall/manager/advance/updateAdvanceStatus', params, 'POST')

// 获取广告详情
export const getAdvance = params =>
  http('/api/vip-mall/manager/advance/getAdvance', params, 'POST')

// 修改广告排序
export const updateAdvanceRank = params =>
  http('/api/vip-mall/manager/advance/updateAdvanceRank', params, 'POST')
