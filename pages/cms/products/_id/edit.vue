<template>
  <product-form :product="this.product" update></product-form>
</template>

<script>
  import ProductForm from "~/components/cms/ProductForm";
  import { Product } from '~/infrastructure/domain/Product'

  export default {
    layout: 'cms',
    name: "editProduct",
    components: { ProductForm },
    data(){
      return {
        product: new Product({})
      }
    },
    async asyncData({store, params}) {
      const product = new Product(await store.dispatch('cms/getProduct', {code: params.id}))
      return { product }
    }
  }
</script>