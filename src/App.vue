<template>
  <div class="hidden xl:flex fixed right-4 top-4 flex-col z-50 align-baseline font-mono text-lg tracking-tight uppercase font-bold text-gray-800 transition-transform duration-300 translate-x-56" :class="{ transform: isScrolled}">
    <router-link class="routerlink" to="/">
      <div class="p-3">
        Home
      </div>
    </router-link>
    <router-link class="routerlink" to="/CV">
      <div class="p-3">
        Mon CV
      </div>
    </router-link>
    <router-link class="routerlink" to="/Realisations">
      <div class="p-3">
        Mes réalisations
      </div>
    </router-link>
    <router-link class="routerlink" to="/Contact">
      <div class="p-3">
        Me contacter
      </div>
    </router-link>
  </div>
  <div class="xl:-translate-y-16 fixed right-4 top-4 z-50 cursor-pointer transition-transform duration-200" @click="sideNav = !sideNav" :class="{ transform: !isScrolled }">
    <div class="flex flex-col space-y-1">
      <div class="bg-gray-800 w-12 h-2 rounded-xl scale-0 transition-transform duration-200 ease-in-out" :class="{ transform: sideNav }"></div>
      <div class="bg-gray-800 w-12 h-2 rounded-xl -rotate-45  transition-transform duration-200 ease-in-out" :class="{ transform: sideNav }"></div>
      <div class="bg-gray-800 w-12 h-2 rounded-xl scale-0 transition-transform duration-200 ease-in-out" :class="{ transform: sideNav }"></div>
      <div class="bg-gray-800 w-12 h-2 rounded-xl absolute top-2 rotate-45  transition-transform duration-200 ease-in-out" :class="{ transform: sideNav }"></div>
    </div>
  </div>
  <div class="fixed top-0 bg-gradient-to-br from-sky-400 to-indigo-400 z-40 h-screen w-screen translate-x-full transition-transform duration-200 ease-in-out" :class="{ transform: !sideNav }">
    <div class="group flex flex-col text-4xl uppercase font-extralight tracking-wider" @click="sideNav = false">
      <router-link to="/">
        <div class="p-3 hover:text-white transition-colors duration-150">
          Home
        </div>
      </router-link>
      <hr/>
      <router-link to="/CV">
        <div class="p-3 hover:text-white transition-colors duration-150">
          Mon CV
        </div>
      </router-link>
      <hr/>
      <router-link to="/Realisations">
        <div class="p-3 hover:text-white transition-colors duration-150">
          Mes réalisations
        </div>
      </router-link>
      <hr/>
      <router-link to="/Contact">
        <div class="p-3 hover:text-white transition-colors duration-150">
          Me contacter
        </div>
      </router-link>
    </div>
  </div>
  <router-view v-slot="{ Component }">
    <transition
      enter-from-class="translate-x-full"
      enter-active-class="z-40 absolute w-full transform-gpu transition-transform duration-500 ease-in-out"
      leave-active-class="z-40 absolute w-full transform-gpu transition-transform duration-500 ease-in-out"
      leave-to-class="-translate-x-full"
    >
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<style scoped>
  .routerlink::after {
    content: "";
    z-index: -1;
    @apply bg-sky-500 w-1 h-1/4 absolute transform -translate-y-full duration-500 transition-transform scale-0;
  }

  .router-link-active::after {
    @apply scale-75;
  }
</style>

<script>

export default {
    name: 'App',
    data() {
      return {
        sideNav: false,
        isScrolled: false,
        test: 50
      }
    },
    methods: {
      handleScroll() {
        this.isScrolled = (window.scrollY > 350);
      }
    },
    created() {
      window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
      window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>