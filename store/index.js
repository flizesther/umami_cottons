export const state = () => ({
  posts: []
});

export const mutations = {
  posts(state, posts) {
    state.posts = posts;
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
  }
};
