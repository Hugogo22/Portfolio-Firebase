<template>
  <div class="bg-blue-waves bg-cover pb-9">
    <div class="flex flex-row justify-center space-x-20 pt-5 px-6">
      <button @click="lang = 'en'" 
      class="rounded-xl p-2 bg-transparent border-white border-solid border-4 uppercase tracking-wider font-semibold cursor-pointer focus:outline-none transform hover:scale-105 hover:shadow-lg transition-all"
      :class="lang == 'en' ? ['text-sky-600', 'bg-white'] : ['text-white', 'bg-transparent']">
        English
      </button>
      <button @click="lang = 'fr'" 
      class="rounded-xl p-2 bg-transparent border-white border-solid border-4 uppercase tracking-wider font-semibold cursor-pointer focus:outline-none transform hover:scale-105 hover:shadow-lg transition-all"
      :class="lang == 'fr' ? ['text-sky-600', 'bg-white'] : ['text-white', 'bg-transparent']">
        French
      </button>
    </div>
    <div class="flex justify-center">
      <div class="relative flex flex-col w-11/12 sm:w-3/4 2xl:w-1/2" style="aspect-ratio: 9 / 13;">
        <div class="absolute inset-0 my-16 bg-gradient-to-br from-sky-200 to-blue-200 rounded-2xl p-9 shadow-lg transform 2xl:rotate-15 opacity-20"></div>
        <div class="absolute inset-0 my-16 bg-gradient-to-br from-sky-200 to-blue-200 rounded-2xl p-9 shadow-lg transform 2xl:rotate-12 opacity-40"></div>
        <div class="absolute inset-0 my-16 bg-gradient-to-br from-sky-300 to-blue-300 rounded-2xl p-9 shadow-lg transform 2xl:rotate-9 opacity-60"></div>
        <div class="absolute inset-0 my-16 bg-gradient-to-br from-sky-400 to-blue-400 rounded-2xl p-9 shadow-lg transform 2xl:rotate-6 opacity-80"></div>
        <div class="absolute inset-0 my-16 bg-gradient-to-br from-sky-500 to-blue-500 rounded-2xl p-9 shadow-lg transform 2xl:rotate-3"></div>
        <div class="relative h-full my-4 sm:my-8 2xl:my-16 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 sm:p-9">
          <iframe :src="'/CV-Hugo-EYNARD-' + lang + '.pdf#view=fitH'" type="application/pdf" loading="lazy" width="100%" height="100%"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CV',
  data() {
      return {
        lang: "en"
      }
    }
}
</script>
