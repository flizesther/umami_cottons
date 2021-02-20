<template>
  <b-container-fluid class="comprar">
    <div class="d-flex flex-column py-4">
      <h1 class="d-flex justify-content-center">¿Cómo comprar?</h1>
      <div class="text">No queremos que tu compra sea con un carrito y chin pum, queremos que contactes con nosotras, que nos digas qué es lo que quieres, que elijas tu tela, que nos digas que nombre poner en la caja y así poder hacer un trato más cercano. Sí, compras por internet, pero no nos olvidemos de lo qué es umami no es comprar por comprar, es comprar calidad, arte y cositas hechas con mucho amor.</div> 
    </div>
    <b-card-group deck class="screen-width d-flex justify-content-center mx-auto">
        <b-card
          class="first-box"
          title="1.- Cóntactanos"
          img-src="/images/telefono.jpg"
          img-alt="Contáctanos"
          img-top
        > 
          <b-card-text>
            Contáctanos por instagram umami_cottons o por mail
            <a class="text-section font-weight-bold p-0" href="mailto:umamicottons@gmail.com">umamicottons@gmail.com</a>
            (nuestro horario es de lunes a viernes de 9:00 a 18:00)
          </b-card-text>
        </b-card>
        <b-card
          title="2.- Producto"
          class="first-box"
          img-src="/images/productos.jpg"
          img-alt="Producto"
          img-top
        >
          <b-card-text>
            Elige tu producto: una upenda, un meraki, un sobre cambiador, una bandana, un pack...
          </b-card-text>
        </b-card>
        <b-card
          title="3.- Tela"
          class="first-box"
          img-src="/images/21.jpg"
          img-alt="Tela"
          img-top
        >
          <b-card-text>
          Elige la tela que mas te guste, recuerda que todas son 100% algodón las puedes ver 
          <a class="text-section p-0 font-weight-bold" href="/nuestras-telas">
          aquí</a>
          </b-card-text>
        </b-card>
        <b-card
          class="first-box"
          title="4.- Packaging"
          img-src="/images/car.jpg"
          img-alt="Packaging"
          img-top
        > 
          <b-card-text>
            Indícanos la fecha que quieres recibir tu pedido.
            Escríbenos la dirección de tu pedido + el nombre de la personita especial 
          </b-card-text>
        </b-card>
      </b-card-group>
       <div class="pb-4 d-lg-flex d-none justify-content-center">
      <div class="py-2 shipping-section d-flex flex-column">
        <div class="py-2 shipping-section d-flex flex-column">
          <div class="shipping-section title font-weight-bold">{{shipping.title}}</div>
          <div class="shipping-section">{{shipping.firstText}}</div>
          <div class="shipping-section">{{shipping.secondText}}</div>
          <div class="shipping-section">{{shipping.thirdText}}</div>
        </div>
      </div>
    </div> 
  </b-container-fluid>
</template>

<script>
export default {
  head() {
    return {
      title: "¿Cómo comprar?"
    };
  },
  data() {
    return {
      mainProps: { blank: true, width: 75, height: 75, class: "m1" },
      slide: 0,
      sliding: null,
      shipping: {
        title: 'Gastos de envío:',
        firstText: 'Gratis Pedidos Nacionales superiores a 50 euros',
        secondText: '5 Euros - Pedidos nacionales inferiores a 50 euros',
        thirdText: '15 Euros - Pedidos internacionales.'
      }
    }
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
  font-family: 'Montserrat', sans-serif;
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
.first-box {
  box-shadow: 0px 0px 38px 0px rgba(53, 59, 62, 0.24);
}
.card-text {
  font-family: 'Montserrat', sans-serif;
}
.text-section {
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  padding: 20px;
}
</style>
