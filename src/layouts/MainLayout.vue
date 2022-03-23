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

        <q-btn
          class="q-mr-xl"
          color="blue "
          label="Notificiations (+3)"
          icon="mail"
          @click="notificationsDialog = true"
        />
        <q-btn
          round
          color="white"
          text-color="primary"
          icon="group"
          @click="toggleRightDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left">
      <q-img
        class="absolute-top bg-blue"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 200px"
      >
        <div class="absolute-top bg-transparent column items-center">
          <div class="column items-center">
            <q-avatar rounded size="48px">
              <img src="https://cdn.quasar.dev/img/avatar1.jpg" />
              <q-badge
                v-if="state_pick === 'online'"
                floating
                rounded
                color="green"
              />
              <q-badge
                v-if="state_pick === 'dnd'"
                floating
                rounded
                color="yellow-10"
              />
              <q-badge
                v-if="state_pick === 'offline'"
                floating
                rounded
                color="grey-6"
              />
            </q-avatar>
            <div class="text-h6 ellipsis">Jakub</div>
          </div>

          <q-list class="column items-center">
            <q-item>
              <q-btn-toggle
                v-model="state_pick"
                push
                glossy
                color="white"
                text-color="primary"
                toggle-color="primary"
                toggle-text-color="white"
                :options="[
                  { label: 'Online', value: 'online' },
                  { label: 'DND', value: 'dnd' },
                  { label: 'Offline', value: 'offline' },
                ]"
              />
            </q-item>

            <q-item>
              <q-btn color="white" text-color="primary" label="Logout" />
            </q-item>

            <q-item> </q-item>
          </q-list>
        </div>
      </q-img>
      <q-scroll-area
        style="
          height: calc(100% - 200px);
          margin-top: 200px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list>
          <q-item class="text-center">
            <q-item-section> Channels </q-item-section>
            <q-separator></q-separator>
          </q-item>
          <q-item>
            <q-item-section
              ><q-btn
                class=" "
                color="blue "
                label="Create channel"
                icon="create"
                @click="notificationsDialog1 = true"
              /> </q-item-section
          ></q-item>
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

    <q-drawer width="250" v-model="rightDrawerOpen" side="right" bordered>
      <div class="column items-center">
        <q-btn
          class="q-mt-md"
          style="width: 80%"
          color="primary"
          icon="exit_to_app"
          label="Leave channel"
        />
        <q-btn
          class="q-my-md"
          style="width: 80%"
          color="primary"
          icon="delete_forever"
          label="Delete channel"
        />
      </div>

      <q-separator inset />

      <div align="center" class="text-h6 text-weight-bold q-py-sm">Members</div>

      <q-separator inset />

      <q-list class="q-pb-xl">
        <q-item clickable v-ripple class="q-mt-sm q-pl-lg text-center">
          <q-item-section avatar>
            <q-avatar rounded>
              <img src="https://cdn.quasar.dev/img/avatar1.jpg" />
              <q-badge floating rounded color="green" />
            </q-avatar>
          </q-item-section>
          <q-item-section class="text-center text-subtitle1"
            >Jakub</q-item-section
          >
          <q-item-section avatar>
            <q-icon
              name="admin_panel_settings"
              class="text-primary vertical-middle text-center"
              size="md"
            />
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="q-mt-sm q-pl-lg text-center">
          <q-item-section avatar>
            <q-avatar rounded>
              <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
              <q-badge floating rounded color="grey-6" />
            </q-avatar>
          </q-item-section>
          <q-item-section class="text-center text-subtitle1"
            >Martin</q-item-section
          >
          <q-item-section avatar>
            <q-icon
              name="account_circle"
              class="text-primary vertical-middle text-center"
              size="md"
            />
          </q-item-section>
        </q-item>

        <q-item
          v-for="index in 10"
          :key="index"
          clickable
          v-ripple
          class="q-mt-sm q-pl-lg text-center"
        >
          <q-item-section avatar>
            <q-avatar rounded>
              <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
              <q-badge floating rounded color="yellow-10" />
            </q-avatar>
          </q-item-section>
          <q-item-section class="text-center text-subtitle1"
            >Radka</q-item-section
          >
          <q-item-section avatar>
            <q-icon
              name="account_circle"
              class="text-primary vertical-middle text-center"
              size="md"
            />
          </q-item-section>
        </q-item>
      </q-list>

      <div class="bg-white absolute-bottom">
        <q-separator inset />

        <div class="row justify-center">
          <q-chip
            size="lg"
            icon="admin_panel_settings"
            text-color="primary"
            color="white"
          >
            Admin
          </q-chip>

          <q-chip
            size="lg"
            icon="account_circle"
            text-color="primary"
            color="white"
          >
            User
          </q-chip>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <MessageInputField> </MessageInputField>
    </q-footer>

    <q-dialog v-model="notificationsDialog">
      <q-card style="width: 700px; max-width: 80vw">
        <q-card-actions align="right" class="q-mb-none">
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip>Close</q-tooltip>
          </q-btn>
        </q-card-actions>

        <q-card-section align="center">
          <div class="text-h5 ellipsis">Notifications</div>
        </q-card-section>

        <q-separator class="q-mb-sm" />

        <q-scroll-area style="height: 250px; border-right: 1px solid #ddd">
          <q-list>
            <q-item clickable>
              <q-item-section>
                <q-item-label
                  >Majka sent u message (aaaa....) 3 mins ago</q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section>
                <q-item-label
                  >Majka sent u message (yyyyyy....) 2 mins ago</q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section>
                <q-item-label
                  >Majka sent u message (xxxxx....) 1 mins ago</q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section>
                <q-item-label
                  >Majka sent u message (xxxxx....) 1 mins ago</q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section>
                <q-item-label
                  >Majka sent u message (xxxxx....) 1 mins ago</q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section>
                <q-item-label
                  >Majka sent u message (xxxxx....) 1 mins ago</q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section>
                <q-item-label
                  >Majka sent u message (xxxxx....) 1 mins ago</q-item-label
                >
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-separator />
        <q-card-section align="center">
          <q-btn-toggle
            v-model="notificationOptions"
            push
            toggle-color="primary"
            :options="[
              { value: 'one', slot: 'one' },
              { value: 'two', slot: 'two' },
            ]"
          >
            <template v-slot:one>
              <div class="row items-center no-wrap">
                <q-icon left name="circle" color="green" />
                <div class="text-center">All notifications</div>
              </div>
            </template>

            <template v-slot:two>
              <div class="row items-center no-wrap">
                <q-icon
                  left
                  name="do_not_disturb_on_total_silence"
                  color="yellow-10"
                />
                <div class="text-center">Only tagged message notificatons</div>
              </div>
            </template>
          </q-btn-toggle>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="notificationsDialog1">
      <q-card style="width: 700px; max-width: 80vw">
        <q-card-actions align="right" class="q-mb-none">
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip>Close</q-tooltip>
          </q-btn>
        </q-card-actions>

        <q-card-section align="center">
          <div class="text-h5 ellipsis">Create ur own channel</div>
        </q-card-section>

        <q-card-section align="center">
          <p>type of channel</p>
          <q-btn-toggle
            v-model="notificationOptions1"
            push
            toggle-color="primary"
            :options="[
              { value: 'one', slot: 'one' },
              { value: 'two', slot: 'two' },
            ]"
          >
            <template v-slot:one>
              <div class="row items-center no-wrap">
                <q-icon left name="circle" color="green" />
                <div class="text-center">Public</div>
              </div>
            </template>

            <template v-slot:two>
              <div class="row items-center no-wrap">
                <q-icon
                  left
                  name="do_not_disturb_on_total_silence"
                  color="yellow-10"
                />
                <div class="text-center">Private</div>
              </div>
            </template>
          </q-btn-toggle>
        </q-card-section>
        <div class="q-pa-md flex justify-center">
          <q-input rounded outlined v-model="text" label="Channel name" />
        </div>

        <q-separator />
        <div class="flex justify-center q-pa-md">
          <q-btn color="blue " label="Create channel" icon="create" rounded />
        </div>
      </q-card>
    </q-dialog>
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
    const state_pick = ref('online');
    const link = ref('');
    const notificationsDialog = ref(false);
    const notificationOptions = ref('one');
    const notificationsDialog1 = ref(false);
    const notificationOptions1 = ref('one');

    return {
      state_pick,
      link,
      channels,
      notificationsDialog,
      notificationOptions,
      notificationsDialog1,
      notificationOptions1,

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
