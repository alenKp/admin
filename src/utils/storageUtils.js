// local 数据存储管理的工具模块
const USER_KEY = 'user_key'
const AUTH_KEY = 'auth_key'
const TOKEN_KEY = 'token_key'
const CATEGORYID = 'category-id'
const USER_NAME = 'user_name'
const USER_PWD = 'user_pwd'
const UUID = 'uuid'
const LANG = 'lang'
const PLATFORM = 'platform'
const OS_VERSION = 'os_version'
const IS_REMEBER = 'is_remember'

export default {
  // 保存token
  saveToken(token) {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(token))
  },
  // 保存权限信息
  saveAuth(token) {
    localStorage.setItem(AUTH_KEY, JSON.stringify(token))
  },
  // 保存用户
  saveUser(user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  },
  // 保存客户端语言
  saveLang(lang) {
    localStorage.setItem(LANG, lang)
  },
  // 保存操作系统版本
  saveOsVersion(osVersion) {
    localStorage.setItem(LANG, osVersion)
  },
  // 保存客户端类型
  savePlatform(platform) {
    localStorage.setItem(OS_VERSION, platform)
  },
  getOsVersion() {
    return localStorage.getItem(OS_VERSION) || null
  },
  getLang() {
    return localStorage.getItem(LANG)
  },
  getPlatform() {
    return localStorage.getItem(PLATFORM)
  },
  // 读取
  getUser() {
    return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
  },
  // 读取权限信息
  getAuth() {
    return JSON.parse(localStorage.getItem(AUTH_KEY) || '{}')
  },
  // 读取token
  getToken() {
    return JSON.parse(localStorage.getItem(TOKEN_KEY) || '{}')
  },
  // 删除
  removeUser() {
    localStorage.removeItem(USER_KEY)
  },
  // 删除
  removeToken() {
    localStorage.removeItem(TOKEN_KEY)
  },
  // 记住密码
  saveUserName(userName) {
    localStorage.setItem(USER_NAME, userName)
  },
  getUserName() {
    return localStorage.getItem(USER_NAME)
  },
  savePwd(password) {
    localStorage.setItem(USER_PWD, password)
  },
  getPwd() {
    return localStorage.getItem(USER_PWD)
  },
  // 删除用户名跟密码
  removeUserName() {
    localStorage.removeItem(USER_NAME)
  },
  removeUserPwd() {
    localStorage.removeItem(USER_PWD)
  },
  saveUid(uuid) {
    localStorage.setItem(UUID, uuid)
  },
  getUid() {
    return localStorage.getItem(UUID)
  },
  removeIsremeber() {
    localStorage.removeItem(IS_REMEBER)
  },
  saveIsremamber(uuid) {
    localStorage.setItem(IS_REMEBER, uuid)
  },
  getIsremember() {
    return localStorage.getItem(IS_REMEBER)
  }
}
