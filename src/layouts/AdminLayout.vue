<template>
    <q-layout view="lHh Lpr lff">
          <q-header elevated>
            <q-toolbar>              
              <q-btn flat @click="drawer = !drawer" color="black" round dense icon="menu" />
              <q-toolbar-title style="color: black">Ayudantías DICI</q-toolbar-title>
            </q-toolbar>
          </q-header>

          <q-drawer
            v-model="drawer"
            show-if-above
            :width="200"
            :breakpoint="400"
          >
          <!--Barra Menu Scroll-->
            <q-scroll-area style="background-color: #F0FFF0; height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
              <q-list padding>
                <!--Inicio-->
                <q-item clickable v-ripple to="/admin" active-class="my-menu-link" exact>
                  <q-item-section avatar>
                    <q-icon name="settings" />
                  </q-item-section>

                  <q-item-section>
                    Gestión de usuarios
                  </q-item-section>
                </q-item>

                <!--Otra opcion-->
                <q-item clickable v-ripple to="/" active-class="my-menu-link" >
                  <q-item-section avatar>
                    <q-icon name="logout" />
                  </q-item-section>

                  <q-item-section>
                    Salir
                  </q-item-section>
                </q-item>

              </q-list>
            </q-scroll-area>

            <q-img class="absolute-top" style="height: 150px">
              <div class="absolute-bottom bg-transparent">
                <q-avatar rounded size="56px" color="cyan-8">
                  A
                </q-avatar>
                <div style="color: black" class="text-weight-bold">Administrador</div>
                <div style="color: black">admin@gmail.com</div>
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
