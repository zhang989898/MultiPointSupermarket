import Vue from 'vue'
import Router from 'vue-router'

const tabber = () => import('@/views/tabber')
const home = () => import('@/views/tabber/pages/home') //首页
const classify = () => import('@/views/tabber/pages/classify') //分类
const car = () => import('@/views/tabber/pages/car') //购物车
const mine = () => import('@/views/tabber/pages/mine') //我的

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/tabber',
      component: tabber,
      children: [
        {
          path: '/home',
          component: home,
        },
        {
          path: '/classify',
          component: classify,
        },
        {
          path: '/car',
          component: car,
        },
        {
          path: '/mine',
          component: mine,
        }
      ]
    }
  ]
})
