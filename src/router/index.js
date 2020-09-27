import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404')
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/home'),
        name: 'home',
        meta: {
          title: '首页',
          icon: 'el-icon-s-check'
        }
      },
      {
        path: '/auth-manage',
        component: () => import('@/views/auth-manage'),
        name: 'auth-manage',
        meta: {
          title: '账号权限管理',
          icon: 'el-icon-s-check'
        }
      },
      {
        path: '/banner-manage/',
        component: () => import('@/views/banner-manage'),
        name: 'banner-manage',
        meta: {
          title: '广告管理',
          icon: 'el-icon-s-check'
        }
      },
      {
        path: '/category-manage',
        component: () => import('@/views/category-manage'),
        name: 'category-manage',
        meta: {
          title: '分类管理',
          icon: 'el-icon-s-check'
        }
      },
      {
        path: '/comment-manage',
        component: () => import('@/views/comment-manage'),
        name: 'comment-manage',
        meta: {
          title: '用户评论管理',
          icon: 'el-icon-s-check'
        }
      },
      {
        path: '/tag-manage',
        component: () => import('@/views/tag-manage'),
        name: 'tag-manage',
        meta: {
          title: '标签管理',
          icon: 'el-icon-s-check'
        }
      },
      {
        path: '/currency-exchange',
        component: () => import('@/views/currency-exchange'),
        name: 'currency-exchange',
        meta: {
          title: '货币兑换',
          icon: 'el-icon-s-check'
        }
      },
      {
        path: '/dealer-manage',
        component: () => import('@/views/dealer-manage'),
        name: 'dealer-manage',
        meta: {
          title: '经销商管理',
          icon: 'el-icon-s-check'
        }
      },
      {
        path: '/goods-manage',
        component: () => import('@/views/goods-manage'),
        name: 'goods-manage',
        meta: {
          title: '商品管理',
          icon: 'el-icon-s-check'
        }
      },
      {
        path: '/create-goods',
        component: () => import('@/views/goods-manage/create-goods'),
        name: 'create-goods',
        meta: {
          after: {
            title: '商品管理',
            path: '/goods-manage'
          },
          title: '发布商品',
          icon: 'el-icon-s-check'
        }
      },
      {
        path: '/order-manage',
        component: () => import('@/views/order-manage'),
        name: 'order-manage',
        meta: {
          title: '订单管理',
          icon: 'el-icon-s-check'
        }
      },
      {
        path: '/order-detail',
        component: () => import('@/views/order-detail'),
        name: 'order-detail',
        meta: {
          after: {
            title: '订单管理',
            path: '/order-manage'
          },
          title: '订单详情',
          icon: 'el-icon-s-check'
        }
      },
      {
        path: '/transport-manage',
        component: () => import('@/views/transport-manage'),
        name: 'transport-manage',
        meta: {
          title: '运费模板管理',
          icon: 'el-icon-s-check'
        }
      },
      {
        path: '/seo-manage',
        component: () => import('@/views/page-seo-manage'),
        name: 'seo-manage',
        meta: {
          title: 'SEO管理',
          icon: 'el-icon-s-check'
        }
      },
      {
        path: '/feedback-manage',
        component: () => import('@/views/feedback-manage'),
        name: 'feedback-manage',
        meta: {
          title: '意见反馈管理',
          icon: 'el-icon-s-check'
        }
      },
      {
        path: '/service-center',
        component: () => import('@/views/service-center'),
        name: 'service-center',
        meta: {
          title: '服务中心',
          icon: 'el-icon-s-check'
        }
      },
      {
        path: '/create-service',
        component: () => import('@/views/service-center/create-service'),
        name: 'create-service',
        meta: {
          after: {
            title: '服务中心',
            path: '/service-center'
          },
          title: '新建服务中心',
          icon: 'el-icon-s-check'
        }
      }
    ]
  },
  // 404错误页面
  { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
