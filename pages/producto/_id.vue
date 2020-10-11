<template>
  <b-row class="mx-auto">
    <b-col cols="12" md="5" offset-lg="1" class="d-flex mobile-arrow">
    <b-button href="/productos" class="button-height">
      <fa class="arrow" :icon="['fas', 'chevron-left']" />
    </b-button>
        <img class="card-img-top img-fluid" :src="product.modalImage" :alt="product.modalImage">
    </b-col>
    <b-col cols="12" md="5">
      <div class="card-body">
          <h3 class="card-title"> {{ product.title }}</h3>
          <h4>{{ product.price }}</h4>
          <p class="card-text">{{ product.modalDescriptionOne }}</p>
          <p class="card-text">{{ product.modalDescriptionTwo }}</p>
          <p class="bold card-text">{{ product.modalDescriptionThree }}</p>
        </div>
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters } from  'vuex'
export default {
  layout: 'app',
  mounted() {
    const productName = this.$route.params.id
    this.product = this.getProductById(productName)
  },
  computed: {
    ...mapGetters(['getProductById'])
  },
  data: () => ({
    product: {}
  })
}
</script>

<style lang="scss" scoped>
.card-title {
  font-size: 100px;
}
.card-text {
  font-family: sans-serif;
}
.bold {
  font-weight:600;
}
.btn.button-height.btn-secondary {
  background-color: transparent;
  border-color: transparent;
  height: 5%;
}
::v-deep.btn.button-height.btn-secondary:focus {
  border-color: transparent;
  box-shadow:unset;
}
.mobile-arrow {
  @media (max-width: 800px){
    flex-direction: column;
  }
}
.arrow {
  color: pink;
  @media (max-width: 800px){
    margin-bottom:40px;
  }
}
</style>