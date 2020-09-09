<template>
  <b-container class="telas">
      <div class="d-flex justify-content-center flex-column">
        <h1 class="mx-auto py-4">Nuestras telas</h1>
        <b-img src="/images/telas-upenda.jpg" class="w-75 mx-auto" fluid alt="Nuestras Telas"></b-img>
      </div>
  </b-container>
</template>

<script>
export default {
  head() {
    return {
      title: "Nuestras Telas"
    };
  }
};
</script>

<style lang="scss" scoped>

@font-face {
  font-family: "merlodAutre";
  src: url("../assets/fonts/MerlodAutre-Regular.otf");
}
* {
  font-family: "merlodAutre";
}
</style>