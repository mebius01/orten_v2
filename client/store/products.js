import axios from "axios";
const state = () => ({
    url: "http://127.0.0.1:8000/api/product/",
    status: null,
    query: [],
    object_list: []
})      // state
const mutations = {
    SET_OBJECT_LIST: (state, payload) => {
      state.object_list = payload
    }
  }  // synchronous
const actions = {
  GET_OBJECT_LIST({state, commit}) {
    axios.get(state.url)
      .then(response => {
        commit('SET_OBJECT_LIST', response.data.results)
      })
      .catch(error => {
        console.log(error);
      })
  }
}     // asynchronous
const getters = {
    OBJECT_LIST(state) {
      return state.object_list;
    }
  }    // get data from state


export default {
    state,
    actions,
    getters,
    mutations
};
// https://nuxtjs.org/guide/vuex-store
// https://nuxtjs.org/api/pages-fetch
// GET_OBJECT_LIST({state, commit}) {
    //   axios.get(state.url)
    //     .then(response => {
    //       commit('SET_OBJECT_LIST', response.data.results)
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     })
    // }