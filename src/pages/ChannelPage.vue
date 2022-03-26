<template>
  <div class="q-pa-md q-mt-sm row justify-center">
    <div style="width: 95%">
      <q-infinite-scroll @load="onLoad" :offset="10">
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner color="primary" name="dots" size="40px" />
          </div>
        </template>

        <q-chat-message
          name="Martin"
          avatar="https://cdn.quasar.dev/img/avatar4.jpg"
          bg-color="red"
          stamp="18.3.2022 at 12:00"
        >
          <div><strong>@Jakub</strong> tagnuta sprava je červená</div>
        </q-chat-message>

        <message-component
          v-for="(message, index) in messages"
          :key="index"
          :isSender="message.isSender"
          :messagerName="message.messagerName"
          :avatar="message.avatar"
          :text="message.text"
          :stamp="message.stamp"
        />

        <q-chat-message
          name="Martin"
          avatar="https://cdn.quasar.dev/img/avatar4.jpg"
          bg-color="amber"
        >
          <div>
            Martin is typing
            <q-spinner-dots class="q-ml-sm" size="2rem" />
          </div>
        </q-chat-message>
      </q-infinite-scroll>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MessageComponent from 'src/components/MessageComponent.vue';
import { Message } from 'src/store/message/state';

export default defineComponent({
  name: 'IndexPage',
  components: { MessageComponent },

  computed: {
    messages: {
      get() {
        return this.$store.state.message.messages;
      },
      set(messages: Message[]) {
        this.$store.commit('message/setMessages', messages);
      },
    },
  },

  methods: {
    onLoad(index: number, done: (arg0: boolean) => void) {
      setTimeout(() => {
        let new_message = {
          isSender: false,
          messagerName: 'Martin',
          avatar: 'https://cdn.quasar.dev/img/avatar4.jpg',
          text: 'xxx sprava test 123 ',
          stamp: '18.3.2022 at 12:22',
        };

        for (var i = 0; i < 5; i++) {
          this.$store.commit('message/addMessage', new_message);
        }

        let isDone = false;
        if (this.messages.length > 10) isDone = true;

        done(isDone);
      }, 2000);
    },
  },
});
</script>
