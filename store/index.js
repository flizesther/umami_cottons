export const state = () => ({
    posts: [],
    products: [],
    fabrics: [],
    packs: [],
    test: ''
});

export const mutations = {
    posts(state, posts) {
        state.posts = posts;
    },
    setProducts(state, receivedProducts) {
        state.products = receivedProducts
    },
    setPacks(state, receivedPacks) {
        state.packs = receivedPacks
    },
    test(state, test) {
        state.test = test
    },
    setFabrics(state, fabrics) {
        state.fabrics = fabrics
    }
};

export const actions = {
    async nuxtServerInit({ commit, dispatch }) {
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
        await dispatch('getProducts')
        await dispatch('getFabrics')
        await dispatch('getTest')
    },
    async getProducts({ commit }) {
        const response = await fetch('https://umami-a6083.firebaseio.com/products.json')
        const productsJson = await response.json()
        commit('setProducts', productsJson.filter(p => p))
    },
    async getPacks({ commit }) {
        const response = await fetch('https://umami-a6083.firebaseio.com/packs.json')
        const packsJson = await response.json()
        commit('setPacks', packsJson.filter(p => p))
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
    }
};
export const getters = {
    getProductById: state => paramsName => state.products.find(p => p.title === paramsName)
}
export const getters = {
    getPacksById: state => paramsName => state.packs.find(p => p.title === paramsName)
}