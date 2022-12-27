<template>
    <v-app id="app">
        <loginVue v-if="isSignup == false"></loginVue>
    </v-app>
  </template>
  
  <script>
import loginVue from '@/components/login.vue';
  export default {
    components: {
        loginVue,
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