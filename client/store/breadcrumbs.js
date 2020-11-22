const state = () => ({
  list: []
})

const mutations = {
  SET_ADD_CRUMBS: (state, payload) => {
    state.list[payload.index] = payload
    console.log(state.list);
  },
}

const actions = {
  SEND_DATA({ state, commit }, object) {
    const first = { index: 0, name: "Категории", path: "/category/" }
    commit('SET_ADD_CRUMBS', first)

    const end = {index: 3, name: object.name, path: object.path}
    commit('SET_ADD_CRUMBS', end)

    const category = String(object.category)
    this.$axios.$get(`http://127.0.0.1:8000/api/category/${category}`)
      .then(data => {
        const children = { parent: data.parent, name: data.name, path: `/category/${data.id}` }
        const object = { index: 2, name: children.name, path: children.path }
        commit('SET_ADD_CRUMBS', object)

        this.$axios.$get(`http://127.0.0.1:8000/api/category/${children.parent}`)
          .then(data => {
            const root = { parent: data.parent, name: data.name, path: `/category/${data.id}` }
            const object = {index: 1, name: root.name, path: root.path}
            commit('SET_ADD_CRUMBS', object)
          })
      })
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