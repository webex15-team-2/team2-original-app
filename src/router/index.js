import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp.vue";
import MyPage from "../views/RegisterES.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    // sign upへの遷移
    path: "/signup",
    name: "signup",
    // component: () => import("../views/SignUp.vue"),
    component: SignUp,
  },
  {
    // sign inへの遷移
    path: "/signin",
    name: "signin",
    component: SignIn,
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/SignIn.vue"),
  },
  {
    // sign inへの遷移
    path: "/mypage",
    name: "mypage",
    component: MyPage,
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/SignIn.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
