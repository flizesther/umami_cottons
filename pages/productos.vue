<template>
  <div>
    <PromotionalBanner />
    <b-container class="mt-lg-5">
      <div class="container product-list">
        <b-row>
          <b-col lg="3">
            <h1 class="py-4">Productos Umami</h1>
            <!-- <fa :icon="['fas', 'chevron-left']" /> -->
            <span class="list-group-item background d-lg-block d-none" @click="showAllProducts()">
                {{ allProducts }}
            </span>
            <div class="list-group d-lg-block d-none" v-for="product in products" :key="product.id">
              <span v-if="product" class="list-group-item" @click="setFilter(product.category)">
                {{ product.category }}
              </span>
            </div>
          </b-col>
          <b-col lg="9" cols="12" class="products-row">
            <b-row class="products desktop">
              <b-col cols="12" lg="4" class="pb-4" v-for="product in filteredProducts" :key="product.category">
                <product :product="product" />
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Product from '../components/Product'

export default {
  head() {
    return {
      title: "Nuestros productos"
    };
  },
  components: {
    Product
  },
  data () {
    return {
    currentFilter: 'todos',
    allProducts: 'Mostrar Todos'
    }
  },
  computed: {
    filteredProducts () {
      // comprobamos el valor current filter = a todos para mostrar todos los productos
        // return this.products.filter(p => this.currentFilter === 'todos' || p.category.toLowerCase() === this.currentFilter.toLowerCase())
    if (this.currentFilter === 'todos') {
      return [...this.products]
      } else {
        return [...this.products].filter(p => p.category.toLowerCase() === this.currentFilter.toLowerCase())
      }
    },
    ...mapState(['products'])
  },
  methods: {
    setFilter(category) {
      this.currentFilter = category;
    },
    showAllProducts () {
      this.currentFilter = 'todos'
    }
  }
};
</script>

<style lang="scss" scoped>
.products {
  &.desktop {
    @media (max-height:800px){
    margin-top: 102px;
  }
  }
}
@font-face {
  font-family: "merlodAutre";
  src: url("../assets/fonts/MerlodAutre-Regular.otf");
}
* {
  font-family: "merlodAutre";
}
.btn-secondary {
    color: $white;
    background-color: $grey;
    border-color: $grey;
    height: 100%;
}
a {
    color: $dark-grey;
}

.mascarilla {
  border: 15px solid $white;
}

/* demo css */
html,body {
    margin:0;
    font-family: sans-serif;
}

.title-container {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}

.title {
    font-family: sans-serif;
    font-size:30pt;
    font-weight:normal;
}

.project-title {
font-size:16pt  
}

.filter {
    font-family:arial;
    padding: 6px 6px;
    cursor:pointer;
    border-radius: 6px;
    transition: all 0.35s;
}

.filter.active {
    box-shadow:0px 1px 3px 0px #00000026;
}

.filter:hover {
    background:$light-grey;
} 
.btn-secondary:hover{
  opacity:0.8;
}
.projects {
    margin-bottom:50px;
    margin-top:25px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
}

.projects-enter {
    transform: scale(0.5) translatey(-80px);
    opacity:0;
}

.projects-leave-to{
    transform: translatey(30px);
    opacity:0;
}

.projects-leave-active {
    position: absolute;
    z-index:-1;
}

.circle {
    text-align:center;
    position:absolute;
    bottom:-38px;
    left:40px;
    width:100px;
    height:100px;
    border-radius:50px;
/*  border:1px solid black; */
    display:flex;
    box-shadow: 0px -4px 3px 0px #494d3257;
    justify-content:center;
    align-items:center;
    background-color:#fff;
/*  box-shadow:0px -3px 3px #484848a6; */
}

.project {
    transition: all .35s ease-in-out;
    margin:10px;
    box-shadow:0px 2px 8px $light-grey;
    border-radius:3px;
    width:180px;
    height:200px;
    display:flex;
    flex-direction:column;
    align-items:center;
}

.project-image-wrapper {
    position:relative;
}

.gradient-overlay {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:150px;
    opacity:0.09;
    background: 
        linear-gradient(to bottom, rgba(0,210,247,0.65) 0%,rgba(0,210,247,0.64) 1%,rgba(0,0,0,0) 100%), 
        linear-gradient(to top, rgba(247,0,156,0.65) 0%,rgba(247,0,156,0.64) 1%,rgba(0,0,0,0) 100%);
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
    border-top-left-radius:3px;
    border-top-right-radius:3px;
}

.project-image {
    width:100%;
    height:150px;
    border-bottom-left-radius:5px;
    border-bottom-right-radius:5px;
    border-top-left-radius:3px;
    border-top-right-radius:3px;
}

::v-deep .btn-secondary {
  background-color: $umami-pink;
}
.selected {
  background-color:red;
}
.background {
  color: $umami-pink;
}
.promotional-banner {
  width:100%;
  height:50px;
  font-size:22px;
  align-items: center;
  display:flex;
  justify-content: center;
  background-color: $umami-pink;
  color: white;
  @media (min-height:800px){
    font-size: 18px;
    text-align: center;
    padding: 10px 5px;
    color: white;
  }
}
.card {
  box-shadow: 0px 0px 38px 0px rgba(53, 59, 62, 0.24);
  border: 0;
}
::v-deep a:hover {
  color: #8498af;
  text-decoration: none;
  cursor:pointer;
}
.list-group-item {
  cursor: pointer;
}
</style>