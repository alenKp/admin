import ajax from '@/api/axios'

/**
 * 创建/编辑商品
 * @method
 * @param {Object} params 商品参数信息
 * @return {Object} 返回值 包括code,msg,result
 */
export const createGoods = params =>
  ajax('/api/vip-mall/manager/goods/putGoods', params, 'POST')
/**
 * 创建/编辑多语言商品
 * @method
 * @param {Object} params 商品参数信息
 * @return {Object} 返回值 包括code,msg,result
 */
export const putI18nGoods = params =>
  ajax('/api/vip-mall/manager/goods/putI18nGoods', params, 'POST')

/**
 * 根据条件查询商品列表
 * @method
 * @param {Object} params 商品参数信息
 * @return {Object} 返回值 包括code,msg,result
 */
export const getGoodsList = (params = {}) =>
  ajax(
    '/api/vip-mall/manager/goods/listGoods',
    {
      page: params.page,
      pageSize: params.pageSize,
      name: params.name,
      classId: params.classId,
      status: params.status,
      recommendType: params.recommendType
    },
    'POST'
  )
/**
 * 根据条件查询商品子语言列表
 * @method
 * @param {Object} params 商品参数信息
 * @return {Object} 返回值 包括code,msg,result
 */
export const listI18nGoods = (params = {}) =>
  ajax(
    '/api/vip-mall/manager/goods/listI18nGoods',
    {
      page: params.page,
      pageSize: params.pageSize,
      goodsId: params.goodsId,
      lang: params.lang
    },
    'POST'
  )
/**
 * 修改推荐商品排序
 * @method
 * @param {Object} params 商品参数信息
 * @return {Object} 返回值 包括code,msg,result
 */
export const updateRecommendRank = (params = {}) =>
  ajax(
    '/api/mall/manager/goods/updateRecommendRank',
    {
      goodsId: params.goodsId,
      rank: params.rank,
      recommendType: params.recommendType
    },
    'POST'
  )
/**
 * 修改商品热度
 * @method
 * @param {Object} params 商品参数信息
 * @return {Object} 返回值 包括code,msg,result
 */
export const updateGoodsHot = (params = {}) =>
  ajax(
    '/api/vip-mall/manager/goods/updateGoodsHot',
    {
      id: params.id,
      hotLevel: params.hotLevel
    },
    'POST'
  )
/**
 * 关联推荐商品
 * @method
 * @param {Object} params 商品参数信息
 * @return {Object} 返回值 包括code,msg,result
 */
export const goodsUpdateRelation = (params = {}) =>
  ajax(
    '/api/vip-mall/manager/goods/goodsUpdateRelation',
    {
      id: params.id,
      relationGoods: params.relationGoods
    },
    'POST'
  )
/**
 * 查询关联推荐商品
 * @method
 * @param {Object} params 商品参数信息
 * @return {Object} 返回值 包括code,msg,result
 */
export const listRelationGoods = (params = {}) =>
  ajax(
    '/api/vip-mall/manager/goods/listRelationGoods',
    {
      id: params.id
    },
    'POST'
  )
/**
 * 推荐/取消商品
 * @method
 * @param {Object} params 商品参数信息
 * @return {Object} 返回值 包括code,msg,result
 */
export const recommend = (params = {}) =>
  ajax(
    '/api/vip-mall/manager/goods/goodsRecommend',
    {
      id: params.id,
      recommendType: params.recommendType,
      begin: params.begin,
      end: params.end,
      rank: params.rank,
      isCancel: params.isCancel
    },
    'POST'
  )
/**
 * 根据条件查询推荐商品列表
 * @method
 * @param {Object} params 商品参数信息
 * @return {Object} 返回值 包括code,msg,result
 */
export const recommendList = (params = {}) =>
  ajax(
    '/api/vip-mall/manager/goods/listRecommendGoods',
    {
      page: params.page,
      pageSize: params.pageSize,
      recommendType: params.recommendType,
      name: params.name,
      classId: params.classId
    },
    'POST'
  )
/**
 *
 * 根据条件查询商品详情
 * @method
 * @param {Object} params 商品参数信息
 * @return {Object} 返回值 包括code,msg,result
 */
export const getGoodsInfo = (params = {}) =>
  ajax(
    '/api/vip-mall/manager/goods/getGoods',
    {
      id: params.id,
      lang: params.lang
    },
    'POST'
  )
/**
 *
 * 修改sku状态
 * @method
 * @param {String} params 商品参数信息
 * @return {Object} 返回值 包括code,msg,result
 */
export const updateStatus = (params = {}) =>
  ajax(
    '/api/vip-mall/manager/goods/updateSkuStatus',
    {
      id: params.id,
      status: params.status
    },
    'POST'
  )
/**
 *
 * 修改多语言状态
 * @method
 * @param {String} params 商品参数信息
 * @return {Object} 返回值 包括code,msg,result
 */
export const updateGoodsI18nStatus = (params = {}) =>
  ajax(
    '/api/vip-mall/manager/goods/updateGoodsI18nStatus',
    {
      goodsId: params.goodsId,
      lang: params.lang,
      status: params.status
    },
    'POST'
  )
/**
 * 修改商品状态
 * @method
 * @param {Object} params 商品参数信息
 * @return {Object} 返回值 包括code,msg,result
 */
export const delGoods = (params = {}) =>
  ajax(
    '/api/vip-mall/manager/goods/updateGoodsStatus',
    {
      id: params.id,
      status: params.status
    },
    'POST'
  )
/**
 * 修改商品排序
 * @method
 * @param {Object} params 商品参数信息
 * @return {Object} 返回值 包括code,msg,result
 */
export const updateRank = (params = {}) =>
  ajax(
    '/api/vip-mall/manager/goods/updateGoodsRank',
    {
      id: params.id,
      recommendType: params.recommendType,
      rank: params.rank
    },
    'POST'
  )
/**
 * 获取商品SKU列表
 * @method
 * @param {Object} params 商品参数信息
 * @return {Object} 返回值 包括code,msg,result
 */
export const getSkus = (params = {}) =>
  ajax(
    '/api/vip-mall/manager/goods/listSku',
    {
      id: params.id
    },
    'POST'
  )
/**
 * 修改SKU库存
 * @method
 * @param {Object} params 商品参数信息
 * @return {Object} 返回值 包括code,msg,result
 */
export const updateSkuStock = (params = {}) =>
  ajax('/api/vip-mall/manager/goods/updateGoodsSkus', params, 'POST')
