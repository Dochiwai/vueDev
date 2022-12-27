<template>
    <v-app id="app">
        <loginVue v-if="isSignup == false"></loginVue>
        <signUpVue v-if="isSignup == true"></signUpVue>
    </v-app>
  </template>
  
  <script>
import loginVue from '@/components/login.vue';
import signUpVue from '@/components/signUp.vue';
  export default {
    components: {
        loginVue,
        signUpVue,
    },
    data() {
      return {
        isSignup: false,
        userId: null,
        userPassword: null,
      };
    },
    methods: {
    },
  };
  </script>