<template>
  <q-layout view="hHh LpR fFf">

    <q-header reveal bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://scontent.fiqq3-1.fna.fbcdn.net/v/t39.30808-6/305471184_394906059470078_4552792066809051262_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tCA5vPcFvEQAX8hTE1S&_nc_ht=scontent.fiqq3-1.fna&oh=00_AfApjAgYIHgoMq6uNm4E7IGhR7d4S-9-biVb8GhiapVHtA&oe=6374770A">
          </q-avatar>
          Ayudantías DICI
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>