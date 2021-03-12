<template>
  <b-container class="telas">
    <!-- <div class="d-flex justify-content-center flex-column">
      <h1 class="mx-auto py-4">Nuestras telas</h1>
      <b-img src="/images/telas-upenda.jpg" class="w-75 mx-auto" fluid alt="Nuestras Telas"></b-img>
    </div> -->
    <div v-for="(fabric, index) in fabrics" :key="fabric.id" class="d-flex flex-column align-items-center">
        <b-img class="fabric-image d-flex w-25 mb-2" :src="fabric.image" :alt="fabric.name">
          </b-img>
        <b-row class="fabrics-container d-none d-lg-flex">
          <div v-for="imageFabric in fabric.list" :key="imageFabric.id">
            <b-img class="fabric-image d-flex" :src="imageFabric.image" :alt="imageFabric.name">{{imageFabric.image}}</b-img>
          </div>
      </b-row>
      <!-- <b-button @click="showFabrics = !showFabrics">
        show all telas
      </b-button> -->
      <b-carousel
        :id="`carousel-${fabric.id}${index}`"
        :interval="0"
        controls
        background="#ababab"
        class="image-slide d-lg-none"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
      <b-carousel-slide
        v-for="imageFabric in fabric.list" :key="imageFabric.id"
      >
        <b-img :src="imageFabric.image" :alt="imageFabric.name" class="w-100">{{imageFabric.image}}</b-img>
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
    return { slide: 0 }
  },
  computed: {
    ...mapState(['fabrics']),
    imageTelas () {
      let telas = fabrics.map(f => f.id).map(i => i.image)
      return telas
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
</style>