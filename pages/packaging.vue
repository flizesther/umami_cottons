<template>
  <b-container class="contain-width">
    <h1 class="d-flex justify-content-center py-4 title">Packaging personalizado</h1>
      <div class="text">
        Podemos poner personalizar la caja en la que va tu pedido.
        Los detalles importan y hacer que tu pedido lleve el nombre o la frase que tu quieras es un plus.
        Podemos poner un nombre, una frase cortita o un dibujo sencillo pero signficativo.
    </div>
    <p class="d-flex justify-content-center text-center text-bold">
        Os dejamos algunos ejemplos de algunas de las cajas personalizadas:
    </p>
    <div class="d-lg-flex justify-content-center">
      <b-img class="image-bottom" src="/images/Packaging/packaging-personalizado-uno.jpg" alt="Named color image (red)"></b-img>
      <b-img class="image-bottom" src="/images/Packaging/packaging-personalizado-dos.jpg" alt="Named color image (red)"></b-img>
      <b-img class="image-bottom" src="/images/Packaging/packaging-personalizado-tres.jpg" alt="Named color image (red)"></b-img>
      <b-img class="image-bottom" src="/images/Packaging/packaging-personalizado-cuatro.jpg" alt="Named color image (red)"></b-img>
    </div>
    <div class="d-lg-flex justify-content-center"> 
      <b-img class="image-bottom" src="/images/Packaging/packaging-personalizado-cinco.jpg" alt="Named color image (red)"></b-img>
      <b-img class="image-bottom" src="/images/Packaging/packaging-personalizado-seis.jpg" alt="Named color image (red)"></b-img>
      <b-img class="image-bottom" src="/images/Packaging/packaging-personalizado-ocho.jpg" alt="Named color image (red)"></b-img>
      <b-img class="image-bottom" src="/images/Packaging/packaging-personalizado-diez.jpg" alt="Named color image (red)"></b-img>
    </div>
  </b-container>
</template>

<script>
export default {
  head() {
    return {
      title: "Packaging personalizado"
    };
  }
};
</script>

<style lang="scss" scoped>

@font-face {
  font-family: "merlodAutre";
  src: url("../assets/fonts/MerlodAutre-Regular.otf");
}
.title {
  font-family: "merlodAutre";
}
p {
  font-family: 'Montserrat', sans-serif;
}
.contain-width {
  max-width: 800px;
  font-size: 20px;
  @media (max-width: 800px) {
    font-size: 18px;
    padding-right: 20px;
    padding-left: 20px;
  }
}
.text-bold {
  font-weight: bold;
  color: $umami-pink;
}
.text {
  display:flex;
  justify-content: center;
  text-align: center;
  max-width: 700px;
  margin: auto;
  padding: 20px;
  font-family: 'Montserrat', sans-serif;
}
.image-bottom {
  width: 100%;
  @media (min-width: 880px) { 
    height: 250px;
    width: 250px;
  }
}
</style>
