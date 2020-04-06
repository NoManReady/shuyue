import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("@/views/Home");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  }
];
let base = "/";
if (window.__POWERED_BY_QIANKUN__) {
  base = "/app/shuyue";
}

const router = new VueRouter({
  mode: "hash",
  base,
  routes
});

export default router;
