import { AuthService } from '../infrastructure/services/AuthService';
import { User } from '../infrastructure/domain/User';

const PATH_PRODUCTS_SERVICE = 'products';

export const state = () => ({
    user: new User({})
});

export const mutations = {
    setUser(state, user) {
        state.user = user;
    }
};

export const actions = {

    // Products
    async getProducts({ commit }) {
        return this.$cms.getAll(PATH_PRODUCTS_SERVICE);
    },
    async getProduct({ commit }, params) {
        return this.$cms.get(PATH_PRODUCTS_SERVICE, params.code);
    },
    async createProduct({ commit }, params) {
        return this.$cms.create(PATH_PRODUCTS_SERVICE, params);
    },
    async updateProduct({ commit }, params) {
        return this.$cms.update(PATH_PRODUCTS_SERVICE, params);
    },
    async deleteProduct({ commit }, params) {
        return this.$cms.delete(PATH_PRODUCTS_SERVICE, params.code);
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