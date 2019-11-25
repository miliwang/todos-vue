/*
 * @Author: your name
 * @Date: 2019-11-21 18:42:42
 * @LastEditTime: 2019-11-22 10:56:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /todos-vue/src/router/index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Todos from "../views/Todos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "todos",
    component: Todos
  },
  {
    path: "/lifeCycle",
    name: "lifeCycle",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/LifeCycle.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
