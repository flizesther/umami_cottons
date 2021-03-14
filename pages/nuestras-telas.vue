<template>
  <b-container class="telas">
    <div class="d-flex justify-content-center flex-column">
      <h1 class="mx-auto">
        <b-img class="fabric-image d-flex justify-content-center mx-auto w-25 mb-2" :src="fabrics.image" :alt="fabrics.name" />
      </h1>
      <b-form-group v-slot="{ ariaDescribedby }" class="d-flex justify-content-center pb-lg-4">
        <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="radio" value="todas" class="pr-lg-3">Todas</b-form-radio>
        <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="radio" value="upenda" class="pr-lg-3">Upenda</b-form-radio>
        <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="radio" value="meraki" class="pr-lg-3">Meraki</b-form-radio>
        <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="radio" value="xs" class="pr-lg-3">Cosas Pequeñas</b-form-radio>
        <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="radio" value="muselina" class="pr-lg-3">Muselina</b-form-radio>
      </b-form-group>
    </div>
    <div class="d-flex flex-column align-items-center">
        <b-row class="fabrics-container d-none d-lg-flex">
          <div v-for="fabricList in fabricWithStock" :key="fabricList">
            <b-img class="fabric-image d-flex" :src="fabricList.image" :alt="fabricList.name">
              {{fabricList.image}}
            </b-img>
          </div>
        </b-row>
      <!-- <b-button @click="showFabrics = !showFabrics">
        show all telas
      </b-button> -->
      <b-carousel
        :interval="0"
        controls
        background="#ababab"
        class="image-slide d-lg-none"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
      <b-carousel-slide
        v-for="fabricList in fabricWithStock" :key="fabricList"
      >
        <b-img :src="fabricList.image" :alt="fabricList.name" class="w-100">{{fabricList.image}}</b-img>
      </b-carousel-slide>
      </b-carousel>
    </div>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: "Nuestras Telas"
    };
  },
  // data () {
  //   return { showFabrics: false }
  // },
  data () {
    return { slide: 0, selected: 'todas' }
  },
  computed: {
    ...mapState(['fabrics']),
    fabricWithStock () {
      let fabricWithStock = this.fabrics.list.filter(f => f.stock > 0)
      if (this.selected !== 'todas') {
        fabricWithStock = fabricWithStock.filter(f => f.available === undefined || f.available[this.selected] === undefined || f.available[this.selected])
      }
      return fabricWithStock
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.fabrics-container {
  display: flex;
  justify-content:center;
  .fabric-image {
    max-width:250px;
    display:flex;
    @media (max-width: 880px) { 
      max-width:320px;
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

::v-deep .carousel-caption {
  position: relative;
    padding: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width:100;
}
::v-deep .carousel-control-next,
  ::v-deep .carousel-control-prev {
    z-index: 17;

    &:hover {
      opacity: 0.4;
    }
  }

::v-deep .carousel-control-prev-icon,
  ::v-deep .carousel-control-next-icon {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background-size: 20px;
    background-color:$grey;
    border: 1px solid $grey;
  }

  ::v-deep .custom-control-input:checked ~ .custom-control-label::before {
  border-color: $umami-pink;
  background-color:$umami-pink;
  }
  ::v-deep .custom-control-input:checked {
    color: $umami-pink !important;
  }
  ::v-deep .bv-no-focus-ring {
    display:flex;
    padding-top:20px;
  }
  ::v-deep .custom-control-label {
    @media (max-width: 880px) {
      text-align: center;
      font-size: 14px;
      padding-right:10px;
    }
  }
</style>