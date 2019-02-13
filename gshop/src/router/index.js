import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

import Shop from '../pages/Shop/Shop'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'

//路由懒加载， js打包的时候会分开，每个路由对应一个js文件

// const Msite = () => import ('../pages/Msite/Msite.vue')
// const Search = () => import ('../pages/Search/Search.vue')
// const Order = () => import ('../pages/Order/Order.vue')
// const Profile = () => import ('../pages/Profile/Profile.vue')
// const Login = () => import ('../pages/Login/Login.vue')
// const Shop = () => import ('../pages/Shop/Shop')
// const ShopInfo = () => import ('../pages/Shop/ShopInfo/ShopInfo')
// const ShopGoods = () => import ('../pages/Shop/ShopGoods/ShopGoods')
// const ShopRatings = () => import ('../pages/Shop/ShopRatings/ShopRatings')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Msite',
      name: 'Msite',
      component: Msite, //返回路由组件的函数，只有执行此函数的时候才会加载路由组件，
                        //第一次请求路由组件的时候执行
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Login',
      name: 'login',
      component: Login
    },
    {
      path: '/Shop',
      name: 'shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },{
          path: '/shop/ratings',
          component: ShopRatings
        },{
          path: '/shop/info',
          component: ShopInfo
        },{
          path: '',
          redirect: '/shop/goods'
        }
      ]
    },
    {
      path: '/',
      redirect: '/msite',
      meta: {
        showFooter: true
      }
    }
  ]
})
