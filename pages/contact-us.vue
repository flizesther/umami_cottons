<template>
  <b-container class="mt-4">
    <h1 class="d-flex justify-content-center">Contáctanos</h1>
    <!-- <div>
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
    </div> -->
    <div class="d-flex justify-content-center">
      <p>Contacta con nosotras mandando un mail:</p>
      <p>umamicottons@gmail.com</p>
    </div>
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

::v-deep .btn-secondary {
  background-color: $umami-pink!important;
}
</style>
