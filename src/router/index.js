import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '@/layout'
import login from './modules/login' // 登录
import menu from './modules/menu'  // 首页
import plugunit from './modules/plugunit'  // 常用插件

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);

const routes = [
    ...login,
    ...menu,
	...plugunit
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
