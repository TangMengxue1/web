import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import loginRegister from '../views/loginRegister.vue'
import news from '../views/news.vue'
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'login',
    component: loginRegister
  },
  {
    path: '/news',
    name: 'news',
    component: news
  },
  {
    path: '/project',
    component: () => import('@/views/project'),
  },
  {
    path: '/goods',
    component: () => import('@/views/goods'),
  },
  {
    path: '/car',
    name:'CAR',
    component: () => import('@/views/car'),
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
