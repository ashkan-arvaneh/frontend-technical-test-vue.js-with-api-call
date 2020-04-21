import musicApi from "@/services/api/musicApi";

export default {
  namespaced: true,
  state: {
    loading: null,
    data: [],
    totalItems: null,
    selectedItem: {}
  },

  mutations: {
    SET_DATA(state, payload) {
      state.data = payload;
    },
    SET_TOTAL(state, payload) {
      state.totalItems = payload;
    },
    SET_SELECTED_ITEM(state, payload) {
      state.selectedItem = payload;
    },
    SET_LOADING_STATE(state, payload) {
      state.loading = payload;
    }
  },

  actions: {
    GET_LIST(context) {
      context.commit("SET_LOADING_STATE", true);
      return musicApi
        .getNewReleases()
        .then(data => {
          console.log(data)
          data.data.push({ cover: true })
          console.log('after splice', data)
          context.commit("SET_DATA", data);
          context.commit("SET_TOTAL", data.data.length);
          context.commit("SET_LOADING_STATE", false);
        })
        .catch(error => console.log(error))
        .finally(() => { });
    },
    FIND_SELECTED_ITEM(index) {
      console.log(index);
    }
  }
};
