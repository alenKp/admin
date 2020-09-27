import http from '@/api/axios'

// SEO页面列表
export const listSeo = params =>
  http('/api/vip-mall/manager/seo/listSeo', params, 'POST')

// 新增、编辑SEO
export const putSeo = params =>
  http('/api/vip-mall/manager/seo/putSeo', params, 'POST')

// 删除SEO页面
export const deleteSeo = params =>
  http('/api/vip-mall/manager/seo/deleteSeo', params, 'POST')

// 获取SEO详情
export const getSeo = params =>
  http('/api/vip-mall/manager/seo/getSeo', params, 'POST')
