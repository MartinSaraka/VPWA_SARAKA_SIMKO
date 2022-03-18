<script lang="ts">
import { defineComponent} from 'vue'

export default defineComponent({
    name: 'MesssageInputField',

    props: {
        text: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            inputText: ''
        }
    },

    methods:{
      addMessage(){ 
        const today = new Date();
        const date = today.getDate() + '.' + (today.getMonth()+1) + '.' + today.getFullYear();
        const time = today.getHours() + ':' + today.getMinutes();
        const dateTime = date + ' at ' + time;

        this.$store.commit('message/addMessage', {
          messagerName: 'Jakub',
          avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',
          text: this.inputText,
          stamp: dateTime,
          isSender: true
        })

        this.inputText = ''
      }
    }
})

</script>

<template>
    <q-input standout="bg-teal text-white" v-model="inputText"  placeholder="Type a message" @keyup.enter=addMessage()>
        <template v-slot:append>
        <q-btn dense flat icon="send" @click=addMessage() />
        </template>
    </q-input>
</template>