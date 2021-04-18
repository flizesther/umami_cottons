<template>
  <b-row class="mx-auto">
    <b-col cols="12" md="5" offset-lg="1" class="d-flex mobile-arrow">
    <b-button href="/packs" class="button-height d-none d-lg-block">
      <fa class="arrow" :icon="['fas', 'chevron-left']" />
    </b-button>
        <img v-if="pack.modalImage" class="card-img-top h-100 img-fluid" :src="pack.modalImage" :alt="pack.modalImage">
    </b-col>
    <b-col cols="12" md="5" class="d-flex d-lg-none">
        <div class="d-flex d-lg-none align-items-center">
        <b-button href="/packs" class="button-height">
          <fa class="arrow my-auto" :icon="['fas', 'chevron-left']"/>
          <span style="color: black">VOLVER</span>
        </b-button>
      </div>
    </b-col>
    <b-col cols="12" md="5">
      <div class="card-body">
        <h3 class="card-title font-weight-bold"> {{ pack.title }}</h3>
        <h4>{{ pack.price }}</h4>
        <p class="card-text">{{ pack.modalDescriptionOne }}</p>
        <p class="card-text">{{ pack.modalDescriptionTwo }}</p>
        <p class="bold card-text">{{ pack.modalDescriptionThree }}</p>
        <div class="d-flex related-products">
          <div v-for="product in products" :key="product.id" class="pr-2" >
            <b-button :href="`/producto/${product.code}`">
               <p class="text-center">{{ product.title }}</p>
                <b-img :src="product.image" :alt="product.title" class="w-100" />
            </b-button>
          </div>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters } from  'Vuex'
export default {
  mounted() {
    const packCode = this.$route.params.id
    this.pack = this.getPackByCode(packCode)
    this.products = this.pack.products.map(p => this.getProductById(p.id))
  },
  computed: {
    ...mapGetters(['getPackByCode', 'getProductById'])
  },
  data: () => ({
    pack: {},
    products: []
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
  background-color: $white;
}
.card-text {
    font-family: 'Montserrat', sans-serif;
}
::v-deep .btn-secondary {
  color: $umami-pink;
  background-color: $white;
  border-color: transparent;
}
::v-deep .btn-secondary:not(:disabled):not(.disabled):active {
  color: #fff;
  background-color: pink;
  border-color: transparent;
  box-shadow: unset;
}
::v-deep .btn-secondary:active {
  color: #fff;
  background-color: pink;
  border-color: transparent;
  box-shadow: unset;
}
::v-deep .btn-secondary:focus {
  border-color: pink;
  box-shadow: unset;
}
::v-deep .btn-secondary:focus, .btn-secondary.focus {
  box-shadow: unset;
}
.related-products {
  @media (max-width: 800px){
    flex-direction: column;
  }
}
</style>