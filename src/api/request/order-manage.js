import ajax from '@/api/axios'

/**
 * 根据条件查询订单列表
 * @method
 * @param {Object} page 分页信息
 * @param {Number} pageSize
 * @param {String} name 权限组名称(模糊搜索)
 * @return {Object} 返回值 包括code,msg,result
 */
export const listOrder = params =>
  ajax(
    '/api/vip-mall/manager/order/listOrder',
    {
      page: params.page,
      pageSize: params.pageSize,
      account: params.account,
      id: params.id,
      status: params.status,
      begin: params.begin,
      end: params.end,
      receiverName: params.receiverName
    },
    'POST'
  )
/**
 * 查询订单详情
 * @method
 * @param {Object} page 分页信息
 * @param {Number} pageSize
 * @param {String} name 权限组名称(模糊搜索)
 * @return {Object} 返回值 包括code,msg,result
 */
export const orderInfo = params =>
  ajax(
    '/api/vip-mall/manager/order/orderInfo',
    {
      id: params.id
    },
    'POST'
  )
/**
 * 已支付订单
 * @method
 * @param {Object} page 分页信息
 * @param {Number} pageSize
 * @param {String} name 权限组名称(模糊搜索)
 * @return {Object} 返回值 包括code,msg,result
 */
export const payCompleted = params =>
  ajax(
    '/api/vip-mall/manager/order/payCompleted',
    {
      id: params.id
    },
    'POST'
  )

/**
 * 获取物流公司列表
 * @method
 * @param {Object} page 分页信息
 * @param {Number} pageSize
 * @param {String} name 权限组名称(模糊搜索)
 * @return {Object} 返回值 包括code,msg,result
 */
export const companyList = () =>
  ajax('/api/vip-mall/manager/express/companyList', {}, 'POST')

/**
 * 订单修改价格
 * @method
 * @param {Object} page 分页信息
 * @param {Number} pageSize
 * @param {String} name 权限组名称(模糊搜索)
 * @return {Object} 返回值 包括code,msg,result
 */
export const modifyPrice = params =>
  ajax(
    '/api/vip-mall/manager/order/modifyPrice',
    {
      id: params.id,
      price: params.price
    },
    'POST'
  )

/**
 * 编辑物流
 * @method
 * @param {Object} page 分页信息
 * @param {Number} pageSize
 * @param {String} name 权限组名称(模糊搜索)
 * @return {Object} 返回值 包括code,msg,result
 */
export const editExpress = params =>
  ajax(
    '/api/vip-mall/manager/order/editExpress',
    {
      id: params.id,
      companyCode: params.companyCode,
      trackNumber: params.trackNumber
    },
    'POST'
  )
