import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../components/Accueil.vue'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/CV',
    name: 'CV',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/CV.vue')
  },
  {
    path: '/Sidenav',
    name: 'Sidenav',
    component: () => import('../components/Sidenav.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { 
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router
