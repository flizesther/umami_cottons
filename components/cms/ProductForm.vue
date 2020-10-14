<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-row align-h="end">
        <b-col class="text-right">
          <b-btn variant="outline-secondary" class="mb-3" :to="'/cms/products'" >
            Back
          </b-btn>
        </b-col>
      </b-row>

      <b-form-group id="input-group-1" label="Code:" 
        label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="product.code"
          required
          placeholder="Enter code"
          :readonly="isUpdate()"
        ></b-form-input>
      </b-form-group>

      <b-form-group 
        id="input-group-2" 
        label="Name:" 
        label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="product.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group 
        id="input-group-3" 
        label="Description:" 
        label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="product.mainDescription"
          placeholder="Enter description"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">{{ this.isUpdate() ? 'update' : 'save' }}</b-button>
      <b-button type="reset" variant="danger">reset</b-button>
    </b-form>

    <debug-data :data="product"></debug-data>

  </div>
</template>

<script>
  import DebugData from "~/components/cms/DebugData";
  import { Product } from '~/infrastructure/domain/Product'

  export default {
    props: {
      product: Object,
      update: Boolean,
    },
    data() {
      return {
        show: true
      }
    },
    methods: {
      isUpdate(){
        return this.update
      },
      async onSubmit(evt) {
        evt.preventDefault()
        let action = 'cms/' + (this.isUpdate() ? 'update' : 'create') + 'Product';
        await this.$store.dispatch(action, this.product.toJSON());
        this.$router.push('/cms/products');
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.product = new Product({code: this.product.code})
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>