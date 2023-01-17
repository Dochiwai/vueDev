<template>
  <v-app id="inspire" style="background-color: #eeeeee;">
    <v-main v-if="logined">
      <headerVue></headerVue>
      <MainViewVue></MainViewVue>
      <footer 
        style="text-align: center; background-color: #eeeee5; border-top: 1px solid black ;"  
      >
        このサイトはしふんさんとひょひょんさんが一緒に作ったページであり、
        勝手にハッキングやコピーした場合は。。どうしよう。。。。。。
      </footer>
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
    MainViewVue
  },
};
</script>

<style scoped>

</style>