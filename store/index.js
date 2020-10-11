import { API_V1_URL_BASE, API_V2_URL_BASE } from '~/infrastructure/config'

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
        const response = await fetch(API_V1_URL_BASE + '/products.json')
        const productsJson = await response.json()
        commit('setProducts', productsJson.filter(p => p))
    },
    async getFabrics({ commit }) {
        const response = await fetch(API_V1_URL_BASE + '/telas.json')
        const fabricsJson = await response.json()
        commit('setFabrics', fabricsJson)
    },
    async getPosts({ commit }) {
        const response = await fetch(API_V2_URL_BASE + '/posts.json')
        const data = await response.json()
        commit('setPosts', Object.values(data))
    },
    async getTest({ commit }) {
        const response = await fetch(API_V2_URL_BASE + '/test.json')
        const data = await response.json()
        commit('test', data)
    },
};

export const getters = {
    getProductById: state => paramsName => state.products.find(p => p.title === paramsName),
    getPostByCode: state => code => state.posts.find(post => post.code === code)
}