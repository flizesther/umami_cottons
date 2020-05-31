<template>
  <b-container>
    <h1>Contáctanos</h1>
    <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
    <div>
    <b-card bg-variant="light">
        <b-form-group
        label-cols-lg="3"
        label="Shipping Address"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
        >
        <b-form-group
            label-cols-sm="3"
            label="Street:"
            label-align-sm="right"
            label-for="nested-street"
        >
            <b-form-input id="nested-street"></b-form-input>
        </b-form-group>

        <b-form-group
            label-cols-sm="3"
            label="City:"
            label-align-sm="right"
            label-for="nested-city"
        >
            <b-form-input id="nested-city"></b-form-input>
        </b-form-group>

        <b-form-group
            label-cols-sm="3"
            label="State:"
            label-align-sm="right"
            label-for="nested-state"
        >
            <b-form-input id="nested-state"></b-form-input>
        </b-form-group>

        <b-form-group
            label-cols-sm="3"
            label="Country:"
            label-align-sm="right"
            label-for="nested-country"
        >
            <b-form-input id="nested-country"></b-form-input>
        </b-form-group>

        <b-form-group
            label-cols-sm="3"
            label="Ship via:"
            label-align-sm="right" class="mb-0"
        >
            <b-form-radio-group
            class="pt-2"
            :options="['Air', 'Courier', 'Mail']"
            ></b-form-radio-group>
        </b-form-group>
        </b-form-group>
    </b-card>
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
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
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

<style>
@font-face {
  font-family: "merlodAutre";
  src: url("../assets/fonts/MerlodAutre-Regular.otf");
}
* {
  font-family: "merlodAutre";
}
</style>
