const state = () => ({
  categories: [],
  lastItem: {},
  id: "",
  endPage: {},
  slugItem: {},
});
const mutations = {
  SET_CATEGORIES_ALL: (state, payload) => {
    state.categories = payload;
  },
  SET_LAST_ITEM: (state, payload) => {
    state.lastItem = payload;
  },
  SET_ID: (state, payload) => {
    state.id = payload;
  },
  SET_END_PAGE: (state, payload) => {
    state.endPage = payload;
  },
  SET_SLUG_ITEM: (state, payload) => {
    state.slugItem = payload;
  },
};
const actions = {
  SEND_CATEGORIES_ALL({ state, commit }) {
    const locale = this.app.i18n.locale;
    const apiUrl = process.env.apiUrl;
    if (!state.categories.length) {
      this.$axios
        .get(`${apiUrl}/${locale}/api/category/`)
        .then((response) => {
          commit("SET_CATEGORIES_ALL", response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  },
  SEND_ID({ state, commit }, id) {
    commit("SET_ID", id);
  },
  SEND_END_PAGE({ commit }, page) {
    commit("SET_END_PAGE", page);
  },
  SEND_SLUG_ITEM({ commit }, item) {
    commit("SET_SLUG_ITEM", item);
  },
};
const getters = {
  GET_CATEGORIES_ALL(state) {
    return state.categories;
  },
  GET_ID(state) {
    return state.id;
  },
  GET_END_PAGE(state) {
    return state.endPage;
  },
  GET_SLUG_ITEM(state) {
    return state.slugItem;
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
