<template>
  <q-layout view="lHh LpR lFr">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-center">
          General
        </q-toolbar-title>
        
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-scroll-area class="fit">
          <q-list>
              <q-item class="text-center">
                <q-item-section>
                  Channells
                </q-item-section>
              </q-item>
              <q-separator color="black" inset />

            <template v-for="(channell, index) in channells" :key="index">
              <q-item clickable :active="channell.name === 'General'" v-ripple>
                <q-item-section avatar>
                  <q-icon :name="channell.icon" />
                </q-item-section>
                <q-item-section>
                  {{ channell.name }}
                </q-item-section>
              </q-item>
            </template>

          </q-list>
        </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

      <q-footer>
          <q-input standout="bg-teal text-white" v-model="message" placeholder="Type a message">
            <template v-slot:append>
              <q-btn round dense flat icon="send" />
            </template>
          </q-input>
      </q-footer>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

const channells = [
  {
    icon: 'tag',
    name: 'General',
  },
  {
    icon: 'tag',
    name: 'VPWA channell',
  },
  {
    icon: 'tag',
    name: 'PAS channell',
  },
  {
    icon: 'tag',
    name: 'test channell',
  },
  {
    icon: 'tag',
    name: 'test channell',
  },
  {
    icon: 'tag',
    name: 'test channell',
  },
  {
    icon: 'tag',
    name: 'test channell',
  },
  {
    icon: 'tag',
    name: 'test channell',
  },
  {
    icon: 'tag',
    name: 'test channell',
  },
  {
    icon: 'tag',
    name: 'test channell',
  },
  {
    icon: 'tag',
    name: 'PAS channell',
  },
  {
    icon: 'tag',
    name: 'test channell',
  },
  {
    icon: 'tag',
    name: 'test channell',
  },
  {
    icon: 'tag',
    name: 'test channell',
  },
  {
    icon: 'tag',
    name: 'test channell',
  },
  {
    icon: 'tag',
    name: 'test channell',
  },
  {
    icon: 'tag',
    name: 'test channell',
  },
  {
    icon: 'tag',
    name: 'test channell',
  },
]

export default {

  
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      channells,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>