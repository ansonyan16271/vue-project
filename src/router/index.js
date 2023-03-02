import Vue from 'vue'
import VueRouter from 'vue-router'
import items from '@/utils/menu' //公共数据
import { initRoutes } from '@/utils/routesFn'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
    
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',//布局
    name: 'home',
    component: () => import('../layout/index.vue'),

  }
]
//1、选筛选home
let homeRoutes = routes.filter(v => v.path === '/home')[0];  //{}
//2、添加children子级
homeRoutes.children = [];
//3、递归函数
initRoutes(items, homeRoutes.children);



const router = new VueRouter({
  routes
})

export default router
