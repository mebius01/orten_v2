const qs = require("qs");

/**
 * Собирает строку из объекта query
 * @param { object } query {page:"2", search:"HP 1010"}
 * @returns { string } query ?page=2&search=HP+1010
 */
const createQuery = (object) => {
  for (let key in object) {
    if (!object[key]) {
      delete object[key];
    }
  }
  const r = qs.stringify(object);
  return r ? "?" + r : "";
};

const state = () => ({
  url: "",
  count: null,
  next: null,
  previous: null,
  results: null,
  pageNumberNext: null,
  pageNumberPrev: null,
  pageNumberCurrent: null,
  firstPage: null,
  lastPage: null,
  grid: true,
  query: {
    min_price: null,
    max_price: null,
    category: null,
    format_fild: null,
    color_fild: null,
    search: null,
    available: null,
    page: 1,
  },
});

const mutations = {
  SET_URL: (state, payload) => {
    state.url = payload;
  },
  SET_QUERY: (state, payload) => {
    state.query = payload;
  },
  SET_RESULTS: (state, payload) => {
    state.results = payload;
  },
  SET_NEXT: (state, payload) => {
    state.next = payload;
  },
  SET_PREVIOUS: (state, payload) => {
    state.previous = payload;
  },
  SET_COUNT: (state, payload) => {
    state.count = payload;
  },
  SET_PAGE_NUMBER_NEXT: (state, payload) => {
    state.pageNumberNext = payload;
  },
  SET_PAGE_NUMBER_PREV: (state, payload) => {
    state.pageNumberPrev = payload;
  },
  SET_PAGE_NUMBER_CURRENT: (state, payload) => {
    state.pageNumberCurrent = payload;
  },
  SET_PAGE_FIRST: (state, payload) => {
    state.firstPage = payload;
  },
  SET_PAGE_LAST: (state, payload) => {
    state.lastPage = payload;
  },
  SET_GRID: (state) => {
    state.grid = !state.grid;
  },
  // query
  SET_MIN: (state, payload) => {
    state.query.min_price = payload;
  },
  SET_MAX: (state, payload) => {
    state.query.max_price = payload;
  },
  SET_CATEGORY: (state, payload) => {
    state.query.category = payload;
  },
  SET_FORMAT: (state, payload) => {
    state.query.format_fild = payload;
  },
  SET_COLOR: (state, payload) => {
    state.query.color_fild = payload;
  },
  SET_SEARCH: (state, payload) => {
    state.query.search = payload;
  },
  SET_AVA: (state, payload) => {
    state.query.available = payload;
  },
  SET_PAGE: (state, payload) => {
    state.query.page = payload;
  },
};

const actions = {
  SEND_GRID({ state, commit }) {
    commit("SET_GRID");
  },
  SEND_URL({ commit }, url) {
    commit("SET_URL", url);
  },
  SEND_PAGE_NUMBER_CURRENT({ commit }, page) {
    commit("SET_PAGE_NUMBER_CURRENT", page);
  },
  // query
  SEND_MIN({ state, commit }, payload) {
    commit("SET_MIN", payload);
  },
  SEND_MAX({ state, commit }, payload) {
    commit("SET_MAX", payload);
  },
  SEND_CATEGORY({ state, commit }, payload) {
    commit("SET_CATEGORY", payload);
  },
  SEND_FORMAT({ state, commit }, payload) {
    commit("SET_FORMAT", payload);
  },
  SEND_COLOR({ state, commit }, payload) {
    commit("SET_COLOR", payload);
  },
  SEND_SEARCH({ state, commit }, payload) {
    commit("SET_SEARCH", payload);
  },
  SEND_AVA({ state, commit }, payload) {
    commit("SET_AVA", payload);
  },
  SEND_PAGE({ state, commit }, payload) {
    commit("SET_PAGE", payload);
  },
  //-----
  SEND_DATA({ state, commit }) {
    const locale = this.app.i18n.locale;
    const apiUrl = process.env.apiUrl;
    const q = createQuery(state.query);
    this.$axios.get(`${apiUrl}/${locale}/api` + state.url + q).then((res) => {
      const data = res.data;
      const results = data.results;
      const count = data.count;
      // Get Count page
      const interimCount = Math.ceil(count / 24);
      commit("SET_COUNT", interimCount);
      commit("SET_RESULTS", results);
    });
  },
  SEND_QUERY({ commit }, query) {
    commit("SET_QUERY", query);
  },
};

const getters = {
  GET_RESULTS(state) {
    return state.results;
  },
  GET_COUNT(state) {
    return state.count;
  },
  GET_NEXT(state) {
    return state.next;
  },
  GET_PREVIOUS(state) {
    return state.previous;
  },
  GET_PAGE_NUMBER_NEXT(state) {
    return state.pageNumberNext;
  },
  GET_PAGE_NUMBER_PREV(state) {
    return state.pageNumberPrev;
  },
  GET_PAGE_NUMBER_CURRENT(state) {
    return state.pageNumberCurrent;
  },
  GET_PAGE_FIRST(state) {
    return state.firstPage;
  },
  GET_PAGE_LAST(state) {
    return state.lastPage;
  },
  GET_GRID(state) {
    return state.grid;
  },
  // query
  GET_ALL_QUERY(state) {
    return state.query;
  },
  GET_MIN(state) {
    return state.query.min_price;
  },
  GET_MAX(state) {
    return state.query.max_price;
  },
  GET_CATGORY(state) {
    return state.query.category;
  },
  GET_FORAT(state) {
    return state.query.format_fild;
  },
  GET_COLR(state) {
    return state.query.color_fild;
  },
  GET_SEARCH(state) {
    return state.query.search;
  },
  GET_AVA(state) {
    return state.query.available;
  },
  GET_PAG(state) {
    return state.query.page;
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
