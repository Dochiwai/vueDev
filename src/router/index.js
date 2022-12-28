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
      path: "/boardList",
      component: () => import("../components/boardcomponent.vue"),
    },
    {
      path: "/myPage",
      component: () => import("../views/MyPageView.vue"),
    },
  ]
})

 
export default router;