import Vue from "vue";
import App from "./App.vue";
import "./public_path";
import router from "./router";
import store from "./store";
import '@/style/index.scss'
Vue.config.productionTip = false;

let instance = null;

export async function bootstrap(props) {
  
}

export async function mount({ data = {} } = {}) {
  instance = new Vue({
    router,
    store,
    render: h => h(App, { props: data })
  }).$mount("#app");
}

export async function unmount() {
  instance.$destroy();
  instance = null;
}

// 单独开发环境
window.__POWERED_BY_QIANKUN__ || mount();
