import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('@/App.vue') },
    { path: '/tool', component: () => import('@/views/ToolPage.vue') },
  ],
})

export default router
