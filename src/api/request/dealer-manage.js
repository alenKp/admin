import ajax from '@/api/axios'

/**
 * 新增\修改经销商
 * @method
 * @param {Object} page 分页信息
 * @param {Number} pageSize
 * @param {String} name 权限组名称(模糊搜索)
 * @return {Object} 返回值 包括code,msg,result
 */
export const putDealer = params =>
  ajax(
    '/api/vip-mall/manager/dealer/putDealer',
    {
      item: {
        id: params.id,
        realName: params.realName,
        account: params.account,
        discountRate: params.discountRate,
        contact: params.contact,
        userId: params.userId,
        phoneAreaCode: params.phoneAreaCode,
        accountType: params.accountType
      },
      password: params.password
    },
    'POST'
  )
/**
 * 获取经销商列表
 * @method
 * @param {Object} page 分页信息
 * @param {Number} pageSize
 * @param {String} name 权限组名称(模糊搜索)
 * @return {Object} 返回值 包括code,msg,result
 */
export const listDealer = params =>
  ajax(
    '/api/vip-mall/manager/dealer/listDealer',
    {
      page: params.page,
      pageSize: params.pageSize,
      status: params.status,
      keyword: params.keyword
    },
    'POST'
  )
/**
 * 重置经销商密码
 * @method
 * @param {Object} page 分页信息
 * @param {Number} pageSize
 * @param {String} name 权限组名称(模糊搜索)
 * @return {Object} 返回值 包括code,msg,result
 */
export const accountResetPasswd = params =>
  ajax(
    '/api/manager/accountResetPasswd',
    {
      userId: params.userId,
      password: params.password
    },
    'POST'
  )
/**
 * 警用/启用经销商
 * @method
 * @param {Object} page 分页信息
 * @param {Number} pageSize
 * @param {String} name 权限组名称(模糊搜索)
 * @return {Object} 返回值 包括code,msg,result
 */
export const forbidUser = params =>
  ajax(
    '/api/vip-mall/manager/user/forbidUser',
    {
      userId: params.userId,
      dealineTime: params.dealineTime,
      isCancel: params.isCancel
    },
    'POST'
  )
