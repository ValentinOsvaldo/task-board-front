import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import HomePage from '@/pages/board/BoardPage.vue'
import LoginPage from '@/pages/auth/LoginPage.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: HomePage, name: 'Home' },
  {
    path: '/login',
    component: LoginPage,
    name: 'Login',
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
