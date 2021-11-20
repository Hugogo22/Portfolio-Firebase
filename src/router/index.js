import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../components/Accueil.vue'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil,
    meta: { num: 1 }
  },
  {
    path: '/CV',
    name: 'CV',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/CV.vue'),
    meta: { num: 2 }
  },
  {
    path: '/Realisations',
    name: 'Realisations',
    component: () => import('../components/Realisations.vue'),
    meta: { num: 3 }
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import('../components/Contact.vue'),
    meta: { num: 4 }
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

router.afterEach((to, from) => {
  to.meta.transitionName = to.meta.num < from.meta.num ? 'from-right' : 'from-left'
})

export default router
