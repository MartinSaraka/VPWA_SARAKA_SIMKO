<script>

export default {
  data() {
    return {

    }
  },
  props: {
    messagerName: String,
    message: String,
    stamp: String,
    avatar: String,
    isSender: Boolean
  }
}
</script>

<template>
    <q-chat-message
        :sent=isSender
        text-color="white"

        :name="messagerName"
        :avatar="avatar"
        :text="[message]"
        :stamp="stamp"
    >
    </q-chat-message>
</template>
