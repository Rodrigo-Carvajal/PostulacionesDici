<template>
  <q-layout view="lHh Lpr lff">
        <q-header elevated class="bg-cyan-9">
          <q-toolbar>
            <q-toolbar-title>Ayudantías DICI</q-toolbar-title>
            <q-btn flat @click="drawer = !drawer" round dense  icon="menu" />
          </q-toolbar>
        </q-header>

        <q-drawer
          v-model="drawer"
          show-if-above
          :width="200"
          :breakpoint="400"
        >
        <!--Barra Menu Scroll-->
          <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
            <q-list padding>
              <!--Inicio-->
              <q-item clickable v-ripple to="/index" active-class="my-menu-link" exact>
                <q-item-section avatar>
                  <q-icon name="inbox" />
                </q-item-section>

                <q-item-section>
                  Homes
                </q-item-section>
              </q-item>

              <!--Otra opcion-->

              <q-item clickable v-ripple to="/admin" active-class="my-menu-link">
                <q-item-section avatar>
                  <q-icon name="star" />
                </q-item-section>
                <q-item-section>
                  Admin
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple to="/profesor" active-class="my-menu-link">
                <q-item-section avatar>
                  <q-icon name="star" />
                </q-item-section>

                <q-item-section>
                  Profesor
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple to="/estudiante" active-class="my-menu-link">
                <q-item-section avatar>
                  <q-icon name="star" />
                </q-item-section>
                <q-item-section>
                  Estudiante
                </q-item-section>
              </q-item>

            </q-list>

          </q-scroll-area>

          <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
            <div class="absolute-bottom bg-transparent">

          <q-item clickable v-ripple to="/perfilestudiante" active-class="my-menu-link">
            <q-item-section avatar>
              <q-avatar rounded>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
            </q-item-section>
            <q-item-section>Main</q-item-section>
          </q-item>
              <div class="text-weight-bold">Main</div>
              <div>main@gmail.com</div>
            </div>
          </q-img>
        </q-drawer>

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
