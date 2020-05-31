<template>
  <b-container>
    <h1 class="d-flex justify-content-center">Nuestro equipo</h1>
    <p class="d-flex justify-content-center text-center">El responsable de esta aventura tiene un nombre, Simón. Como mamá primeriza había mil cosas que han sido un auténtico descubrimiento. Entre otras, nadie me había explicado lo enternecedor, divertido y a la vez complicado que era bañar a un recién nacido. Con esta idea revoloteando en mi cabeza, puse mis manos, mi cabeza y mi lápiz a pensar en un patrón, solo hizo poner una pizca de amor y surgió la "upenda" que significa "amor" en swailii. Así comenzó esta idea loca pero llena de pasión que quiero compartir con todos vosotros.

Esta idea, la compartí con mi amiga Esther, a la que conocí en un viaje maravilloso en las tierras vikingas de Bergen (Noruega) y fue compartirlo con ella, cuando muchas ideas más empezaron a surgir.

Por supuesto, Valentina, no puede faltar en las personas que formamos umami_cottons. Sus consejos son sabios y sus manos son pura habilidad y amor. Cose como si todo fuera sencillo, como si lo hubiera hecho toda la vida... esperad!... lo que lleva haciendo toda la vida, es por eso que la sabiduría y la experiencia hacen que las prendas umami_cottons estén cosidas tan bien y con tanta delicadeza!

Las tres tenemos la misma ilusión, hacer la vida de la mamá/ el papá y el bebé más sencilla, más bonita y con más disfrute. y cómo se puede hacer? Teniendo las mejores telas del mercado: 100% algodón con el diseño más divertido y original, el modelo mas adaptable a tus necesidades y hechas con sentido, con amor y con paciencia.

Queremos que la experiencia de tener un peque sobre tus brazos esté acompañado de lo mejor. Esto lo comprobarás, cuando tengas tu prenda de umami cottons,

anímate y pide ya el tuyo!</p>
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
  </b-container>
</template>

<script>
export default {
  head() {
    return {
      title: "Sobre nosotros"
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
	color:  #212529;
	font: normal 36px;
	margin: 0;
}
 
/* The company logo */
 
.footer-distributed .footer-left img{
	width: 30%;
}
 
 
/* Footer links */
 
.footer-distributed .footer-links{
	color:  #8f9296;
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
	color: #8f9296;
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
	color: #8f9296;
	vertical-align: middle;
	margin:0;
}
 
.footer-distributed .footer-center p span{
	display:block;
	font-weight: normal;
	font-size:14px;
	line-height:2;
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
	color:  #8f9296;
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
	color: #8f9296;
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
