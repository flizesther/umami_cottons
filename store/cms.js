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
        return await this.$api.collectionIndex(params.collection);
    },
    async show({ commit }, params) {
        return await this.$api.collectionGet(params.collection, params.code);
    },
    async new({ commit }, params) {
        return await this.$api.collectionCreate(params.collection, params.data);
    },
    async edit({ commit }, params) {
        return await this.$api.collectionUpdate(params.collection, params.data);
    },
    async remove({ commit }, params) {
        return await this.$api.collectionDelete(params.collection, params.code);
    },


    // Auth
    async login({ commit }, params) {
        const response = await this.$api.authLogin(params);
        console.log(response)
        commit('setUser', response.data ? new User(response.data) : new User({}));
    },
    async logout({ commit }, params) {
        const response = await this.$api.authLogout(params);
        commit('setUser', new User({}));
    },
    async profile({ commit }, params) {
        const response = await this.$api.authProfile(params);
        return response.data ? new User(response.data) : new User({});
    },

    // Backup
    backup({ commit }, params) {
        return this.$api.backupAll();
    },
};

export const getters = {
    userAuth: state => new User(state.user),
    isAuth: state => state.user && (new User(state.user)).isAuth(),
    collections: state => state.collections
};