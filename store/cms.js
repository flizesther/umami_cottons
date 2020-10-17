import { AuthService } from '../infrastructure/services/AuthService';
import { User } from '../infrastructure/domain/User';

export const state = () => ({
    user: new User({}),
    collections: {
        product: {
            fields: [
                { key: 'code', label: 'Code', sortable: true },
                { key: 'name', label: 'Name', sortable: true },
                //{ key: 'mainDescription', label: 'Description', sortable: true },
                { key: 'actions', label: 'Actions' }
            ],
            actions: {
                list: { enable: true },
                show: { enable: true },
                edit: { enable: true },
                new: { enable: true },
                remove: { enable: true }
            }
        },
        fabric: {
            fields: [
                { key: 'code', label: 'Code', sortable: true },
                { key: 'name', label: 'Name', sortable: true },
                //{ key: 'mainDescription', label: 'Description', sortable: true },
                { key: 'actions', label: 'Actions' }
            ],
            actions: {
                list: { enable: true },
                show: { enable: true },
                edit: { enable: false },
                new: { enable: true },
                remove: { enable: true }
            }
        },
        category: {
            fields: [
                { key: 'code', label: 'Code', sortable: true },
                { key: 'name', label: 'Name', sortable: true },
                //{ key: 'mainDescription', label: 'Description', sortable: true },
                { key: 'actions', label: 'Actions' }
            ],
            actions: {
                list: { enable: true },
                show: { enable: false },
                edit: { enable: true },
                new: { enable: true },
                remove: { enable: true }
            }
        },
        pack: {
            fields: [
                { key: 'code', label: 'Code', sortable: true },
                { key: 'name', label: 'Name', sortable: true },
                //{ key: 'mainDescription', label: 'Description', sortable: true },
                { key: 'actions', label: 'Actions' }
            ],
            actions: {
                list: { enable: true },
                show: { enable: false },
                edit: { enable: false },
                new: { enable: true },
                remove: { enable: false }
            }
        },
        post: {
            fields: [
                { key: 'code', label: 'Code', sortable: true },
                { key: 'name', label: 'Name', sortable: true },
                //{ key: 'mainDescription', label: 'Description', sortable: true },
                { key: 'actions', label: 'Actions' }
            ],
            actions: {
                list: { enable: true },
                show: { enable: true },
                edit: { enable: true },
                new: { enable: true },
                remove: { enable: false }
            }
        }
    }
});

export const mutations = {
    setUser(state, user) {
        state.user = user;
    }
};

export const actions = {

    // Collection (product, fabric, category, pack and post)
    async list({ commit }, params) {
        return await this.$cms.getAll(params.collection);
    },
    async show({ commit }, params) {
        return await this.$cms.get(params.collection, params.code);
    },
    async new({ commit }, params) {
        return await this.$cms.create(params.collection, params.data);
    },
    async edit({ commit }, params) {
        return await this.$cms.update(params.collection, params.data);
    },
    async remove({ commit }, params) {
        return await this.$cms.delete(params.collection, params.code);
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
    isAuth: state => state.user && (new User(state.user)).isAuth(),
    collections: state => state.collections
};