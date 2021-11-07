<template>
  <div class="invisible xl:visible fixed right-4 top-4 flex flex-col z-50 align-baseline font-mono text-lg tracking-tight uppercase font-bold">
    <router-link to="/">
      <div class="p-3">
        Home
      </div>
    </router-link>
    <router-link to="/CV">
      <div class="p-3">
        Mon CV
      </div>
    </router-link>
    <router-link to="/Realisations">
      <div class="p-3">
        Mes réalisations
      </div>
    </router-link>
    <router-link to="/Contact">
      <div class="p-3">
        Me contacter
      </div>
    </router-link>
  </div>
  <div class="visible xl:invisible fixed right-4 top-4 z-50 cursor-pointer" @click="sideNav = !sideNav">
    <div class="flex flex-col space-y-1">
      <div class="bg-black w-12 h-2 rounded-xl scale-0 transition-transform duration-200 ease-in-out" :class="{ transform: sideNav }"></div>
      <div class="bg-black w-12 h-2 rounded-xl -rotate-45  transition-transform duration-200 ease-in-out" :class="{ transform: sideNav }"></div>
      <div class="bg-black w-12 h-2 rounded-xl scale-0 transition-transform duration-200 ease-in-out" :class="{ transform: sideNav }"></div>
      <div class="bg-black w-12 h-2 rounded-xl absolute top-2 rotate-45  transition-transform duration-200 ease-in-out" :class="{ transform: sideNav }"></div>
    </div>
  </div>
  <div class="xl:invisible fixed top-0 bg-gradient-to-br from-sky-400 to-indigo-400 z-40 h-screen w-screen translate-x-full transition-transform duration-200 ease-in-out" :class="{ transform: !sideNav }">
    <div class="flex flex-col text-3xl uppercase font-extralight tracking-wider" @click="sideNav = false">
      <router-link to="/">
        <div class="p-3">
          Home
        </div>
      </router-link>
      <hr/>
      <router-link to="/CV">
        <div class="p-3">
          Mon CV
        </div>
      </router-link>
      <hr/>
      <router-link to="/Realisations">
        <div class="p-3">
          Mes réalisations
        </div>
      </router-link>
      <hr/>
      <router-link to="/Contact">
        <div class="p-3">
          Me contacter
        </div>
      </router-link>
    </div>
  </div>
  <router-view v-slot="{ Component }">
    <transition name="custom-trans"
      enter-from-class="translate-x-full"
      enter-active-class="z-40 absolute w-full transform transition-all duration-500 ease-in-out"
      leave-active-class="z-40 absolute w-full transform transition-all duration-500 ease-in-out"
      leave-to-class="-translate-x-full"
    >
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<script>

export default {
    name: 'App',
    data() {
      return {
        sideNav: false
      }
    }
}
</script>