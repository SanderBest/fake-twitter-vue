import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//модули
import auth from "./auth";
import common from "./common";
import posts from "./posts";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    common,
    posts
  }
});
