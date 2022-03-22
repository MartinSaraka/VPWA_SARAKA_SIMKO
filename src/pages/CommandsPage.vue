<template>
  <div class="q-py-sm">
    <q-list separator class="shadow-5">
      <q-item class="q-mb-sm" v-for="(command, index) in commands" :key="index" >
        
        <q-item-section avatar>
            <q-avatar size="lg" color="primary" text-color="white" icon="terminal" />
        </q-item-section>

        <q-item-section >
            <q-item-label class="text-weight-bold text-primary">{{command.command}}</q-item-label>
            <q-item-label class="text-black" caption>{{command.description}}</q-item-label>
        </q-item-section>

        </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Command {
  command: string;
  description: string;
}

const commands: Command[] = [
    { command: '/join channelName [private]', description: 'Príkaz na vytvorenie súkromného komunikačného kanála'},
    { command: '/join channelName', description: 'Príkaz na vytvorenie alebo pridanie sa do verejného komunikačného kanála'},
    { command: '/invite nickName', description: 'Príkaz na pozvanie používateľa do komunikačného kanála'},
    { command: '/revoke nickName', description: 'Príkaz na vyhodenie používateľa zo súkromného komunikačného kanála'},
    { command: '/kick nickName', description: 'Príkaz na vyyhodenie používateľa z verejného komunikačného kanála'},
    { command: '/quit', description: 'Príkaz na zrušenie komunikačný kanál'},
    { command: '/cancel', description: 'Príkaz na opustenie komunikačného kanála'},
    { command: '/list', description: 'Príkaz na zobrazenie zoznamu členov kanála'},
    { command: '@nickName', description: 'Príkaz na adresovanie správy konkrétnemu používateľovi'},
]

export default defineComponent({
  name: 'CommandsPage',
  setup() {
    return {
        commands,
    };
  },
});
</script>
