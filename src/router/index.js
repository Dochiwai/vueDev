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
      children: [
        {
          path:'/',
          component: () => import("../components/boardComponents/freeBoard.vue")
        },
        {
          path:'F',
          component: () => import("../components/boardComponents/freeBoard.vue")
        },
        {
          path:'Y',
          component: () => import("../components/boardComponents/yumerBoard.vue")
        },
        {
          path:'U',
          component: () => import("../components/boardComponents/unggoBoard.vue")
        },
        {
          name:'boardFreeWrite',
          path:'/boardWirte',
          component: () => import("../components/boardWriteComponents/boardWrite.vue")
        },
        {
          name:'boardDetail',
          path:'/boardView/',
          component: () => import("../components/boardView.vue")
        }
      ],
    },
    {
      path: "/myPage",
      component: () => import("../views/MyPageView.vue"),
    },
  ]
})

 
export default router;