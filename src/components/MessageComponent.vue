<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MessageComponent',
  props: {
    messagerName: {
      type: String,
      required: true
    },

    text: {
      type: String,
      required: true
    },

    stamp: {
      type: String,
      required: true
    },

    avatar: {
      type: String,
      required: true
    },

    isSender:{
      type: Boolean,
      required: true
    }
  }
})
</script>

<template>
  <q-chat-message
    class="q-mt-md"
    text-color="black"

    :name="messagerName"
    :avatar="avatar"
    :text="[text]"
    :stamp="stamp"
    :sent=isSender
  />
</template>