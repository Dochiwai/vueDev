import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 라우터 인스턴스 생성
var router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/make",
      component: () => import("../views/SurveyMakeView.vue"),
    },
    {
      path: "/view",
      component: () => import("../views/Newvue.vue"),
    },
  ]
})

 
export default router;