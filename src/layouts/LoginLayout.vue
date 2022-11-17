<template>
    <q-layout view="lHh Lpr lff">     
          <q-page-container>
            <router-view></router-view>
          </q-page-container>
        </q-layout>
    </template>
  
    <script>
    import { ref } from 'vue'
  
    export default {
      setup () {
        const drawer = ref(false)
  
        return {
          drawer
        }
      }
    }
    </script>
  
    <style lang="scss">
    .my-menu-link {
      color:white;
      background: #f2c037;
    }
    </style>
  
