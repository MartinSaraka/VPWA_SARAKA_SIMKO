<template>

  <div class="q-pa-md row justify-center">
    <div style="width: 100%;">
        <message-component
          v-for="(message, index) in messages" :key="index"
            :isSender="message.isSender"
            :messagerName="message.messagerName"
            :avatar="message.avatar"
            :text="message.text"
            :stamp="message.stamp"
        />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MessageComponent from 'src/components/MessageComponent.vue';
import {Message} from 'src/store/message/state';

export default defineComponent({
    name: 'IndexPage',
    components: { MessageComponent},
    
    computed: {
      messages: {
        get () {
          return this.$store.state.message.messages
        },
        set (messages: Message[]) {
          this.$store.commit('message/setMessages', messages)
        }
      }
    }
});
</script>
