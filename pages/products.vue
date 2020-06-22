<template>
  <b-container>
    <div class="container">
      <b-row>
        <b-col lg="3">
          <h1 class="my-4">Productos Umami</h1>
          <fa :icon="['fas', 'chevron-left']" />
          <div class="list-group" v-for="product in filteredProducts" :key="product.category">
            <span class="list-group-item" @click="setFilter(product.category)">
              {{ product.category }}
            </span>
          </div>
          <span class="list-group-item" @click="noFilter()">
              {{ allProducts }}
          </span>
        </b-col>
        <b-col lg="9" class="products-row">
          <b-row>
            <b-col cols="4" v-for="product in filteredProducts" :key="product.category">
              <product :product="product" />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
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
			</div>
			<div class="footer-center">
				<div class="d-flex justify-content-center">
          <img class="w-50" src="/images/logoUC.jpg">
				</div>
        <div class="d-flex justify-content-center mx-auto my-4">Síguenos en:</div>
          <div class="footer-icons d-flex justify-content-center mx-auto">
					<a href="#">
            <fa :icon="['fab', 'facebook-square']" />
          </a>
					<a href="#">
            <fa :icon="['fab', 'instagram']" />
          </a>
				</div>
        <p class="footer-company-name d-flex justify-content-center">© 2020 Umami Cottons Company.</p>
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
import Product from '../components/Product'

export default {
  head() {
    return {
      title: "Nuestros productos"
    };
  },
  components: {
    Product
  },
  data () {
    return {
    allProducts: 'todos',
    currentFilter: 'todos', 
    products: [
      {
        id:1,
        title: "Upenda",
        image: "/images/upenda/upenda-1.jpg",
        category: 'Upenda',
        shortDescription: 'Las Upendas son nuestras toallas, diseñadas para hacer más fácil la vida de papá y mamá',
        price: 35,
        modalDescription1: 'Fueron clave en mi maternidad. Estas toallas miden 80x80cm y son tan útiles porque se colocan al cuello con un fácil snap.',
        modalDescription2: 'Así empiezas a disfrutar de bañar a tu bebé con dos manos, sin que acabes mojada con los chapoteos y secarlo es tan fácil!Solo tienes que coger a tu bebé para abrazarlo y cubrirlo con los laterales de la Upenda para que esté protegido y seco.Además, la Upenda lleva capucha pensando sobretodo en esos primeros meses tan delicados.Las telas son de algodón 100%: una toall suave, y una tela de tu elección para hacer que tu toalla sea personalmente bonita.',
        modalDescription3: 'Si no la tienes es porque aún no la has probado.',
        modalImage: "/images/upenda/upenda-2.jpg"
      },
      {
        id:2,
        title: "Meraki",
        image: "/images/meraki/meraki-1.jpg",
        category: 'Meraki',
        shortDescription: 'Los Meraki son los poncho toallas para niñ@s más originales y gustosos!',
        price: 55,
        modalDescription1: 'Para nosotros, su nombre lo dice todo. Meraki es una palabra que proviene del griego moderno, y signfica "hacer algo con amor y creatividad, poniendo el alma en ello. El Meraki está diseñado para que gracias a su forma de poncho y su abertura amplia en el cuello sea fácil de poner y quitar. Además, hemos incorporado unos snaps laterales para poder ajustar el Meraki al cuerpo, y una amplia capucha para proteger la delicada cabecita de tu pequeñ@',
        modalDescription2: 'Están hechas en Algodón 100% y talla de alta de calidad, y están disponibles en dos tallas:',
        modalDescription3: '- Talla 1: de 1 a 4 años, - Talla 2: de 4 a 7 años',
        modalImage: "/images/meraki/meraki-2.jpg"
      },
      {
        id:3,
        title: "Muselina",
        image: "/images/muselina/muselina-1.jpg",
        category: 'Muselina',
        shortDescription: 'lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum',
        price: 15,
        modalDescription1: 'lorem ipsum',
        modalDescription2: 'lorem ipsum',
        modalDescription3: 'lorem ipsum',
        modalImage: "/images/muselina/muselina-2.jpg"
      },
      ,
      {
        id:4,
        title: "Bandana",
        image: "/images/bandanas/bandana-1.jpg",
        category: 'Bandana',
        shortDescription: 'Adiós a las babas en la ropa!',
        price: 8,
        modalDescription1: 'Las bandanas, nuestras aliadas contra las babas y reflujos de nuestro bebé!',
        modalDescription2: 'Al igual que las upenda, las bandanas son de tela algodón 100% de tu elección y tela toalla por el reverso.Se ponen en el cuello de tu bebé con un fácil snap y hace que tu bebé luzca precios@ a la vez que protege la ropita de ensuciarse.Es una prenda más para llevar cada día, sobretodo si tu bebé está en periodo de salir dientes (habrás notado que produce más baba de lo normal) o si tu bebé tiene reflujos de leche, muy común en periodo de lactancia y bibes.',
        modalDescription3: '',
        modalImage: "/images/bandanas/bandana-2.jpg"
      },
      {
        id:5,
        title: "Sobres",
        image: "/images/sobres/sobre-1.jpg",
        category: 'Sobres',
        shortDescription: 'Uno de nuestros MUST!',
        price: 12,
        modalDescription1: 'Son bolsitas hechas de tela Algodón 100% (a tu elección), forrados y con un snap para el cierre.',
        modalDescription2: 'Antes no sabía que eran, y ahora no puedo salir sin ellos.',
        modalDescription3: 'Nuestros sobres de muda son primero usados para llevar "a salvo" y "bien organizado" las mudas de la primera puesta en el momento del parto, y también las cosas de la futura mamá. Pero luego su utilidad es tan amplia como tu imaginación: llevar la muda en el carro o en tu bolso, pañales, juguetes, tu ropa interior cuando te vas de viaje, y un largo etcétera.',
        modalImage: "/images/sobres/sobre-2.jpg"
      },
      {
        id:6,
        title: "Chupeteros",
        image: "/images/chupetero.jpg",
        category: 'Chupeteros',
        shortDescription: 'Se acabó perder más chupeteros!',
        price: 8,
        modalDescription1: 'Son tan molones, que las mamás y papás nos gustan, pero l@s peques lo adoran!',
        modalDescription2: 'Se acabó perder más chupetes!',
        modalDescription3: 'Cuélgate uno y no me perderás!',
        modalImage: "/images/chupetero.jpg"
      },
      {
        id:7,
        title: "toallitas Ü",
        image: "/images/toallitas-u/toallitas-u-1.jpg",
        category: 'toallitas-u',
        shortDescription: '',
        price: 12,
        modalDescription1: '',
        modalDescription2: '',
        modalDescription3: '',
        modalImage: "/images/toallitas-u/toallitas-u-2.jpg"
      },
      {
        id:8,
        title: "Babero",
        image: "/images/baberos/babero-1.jpg",
        category: 'Babero',
        shortDescription: '',
        price: 35,
        modalDescription1: '',
        modalDescription2: '',
        modalDescription3: '',
        modalImage: "/images/baberos/babero-2.jpg"
      },
      {
        id:9,
        title: "Mascarillas",
        image: "/images/mascarilla/mascarilla-1.jpg",
        category: 'Mascarillas',
        shortDescription: '',
        price: 8,
        modalDescription1: '',
        modalDescription2: '',
        modalDescription3: '',
        modalImage: "/images/mascarilla/mascarilla-2.jpg"
      },
      {
        id:10,
        title: "toalla goma",
        image: "/images/upenda/upenda-11.jpg",
        category: 'toalla-goma',
        shortDescription: '',
        price: 12,
        modalDescription1: '',
        modalDescription2: '',
        modalDescription3: '',
        modalImage: "/images/upenda/upenda-12.jpg"
      },
      {
        id:11,
        title: "toalla-cambiador",
        image: "/images/upenda/upenda-14.jpg",
        category: 'toalla-cambiador',
        shortDescription: '',
        price: 12,
        modalDescription1: '',
        modalDescription2: '',
        modalDescription3: '',
        modalImage: "/images/upenda/upenda-15.jpg"
      },
      {
        id:12,
        title: "cestos-de-algodon",
        image: "/images/cestas.jpg",
        category: 'cestos-de-algodon',
        shortDescription: '',
        price: 35,
        modalDescription1: '',
        modalDescription2: '',
        modalDescription3: '',
        modalImage: "/images/cestas.jpg"
      },
      {
        id:13,
        title: "Banderolas",
        image: "/images/upenda/upenda-2.jpg",
        category: 'Banderolas',
        shortDescription: '',
        price: 35,
        modalDescription1: '',
        modalDescription2: '',
        modalDescription3: '',
        modalImage: "/images/upenda/upenda-2.jpg"
      },
      {
        id:14,
        title: "Corona",
        image: "/images/upenda/upenda-2.jpg",
        category: 'Corona',
        shortDescription: '',
        price: 35,
        modalDescription1: '',
        modalDescription2: '',
        modalDescription3: '',
        modalImage: "/images/upenda/upenda-2.jpg"
      },
      {
        id:15,
        title: "Conjunto cocinero",
        image: "/images/upenda/upenda-2.jpg",
        category: 'Conjunto-cocinero',
        shortDescription: '',
        price: 35,
        modalDescription1: '',
        modalDescription2: '',
        modalDescription3: '',
        modalImage: "/images/upenda/upenda-2.jpg"
      }
    ]
    }
  },
  computed: {
    filteredProducts () {
      return this.products.filter(p => this.currentFilter === 'todos' || p.category.toLowerCase() === this.currentFilter.toLowerCase())
    },
    noFilteredProducts () {
      return this.allProducts = this.products.map(p => p.category.toLowerCase())
    }
  },
  methods: {
    setFilter(filter) {
      this.currentFilter = filter;
    },
    noFilter()  {
      this.allProducts
      // this.allProducts = this.noFilteredProducts
    }
  }
};
</script>

<style lang="scss">

@font-face {
  font-family: "merlodAutre";
  src: url("../assets/fonts/MerlodAutre-Regular.otf");
}
* {
  font-family: "merlodAutre";
}
.btn-secondary {
    color: #fff;
    background-color: #d6d8da;
    border-color: #bfc0c2;
}
a {
    color: #2c292f;
}
.products-row {
  margin-top: 98px;
}
.mascarilla {
  border: 15px solid white;
}
footer{
	bottom: 0;
}
 
@media (max-height:800px){
	footer { position: static; }
	header { padding-top:40px; }
}
 
 
.footer-distributed{
	box-sizing: border-box;
	width: 100%;
	text-align: left;
	font: bold 16px sans-serif;
	padding: 50px 50px 60px 50px;
  padding-top: 80px;
  & a {
    color: $umami-pink;
  }
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
	color:  $black;
	font: normal 36px;
	margin: 0;
}
 
/* The company logo */
 
.footer-distributed .footer-left img{
	width: 30%;
}
 
/* Footer links */
 
.footer-distributed .footer-links{
	color:  $grey;
	margin: 20px 0 12px;
}
 
.footer-distributed .footer-links a{
	display:inline-block;
	line-height: 1.8;
	text-decoration: none;
	color:  inherit;
}
 
.footer-distributed .footer-company-name{
	color:  $grey;
	font-size: 14px;
	font-weight: normal;
	margin: 0;
}
 
/* Footer Center */
 
.footer-distributed .footer-center{
	width: 35%;
}
 
 
.footer-distributed .footer-center i{
	background-color:  $grey;
	color: $grey;
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
	color:  $grey;
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

/* demo css */
html,body {
    margin:0;
    font-family: 'Dawning of a New Day', cursive;
}

.title-container {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}

.title {
    font-family: 'Dawning of a New Day', cursive;
    font-size:30pt;
    font-weight:normal;
}

.project-title {
font-size:16pt  
}

.filter {
    font-family:arial;
    padding: 6px 6px;
    cursor:pointer;
    border-radius: 6px;
    transition: all 0.35s;
}

.filter.active {
    box-shadow:0px 1px 3px 0px #00000026;
}

.filter:hover {
    background:lightgray;
} 

.projects {
    margin-bottom:50px;
    margin-top:25px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
}

.projects-enter {
    transform: scale(0.5) translatey(-80px);
    opacity:0;
}

.projects-leave-to{
    transform: translatey(30px);
    opacity:0;
}

.projects-leave-active {
    position: absolute;
    z-index:-1;
}

.circle {
    text-align:center;
    position:absolute;
    bottom:-38px;
    left:40px;
    width:100px;
    height:100px;
    border-radius:50px;
/*  border:1px solid black; */
    display:flex;
    box-shadow: 0px -4px 3px 0px #494d3257;
    justify-content:center;
    align-items:center;
    background-color:#fff;
/*  box-shadow:0px -3px 3px #484848a6; */
}

.project {
    transition: all .35s ease-in-out;
    margin:10px;
    box-shadow:0px 2px 8px lightgrey;
    border-radius:3px;
    width:180px;
    height:200px;
    display:flex;
    flex-direction:column;
    align-items:center;
}

.project-image-wrapper {
    position:relative;
}

.gradient-overlay {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:150px;
    opacity:0.09;
    background: 
        linear-gradient(to bottom, rgba(0,210,247,0.65) 0%,rgba(0,210,247,0.64) 1%,rgba(0,0,0,0) 100%), 
        linear-gradient(to top, rgba(247,0,156,0.65) 0%,rgba(247,0,156,0.64) 1%,rgba(0,0,0,0) 100%);
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
    border-top-left-radius:3px;
    border-top-right-radius:3px;
}

.project-image {
    width:100%;
    height:150px;
    border-bottom-left-radius:5px;
    border-bottom-right-radius:5px;
    border-top-left-radius:3px;
    border-top-right-radius:3px;
}

::v-deep .btn-secondary {
  background-color: $umami-pink;
}
</style>