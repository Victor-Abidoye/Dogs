import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:breed/:_id',
      name: 'breed',
      props: true,
      component: () => import('../views/BreedView.vue')
    }
  ]
})

export default router
