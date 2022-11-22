<template>
    <div class="fullscreen bg-blue text-white text-center flex flex-center">
      <div>
        <div style="font-size: 10vh">
          Aún no te encuentras registrado
        </div>
  
        <div class="text-h2" style="opacity:.4">
          Cuando se te asigne un rol, te podras logear
        </div>
  
        <q-btn
          class="q-mt-xl"
          color="white"
          text-color="blue"
          unelevated
          to="/"
          label="Go Home"
          no-caps
        />
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'Error404'
  })
  </script>
  