import { createRouter, createWebHistory } from 'vue-router'
import taskTop from '../views/taskTop.vue'
import staffTop from '../views/staffTop.vue'
import addStaff from '../views/addStaff.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'taskTop',
      component: taskTop
    },
    {
      path: '/staff-top',
      name: 'staffTop',
      component: staffTop
    },
    {
      path: '/add-staff',
      name: 'addStaff',
      component: addStaff
    }
  ]
})

export default router
