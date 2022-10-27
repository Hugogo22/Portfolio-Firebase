<template>
  <div class="min-h-screen flex flex-col justify-center bg-repeat bg-auto bg-local bg-topography">
    <div class="relative flex flex-col my-20">
      <div class="hidden xl:block absolute inset-x-72 inset-y-16 w-64 h-64 bg-gradient-to-br from-cyan-400 to-sky-500 transform -skew-y-3 sm:skew-y-0 sm:rotate-3 sm:rounded-2xl translate-x-6 z-10"></div>
      <div class="hidden xl:flex absolute inset-x-72 inset-y-16 w-64 h-64 bg-white transform -skew-y-6 sm:skew-y-0 sm:rotate-9 sm:rounded-2xl translate-x-6 z-10 justify-center items-center">
        <div class="m-8">
          <img src="logo.png"/>
        </div>
      </div>
      <div class="absolute inset-0 inset-x-0 xl:inset-x-64 bg-gradient-to-br from-cyan-200 to-sky-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-3 sm:rounded-2xl"></div>
      <div class="relative py-4 sm:max-w-2xl sm:mx-auto z-20">
        <div class="absolute inset-0 bg-gradient-to-br from-cyan-400 to-sky-500 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
        <div class="relative bg-white sm:rounded-2xl px-4 py-10 sm:p-20 space-y-6">
          <div class="text-center text-6xl font-bold tracking-tight text-sky-600">
            <p>Hugo EYNARD</p>
          </div>
          <div class="text-center text-4xl font-semibold tracking-tight text-sky-500">
            <p>Computer Science student</p>
          </div>
          <div class="text-justify text-2xl">
            <p>Hi, I'm 20 years old and I'm currently studying Computer Science at ENSEEIHT in Toulouse. My goal is to work in the space industry as an embedded software engineer.
            </p>
            <br/>
            <hr class="border-sky-600 border-t-2 -rotate-3 transform"/>
            <br/>
            <p>Bonjour, j'ai 20 ans et je suis actuellement en première année de cycle ingénieur en Sciences du Numérique à l'ENSEEIHT.
              J'ai pour projet de travailler dans le spatial en tant qu'ingéneur en informatique embarquée.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="relative flex flex-col my-20">
      <div class="absolute inset-0 inset-x-0 xl:inset-x-64 bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-2xl"></div>
      <router-link to="/CV">
        <div class="relative bg-gradient-to-br from-cyan-400 to-sky-500 sm:w-1/2 sm:max-w-md sm:mx-auto sm:rounded-2xl px-4 py-10 sm:p-16 shadow-lg transform -skew-y-6 sm:-translate-x-20 xl:-translate-x-40 translate-y-4 xl:translate-y-8 z-30 hover:skew-y-0 transition-property: all; duration-75 ease-out hover:scale-105 cursor-pointer">
          <div class="text-2xl text-center tracking-wider">
            <p>MY CV</p>
          </div>
        </div>
      </router-link>
      <router-link to="/Realisations">
        <div class="relative bg-gradient-to-br from-sky-500 to-blue-600 sm:w-1/2 sm:max-w-md sm:mx-auto sm:rounded-2xl px-4 py-10 sm:p-16 shadow-lg z-20 transform -skew-y-6 hover:skew-y-0 transition-property: all; duration-75 ease-out hover:scale-105 cursor-pointer">
          <div class="text-2xl text-center tracking-wider">
            <p>PROJECTS</p>
          </div>
        </div>
      </router-link>
      <router-link to="/Contact">
        <div class="relative bg-gradient-to-br from-blue-600 to-indigo-700 sm:w-1/2 sm:max-w-md sm:mx-auto sm:rounded-2xl px-4 py-10 sm:p-16 shadow-lg transform -skew-y-6 sm:translate-x-20 xl:translate-x-40 -translate-y-4 xl:-translate-y-8 z-10 hover:skew-y-0 transition-property: all; duration-75 ease-out hover:scale-105 cursor-pointer">
          <div class="text-2xl text-center tracking-wider">
            <p>CONTACT</p>
          </div>
        </div>
      </router-link>
    </div>
    <div class="relative flex flex-col my-20">
      <div class="absolute inset-0 inset-x-0 xl:inset-x-64 bg-gradient-to-br from-cyan-200 to-sky-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-3 sm:rounded-2xl"></div>
      <div class="relative py-4 sm:max-w-2xl sm:mx-auto z-20">
        <div class="absolute inset-0 bg-gradient-to-br from-cyan-400 to-sky-500 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
        <div class="relative bg-white sm:rounded-2xl px-4 py-10 sm:p-20 space-y-6">
          <div class="text-center text-4xl font-semibold tracking-tight text-sky-500">
            <p>Video pitch</p>
          </div>
          <video controls controlslist="nodownload nofullscreen noremoteplayback" disablePictureInPicture>
            <source src="pitch.mp4" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  name: 'Accueil',
  props: {
  }
}
</script>
