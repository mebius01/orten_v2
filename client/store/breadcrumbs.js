const state = () => ({
  list: null
})

const mutations = {
  SET_ADD_CRUMBS: (state, payload) => {
    state.list = [payload]
  },
}

const actions = {
  SEND_DATA({ commit }, object) {
    commit('SET_ADD_CRUMBS', object)
    console.log('breadcrumbs',object);
  }
}

const getters = {
  GET_OBJECT_LIST(state) {
    return state.list;
  }
}


export default {
    state,
    actions,
    getters,
    mutations
};