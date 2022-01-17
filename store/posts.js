export default {
  namespaced: true,
  state: () => ({
    posts: [],
  }),
  mutations: {
    setPosts: (state, posts) => {
      state.posts = posts
    },
  },
  actions: {
    setPosts({ commit }, posts) {
      commit('setPosts', posts)
    },
  },
  getters: {
    posts: (state) => state.posts,
  },
}
