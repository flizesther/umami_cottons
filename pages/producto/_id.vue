<template>
  <b-row class="mx-auto">
    <b-col cols="12" md="5" offset-lg="1" class="d-flex mobile-arrow">
    <b-button href="/productos" class="button-height d-none d-lg-block">
      <fa class="arrow" :icon="['fas', 'chevron-left']" />
    </b-button>
        <img v-if="product.modalImage" class="card-img-top h-100 img-fluid" :src="product.modalImage" :alt="product.modalImage">
    </b-col>
    <b-col cols="12" md="5" class="d-flex d-lg-none">
        <div class="d-flex d-lg-none align-items-center">
        <b-button href="/productos" class="button-height">
          <fa class="arrow my-auto" :icon="['fas', 'chevron-left']"/>
          <span style="color: black">VOLVER</span>
        </b-button>
      </div>
    </b-col>
    <b-col cols="12" md="5">
      <div class="card-body">
          <h3 v-if="product.title" class="card-title font-weight-bold"> {{ product.title }}</h3>
          <h4>{{ product.price }}</h4>
          <p class="card-text">{{ product.modalDescriptionOne }}</p>
          <p class="card-text">{{ product.modalDescriptionTwo }}</p>
          <p class="bold card-text">{{ product.modalDescriptionThree }}</p>
        </div>
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters } from  'Vuex'
export default {
  mounted() {
    const productName = this.$route.params.id
    this.product = this.getProductByCode(productName)
  },
  computed: {
    ...mapGetters(['getProductByCode'])
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
.button-go-back {
  border: 0;
  color:black;
  background-color: white;
}
.card-text {
    font-family: 'Montserrat', sans-serif;
}
</style>