<template>
  <q-layout view="lHh LpR lFr">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-center">
          General
        </q-toolbar-title>

        <q-btn size="md" push color="white" text-color="primary" label="Notifications">
          <q-badge color="orange" floating>22</q-badge>
        </q-btn>

        <q-item class="q-pa-sm q-ml-sm" clickable v-ripple @click="profile = true"> 
          <q-item-section>
            <q-avatar rounded size="48px">
              <img src="https://cdn.quasar.dev/img/avatar1.jpg" />
              <q-badge floating rounded color="green" />
            </q-avatar>
          </q-item-section>
        </q-item>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-scroll-area class="fit">
          <q-list>
              <q-item class="text-center">
                <q-item-section>
                  Channels
                </q-item-section>
              </q-item>
              <q-separator color="black" inset />

            <template v-for="(channel, index) in channels" :key="index">
              <q-item clickable :active="channel.name === 'General'" v-ripple>
                <q-item-section avatar>
                  <q-icon :name="channel.icon" />
                </q-item-section>
                <q-item-section>
                  {{ channel.name }}
                </q-item-section>
              </q-item>
            </template>

          </q-list>
        </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-dialog v-model="profile">
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-actions align="right" class="q-mb-none">
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip>Close</q-tooltip>
          </q-btn>
        </q-card-actions>
        
        <q-card-section align="center">
          <q-avatar rounded size="15vh">
              <img src="https://cdn.quasar.dev/img/avatar1.jpg" />
          </q-avatar>
          <div class="text-h6 ellipsis q-mt-sm">Jakub</div>
        </q-card-section>

        <q-separator inset/>

  <!--

        <q-card-section>
          <div class="text-h6 text-center">Nastavenie stavov</div>
        </q-card-section>
  -->

        <q-card-section align="center">
          <q-btn-toggle
            v-model="model"
            push
            toggle-color="primary"
            :options="[
              {value: 'one', slot: 'one'},
              {value: 'two', slot: 'two'},
              {value: 'three', slot: 'three'}
            ]"
          >
            <template v-slot:one >
              <div class="row items-center no-wrap">
                <q-icon left name="circle" color="green"/>
                <div class="text-center">
                  Online
                </div>
              </div>
            </template>

            <template v-slot:two>
              <div class="row items-center no-wrap">
                <q-icon left name="do_not_disturb_on_total_silence" color="yellow-10"/>
                <div class="text-center">
                  Do not disturb
                </div>
              </div>
            </template>

            <template v-slot:three>
              <div class="row items-center no-wrap">
                <q-icon left name="circle" color="grey-6" />
                <div class="text-center">
                  Offline
                </div>
              </div>
            </template>
          </q-btn-toggle>
        </q-card-section>
      </q-card>
    </q-dialog>

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

const channels = [
  {
    icon: 'tag',
    name: 'General',
  },
  {
    icon: 'tag',
    name: 'VPWA channel',
  },
  {
    icon: 'tag',
    name: 'PAS channel',
  },
  {
    icon: 'tag',
    name: 'test channel',
  },
  {
    icon: 'tag',
    name: 'test channel',
  },
  {
    icon: 'tag',
    name: 'test channel',
  },
  {
    icon: 'tag',
    name: 'test channel',
  },
  {
    icon: 'tag',
    name: 'test channel',
  },
  {
    icon: 'tag',
    name: 'test channel',
  },
  {
    icon: 'tag',
    name: 'test channel',
  },
  {
    icon: 'tag',
    name: 'PAS channel',
  },
  {
    icon: 'tag',
    name: 'test channel',
  },
  {
    icon: 'tag',
    name: 'test channel',
  },
  {
    icon: 'tag',
    name: 'test channel',
  },
  {
    icon: 'tag',
    name: 'test channel',
  },
  {
    icon: 'tag',
    name: 'test channel',
  },
  {
    icon: 'tag',
    name: 'test channel',
  },
  {
    icon: 'tag',
    name: 'test channel',
  },
]

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const profile = ref(false)

    return {
      model: ref('three'),
      profile,
      channels,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>