import Vue from "vue";
import Vuex from "vuex";
import personsModule from "./modules/personsModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    personsModule: personsModule
  },
  strict: process.env.NODE_ENV !== "production"
});
