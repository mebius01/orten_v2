const state = () => ({
  list: [
    {name: "Test Link for breadcrumbs", slug: "test-Link-for-breadcrumbs"},
    {name: "Test Link for breadcrumbs 2", slug: "test-Link-for-breadcrumbs"},
    {name: "Test Link for breadcrumbs 3", slug: "test-Link-for-breadcrumbs"},
    {name: "Test Link for breadcrumbs 4", slug: "test-Link-for-breadcrumbs"},
  ]
})

const mutations = {}

const actions = {}

const getters = {
  OBJECT_LIST(state) {
    return state.list;
  }
}


export default {
    state,
    actions,
    getters,
    mutations
};