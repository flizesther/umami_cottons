export const state = () => ({
  posts: [],
  products: []
});

export const mutations = {
  posts(state, posts) {
    state.posts = posts;
  },
  setProducts(state, receivedProducts) {
    state.products = receivedProducts
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    const files = await require.context(
      "@/assets/content/blog/",
      false,
      /\.json$/
    );
    const posts = files.keys().map(key => {
      const res = files(key);
      res.slug = key.slice(0, -5);
      return res;
    });
    commit("posts", posts);
  },
  async getProducts({ commit }) {
    const response = await fetch ('https://umami-a6083.firebaseio.com/.json')
    const productsJson = await response.json()
    commit('setProducts', productsJson)
  }
};
