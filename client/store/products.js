import axios from "axios";
const state = () => ({
  grid_or_list: true,
  url: "http://127.0.0.1:8000/api/product/",
  status: null,
  query: '',
  products: [],
  count: null,
  next: null,
  previous: null,
})

const mutations = {
  SET_PRODUCTS: (state, payload) => {
    state.products = payload
  },
  SET_QUERY: (state, payload) => {
    state.query = payload
  },
  SET_COUNT :(state, payload) => {
    // console.log(payload);
    state.count = payload
  },
  SET_NEXT :(state, payload) => {
    // console.log(payload);
    state.next = payload
  },
  SET_PREVIOUS :(state, payload) => {
    // console.log(payload);
    state.previous = payload
  },
  SET_GRID_OR_LIST: (state, payload) => {
    state.grid_or_list = payload
  }
}

const actions = {
  SEND_PRODUCTS({state, commit}) {
    axios.get(state.url + state.query)
    .then(response => {
      commit('SET_PRODUCTS', response.data.results)
      commit('SET_COUNT', response.data.count)
      commit('SET_NEXT', response.data.next)
      commit('SET_PREVIOUS', response.data.previous)
    })
    .catch(error => {
      console.log(error);
    })
  }
}

const getters = {
  GET_PRODUCTS(state) { return state.products },
  GET_COUNT(state) { return state.count },
  GET_NEXT(state) { return state.next },
  GET_PREVIOUS(state) { return state.previous },
  GET_GRID_OR_LIST(state) {return state.grid_or_list}
}



export default {
    state,
    actions,
    getters,
    mutations
};