// import { login, logout, getInfo } from '@/api/user'
// import { getToken, setToken, removeToken } from '@/utils/auth'
// import router, { resetRouter } from '@/router'
import { login, getManagerList, getUserInfo } from '@/api/request/public'
import storageUtils from '@/utils/storageUtils'
import CODE from '@/api/code'

const state = {
  name: '',
  avatar: '',
  introduction: '',
  info: null,
  aliyunOss: null,
  roles: {}
}

const mutations = {
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_ALIOSS: (state, aliyunOss) => {
    state.aliyunOss = aliyunOss
  },
  SET_INFO: (state, info) => {
    state.info = info
  }
}

const actions = {
  // user login
  // eslint-disable-next-line no-unused-vars
  doLogin({ commit }, loginForm) {
    const { account, password } = loginForm
    return new Promise((resolve, reject) => {
      login({
        account,
        password
      })
        .then(response => {
          const { code, msg, result } = response
          if (code !== CODE.success) {
            return reject(msg)
          }
          storageUtils.saveToken(result)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // get user info
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getUserInfo()
        .then(response => {
          const { code, msg, result } = response
          if (code !== CODE.success) {
            return reject('getInfo result =>' + msg)
          }
          const { userInfo, ossInfo } = result
          const { base } = userInfo
          const { avatar, nickName, introduction } = base
          // set user nickName
          commit('SET_NAME', nickName)
          // set aliOSS info
          commit('SET_ALIOSS', ossInfo)
          // set user avatar
          commit('SET_AVATAR', avatar)
          // set user introduction
          commit('SET_INTRODUCTION', introduction)
          // set user all info
          commit('SET_INFO', userInfo)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // get user auth nav
  getAuth({ commit }) {
    return new Promise((resolve, reject) => {
      getManagerList()
        .then(response => {
          const { code, msg, result } = response
          if (code !== CODE.success) {
            reject('getAuth result =>' + msg)
          } else {
            // set user auth menu
            commit('SET_ROLES', result)
            resolve(result)
          }
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise(resolve => {
      storageUtils.removeToken()
      // set user nickName
      commit('SET_NAME', '')
      // set aliOSS info
      commit('SET_ALIOSS', null)
      // set user avatar
      commit('SET_AVATAR', '')
      // set user introduction
      commit('SET_INTRODUCTION', '')
      // set user all info
      commit('SET_INFO', null)
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
