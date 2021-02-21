<template>
  <b-container class="contain-width">
    <h1 class="d-flex justify-content-center py-4 title">Packaging personalizado</h1>
      <div class="text">
        Además del diseño y costura, también hacemos que tus productos viajen en un packaging personalizado con el mensaje que más desees.
        Y, lo hacemos de forma sostenible.
        Los detalles importan y hacer que tu pedido lleve el nombre o la frase que tu quieras es un plus.
    </div>
    <p class="d-flex justify-content-center text-center text-bold">
        Os dejamos algunos ejemplos de algunas de las cajas personalizadas:
    </p>
    <div class="d-lg-flex justify-content-center">
      <b-img class="image-bottom" src="/images/Packaging/packaging-personalizado-uno.jpg" alt="packaging-personalizado"></b-img>
      <b-img class="image-bottom" src="/images/Packaging/packaging-personalizado-dos.jpg" alt="caja con nombre"></b-img>
      <b-img class="image-bottom" src="/images/Packaging/packaging-personalizado-tres.jpg" alt="caja sostenible"></b-img>
      <b-img class="image-bottom" src="/images/Packaging/packaging-personalizado-cuatro.jpg" alt="pacakaging personalizado"></b-img>
    </div>
    <div class="d-lg-flex justify-content-center"> 
      <b-img class="image-bottom" src="/images/Packaging/packaging-personalizado-cinco.jpg" alt="caja con nombre del bebe"></b-img>
      <b-img class="image-bottom" src="/images/Packaging/packaging-personalizado-seis.jpg" alt="personalizado"></b-img>
      <b-img class="image-bottom" src="/images/Packaging/packaging-personalizado-ocho.jpg" alt="caja personalizada"></b-img>
      <b-img class="image-bottom" src="/images/Packaging/packaging-personalizado-siete.jpg" alt="caja personalizada con nombre"></b-img>
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
