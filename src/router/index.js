import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 라우터 인스턴스 생성
var router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name:"main",
      path: "/",
      component: () => import("../components/maincomponent.vue"),
    },
    {
      name: "boardList",
      path: "/boardList",
      component: () => import("../components/boardcomponent.vue"),
    },
    {
      name:"/test",
      path:"/boardList/test",
      component: () => import("../components/boardList.vue")
    },
    {
      name:'boardFreeWrite',
      path:'/boardWirte',
      component: () => import("../components/boardWrite.vue")
    },
    {
      name:'boardDetail',
      path:'/boardView/:uid',
      component: () => import("../components/boardView.vue")
    },
    {
      name: "mypage",
      path: "/mypage",
      component: () => import("../views/MyPageView.vue"),
    },
  ]
})

 
export default router;