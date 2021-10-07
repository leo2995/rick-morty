import serviceApi from "../../service/personagem";

export default {
  namespaced: true,
  state: {
    personagens: [],
  },
  mutations: {
    SET_PERSONAGENS(state, payload) {
      state.personagens = payload;
    },
  },
  actions: {
    getPersonagens(context) {
      debugger;
      return serviceApi.getPersonagens().then((res) => {
        context.commit("SET_PERSONAGENS", res.data.results);
      });
    },
  },
  getters: {
    listPersonagens(state) {
      return state.personagens;
    },
  },
};
