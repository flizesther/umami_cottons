<template>
    <product-form :product="this.product"></product-form>
</template>

<script>
  import ProductForm from '~/components/cms/ProductForm';
  import { Product } from '~/infrastructure/domain/Product'

  export default {
    layout: 'cms',
    components: { ProductForm },
    data(){
      return {
        product: new Product({})
      }
    }
  }
</script>