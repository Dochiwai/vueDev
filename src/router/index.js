import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 라우터 인스턴스 생성
var router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/",
      component: () => import("../components/maincomponent.vue"),
    },
    {
      path: "/test",
      component: () => import("../components/boardcomponent.vue"),
    },
  ]
})

 
export default router;