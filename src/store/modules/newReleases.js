import musicApi from "@/services/api/musicApi";

export default {
  namespaced: true,
  state: {
    data: [],
    totalItems: null
  },

  mutations: {
    SET_DATA(state, payload) {
      state.data = payload;
    },
    SET_TOTAL(state, payload) {
      state.totalItems = payload;
    }
  },

  actions: {
    GET_LIST(context) {
      return musicApi
        .getNewReleases()
        .then(data => {
          context.commit("SET_DATA", data);
          context.commit("SET_TOTAL", data.data.length);
        })
        .catch(error => console.log(error))
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
