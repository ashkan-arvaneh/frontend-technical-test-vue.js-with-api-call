import Vue from "vue";
import Vuex from "vuex";
import newReleases from "./modules/newReleases";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    newReleases: newReleases
  },
  strict: process.env.NODE_ENV !== "production"
});
