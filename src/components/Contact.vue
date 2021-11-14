<template>
  <div class="bg-blue-waves min-h-screen bg-cover bg-no-repeat flex justify-center">
    <div class="relative flex flex-col w-11/12 sm:w-3/4 2xl:w-1/2">
      <!--<div class="absolute inset-0 my-16 bg-gradient-to-br from-sky-200 to-blue-200 rounded-2xl p-10 shadow-lg transform 2xl:rotate-90 opacity-20"></div>-->
      <div class="absolute inset-0 my-16 bg-gradient-to-br from-sky-200 to-blue-200 rounded-2xl p-10 shadow-lg transform 2xl:-translate-x-6 2xl:-translate-y-6 opacity-40"></div>
      <div class="absolute inset-0 my-16 bg-gradient-to-br from-sky-300 to-blue-300 rounded-2xl p-10 shadow-lg transform 2xl:-translate-x-6 2xl:translate-y-6 opacity-60"></div>
      <div class="absolute inset-0 my-16 bg-gradient-to-br from-sky-400 to-blue-400 rounded-2xl p-10 shadow-lg transform 2xl:translate-x-6 2xl:translate-y-6 opacity-80"></div>
      <div class="absolute inset-0 my-16 bg-gradient-to-br from-sky-500 to-blue-500 rounded-2xl p-10 shadow-lg transform 2xl:translate-x-6 2xl:-translate-y-6"></div>
      <div class="relative h-full my-4 sm:my-8 2xl:my-16 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 sm:p-10 space-y-12 lg:space-y-24" >
        <div class="text-center my-4 text-5xl font-bold tracking-tight text-sky-600">
          <p>Me contacter</p>
        </div>
        <div class="grid grid-cols-2 place-items-center	gap-y-2 lg:flex justify-between items-center flex-wrap">
          <a href="https://www.linkedin.com/in/hugo-eynard/" target="_blank" rel="Noopener" class="transform hover:scale-105 transition-transform">
            <div class="bg-gradient-to-br from-sky-500 to-blue-500 rounded-2xl p-2 h-24 w-24 shadow-lg">
              <img src="linkedin.svg" width="100%">
            </div>
          </a>
          <a href="https://github.com/Hugogo22" target="_blank" rel="Noopener" class="transform hover:scale-105 transition-transform">
            <div class="bg-gradient-to-br from-sky-500 to-blue-500 rounded-2xl p-2 h-24 w-24 shadow-lg">
              <img src="github.svg" width="100%">
            </div>
          </a>
          <a href="tel:+33695400934" target="_blank" rel="Noopener" class="col-span-2 sm:col-span-1 transform hover:scale-105 transition-transform">
            <div class="bg-gradient-to-br from-sky-500 to-blue-500 rounded-2xl p-2 flex flex-col items-center shadow-lg">
              <img src="phone.svg" width="40%">
              <p class="text-white font-bold">+33 6 95 40 09 34</p>
            </div>
          </a>
          <a href="mailto:hugo.eynard@gmail.com" target="_blank" rel="Noopener" class="col-span-2 sm:col-span-1 transform hover:scale-105 transition-transform">
            <div class="bg-gradient-to-br from-sky-500 to-blue-500 rounded-2xl py-2 flex flex-col items-center w-52 shadow-lg">
              <img src="mail.svg" width="25%">
              <p class="text-white font-bold">hugo.eynard@gmail.com</p>
            </div>
          </a>
        </div>
        <div class="relative flex flex-col">
          <div class="absolute inset-0 bg-gradient-to-br from-sky-200 to-blue-200 rounded-2xl shadow-lg transform md:-translate-x-4 md:-translate-y-4 opacity-40 m-4"></div>
          <div class="absolute inset-0 bg-gradient-to-br from-sky-300 to-blue-300 rounded-2xl shadow-lg transform md:-translate-x-4 md:translate-y-4 opacity-60 m-4"></div>
          <div class="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-400 rounded-2xl shadow-lg transform md:translate-x-4 md:translate-y-4 opacity-80 m-4"></div>
          <div class="absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-500 rounded-2xl shadow-lg transform md:translate-x-4 md:-translate-y-4 opacity-40 m-4"></div>
          <div class="bg-gradient-to-br from-sky-500 to-blue-500 rounded-2xl text-center font-semibold tracking-tight text-white shadow-lg p-4 space-y-6 z-10 md:m-4">
            <p class="text-4xl">Formulaire de contact</p>
            <p class="text-xl">{{formMessage}}</p>
            <form ref="form" @submit.prevent="sendEmail" class="flex flex-col md:grid grid-cols-5 grid-rows-4 gap-4 md:gap-3 text-gray-900">
              <input required type="text" name="user_name" autocomplete="name" aria-label="Nom" placeholder="Nom" class="col-span-2 rounded-xl p-2 focus:outline-none transform focus:scale-105 focus:shadow-lg transition-all">
              <input required type="email" name="user_email" autocomplete="email" aria-label="Email" placeholder="Email" class="col-span-3 rounded-xl p-2 focus:outline-none transform focus:scale-105 focus:shadow-lg transition-all">
              <textarea required name="message" autocomplete="off" aria-label="Message" placeholder="Message" class="col-span-full row-span-2 rounded-xl p-2 focus:outline-none transform focus:scale-105 focus:shadow-lg transition-all"></textarea>
              <input type="submit" value="Send" class="rounded-xl col-span-full p-2 col-start-4 bg-transparent border-white border-solid border-4 uppercase tracking-wider font-semibold cursor-pointer text-white focus:outline-none transform hover:scale-105 hover:shadow-lg transition-all">
            </form>
          </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'CV',
  data() {
    return {
      formMessage: ""
    }
  },
  methods: {
    sendEmail() {
      emailjs.sendForm('service_00yb515', 'template_8p9cheo', this.$refs.form, 'user_Dc6kXcluSp17Ut6v2CIHK')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            this.formMessage = "Votre message a bien été envoyé !"
        }, (error) => {
            console.log('FAILED...', error.text);
            this.formMessage = "Le message n'a pas été envoyé, désolé pour la gêne occasionnée. Veuillez me contacter par un autre moyen ou réessayer plus tard s’il vous plaît."
        });
    }
  }
}
</script>
