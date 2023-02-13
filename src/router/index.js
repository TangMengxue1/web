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
    
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
