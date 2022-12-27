<template>
  <v-app>
    <div class="login-page">
      <transition name="fade">
          <div class="wallpaper-login"></div>
      </transition>
      <div class="wallpaper-register"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-8 mx-auto">
            <loginComponentVue v-if="isSignupView == false" 
            @signUpChangeChild="sighUpChange"
            ></loginComponentVue>
            <signUpComponentVue v-else @signUpChangeChild="sighUpChange"></signUpComponentVue>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import loginComponentVue from './loginComponent.vue'
import signUpComponentVue from './signUpComponent.vue'
export default {
  components: {
    loginComponentVue,
    signUpComponentVue,
  },
  data() {
    return {
      isSignupView : false,
    }
  },
  methods: {
    sighUpChange(){
      this.isSignupView = !this.isSignupView;
    },
  },
}
</script>

<style>

.login-page {
   align-items: center;
   display: flex;
   height: 100vh;
}

.login-page .wallpaper-login{
  background: url(https://images.pexels.com/photos/32237/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) no-repeat center center;
  background-size: cover;
  height: 100%;
  width: 100%;
}

</style>