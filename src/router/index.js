import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '@/layout'
import login from './modules/login' // 登录
import menu from './modules/menu'  // 首页



Vue.use(VueRouter);

const routes = [
    ...login,
    ...menu
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
