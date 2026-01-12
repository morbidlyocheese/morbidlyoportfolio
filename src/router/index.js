import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/traditional',
      name: 'traditional-gallery',
      component: () => import('../views/PhotoView.vue'),
    },
    {
      path: '/traditional/:id',
      name: 'traditional',
      component: () => import('../views/PhotoView.vue'),
    },
    {
      path: '/digital',
      name: 'digital-gallery',
      component: () => import('../views/DigitalView.vue'),
    },
    {
      path: '/digital/:id',
      name: 'digital',
      component: () => import('../views/DigitalView.vue'),
    },
    {
      path: '/threed',
      name: 'threed-gallery',
      component: () => import('../views/ThreeDView.vue'),
    },
    {
      path: '/threed/:id',
      name: 'threed',
      component: () => import('../views/ThreeDView.vue'),
    },
  ],
})

export default router
