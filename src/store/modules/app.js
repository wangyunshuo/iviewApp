const app = {
  state: {
    data: 1
  },
  mutations: {
    setAdd (state) {
      state.data++
    }
  },
  actions: {
    add ({ commit }) {
      commit('setAdd')
    }
  }
}
export default app
