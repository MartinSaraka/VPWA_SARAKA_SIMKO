<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MesssageInputField',
  data() {
    const listPeople = ref(false);
    return {
      listPeople,
      inputText: '',
    };
  },

  methods: {
    handleMessage() {
      const message = this.inputText;

      // is command
      if (message.startsWith('/')) {
        if (message === '/list') {
          this.listPeople = true;
        } else {
        }
      }
      // is message
      else {
        const today = new Date();
        const date =
          today.getDate() +
          '.' +
          (today.getMonth() + 1) +
          '.' +
          today.getFullYear();
        const time = today.getHours() + ':' + today.getMinutes();
        const dateTime = date + ' at ' + time;

        this.$store.commit('message/addMessage', {
          messagerName: 'Jakub',
          avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',
          text: message,
          stamp: dateTime,
          isSender: true,
        });
      }
      this.inputText = '';
    },
  },
});
</script>

<template>
  <q-dialog v-model="listPeople">
    <q-card style="width: 350px; max-width: 80vw">
      <q-card-actions align="right" class="q-mb-none">
        <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip>Close</q-tooltip>
        </q-btn>
      </q-card-actions>

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

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
        </q-item-section>
        <q-item-section>Radka</q-item-section>
      </q-item>
    </q-card>
  </q-dialog>
  <q-toolbar class="bg-grey-1 text-black row">
    <q-input
      rounded
      outlined
      dense
      class="col-grow q-my-md q-my-sm"
      standout="bg-grey-3 text-white"
      v-model="inputText"
      placeholder="Type a message"
      @keyup.enter="handleMessage()"
    >
      <template v-slot:append>
        <q-btn dense flat icon="send" @click="handleMessage()" />
      </template>

      <template v-slot:prepend>
        <q-btn flat round size="md" color="primary" icon="info" to="/" />
      </template>
    </q-input>
  </q-toolbar>
</template>
