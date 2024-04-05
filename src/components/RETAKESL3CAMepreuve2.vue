<template>
  <div class="min-h-screen bg-center bg-cover bg-space flex items-center justify-center">
    <div class="text-white font-mono text-lg font-bold md:w-3/5 text-justify p-10 md:border-2 border-white rounded-md bg-black bg-opacity-30 flex flex-col items-center">
      <video controls controlslist="nodownload nofullscreen noremoteplayback" disablePictureInPicture>
        <source src="CAM.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CareerDevelopment',
}
</script>
