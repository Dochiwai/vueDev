<template>
  <v-app style="background-color: #eeeeee;">
    <v-main v-if="logined">
      <router-link to="/login">로그인</router-link>
      <router-link to="/make">만들장</router-link>
      <router-link to="/view">새로운거</router-link>
      <headerVue></headerVue>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <v-main v-if="logined == false">
      <LoginViewVue/>
    </v-main>
  </v-app>
</template>

<script>
import headerVue from './components/header.vue';
import LoginViewVue from './views/LoginView.vue';
export default {
  data() {
    return {
      logined: false
    }
  },
  components: {
    headerVue,
    LoginViewVue
  },
};
</script>

<style scoped>

</style>