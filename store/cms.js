import { AuthService } from '../infrastructure/services/AuthService';
import { User } from '../infrastructure/domain/User';

const CATEGORIES_SERVICE_PATH = 'categories';
const FABRICS_SERVICE_PATH = 'fabrics';
const PACKS_SERVICE_PATH = 'packs';
const POSTS_SERVICE_PATH = 'posts';
const PRODUCTS_SERVICE_PATH = 'products';

export const state = () => ({
    user: new User({})
});

export const mutations = {
    setUser(state, user) {
        state.user = user;
    }
};

export const actions = {

    // Categories
    async getCategories({ commit }) {
        return await this.$cms.getAll(CATEGORIES_SERVICE_PATH);
    },

    // Products
    async getFabrics({ commit }) {
        return await this.$cms.getAll(FABRICS_SERVICE_PATH);
    },

    // Products
    async getPacks({ commit }) {
        return await this.$cms.getAll(PACKS_SERVICE_PATH);
    },

    // Products
    async getPosts({ commit }) {
        return await this.$cms.getAll(POSTS_SERVICE_PATH);
    },

    // Products
    async getProducts({ commit }) {
        return await this.$cms.getAll(PRODUCTS_SERVICE_PATH);
    },
    async getProduct({ commit }, params) {
        return await this.$cms.get(PRODUCTS_SERVICE_PATH, params.code);
    },
    async createProduct({ commit }, params) {
        return await this.$cms.create(PRODUCTS_SERVICE_PATH, params);
    },
    async updateProduct({ commit }, params) {
        return await this.$cms.update(PRODUCTS_SERVICE_PATH, params);
    },
    async deleteProduct({ commit }, params) {
        return await this.$cms.delete(PRODUCTS_SERVICE_PATH, params.code);
    },

    // Auth
    async login({ commit }, params) {
        const user = await AuthService.login(this.$http, params);
        commit('setUser', new User(user));
    },
    async logout({ commit }, params) {
        const user = await AuthService.logout(this.$http, params);
        commit('setUser', new User({}));
    },
    async profile({ commit }, params) {
        const user = await AuthService.profile(this.$http, params);
        return new User(user);
    }
};

export const getters = {
    userAuth: state => new User(state.user),
    isAuth: state => state.user && (new User(state.user)).isAuth()
};