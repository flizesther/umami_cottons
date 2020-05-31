<template>
  <b-container-fluid>
    <div class="promotional-slider">
      Pedidos de más de 50 euros, los gastos de envío son gratuitos!
    </div>
    <b-img src="/images/main-image.jpg" class="w-100" fluid alt="Responsive image"></b-img>
    <h1 class="d-flex justify-content-center">Umami Cottons</h1>
    <b-img
      src="/images/um.png"
      class="w-25 d-flex mx-auto justify-content-center"
      fluid
      alt="Responsive image"
    ></b-img>
    <div class="my-4 d-flex justify-content-center subtitle-section">Nuestros productos</div>
    <div class="d-flex justify-content-center">
      <b-button v-b-modal.modal-center-1>
        <b-img class="image-bottom" src="/images/cierre.jpg" alt="HEX shorthand color image (#777)"></b-img>
        <b-modal id="modal-center-1" centered title="BootstrapVue">
          <p class="my-4">Vertically centered modal!</p>
        </b-modal>
      </b-button>
      <b-button v-b-modal.modal-center-2>
        <b-img class="image-bottom" src="/images/cierre.jpg" alt="HEX shorthand color image (#777)"></b-img>
        <b-modal id="modal-center-2" centered title="BootstrapVue">
          <p class="my-4">Vertically centered modal!</p>
        </b-modal>
      </b-button>
      <b-button v-b-modal.modal-center-3>
        <b-img class="image-bottom" src="/images/cierre.jpg" alt="HEX shorthand color image (#777)"></b-img>
        <b-modal id="modal-center-3" centered title="BootstrapVue">
          <p class="my-4">Vertically centered modal!</p>
        </b-modal>
      </b-button>
    </div>
    <div class="d-flex justify-content-center">
      <b-button v-b-modal.modal-center-4>
        <b-img class="image-bottom" src="/images/cierre.jpg" alt="HEX shorthand color image (#777)"></b-img>
        <b-modal id="modal-center-4" centered title="BootstrapVue">
          <p class="my-4">Vertically centered modal!</p>
        </b-modal>
      </b-button>
      <b-button v-b-modal.modal-center-5>
        <b-img class="image-bottom" src="/images/cierre.jpg" alt="HEX shorthand color image (#777)"></b-img>
        <b-modal id="modal-center-5" centered title="BootstrapVue">
          <p class="my-4">Vertically centered modal!</p>
        </b-modal>
      </b-button>
      <b-button v-b-modal.modal-center-6>
        <b-img class="image-bottom" src="/images/cierre.jpg" alt="HEX shorthand color image (#777)"></b-img>
        <b-modal id="modal-center-6" centered title="BootstrapVue">
          <p class="my-4">Vertically centered modal!</p>
        </b-modal>
      </b-button>
    </div>
    <div class="d-flex justify-content-center mb-4">
      <b-button v-b-modal.modal-center>
        <b-img class="image-bottom" src="/images/cierre.jpg" alt="HEX shorthand color image (#777)"></b-img>
        <b-modal id="modal-center" centered title="BootstrapVue">
          <p class="my-4">Vertically centered modal!</p>
        </b-modal>
      </b-button>
      <b-button v-b-modal.modal-center>
        <b-img class="image-bottom" src="/images/cierre.jpg" alt="HEX shorthand color image (#777)"></b-img>
        <b-modal id="modal-center" centered title="BootstrapVue">
          <p class="my-4">Vertically centered modal!</p>
        </b-modal>
      </b-button>
      <b-button v-b-modal.modal-center>
        <b-img class="image-bottom" src="/images/cierre.jpg" alt="HEX shorthand color image (#777)"></b-img>
        <b-modal id="modal-center" centered title="BootstrapVue">
          <p class="my-4">Vertically centered modal!</p>
        </b-modal>
      </b-button>
    </div>
    <div class="my-4 d-flex justify-content-center subtitle-section">¿Cómo puedo comprar?</div>
    <b-card-group deck class="screen-width d-flex justify-content-center mx-auto">
      <b-card
        class="first-box"
        title="Cóntactanos"
        img-src="https://picsum.photos/300/300/?image=41"
        img-alt="Image"
        img-top
      > 
        <b-card-text>
          Indícanos la fecha que quieres recibir tu pedido
        </b-card-text>
      </b-card>
      <b-card
        title="Producto"
        img-src="https://picsum.photos/300/300/?image=41"
        img-alt="Image"
        img-top
      >
        <b-card-text>una upenda, un meraki, un sobre cambiador, una bandana, un pack...
        </b-card-text>
      </b-card>
      <b-card
        title="Tela"
        img-src="https://picsum.photos/300/300/?image=41"
        img-alt="Image"
        img-top
      >
        <b-card-text>
        Elige la tela que mas te guste, recuerda que todas son 100% algodón</b-card-text>
      </b-card>
      <b-card
        class="first-box"
        title="Packaging"
        img-src="https://picsum.photos/300/300/?image=41"
        img-alt="Image"
        img-top
      > 
        <b-card-text>
          Escríbenos la dirección de tu pedido + el nombre de la personita especial 
        </b-card-text>
      </b-card>
    </b-card-group>
    <div class="d-flex justify-content-center my-4">
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
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="/images/cierre.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Second slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="/images/nina-con-upendas.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Third slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="/images/upenda.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Third slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="/images/upenda-abrazo.jpg"
      ></b-carousel-slide>
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
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="/images/cierre.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Second slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="/images/nina-con-upendas.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Third slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="/images/upenda.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Third slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="/images/upenda-abrazo.jpg"
      ></b-carousel-slide>
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
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="/images/cierre.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Second slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="/images/nina-con-upendas.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Third slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="/images/upenda.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Third slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="/images/upenda-abrazo.jpg"
      ></b-carousel-slide>
    </b-carousel>
    </div>
    <div class="d-flex justify-content-center">SIGUE A UMAMI_COTTONS EN INSTAGRAM</div>
    <div class="d-flex justify-content-center">
      <b-img class="image-bottom" src="/images/cierre.jpg" alt="Named color image (red)"></b-img>
      <b-img class="image-bottom" src="/images/cierre.jpg" alt="Named color image (black)"></b-img>
      <b-img class="image-bottom" src="/images/cierre.jpg" alt="HEX color image"></b-img>
      <b-img class="image-bottom" src="/images/cierre.jpg" alt="RGBa color image"></b-img>
      <b-img class="image-bottom" src="/images/cierre.jpg" alt="HEX shorthand color (#88f)"></b-img>
    </div>
    <footer class="footer-distributed">
 
			<div class="footer-left">
				<h3>Umami Cottons</h3>
 
				<p class="footer-links">
					<a href="/">Nuestros Productos</a>
					|
					<a href="/">Sobre Umami</a>
					|
					<a href="/">Contáctanos</a>
					|
					<a href="/">Contact</a>
				</p>
 
				<p class="footer-company-name">© 2020 Umami Cottons Company.</p>
			</div>
 
			<div class="footer-center">
				<div class="d-flex justify-content-center">
          <img class="w-50" src="/images/logoUC.jpg">
				</div>
        <div class="d-flex justify-content-center mx-auto my-4">Síguenos en:</div>
          <div class="footer-icons d-flex justify-content-center mx-auto">
					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-instagram"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-youtube"></i></a>
				</div>
			</div>
			<div class="footer-right">
				<p class="footer-company-about">
					<span>About the company</span>
            Síguenos en:
          <div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:umamicottons@gmail.com">umamicottons@gmail.com</a></p>
				</div>
			</div>
		</footer>
  </b-container-fluid>
</template>

<script>
export default {
  head() {
    return {
      title: "Inicio",
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
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
  background-color: $blue;
}

.image-slide {
  height: 500px;
  width: 500px;
}
.image-bottom {
  height: 250px;
  width: 250px;
}
.subtitle-section {
  font-size:40px;
}
.screen-width {
  width:1000px;
  display:flex;
  justify-content: center;
}
.promotional-slider {
  width:100%;
  height:50px;
  font-size:22px;
  align-items: center;
  display:flex;
  justify-content: center;
  background-color: #F47DBC;
}
 
footer{
	position: fixed;
	bottom: 0;
}
 
@media (max-height:800px){
	footer { position: static; }
	header { padding-top:40px; }
}
 
 
.footer-distributed{
	background-color: #2c292f;
	box-sizing: border-box;
	width: 100%;
	text-align: left;
	font: bold 16px sans-serif;
	padding: 50px 50px 60px 50px;
	margin-top: 80px;
}
 
.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right{
	display: inline-block;
	vertical-align: top;
}
 
/* Footer left */
 
.footer-distributed .footer-left{
	width: 30%;
}
 
.footer-distributed h3{
	color:  #ffffff;
	font: normal 36px;
	margin: 0;
}
 
/* The company logo */
 
.footer-distributed .footer-left img{
	width: 30%;
}
 
.footer-distributed h3 span{
	color:  #e0ac1c;
}
 
/* Footer links */
 
.footer-distributed .footer-links{
	color:  #ffffff;
	margin: 20px 0 12px;
}
 
.footer-distributed .footer-links a{
	display:inline-block;
	line-height: 1.8;
	text-decoration: none;
	color:  inherit;
}
 
.footer-distributed .footer-company-name{
	color:  #8f9296;
	font-size: 14px;
	font-weight: normal;
	margin: 0;
}
 
/* Footer Center */
 
.footer-distributed .footer-center{
	width: 35%;
}
 
 
.footer-distributed .footer-center i{
	background-color:  #33383b;
	color: #ffffff;
	font-size: 25px;
	width: 38px;
	height: 38px;
	border-radius: 50%;
	text-align: center;
	line-height: 42px;
	margin: 10px 15px;
	vertical-align: middle;
}
 
.footer-distributed .footer-center i.fa-envelope{
	font-size: 17px;
	line-height: 38px;
}
 
.footer-distributed .footer-center p{
	display: inline-block;
	color: #ffffff;
	vertical-align: middle;
	margin:0;
}
 
.footer-distributed .footer-center p span{
	display:block;
	font-weight: normal;
	font-size:14px;
	line-height:2;
}
 
.footer-distributed .footer-center p a{
	color:  #e0ac1c;
	text-decoration: none;;
}
 
 
/* Footer Right */
 
.footer-distributed .footer-right{
	width: 30%;
}
 
.footer-distributed .footer-company-about{
	line-height: 20px;
	color:  #92999f;
	font-size: 13px;
	font-weight: normal;
	margin: 0;
}
 
.footer-distributed .footer-company-about span{
	display: block;
	color:  #ffffff;
	font-size: 18px;
	font-weight: bold;
	margin-bottom: 20px;
}
 
.footer-distributed .footer-icons{
	margin-top: 25px;
}
 
.footer-distributed .footer-icons a{
	display: inline-block;
	width: 35px;
	height: 35px;
	cursor: pointer;
	background-color:  #33383b;
	border-radius: 2px;
 
	font-size: 20px;
	color: #ffffff;
	text-align: center;
	line-height: 35px;
 
	margin-right: 3px;
	margin-bottom: 5px;
}
 
/* Here is the code for Responsive Footer */
/* You can remove below code if you don't want Footer to be responsive */
 
 
@media (max-width: 880px) {
 
	.footer-distributed .footer-left,
	.footer-distributed .footer-center,
	.footer-distributed .footer-right{
		display: block;
		width: 100%;
		margin-bottom: 40px;
		text-align: center;
	}
 
	.footer-distributed .footer-center i{
		margin-left: 0;
	}
 
}
</style>
