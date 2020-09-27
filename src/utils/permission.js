import router from '@/router'
// import store from '@/store'
import storageUtils from '@/utils/storageUtils'
import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

router.beforeEach((to, from, next) => {
  const { token } = storageUtils.getToken()

  if (!token) {
    if (to.path !== '/login') return next('/login')
  } else {
    if (to.path === '/login') return next('/')
  }

  /* 路由发生改变修改页面的title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
