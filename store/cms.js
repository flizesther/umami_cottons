import { ProductsService } from '../infrastructure/services/ProductsService';
import { AuthService } from '../infrastructure/services/AuthService';
import { User } from '../infrastructure/domain/User';

export const state = () => ({
    user: new User({})
});

export const mutations = {
    setUser(state, user) {
        state.user = user;
    }
};

export const actions = {

    async getProducts({ commit }) {
        return ProductsService.getProducts(this.$http);
    },
    async getProduct({ commit }, params) {
        return ProductsService.getProduct(this.$http, params.code);
    },
    async createProduct({ commit }, params) {
        return ProductsService.createProduct(this.$http, params);
    },
    async updateProduct({ commit }, params) {
        return ProductsService.updateProduct(this.$http, params);
    },
    async deleteProduct({ commit }, params) {
        return ProductsService.deleteProduct(this.$http, params.code);
    },


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