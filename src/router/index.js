import Vue from 'vue'
import VueRouter from 'vue-router'
import items from '@/utils/menu'  //公共数据
//import approvalApply from './modules/approvalApply'
import {initRoutes} from '@/utils/routesFn'


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
    path: '/home',//布局页
    name: 'home',
    component: () => import('../layout/index.vue'),
    
  }
]

let homeRoutes = routes.filter(v => v.path === '/home')[0];

homeRoutes.children = [];


initRoutes(items, homeRoutes.children);


const router = new VueRouter({
  routes
})

export default router
