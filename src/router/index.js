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
      path: "/boardList",
      component: () => import("../components/boardcomponent.vue"),
      children: [
        {
          name:"/freeboard",
          path:"/freeboard",
          component: () => import("../components/boardComponents/freeBoard.vue")
        },
        {
          name:'boardFreeWrite',
          path:'/boardWirte',
          component: () => import("../components/boardWriteComponents/boardWrite.vue")
        },
        {
          name:'boardDetail',
          path:'/boardView/:uid',
          component: () => import("../components/boardView.vue")
        }
      ],
    },
    {
      name: "mypage",
      path: "/mypage",
      component: () => import("../views/MyPageView.vue"),
    },
  ]
})

 
export default router;