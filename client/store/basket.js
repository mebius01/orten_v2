const state = () => ({
  products: [],
  counter: null,
  full_cost: null,
}); // state

const mutations = {
  SET_ADD_PRODUCT: (state, payload) => {
    state.products.push(payload);
  },
  SET_MODIFY_PRODUCTS: (state, payload) => {
    state.products = payload;
  },
  SET_COUNTER: (state, payload) => {
    state.counter = payload;
  },
  SET_FULL_COST: (state, payload) => {
    state.full_cost = payload;
  },
  SET_INDEXED_PROD: (state, payload) => {
    state.products[payload.index].quantity = payload.quantity;
    state.products[payload.index].total_cost = payload.total_cost;
  },
  DELL_INDEXED_PROD: (state, payload) => {
    state.products.splice(payload, 1);
  },
  SET_CLEAR_BASKET: (state) => {
    state.products = [];
    state.counter = null;
    state.full_cost = null;
  },
}; // synchronous

const actions = {
  SHAKE_FOR_PRODUCTS({ state, commit }) {
    let arr = state.products;
    console.log(arr); //!;
    let full_cost = arr.reduce((sum, current) => {
      return sum + current.total_cost;
    }, 0);
    commit("SET_FULL_COST", full_cost);

    let counter = arr.reduce((sum, current) => {
      return sum + current.quantity;
    }, 0);
    commit("SET_COUNTER", counter);
  },
  CLEAR_BASKET({ commit }) {
    commit("SET_CLEAR_BASKET");
  },
};

const getters = {
  GET_PRODUCTS(state) {
    return state.products;
  },
  GET_FULL_COST(state) {
    return state.full_cost;
  },
  GET_COUNTER(state) {
    return state.counter;
  },
  GET_OBJ(state, index) {
    return state.products[index];
  },
}; // get data from state

export default {
  state,
  actions,
  getters,
  mutations,
};
