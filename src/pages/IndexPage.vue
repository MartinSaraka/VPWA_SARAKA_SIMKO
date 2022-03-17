<template>

  <div class="q-pa-md row justify-center">
    <div style="width: 100%;">
      <message-component 
          :isSender="true"
          messagerName="Jakub" 
          avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          message="ahoj" 
          stamp="10 minutes ago" 
        />

        <message-component 
          :isSender="false"
          messagerName="Martin" 
          avatar="https://cdn.quasar.dev/img/avatar4.jpg"
          message="cau kubo" 
          stamp="8 minutes ago" 
        />

        <message-component 
          :isSender="true"
          messagerName="Jakub" 
          avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          message="test 123" 
          stamp="2 minutes ago" 
        />

                <message-component 
          :isSender="true"
          messagerName="Jakub" 
          avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          message="test 123" 
          stamp="2 minutes ago" 
        />

                <message-component 
          :isSender="true"
          messagerName="Jakub" 
          avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          message="test 123" 
          stamp="2 minutes ago" 
        />

                <message-component 
          :isSender="true"
          messagerName="Jakub" 
          avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          message="test 123" 
          stamp="2 minutes ago" 
        />

                <message-component 
          :isSender="true"
          messagerName="Jakub" 
          avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          message="test 123" 
          stamp="2 minutes ago" 
        />

                <message-component 
          :isSender="true"
          messagerName="Jakub" 
          avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          message="test 123" 
          stamp="2 minutes ago" 
        />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MessageComponent from 'src/components/MessageComponent.vue';

export default defineComponent({
    name: 'IndexPage',
    data() {
        return;
    },
    components: { MessageComponent }
});
</script>
