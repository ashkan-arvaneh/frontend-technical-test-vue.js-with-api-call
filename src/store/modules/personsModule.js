import musicApi from "@/services/api/musicApi";

export default {
  namespaced: true,
  state: {
    loading: null,
    data: [],
    totalItems: null,
    selectedPerson: {},
    selectedBackground: "",
    popupClosed: true
  },

  mutations: {
    SET_DATA(state, payload) {
      state.data = payload;
    },
    SET_TOTAL(state, payload) {
      state.totalItems = payload;
    },
    SET_SELECTED_PERSON(state, payload) {
      state.selectedPerson = payload;
    },
    SET_SELECTED_BACKGROUND(state, payload) {
      state.selectedBackground = payload;
    },
    SET_LOADING_STATE(state, payload) {
      state.loading = payload;
    },
    SET_POPUP_STATE(state, payload) {
      state.popupClosed = payload;
    }
  },

  actions: {
    GET_LIST(context) {
      context.commit("SET_LOADING_STATE", true);
      return musicApi
        .getpersonsModule()
        .then(data => {
          data.data.push({ cover: true });
          context.commit("SET_DATA", data);
          context.commit("SET_TOTAL", data.data.length);
          context.commit("SET_LOADING_STATE", false);
        })
        .catch(error => console.log(error))
        .finally(() => {});
    },
    PASS_SELECTED_PERSON({ commit }, payload) {
      commit("SET_SELECTED_PERSON", payload.person);
      commit("SET_SELECTED_BACKGROUND", payload.backgroundColor);
    },
    UPDATE_POPUP({ commit }, payload) {
      commit("SET_POPUP_STATE", payload);
    }
  }
};
