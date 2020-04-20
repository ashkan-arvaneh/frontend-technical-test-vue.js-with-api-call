import musicApi from "@/services/api/musicApi";

export default {
  namespaced: true,
  state: {
    data: []
  },

  mutations: {
    SET_DATA(state, payload) {
      state.data = payload;
    }
  },

  actions: {
    GET_LIST(context) {
      return musicApi
        .getNewReleases()
        .then(data => {
          context.commit("SET_DATA", data);
        })
        .catch(error => console.log(error))
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
