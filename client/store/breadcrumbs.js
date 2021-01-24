
const state = () => ({
  list: [],
})
const mutations = {
  SET_LIST: (state, payload) => {
    state.list.push(payload)
  }
}
const actions = {
  SEND_SLUG({ commit, state }, data) {
    commit("SET_LIST", data)
	}
}
const getters = {
  GET_LIST(state){return state.list}
}

export default {
    state,
    actions,
    getters,
    mutations
};