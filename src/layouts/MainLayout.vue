<template>
  <q-layout view="lHh LpR lFr">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-center" v-if="channels[$route.params.id]">
          {{ channels[$route.params.id].name }}
        </q-toolbar-title>

        <q-toolbar-title class="text-center" v-else>
          Zoznam príkazov
        </q-toolbar-title>

        <div class="q-pa-md">
          <q-btn-dropdown
            color="pink"
            label="Notificiations(+3)"
            dropdown-icon="change_history"
          >
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label
                    >Majka sent u message(aaaa....) 2 mins ago</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label
                    >Majka sent u message(aaaa....) 2 mins ago</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label
                    >Majka sent u message(aaaa....) 2 mins ago</q-item-label
                  >
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>

        <q-item
          class="q-pa-sm q-ml-sm"
          clickable
          v-ripple
          @click="profile = true"
        >
          <q-item-section>
            <q-avatar rounded size="48px">
              <img src="https://cdn.quasar.dev/img/avatar1.jpg" />
              <q-badge floating rounded color="green" />
            </q-avatar>
          </q-item-section>
        </q-item>
 
        <q-btn round color="white" text-color="primary" icon="group" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-scroll-area class="fit">
        <q-list>
          <q-item class="text-center">
            <q-item-section> Channels </q-item-section>
          </q-item>
          <q-separator color="black" inset />

          <template v-for="(channel, index) in channels" :key="index">
            <q-item
              clickable
              v-ripple
              :to="{ name: 'Channel', params: { id: index } }"
              :active="channel.name === link"
              @click="link = channel.name"
            >
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

    <q-drawer v-model="rightDrawerOpen" side="right" bordered>
      <q-card-section align="center">
        <div class="text-h5 text-weight-bold">Zoznam používateľov</div>
      </q-card-section>

      <q-separator inset />

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>
        <q-item-section>Martin</q-item-section>
      </q-item>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-dialog v-model="profile">
      <q-card style="width: 700px; max-width: 80vw">
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

        <q-separator inset />

        <q-card-section align="center">
          <q-btn-toggle
            v-model="state_pick"
            push
            toggle-color="primary"
            :options="[
              { value: 'one', slot: 'one' },
              { value: 'two', slot: 'two' },
              { value: 'three', slot: 'three' },
            ]"
          >
            <template v-slot:one>
              <div class="row items-center no-wrap">
                <q-icon left name="circle" color="green" />
                <div class="text-center">Online</div>
              </div>
            </template>

            <template v-slot:two>
              <div class="row items-center no-wrap">
                <q-icon
                  left
                  name="do_not_disturb_on_total_silence"
                  color="yellow-10"
                />
                <div class="text-center">Do not disturb</div>
              </div>
            </template>

            <template v-slot:three>
              <div class="row items-center no-wrap">
                <q-icon left name="circle" color="grey-6" />
                <div class="text-center">Offline</div>
              </div>
            </template>
          </q-btn-toggle>
        </q-card-section>
        <q-card-section align="center"
          ><q-btn color="primary" label="Logout"
        /></q-card-section>
      </q-card>
    </q-dialog>

    <q-footer>
      <MessageInputField> </MessageInputField>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import MessageInputField from '../components/MessageInputField.vue';

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
    name: 'test channel 1',
  },
  {
    icon: 'tag',
    name: 'test channel 2',
  },
  {
    icon: 'tag',
    name: 'test channel 3',
  },
  {
    icon: 'tag',
    name: 'test channel 4',
  },
  {
    icon: 'tag',
    name: 'test channel 5',
  },
  {
    icon: 'tag',
    name: 'test channel 6',
  },
  {
    icon: 'tag',
    name: 'test channel 7',
  },
  {
    icon: 'tag',
    name: 'test channel 8',
  },
  {
    icon: 'tag',
    name: 'test channel 9',
  },
  {
    icon: 'tag',
    name: 'test channel 10',
  },
  {
    icon: 'tag',
    name: 'test channel 11',
  },
  {
    icon: 'tag',
    name: 'test channel 12',
  },
  {
    icon: 'tag',
    name: 'test channel 13',
  },
  {
    icon: 'tag',
    name: 'test channel 14',
  },
];

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);
    const profile = ref(false);
    const state_pick = ref('three');
    const link = ref('');

    return {
      state_pick,
      link,
      profile,
      channels,

      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
  components: { MessageInputField },
};
</script>
