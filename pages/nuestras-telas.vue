<template>
  <b-container class="telas">
    <div class="d-flex justify-content-center flex-column">
      <h1 class="mx-auto py-4">Nuestras telas</h1>
      <b-img src="/images/telas-upenda.jpg" class="w-75 mx-auto" fluid alt="Nuestras Telas"></b-img>
    </div>
    <!-- <div v-for="fabric in fabrics" :key="fabric.id" class="d-flex flex-column">
        <b-img class="fabric-image d-flex w-25" :src="fabric.image" :alt="fabric.name">
          </b-img>
        <b-row class="d-flex fabrics-container">
          <div v-for="imageFabric in fabric" :key="imageFabric.id">
            <b-img class="fabric-image d-flex" :src="imageFabric.image" :alt="imageFabric.name">{{imageFabric.image}}</b-img>
          </div>
      </b-row>
    </div> -->
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
  computed: {
    ...mapState(['fabrics']),
    imageTelas () {
      let telas = fabrics.map(f => f.id).map(i => i.image)
      return telas
      console.log(telas)
    }
  }
};
</script>

<style lang="scss" scoped>
.fabrics-container {
  max-width: 800px;
  display: flex;
  margin: auto;
  .fabric-image {
    max-width:250px;
    display:flex;
  }
}
@font-face {
  font-family: "merlodAutre";
  src: url("../assets/fonts/MerlodAutre-Regular.otf");
}
* {
  font-family: "merlodAutre";
}
</style>