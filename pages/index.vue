<template>
  <b-container-fluid class="home">
    <div class="promotional-slider">
      Pedidos de más de 50 euros, los gastos de envío son gratuitos!
    </div>
    <b-img src="/images/main-image.jpg" class="w-100" fluid alt="Responsive image"></b-img>
    <h1 class="d-flex justify-content-center">Umami Cottons</h1>
    <b-img
      src="/images/um.png"
      class="banner-umm d-flex mx-auto justify-content-center"
      fluid
      alt="Responsive image"
    ></b-img>
    <div class="py-4 d-flex justify-content-center subtitle-section">
      Nuestros productos
      </div>
      <div class="pb-4 d-flex justify-content-center">
        <div class="py-2 shipping-section d-flex flex-column">
          <p class="py-2 mb-0 d-flex justify-content-center text-section text-center">Todos productos están cosidos a mano, todos nuestras cajas están estampadas a mano, todo está hecho con grandes dosis de amor</p>
          <p class="d-flex mb-0 justify-content-center text-section text-center">Tu pedido se puede enviar a cualquier destino, nacional o internacional.</p>
        </div>
      </div> 
    <div class="d-flex justify-content-center mobile-grid">
      <b-button v-b-modal.modal-center-1>
        <b-img class="image-bottom" src="/images/11.jpg" alt="Hecho a mano"></b-img>
        <b-modal id="modal-center-1" centered title="Hecho a mano" hide-footer>
          <p class="py-4">Hecho a mano</p>
        </b-modal>
      </b-button>
      <b-button v-b-modal.modal-center-2 class="d-none d-lg-block">
        <b-img class="image-bottom" src="/images/cierre.jpg" alt="vida sencilla"></b-img>
        <b-modal id="modal-center-2" hide-footer centered title="Si, un snap nos cambió la vida">
          <p class="py-4">Nuestros diseños están pensados para hacerte la vida más sencilla</p>
        </b-modal>
      </b-button>
      <b-button v-b-modal.modal-center-3 to="/nuestras-telas">
        <b-img class="image-bottom" src="/images/2.jpg" alt="telas de algodón"></b-img>
        <!-- <b-modal id="modal-center-3" hide-footer centered title="Telas 100% algodón">
          <p class="py-4">Telas 100% algodón, tanto el popelín como la tela de toalla</p>
        </b-modal> -->
      </b-button>
    </div>
    <div class="d-flex justify-content-center mobile-grid">
      <b-button v-b-modal.modal-center-4>
        <b-img class="image-bottom" src="/images/19.jpg" alt="fiesta"></b-img>
        <b-modal id="modal-center-4" hide-footer centered title="Vive la vida">
          <p class="py-4">Y así empieza todo, con una fiesta!</p>
        </b-modal>
      </b-button>
      <b-button v-b-modal.modal-center-5 class="d-none d-lg-block">
        <b-img class="image-bottom" src="/images/productos.jpg" alt="muselina"></b-img>
        <b-modal id="modal-center-5" hide-footer centered title="Muselina">
          <p class="py-4">Hemos incorporado tela muselina para tocar el cielo!</p>
        </b-modal>
      </b-button>
      <b-button v-b-modal.modal-center-6 class="d-none d-lg-block">
        <b-img class="image-bottom" src="/images/5.jpg" alt="packs"></b-img>
        <b-modal id="modal-center-6" hide-footer centered title="Un pack lo arregla todo">
          <p class="py-4">A veces no sabes qué tienes que comprar o regalar. Un pack te cambia la vida! mira las posibles combinaciones</p>
        </b-modal>
      </b-button>
    </div>
    <div class="d-flex justify-content-center pb-4 mobile-grid">
      <b-button v-b-modal.modal-center-7 class="d-none d-lg-block">
        <b-img class="image-bottom" src="/images/3.jpg" alt="sobres de muda"></b-img>
        <b-modal id="modal-center" hide-footer centered title="Sobre de muda">
          <p class="py-4">Producto estrella. Ten todo organizado. Uno sabe lo ordenado con lo que sale, pero no como llega. Con los sobres de muda, la organización está garantizada!</p>
        </b-modal>
      </b-button>
      <b-button v-b-modal.modal-center-8>
        <b-img class="image-bottom" src="/images/Upenda/upenda-12.jpg" alt="upenda"></b-img>
        <b-modal id="modal-center" hide-footer centered title="Upenda">
          <p class="py-4">El origen de todo, nuestra idea, nuestro comienzo, nuestro patrón... es la upenda!</p>
        </b-modal>
      </b-button>
      <b-button v-b-modal.modal-center-9 class="d-none d-lg-block">
        <b-img class="image-bottom" src="/images/4.jpg" alt="disfruta con umami"></b-img>
        <b-modal id="modal-center" hide-footer centered title="Disfrutar con umami">
          <p class="py-4">Disfruta de cada momento con tu bebé, sobre todo del baño, para eso umami está aquí para ayudarte a disfrutar de estos momentos!</p>
        </b-modal>
      </b-button>
    </div>
    <div class="pb-4 d-lg-flex d-none justify-content-center">
      <div class="py-2 shipping-section d-flex flex-column">
        <div class="py-2 shipping-section d-flex flex-column">Gastos de envío:
          <div class="">Gratis Pedidos Nacionales superiores a 50 euros</div>
          <div class="">5 Euros - Pedidos nacionales inferiores a 50 euros</div>
          <div class="">15 Euros - Pedidos internacionales.</div>
        </div>
      </div>
    </div> 
    <div class="py-4 d-none d-lg-flex justify-content-center subtitle-section">¿Cómo puedo comprar?</div>
    <b-button href="/comprar" class="py-4 mt-4 w-100 d-lg-none d-flex justify-content-center buy-section">¿Cómo puedo comprar?</b-button>
      <b-card-group deck class="screen-width  mobile-grid d-lg-flex justify-content-center d-none py-4 mx-auto">
        <b-card
          class="first-box"
          title="Cóntactanos"
          img-src="/images/telefono.jpg"
          img-alt="Image"
          img-top
        > 
          <b-card-text>
            Indícanos la fecha que quieres recibir tu pedido
          </b-card-text>
        </b-card>
        <b-card
          title="Producto"
          class="first-box"
          img-src="/images/productos.jpg"
          img-alt="Image"
          img-top
        >
          <b-card-text>una upenda, un meraki, un sobre cambiador, una bandana, un pack...
          </b-card-text>
        </b-card>
        <b-card
          title="Tela"
          class="first-box"
          img-src="/images/21.jpg"
          img-alt="Image"
          img-top
        >
          <b-card-text>
          Elige la tela que mas te guste, recuerda que todas son 100% algodón</b-card-text>
        </b-card>
        <b-card
          class="first-box"
          title="Packaging"
          img-src="/images/22.jpg"
          img-alt="Image"
          img-top
        > 
          <b-card-text>
            Escríbenos la dirección de tu pedido + el nombre de la personita especial 
          </b-card-text>
        </b-card>
      </b-card-group>
      <div class="promotional-slider py-4 d-lg-flex d-none">
        Pedidos de más de 50 euros, los gastos de envío son gratuitos!
      </div>
    <div class="d-flex grid-slider mobile-grid justify-content-center py-4">
    <b-carousel
      id="carousel-1"
      :interval="4000"
      background="#ababab"
      class="image-slide"
      style="text-shadow: 1px 1px 2px #333;"
    >
    <b-img src="/images/24.jpg" class="d-none d-lg-block w-100 borders" fluid alt="Responsive image"></b-img>
    </b-carousel>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      class="image-slide"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
    <b-carousel-slide
        caption="Quiero regalar algo de calidad"
        text="Nuestras telas 100% algodón son de alta calidad"
        img-src="/images/24.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Alta Calidad"
        text="Todas nuestras telas son de alta calidad tanto en diseño como en el tejido en sí."
        img-src="/images/cierre.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Es su momento, es tu momento"
        text="Pensada para hacer la vida del papá y la mamá más fácil"
        img-src="/images/nina-con-upendas.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Querer es sentir"
        text="Siente la suavidad de nuestras telas"
        img-src="/images/upenda.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="El regalo perfecto"
        text="Una prenda única, hecha a mano con todo nuestro cariño y amor."
        img-src="/images/upenda-abrazo.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Quiero sorprender como se sorprende un niñ@"
        text="100% asegurado el éxito con productos umami"
        img-src="/images/25.jpg"
      ></b-carousel-slide>
    </b-carousel>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      background="#ababab"
      class="image-slide d-none d-lg-block"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-img src="/images/25.jpg" class="w-100 borders" fluid alt="Responsive image"></b-img>
    </b-carousel>
    </div>
    <div class="d-flex justify-content-center subtitle-section instagram">SIGUE A UMAMI_COTTONS EN INSTAGRAM</div>
    <div class="d-lg-flex justify-content-center several-images mobile-grid d-none">
      <b-img class="image-bottom" src="/images/13.jpg" alt="Named color image (red)"></b-img>
      <b-img class="image-bottom" src="/images/15.jpg" alt="Named color image (black)"></b-img>
      <b-img class="image-bottom" src="/images/16.jpg" alt="HEX color image"></b-img>
      <b-img class="image-bottom" src="/images/17.jpg" alt="RGBa color image"></b-img>
      <b-img class="image-bottom" src="/images/18.jpg" alt="HEX shorthand color (#88f)"></b-img>
    </div>
    <div class="pb-4 d-lg-none d-flex justify-content-center">
      <div class="py-2 shipping-section d-flex flex-column">
        <div class="py-2 shipping-section d-flex flex-column">Gastos de envío:
          <div class="">Gratis Pedidos Nacionales superiores a 50 euros</div>
          <div class="">5 Euros - Pedidos nacionales inferiores a 50 euros</div>
          <div class="">15 Euros - Pedidos internacionales.</div>
        </div>
      </div>
    </div> 
    <b-carousel
      id="carousel-1"
      :interval="4000"
      background="#ababab"
      class="image-slide d-lg-none d-block"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        img-src="/images/16.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="/images/17.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="/images/15.jpg"
      ></b-carousel-slide>
    </b-carousel>
  </b-container-fluid>
</template>

<script>
export default {
  head() {
    return {
      title: "Umami Cottons"
    }
  },
  data() {
    return {
      mainProps: { blank: true, width: 75, height: 75, class: "m1" },
      slide: 0,
      sliding: null
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

//import personal font
@font-face {
  font-family: "merlodAutre";
  src: url("../assets/fonts/MerlodAutre-Regular.otf");
}
* {
  font-family: "merlodAutre";
  background-color: $light-grey;
}
.text-section {
  font-size: 16px;
  font-family: sans-serif;
}
.borders {
  padding: 40px;
}
.btn-secondary {
  border-color: $grey;
}
.image-slide {
  @media (min-width: 880px) { 
    height: 500px;
    width: 500px;
  }
}
.image-bottom {
  width: 100%;
  @media (min-width: 880px) { 
    height: 250px;
    width: 250px;
  }
}
.subtitle-section {
  font-size:40px;
  background-color: #f8f9fa;
  @media (max-width: 880px) {
    font-size:30px;
    text-align: center;
  }
  &.instragram {
    font-family:monospace;
  }
}
.screen-width {
  display:flex;
  justify-content: center;
  background-color: white;
  @media (min-width: 880px) { 
    width: 100%;
    max-width: 1440px;
  }
}
.promotional-slider {
  width:100%;
  height:50px;
  font-size:18px;
  align-items: center;
  display:flex;
  justify-content: center;
  background-color: $umami-pink;
  color: white;
}

.shipping-section {
  font-size: 20px;
  max-width: 500px;
}
::v-deep .carousel-indicators {
  display: none;
}
::v-deep .carousel-inner {
    box-shadow: 0px 0px 38px 0px rgba(53, 59, 62, 0.24);
}
::v-deep .image-slide {
  background: none!important;
}
.mobile-grid {
  
  @media (max-width: 880px) { 
    flex-direction: column;
  }
  & .btn-secondary {
    background-color: white;
    border-color: white;
  }
}
.several-images {
  padding-bottom: 30px;
}
.first-box {
  box-shadow: 0px 0px 38px 0px rgba(53, 59, 62, 0.24);
  border:0;
}
.modal-backdrop {
  background-color: rgba(0,0,0,.0001) !important;
}
.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {
  background-color:white;
  border-color: white;
  box-shadow: 0px 0px 38px 0px rgba(53, 59, 62, 0.24);
}
.buy-section {
  background-color: #f5a3b7;
  border-color: transparent;
  box-shadow: 0px 0px 38px 0px rgba(53, 59, 62, 0.24);
  font-size:30px;
}
.banner-umm {
  width:25%;
  @media (max-width: 880px) { 
    width:75%;
  }
}
</style>
