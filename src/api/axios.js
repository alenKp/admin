import axios from 'axios'
import storageUtils from '@/utils/storageUtils'
import DonMessage from '@/utils/message'
import CODE from '@/api/code'
import { getPlatform, getOsVersion } from '@/utils/common'
import router from '@/router'

const Message = new DonMessage()

/**
 * 在接口前统一添加token
 */
axios.interceptors.request.use(
  function(config) {
    const { token, userId } = storageUtils.getToken()
    let osVersion = storageUtils.getOsVersion()
    let lang = storageUtils.getLang()
    let platform = storageUtils.getPlatform()
    let deviceId = storageUtils.getUid()
    const appId = process.env.VUE_APP_WEB_ADMIN_APP_ID
    if (!osVersion) {
      osVersion = getOsVersion()
      storageUtils.saveOsVersion(osVersion)
    }
    if (!lang) {
      lang = 1
      storageUtils.saveLang(lang)
    }
    if (!platform) {
      platform = getPlatform()
      storageUtils.savePlatform(platform)
    }

    const headers = {
      __CXY_OS_VER_: osVersion,
      __CXY_OS_LANG_: lang,
      __CXY_PLATFORM_: platform,
      __CXY_DUID_: deviceId,
      __CXY_APP_ID_: appId
    }
    if (config.url !== '/feishu') {
      if (token) headers.__CXY_TOKEN_ = token
      if (userId) headers.__CXY_UID_ = userId

      config.headers = headers
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
/**
 * http请求状态码拦截
 */
axios.interceptors.response.use(
  response => {
    return Promise.resolve(response)
  },
  error => {
    const status = error.response
    if (status) {
      switch (status.status) {
        case 400:
          error.message = '错误请求'
          break
        case 401:
          error.message = '未授权，请重新登录'
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 404:
          error.message = '请求错误,未找到该资源'
          break
        case 405:
          error.message = '请求方法未允许'
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器端出错，请检查网络'
          break
        case 501:
          error.message = '网络未实现'
          break
        case 502:
          error.message = '链接服务器失败，请检查网络'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网络超时'
          break
        case 505:
          error.message = 'http版本不支持该请求'
          break
        default:
          error.message = `连接错误${error.response.status}`
      }
    } else {
      error.message = '请求失败服务器未响应，请检查网络'
    }
    return Promise.reject(error)
  }
)
/**
 * 二次封装axios
 * @param {String} url // 后端api地址（必填）
 * @param {Object} data // 传参（必填）
 * @param {String} type // 请求类型（必填）
 * @param {Number} timeout // 请求等待时间 (非必填)
 * @returns {Promise<unknown>} 返回异步请求状态
 */
export default function http(url, data = {}, type = 'GET', timeout = 200000) {
  return new Promise((resolve, reject) => {
    let promise
    // 请求超时时间
    axios.defaults.timeout = timeout
    const { userId } = storageUtils.getToken()
    const VUE_APP_IS_SEND_LOG = Boolean(
      process.env.VUE_APP_IS_SEND_LOG === 'true'
    )
    if (type === 'GET') {
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }
    promise
      .then(
        response => {
          if (response.data && response.data.code === CODE.tokenError) {
            storageUtils.removeToken()
            Message.warning('登录信息已过期，请重新登录')
            setTimeout(() => {
              router.replace('/login')
            }, 600)
          } else {
            if (
              VUE_APP_IS_SEND_LOG &&
              (!response.data || response.data.code !== CODE.success)
            ) {
              const text = `收到一条接口异常消息，请及时处理！\n [${new Date().toLocaleString()}]\n [登录用户]：${userId}\n [项目环境]：${
                process.env.NODE_ENV
              }\n [项目名称]：vip商城后台\n [接口api]：${url}，\n [接口入参]：${JSON.stringify(
                data
              )}，\n [返回结果]：${JSON.stringify(response.data)}`
              axios.post('/feishu', { text })
            }
            resolve(response.data)
          }
        },
        error => {
          if (VUE_APP_IS_SEND_LOG) {
            const text = `收到一条接口异常消息，请及时处理！\n [${new Date().toLocaleString()}]\n [登录用户]：${userId}\n [项目环境]：${
              process.env.NODE_ENV
            }\n [项目名称]：vip商城后台\n [接口api]：${url}，\n [接口入参]：${JSON.stringify(
              data
            )}，\n [返回结果]：${JSON.stringify(error)}`
            axios.post('/feishu', { text })
          }
          resolve({
            code: 'error',
            msg: `${url}：${error.message}`
          })
        }
      )
      .catch(err => {
        Message.error(err.message)
        reject(err)
      })
  })
}
