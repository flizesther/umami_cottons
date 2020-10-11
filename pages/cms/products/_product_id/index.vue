<template>
  <div>
    <b-row align-h="end">
      <b-col class="text-right">
        <b-link :to="'/cms/products'">
          back
        </b-link>
      </b-col>
    </b-row>
    <debug-data :data="product"></debug-data>
  </div>
</template>

<script>
  import DebugData from "~/components/cms/DebugData";

  export default {
    layout: 'cms',
    name: "showProduct",
    data(){
      return {
        product: {}
      }
    },
    async asyncData({store, params}) {
      const product = await store.dispatch('cms/getProduct', {code: params.product_id})
      return { product }
    }
  }
</script>
