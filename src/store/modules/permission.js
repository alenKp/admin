import menu from '@/assets/json/menu.json'
import { jsonDeepClone } from '@/utils/common'

const state = {
  permissionMenu: []
}

const mutations = {
  SET_MENU: (state, permissionMenu) => {
    state.permissionMenu = permissionMenu
  }
}

const actions = {
  // set permission menu
  getMenu({ commit }, roles) {
    let menuList = []
    if (!roles) {
      return commit('SET_MENU', menuList)
    }
    const { authGroupIds, systemAuthGroupList, auths } = roles
    const sysAuthList = systemAuthGroupList.map(item => item.id)
    const tData = jsonDeepClone(menu)
    // 过滤阿里OSS文件读写菜单
    const orginMenuList = tData.filter(
      t => t.key !== '/api/account/getAliyunInfo'
    )
    let isAdmin = false
    // 判断用户是否为超管
    if (systemAuthGroupList) {
      sysAuthList.forEach(item => {
        if (authGroupIds.includes(item)) {
          isAdmin = true
        }
      })
    }
    if (isAdmin) {
      // 如果是超管则有所有权限
      menuList = orginMenuList
    } else {
      // 不是超管则从权限菜单auths、tData中过滤
      // this.menuList = orginMenuList.filter((t) => {
      //   return auths.includes(t.key) && t.key !== '/api/account/getAliyunInfo'
      // })
      const list = []
      // 过滤重复数据，避免出现重复菜单
      const checkRepeat = (list, t) => list.findIndex(i => i.key === t.key)
      // 循环匹配
      orginMenuList.forEach(t => {
        if (t.children && t.children.length) {
          t.children.forEach(c => {
            if (auths.includes(c.key) && checkRepeat(list, t) < 0) {
              list.push(t)
            }
          })
        } else {
          if (auths.includes(t.key) && checkRepeat(list, t) < 0) {
            list.push(t)
          }
        }
      })
      menuList = [...list]
    }
    // 过滤不必要的子菜单
    menuList.forEach(item => {
      if (item.children) {
        item.children = undefined
      }
    })
    commit('SET_MENU', menuList)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
