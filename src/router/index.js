import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("@/views/Home");

Vue.use(VueRouter);

let base = "/";
if (window.__POWERED_BY_QIANKUN__) {
  base = "/app/shuyue";
}
const routes = [
  {
    path: base,
    name: "Home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "hash",
  fallback:true,
  base,
  routes
});

export default router;
