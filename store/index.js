export const state = () => ({
    posts: [],
    products: [],
    fabrics: [],
    test: ''
});

export const mutations = {
    posts(state, posts) {
        state.posts = posts;
    },
    setProducts(state, receivedProducts) {
        state.products = receivedProducts
    },
    test(state, test) {
        state.test = test
    },
    setFabrics(state, fabrics) {
        state.fabrics = fabrics
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
        const response = await fetch('https://umami-a6083.firebaseio.com/products.json')
        const productsJson = await response.json()
        commit('setProducts', productsJson)
    },
    async getTest({ commit }) {
        const response = await fetch('https://umami-a6083.firebaseio.com/test.json')
        const data = await response.json()
        commit('test', data)
    },
    async getFabrics({ commit }) {
        const response = await fetch('https://umami-a6083.firebaseio.com/telas.json')
        const fabricsJson = await response.json()
        commit('setFabrics', fabricsJson)
    },
};