import http from '@/api/axios'

// 货币类型列表
export const currencyTypeList = () =>
  http('/api/vip-mall/manager/currency/CurrencyTypeList', {}, 'POST')

// 新增、编辑货币
export const putCurrency = params =>
  http('/api/vip-mall/manager/currency/putCurrency', params, 'POST')

// 获取货币列表
export const listCurrency = params =>
  http('/api/vip-mall/manager/currency/listCurrency', params, 'POST')

// 删除当前货币
export const updateCurrencyStatus = params =>
  http('/api/vip-mall/manager/currency/updateCurrencyStatus', params, 'POST')
