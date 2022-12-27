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
  created () {
    //처음 로딩시 로그인 여부 확인 후 로그인드 트류트류;
  },
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
    }
  },
};
</script>

<style scoped>

</style>