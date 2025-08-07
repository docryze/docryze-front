import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      "path": "/index",
      "component": () => import("@/views/Index.vue")
    },
    {
      "path": "/postList",
      "component": () => import("@/views/PostList.vue")
    }
  ],
})

export default router
