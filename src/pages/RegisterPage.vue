<template>
  <img src="~assets/wave.png" class="wave" alt="register-wave" />
  <div class="row" style="height: 90vh">
    <div class="col-0 col-md-6 flex justify-center content-center">
      <img src="~assets/Chat_SVG.svg" class="responsive" alt="register-image" />
    </div>
    <div
      v-bind:class="{
        'justify-center': $q.screen.md || $q.screen.sm || $q.screen.xs,
      }"
      class="col-12 col-md-6 flex content-center"
    >
      <q-card
        v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '50%' }"
      >
        <q-card-section>
          <q-avatar size="103px" class="absolute-center shadow-10">
            <img src="~assets/avatar.svg" alt="avatar" />
          </q-avatar>
        </q-card-section>
        <q-card-section>
          <div class="q-pt-lg">
            <div class="col text-h6 ellipsis flex justify-center">
              <h2 class="text-h2 text-uppercase q-my-none text-weight-regular">
                ICA
              </h2>
              <h5>Inovative Communication App</h5>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-gutter-md" @submit.prevent="submitForm">
            <q-input label="Username" v-model="register.username"> </q-input>
            <q-input label="Email" type="Email" v-model="register.email">
            </q-input>
            <q-input
              label="Password"
              type="password"
              v-model="register.password"
            >
            </q-input>
            <div>
              <q-btn
                class="full-width"
                color="primary"
                label="register"
                type="submit"
                rounded
              ></q-btn>
              <div class="text-center q-mt-sm q-gutter-lg">
                <router-link class="text-black" to="/login"
                  >Already registered ?</router-link
                >
              </div>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { useQuasar } from 'quasar';
let $q;
export default {
  name: 'RegisterPage',
  data() {
    return {
      register: {
        username: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    submitForm() {
      if (
        !this.register.username ||
        !this.register.password ||
        !this.register.email
      ) {
        $q.notify({
          type: 'negative',
          message: 'Bad login',
        });
      } else if (this.login.password.length < 6) {
        $q.notify({
          type: 'negative',
          message: 'Password need to have at least 6 characters',
        });
      } else {
        console.log('register');
      }
    },
  },
  mounted() {
    $q = useQuasar();
  },
};
</script>

<style scoped>
.wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}
</style>
