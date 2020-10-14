<template>
    <div>
      <b-modal
        :id="name"
        ref="modal"
        title="New"
        v-model="localShow"
        @show="reset"
        @hidden="cancel"
        @ok="process"
        centered
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group
            :state="itemToNewState.code"
            label="Code"
            label-for="code-input"
            invalid-feedback="Code is required"
          >
            <b-form-input
              id="code-input"
              v-model="itemToNew.code"
              :state="itemToNewState.code"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            :state="itemToNewState.name"
            label="Name"
            label-for="name-input"
            invalid-feedback="Name is required"
          >
            <b-form-input
              id="name-input"
              v-model="itemToNew.name"
              :state="itemToNewState.name"
              required
            ></b-form-input>
          </b-form-group>
        </form>
      </b-modal>
    </div>
</template>


<script>
  export default {
    layout: 'cms',
    props: ['show'],
    data() {
      return {
        name: 'new-item',
        localShow: this.show,
        itemToNew: {
          code: '',
          name: ''
        },
        itemToNewState: {
          code: null,
          name: null
        }
      }
    },
    watch: {
     show (newValue) {
       this.localShow = newValue
     }
    },
    methods: {
      checkFormValidity() {
        this.itemToNewState.code = this.$refs.form[0].checkValidity()
        this.itemToNewState.name = this.$refs.form[1].checkValidity()
        return this.itemToNewState.code && this.itemToNewState.name
      },
      reset() {
        this.itemToNew = {
          code: '',
          name: ''
        }
        this.itemToNewState = {
          code: null,
          name: null
        }
      },
      cancel() {
        this.reset()
        this.$emit('cancel')
      },
      process(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()

        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // New
        this.$emit('ok', this.itemToNew)

        this.$nextTick(() => {
          this.$bvModal.hide(this.name)
        })
      }
    }
  }
</script>