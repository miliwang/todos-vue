import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
console.log("vuex");
export default new Vuex.Store({
  state: {
    todo: []
  },
  mutations: {
    increment (state, data) {
      localStorage["todos"] = JSON.stringify(data);
    }
  },
  actions: {},
  modules: {}
});
