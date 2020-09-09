<template>
  <b-container-fluid class="comprar">
    <div class="d-flex flex-column py-4">
      <h1 class="d-flex justify-content-center">¿Cómo comprar?</h1>
      <div class="text">No queremos que tu compra sea con un carrito y chin pum, queremos que contactes con nosotras, que nos digas qué es lo que quieras, que elijas tu tela, que nos digas que nombre poner en la caja y así poder hacer un trato más cercano. Sí, compras por internet, pero no nos olvidemos de lo qué es umami no es comprar por comprar, es comprar calidad, arte y cositas hechas con mucho amor.</div> 
    </div>
    <b-card-group deck class="screen-width d-flex justify-content-center mx-auto">
        <b-card
          class="first-box"
          title="Cóntactanos"
          img-src="/images/telefono.png"
          img-alt="Image"
          img-top
        > 
          <b-card-text>
            Indícanos la fecha que quieres recibir tu pedido
          </b-card-text>
        </b-card>
        <b-card
          title="Producto"
          img-src="/images/productos.jpg"
          img-alt="Image"
          img-top
        >
          <b-card-text>una upenda, un meraki, un sobre cambiador, una bandana, un pack...
          </b-card-text>
        </b-card>
        <b-card
          title="Tela"
          img-src="/images/21.png"
          img-alt="Image"
          img-top
        >
          <b-card-text>
          Elige la tela que mas te guste, recuerda que todas son 100% algodón</b-card-text>
        </b-card>
        <b-card
          class="first-box"
          title="Packaging"
          img-src="/images/22.png"
          img-alt="Image"
          img-top
        > 
          <b-card-text>
            Escríbenos la dirección de tu pedido + el nombre de la personita especial 
          </b-card-text>
        </b-card>
      </b-card-group>
  </b-container-fluid>
</template>

<script>
export default {
  head() {
    return {
      title: "¿Cómo comprar?"
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
.text {
  display:flex;
  justify-content: center;
  text-align: center;
  max-width: 700px;
  margin: auto;
  padding: 20px;
}
.screen-width {
  max-width:1000px;
  display:flex;
  justify-content: center;
}
.card-deck {
  @media (max-width: 880px) { 
    flex-direction: column;
  }
}

</style>
