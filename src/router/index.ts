import { createRouter, createWebHistory } from 'vue-router'
import TaskHome from '../views/TaskHome/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TaskHome
    }
  ]
})

export default router
