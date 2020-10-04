const state = () => ({
  like: [],
})      // state

const mutations = {
  SET_ADD_LIKE: (state, payload) => {
    state.like.push(payload)
  },
  SET_MODIFY_LIKE: (state, payload) => {
    state.like = payload
  },
}  // synchronous

const actions = {
  ACTION_FOR_LIKE({state, commit}, object) {
      commit('SET_ADD_LIKE', object)
      let arr = Array.from(new Set(state.like))
      commit('SET_MODIFY_LIKE', arr)
  },
}     // asynchronous

const getters = {
  GET_LIKE(state) {
    return state.like;
  },
}    // get data from state


export default {
  state,
  actions,
  getters,
  mutations
};