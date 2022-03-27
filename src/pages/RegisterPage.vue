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
            </div>
            <h6
              class="text-h6 q-my-none text-weight-regular flex justify-center"
            >
              Innovative Communication App
            </h6>
          </div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-gutter-md">
            <q-input
              label="Nickname"
              lazy-rules
              :rules="nicknameRules"
              v-model="nickname"
            >
            </q-input>
            <q-input
              label="Username"
              lazy-rules
              :rules="usernameRules"
              v-model="username"
            >
            </q-input>
            <q-input
              label="Surname"
              lazy-rules
              :rules="surnameRules"
              v-model="surname"
            >
            </q-input>
            <q-input
              label="Email"
              lazy-rules
              :rules="emailRules"
              type="Email"
              v-model="email"
            >
            </q-input>
            <q-input
              label="Password"
              type="password"
              lazy-rules
              :rules="passwordRules"
              v-model="password"
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
import { ref } from 'vue';
export default {
  setup() {
    const $q = useQuasar();

    const surname = ref(null);
    const surnameRef = ref(null);
    const nickname = ref(null);
    const nicknameRef = ref(null);
    const username = ref(null);
    const usernameRef = ref(null);
    const email = ref(null);
    const emailRef = ref(null);
    const password = ref(null);
    const passwordRef = ref(null);

    return {
      email,
      emailRef,
      emailRules: [(val) => (val && val.length > 0) || 'Please type something'],

      password,
      passwordRef,
      passwordRules: [
        (val) => (val !== null && val !== '') || 'Please type your password',
        (val) => val.length >= 5 || 'Please use minimum 6 characters',
      ],

      nickname,
      nicknameRef,
      nicknameRules: [
        (val) => (val !== null && val !== '') || 'Please type your nickname',
        (val) => val.length >= 5 || 'Please use minimum 6 characters',
      ],

      username,
      usernameRef,
      usernameRules: [
        (val) => (val !== null && val !== '') || 'Please type your username',
        (val) => val.length >= 5 || 'Please use minimum 6 characters',
      ],

      surname,
      surnameRef,
      surnameRules: [
        (val) => (val !== null && val !== '') || 'Please type your surname',
        (val) => val.length >= 5 || 'Please use minimum 6 characters',
      ],

      onSubmit() {
        emailRef.value.validate();
        passwordRef.value.validate();
        nicknameRef.value.validate();
        usernameRef.value.validate();
        surnameRef.value.validate();

        if (
          emailRef.value.hasError ||
          passwordRef.value.hasError ||
          nicknameRef.value.hasError ||
          usernameRef.value.hasError ||
          surnameRef.value.hasError
        ) {
          $q.notify({
            color: 'negative',
            message: 'something wrong',
          });
        } else {
          $q.notify({
            icon: 'done',
            color: 'positive',
            message: 'Submitted',
          });
        }
      },
    };
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
