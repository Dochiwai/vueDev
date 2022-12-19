import Vue from "vue";
import VueRouter from "vue-router";

// 라우터 인스턴스 생성
var router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/list', component: () => import('../components/TodoList.vue') },
    { path: '/input', component: () => import('../components/TodoInput.vue') }
  ]
})

Vue.use(VueRouter);
 
export default router;