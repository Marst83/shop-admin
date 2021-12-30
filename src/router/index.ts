import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'

// RouteRecordRaw 类型声明
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../views/home/HomeIndex.vue')
  },
  {
    path: '/login',
    component: () => import('../views/login/LoginIndex.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(), // 路由的模式
  routes
})

export default router
