import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/mall/home',
    name: 'MallHome',
    component: () => import('../views/mall/home.vue')
  },
  {
    path: '/mall/shop',
    name: 'MallShop',
    component: () => import('../views/mall/shop.vue')
  },
  {
    path: '/module',
    name: 'Module',
    component: () => import('../views/module/module.vue')
  },
  {
    path: '/scroll',
    name: 'Scroll',
    component: () => import('../views/scroll/scroll.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
