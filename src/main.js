/*
 * @Author: mili
 * @Date: 2019-11-21 18:42:42
 * @LastEditTime: 2019-11-21 21:20:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /todos-vue/src/main.js
 */
import "todomvc-common/base.css";
import "todomvc-app-css/index.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "todomvc-common/base.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
