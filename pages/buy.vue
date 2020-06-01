<template>
  <b-container-fluid>
    <div class="d-flex flex-column my-4">
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
  width: 700px;
  margin:auto;
}
.screen-width {
  width:1000px;
  display:flex;
  justify-content: center;
}
footer{
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
