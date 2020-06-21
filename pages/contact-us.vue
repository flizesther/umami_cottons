<template>
  <b-container class="mt-4">
    <h1>Contáctanos</h1>
    <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email:"
        label-for="input-1"
        description="No compartiremos tu email con nadie."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Introduce tu mail"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Tu nombre y apellidos:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Tu nombre y Apellidos"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Prenda:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.prenda"
          :options="prendas"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Es para mi</b-form-checkbox>
          <b-form-checkbox value="that">Es para regalar</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

    <b-button type="submit" class="mb-4 button-color">Enviar</b-button>
    </b-form>
  </div>
    <div class="mt-4">
    <b-card bg-variant="light">
        <b-form-group
        label-cols-lg="2"
        label="Shipping Address"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
        >
        <b-form-group
            label-cols-sm="3"
            label="Calle/nº/piso/escalera:"
            label-align-sm="right"
            label-for="nested-street"
        >
            <b-form-input id="nested-street"></b-form-input>
        </b-form-group>

        <b-form-group
            label-cols-sm="3"
            label="Ciudad:"
            label-align-sm="right"
            label-for="nested-city"
        >
            <b-form-input id="nested-city"></b-form-input>
        </b-form-group>

        <b-form-group
            label-cols-sm="3"
            label="Código Postal/Pais:"
            label-align-sm="right"
            label-for="nested-state"
        >
            <b-form-input id="nested-state"></b-form-input>
        </b-form-group>

        <b-form-group
            label-cols-sm="3"
            label="Alguna otra información:"
            label-align-sm="right"
            label-for="nested-country"
        >
            <b-form-input id="nested-country"></b-form-input>
        </b-form-group>
        <b-form-group
            label-cols-sm="3"
            label="¿Qué quieres poner en la caja?"
            label-align-sm="right"
            label-for="nested-country"
        >
            <b-form-input id="nested-country"></b-form-input>
        </b-form-group>
        <b-form-group
            label-cols-sm="3"
            label="Alguna otra cosa que debamos saber?"
            label-align-sm="right"
            label-for="nested-country"
        >
            <b-form-input id="nested-country"></b-form-input>
        </b-form-group>
        <b-form-group
            label-cols-sm="3"
            label="Envío:"
            label-align-sm="right" class="mb-0"
            description="Recuerda que solo los pedidos que superen los 55 euros serán gratuitos. 5 euros envío nacional - 15 envío internacional"
        >
            <b-form-radio-group
            class="pt-2"
            :options="['Si', 'No']"
            ></b-form-radio-group>
        </b-form-group>
        </b-form-group>
    </b-card>
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
 
				<p class="footer-company-name d-flex justify-content-center">© 2020 Umami Cottons Company.</p>
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
    data() {
      return {
        form: {
          email: '',
          name: '',
          prenda: null,
          checked: []
        },
        prendas: [{ text: 'Selecciona una', value: null }, 'Upenda', 'Meraki', 'Paquete', 'Bandana', 'Muselina', 'Corona', 'Banderolas de cumpleaños', 'Chupetero', 'Prefiero escribir todo lo que quiero en el mail'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
  head() {
    return {
      title: "Contacta con umami_cottons"
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
	background-color:  $grey;
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

// footer fin

::v-deep .btn-secondary {
  background-color: $umami-pink!important;
}
</style>
