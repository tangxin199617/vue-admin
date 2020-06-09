import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import i18n from '@/lang' // 国际化
Vue.use(ElementUI);

import '@/utils/axios' // axios
// import '@/router/guard' // 路由守卫

import api from '@/api/api' // api


Vue.prototype.$api = api;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
