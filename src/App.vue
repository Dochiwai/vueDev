<template>
  <v-app id="inspire" style="background-color: #eeeeee;">
    <v-main v-if="logined">
      <headerVue></headerVue>
      <MainViewVue></MainViewVue>
    </v-main>
    <v-main v-if="logined == false">
      <LoginViewVue @loginOkChild="loginOk"/>
    </v-main>
  </v-app>
</template>

<script>
import headerVue from './components/header.vue';
import LoginViewVue from './views/LoginView.vue';
import MainViewVue from './views/MainView.vue';

export default {
  data() {
    return {
      logined: false
    }
  },
  components: {
    headerVue,
    LoginViewVue,
    MainViewVue
  },
  methods: {
    loginOk() {
      this.logined = true;
      location.href='/view'
    }
  },
};
</script>

<style scoped>

</style>