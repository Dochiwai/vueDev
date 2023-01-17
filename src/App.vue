<template>
  <v-app id="inspire" style="background-color: #eeeeee;">
    <v-main v-if="logined">
      <headerVue></headerVue>
      <MainViewVue></MainViewVue>
      <footerVue></footerVue>
    </v-main>
    <v-main v-if="logined == false">
      <LoginViewVue/>
    </v-main>
  </v-app>
</template>

<script>
import headerVue from './components/header.vue';
import LoginViewVue from './views/LoginView.vue';
import MainViewVue from './views/MainView.vue';
import footerVue from './components/footer.vue';

export default {
  computed: {
    logined(){
      return this.$store.getters.isUserLogined
    },
    userEmail(){
      return this.$store.getters.getUserEmail
    }
  },
  data() {
    return {};
  },
  components: {
    headerVue,
    LoginViewVue,
    MainViewVue,
    footerVue
  },
};
</script>

<style scoped>

</style>