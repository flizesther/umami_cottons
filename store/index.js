export const state = () => ({});

export const mutations = {};

export const actions = {

    async nuxtServerInit({ dispatch }) {
        console.log('nuxtServerInit', this.$config)
        dispatch('cms/debug', this.$config.DEBUG_ENABLE)
    },

    async listProducts({ commit }, params) {
        return await this.$api.collectionIndex('product');
    },
    async showProduct({ commit }, params) {
        return await this.$api.collectionGet('product', params.code);
    },
    async listFabrics({ commit }, params) {
        return await this.$api.collectionIndex('fabric');
    }

};

export const getters = {}