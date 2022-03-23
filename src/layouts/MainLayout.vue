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
            color="blue "
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

    <q-drawer width=250 v-model="rightDrawerOpen" side="right" bordered>

      <div class="column items-center">
        <q-btn class="q-mt-md" style="width: 80%" color="primary" icon="exit_to_app" label="Leave channel" />
        <q-btn class="q-my-md" style="width: 80%" color="primary" icon="delete_forever" label="Delete channel" />
      </div>

      <q-separator inset />

      <div align="center" class="text-h6 text-weight-bold q-py-sm">
        Members
      </div>

      <q-separator inset />

      <q-list class="q-pb-xl">
        <q-item clickable v-ripple class="q-mt-sm q-pl-lg text-center">
          <q-item-section avatar>
            <q-avatar rounded>
              <img src="https://cdn.quasar.dev/img/avatar1.jpg" />
              <q-badge floating rounded color="green" />
            </q-avatar>
          </q-item-section>
          <q-item-section class="text-center text-subtitle1">Jakub</q-item-section>
          <q-item-section avatar>
            <q-icon name="admin_panel_settings" class="text-primary vertical-middle text-center	" size="md" />
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="q-mt-sm q-pl-lg text-center">
          <q-item-section avatar>
            <q-avatar rounded>
              <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
              <q-badge floating rounded color="grey-6" />
            </q-avatar>
          </q-item-section>
          <q-item-section class="text-center text-subtitle1">Martin</q-item-section>
          <q-item-section avatar>
            <q-icon name="account_circle" class="text-primary vertical-middle text-center	" size="md" />
          </q-item-section>
        </q-item>

        <q-item v-for="index in 10" :key="index" clickable v-ripple class="q-mt-sm q-pl-lg text-center">
          <q-item-section avatar>
            <q-avatar rounded>
              <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
              <q-badge floating rounded color="yellow-10" />
            </q-avatar>
          </q-item-section>
          <q-item-section class="text-center text-subtitle1">Radka</q-item-section>
          <q-item-section avatar>
            <q-icon name="account_circle" class="text-primary vertical-middle text-center	" size="md" />
          </q-item-section>
        </q-item>

      </q-list>

      <div class="bg-white absolute-bottom">
        <q-separator inset />

        <div class="row justify-center">
          <q-chip size="lg" icon="admin_panel_settings" text-color="primary" color="white">
            Admin
          </q-chip>

          <q-chip size="lg" icon="account_circle" text-color="primary" color="white">
            User
          </q-chip>
        </div>
      </div>
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
        <q-separator></q-separator>
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
