export const state = () => ({})

export const mutations = {}

export const actions = {
  nuxtServerInit({ dispatch }) {
    // eslint-disable-next-line no-console
    console.log('nuxtServerInit ', Date.now())
    dispatch('cms/debug', this.$config.DEBUG_ENABLE)
  },

  async listProducts({ commit }, params) {
    return await this.$api.collectionIndex('product')
  },
  async showProduct({ commit }, params) {
    return await this.$api.collectionGet('product', params.code)
  },
  async listFabrics({ commit }, params) {
    return await this.$api.collectionIndex('fabric')
  },
}

export const getters = {}
