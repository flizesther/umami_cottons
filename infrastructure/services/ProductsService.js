import { API_V2_URL_BASE } from '../config'

export const ProductsService = {

    getProducts: async function(http) {
        const res = await http.get(API_V2_URL_BASE + '/products.json')
        const data = await res.json()
        return Object.values(data)
    },
    getProduct: async function(http, code) {
        const res = await http.get(API_V2_URL_BASE + `/products/${code}.json`)
        const data = await res.json()
        return data
    },
    createProduct: async function(http, product) {
        const res = await http.put(API_V2_URL_BASE + `/products/${product.code}.json`, product)
        const data = await res.json()
        return data
    },
    updateProduct: async function(http, product) {
        const res = await http.put(API_V2_URL_BASE + `/products/${product.code}.json`, product)
        const data = await res.json()
        return data
    },
    deleteProduct: async function(http, code) {
        const res = await http.delete(API_V2_URL_BASE + `/products/${code}.json`)
        const data = await res.json()
        return data
    }

}