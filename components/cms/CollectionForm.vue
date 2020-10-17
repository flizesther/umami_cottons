<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-row align-h="end">
        <b-col class="text-right">
          <b-btn variant="outline-secondary" class="mb-3" :to="this.collectionPath" >
            Back
          </b-btn>
        </b-col>
      </b-row>

      <b-form-group id="input-group-1" label="Code:" 
        label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="item.code"
          required
          placeholder="Enter code"
          :readonly="!isEdit()"
        ></b-form-input>
      </b-form-group>

      <b-form-group 
        id="input-group-2" 
        label="Name:" 
        label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="item.name"
          required
          placeholder="Enter name"
          :readonly="!isEdit()"
        ></b-form-input>
      </b-form-group>

      <b-form-group 
        id="input-group-3" 
        label="Description:" 
        label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="item.mainDescription"
          placeholder="Enter description"
          :readonly="!isEdit()"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" v-if="isEdit()">Save</b-button>
      <b-button type="reset" variant="danger" v-if="isEdit()">Reset</b-button>
    </b-form>

    <debug-data :data="item"></debug-data>

  </div>
</template>

<script>
  import { Factory } from "~/infrastructure/util/Factory";
  import { DebugData } from "~/components/cms/DebugData";

  export default {
    props: {
      item: Object,
      edit: Boolean,
      collection: String,
      collectionPath: String
    },
    data() {
      return {
        show: true
      }
    },
    methods: {
      isEdit(){
        return this.edit
      },
      async onSubmit(evt) {
        evt.preventDefault()

        await this.$store.dispatch('cms/edit', { collection: this.collection, data: this.item.toJSON() });
        this.$router.push(this.collectionPath);
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.item = Factory.new(this.collection, { code: this.item.code })
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>