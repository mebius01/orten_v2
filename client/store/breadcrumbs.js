const state = () => ({
  crumbs: [],
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
  SET_CRUMBS: (state, payload) => {
    console.log(payload);
    state.crumbs.push(payload);
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
  SEND_CRUMBS({ state, commit }, id) {
    //! Этап 1
    function t(array, id) {
      array.forEach((el) => {
        if (el.id === id) {
          commit("SET_LAST_ITEM", {
            id: el.id,
            name: el.name,
            slug: el.slug,
            parent: el.parent,
            tree_id: el.tree_id,
            level: el.level,
            product: el.product_count,
            service: el.service_count,
            polygraphy: el.polygraphy_count,
          });
        } else {
          if (el.children.length) {
            t(el.children, id);
          }
        }
      });
    }

    //! Этап 2
    let p = t(state.categories, id);
    console.log(p);
    // while (p.level >= 1) {
    //   commit("SET_CRUMBS", p);
    //   p = t(state.categories, p.parent);
    //   commit("SET_CRUMBS", p);
    // }
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
  GET_CRUMBS(state) {
    return Object.values(
      state.crumbs.reduce((acc, cur) => Object.assign(acc, { [cur.id]: cur }), {})
    );
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
