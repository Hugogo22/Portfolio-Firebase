<template>
  <NavBar/>
  <CV/>
</template>

<script>
import Accueil from './components/Accueil.vue'
import CV from './components/CV.vue'
//import NavBar from './components/NavBar.vue'

const routes = [
  { path: '/', component: Accueil },
  { path: '/CV', component: CV },
]

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default {
  name: 'App',
  components: {
    CV,
    NavBar
  }
}
</script>