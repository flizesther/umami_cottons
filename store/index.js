export const state = () => ({
    posts: [],
    products: [],
    fabrics: [],
    test: ''
});

export const mutations = {
    setPosts(state, posts) {
        state.posts = posts;
    },
    setProducts(state, products) {
        state.products = products
    },
    setFabrics(state, fabrics) {
        state.fabrics = fabrics
    },
    test(state, test) {
        state.test = test
    }
};

export const actions = {
    async nuxtServerInit({ dispatch }) {
        await dispatch('getProducts')
        await dispatch('getFabrics')
        await dispatch('getPosts')
        await dispatch('getTest')
    },
    async getProducts({ commit }) {
        const response = await fetch(this.$config.API_BASE_URL_V1 + '/products.json')
        const productsJson = await response.json()
        commit('setProducts', productsJson.filter(p => p))
    },
    async getFabrics({ commit }) {
        const response = await fetch(this.$config.API_BASE_URL_V1 + '/telas.json')
        const fabricsJson = await response.json()
        commit('setFabrics', fabricsJson)
    },
    async getPosts({ commit }) {
        const response = await fetch(this.$config.API_BASE_URL_V2 + '/post.json')
        const data = await response.json()
        commit('setPosts', Object.values(data))
    },
    async getTest({ commit }) {
        const response = await fetch(this.$config.API_BASE_URL_V2 + '/health.json')
        const data = await response.json()
        commit('test', data)
    },
};

export const getters = {
    getProductById: state => paramsName => state.products.find(p => p.title === paramsName),
    getPostByCode: state => code => state.posts.find(post => post.code === code)
}