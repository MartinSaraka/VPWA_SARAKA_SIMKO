<template>
  <div class="q-pa-md q-mt-sm row justify-center">
    <div style="width: 95%">
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
        bg-color="red"
      >
        <div>@Jakub tagnuta sprava je červená</div>
      </q-chat-message>

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
});
</script>
