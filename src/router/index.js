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
} else {
  if (process.env.NODE_ENV === "production") {
    base = "/shuyue";
  } else {
    base = "/";
  }
}

const router = new VueRouter({
  mode: "history",
  base,
  routes
});

export default router;
