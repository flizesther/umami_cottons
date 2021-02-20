<template>
    <footer class="footer-distributed d-flex justify-content-center">
        <div class="footer-left">
            <h3>Umami Cottons</h3>
            <a href="/">
                <img class="d-lg-none d-block w-25 mx-auto pt-3" src="/images/logoUC.jpg">
            </a>
            <p class="footer-links">
                <a href="/productos">Nuestros Productos</a>
                <a href="/sobre-umami">Sobre Umami</a>
                <a href="/packs">Nuestros Packs</a>
                <a href="/comprar">Cómo comprar?</a>
                <a href="/contacta">Contáctanos</a>
            </p>
        </div>
        <div class="footer-center">
            <div class="d-flex justify-content-center">
                <a href="/">
                <img class="d-none d-lg-block logo-desktop" src="/images/logoUC.jpg">
                </a>
            </div>
        <div class="d-lg-flex justify-content-center mx-auto py-4 d-none">Síguenos en:</div>
            <div class="footer-icons d-flex justify-content-center mx-auto">
                <a href="https://www.facebook.com/pg/umamicottons/community/?mt_nav=0&msite_tab_async=0">
        <fa :icon="['fab', 'facebook-square']" />
        </a>
                <a href="https://www.instagram.com/umami_cottons/?hl=es">
        <fa :icon="['fab', 'instagram']" />
        </a>
            </div>
    <p class="footer-company-name d-flex justify-content-center">© 2020 Umami Cottons Company.</p>
        </div>
        <div class="footer-right d-none d-lg-block">
            <p class="footer-company-about">
            <span>About the company</span>
            <p class="d-none d-lg-block"> Síguenos en:</p>
        <div>
                <i class="fa fa-envelope"></i>
                <p><a href="mailto:umamicottons@gmail.com">umamicottons@gmail.com</a></p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@font-face {
  font-family: "merlodAutre";
  src: url("../assets/fonts/MerlodAutre-Regular.otf");
}
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&display=swap');
* {
  font-family: "merlodAutre";
}
.btn-secondary {
    color: $white;
    background-color: $light-grey;
    border-color: $grey;
}
a {
    color: $dark-grey;
}

.mascarilla {
  border: 15px solid $white;
}
footer{
	bottom: 0;
}
 
@media (max-height:800px){
	footer { position: static; }
	header { padding-top:40px; }
}
.logo-desktop {
    height: 180px;
}
 
.footer-distributed {
	box-sizing: border-box;
	width: 100%;
	text-align: left;
	font: bold 16px sans-serif;
	padding: 50px 50px 60px 50px;
  padding-top: 80px;
  & a {
    color: $umami-pink;
  }
  @media (max-width: 880px) {
      flex-direction: column;
  }
}
 
.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right{
	display: inline-block;
	vertical-align: top;
}
 
/* Footer left */
 
// .footer-distributed .footer-left{
// 	width: 30%;
// }
 
.footer-distributed h3{
	color:  $black;
	font: normal 36px;
	margin: 0;
}
 
/* The company logo */
 
// .footer-distributed .footer-left img{
// 	width: 30%;
// }
 
/* Footer links */
 
.footer-distributed .footer-links{
	color:  $grey;
	margin: 20px 0 12px;
    display:flex;
    flex-direction: column;
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
	color: $grey;
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
	text-decoration: none;
}
 
 
/* Footer Right */
 
// .footer-distributed .footer-right{
// 	width: 30%;
// }
 
.footer-distributed .footer-company-about{
	line-height: 20px;
	color:  $grey;
	font-size: 13px;
	font-weight: normal;
	margin: 0;
}
 
.footer-distributed .footer-company-about span{
	display: block;
	color:  $dark-grey;
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
	color: $dark-grey;
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
		text-align: center;
	}
 
	.footer-distributed .footer-center i{
		margin-left: 0;
	}
 
}

/* demo css */
html,body {
    margin:0;
}

.title-container {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}

.title {
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
    box-shadow:0px 1px 3px 0px $dark-grey;
}

.filter:hover {
    background:$light-grey;
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
    box-shadow: 0px -4px 3px 0px $dark-grey;
    justify-content:center;
    align-items:center;
    background-color: $white;
/*  box-shadow:0px -3px 3px #484848a6; */
}

.project {
    transition: all .35s ease-in-out;
    margin:10px;
    box-shadow:0px 2px 8px $light-grey;
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
        linear-gradient(to bottom, $umami-pink 0%,$umami-pink 1%,$black 100%), 
        linear-gradient(to top, $umami-pink 0%,$umami-pink 1%,$black 100%);
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