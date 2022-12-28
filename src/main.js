import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { store } from './store/store.js'
import vuetify from './plugins/vuetify'
import axios from "./plugins/axios";

Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
  axios,
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
