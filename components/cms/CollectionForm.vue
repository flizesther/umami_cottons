<template>
  <div>
    <b-form v-if="show" @submit="onSubmit" @reset="onReset">
      <b-row align-h="end">
        <b-col class="text-right">
          <b-btn variant="outline-secondary" class="mb-3" :to="collectionPath"> Back </b-btn>
        </b-col>
      </b-row>

      <b-form-group id="input-group-1" label="Code:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="item.code"
          required
          placeholder="Enter code"
          :readonly="!isEdit()"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="item.name"
          required
          placeholder="Enter name"
          :readonly="!isEdit()"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Description (main):" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="item.mainDescription"
          placeholder="Enter description"
          :readonly="!isEdit()"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Fabrics:">
        <b-form-checkbox-group
          id="checkbox-group-1"
          v-model="selected"
          :options="options"
          name="flavour-1"
          switches
        ></b-form-checkbox-group>
      </b-form-group>

      <div id="select-media">
        <b-form-group label="Autocomplte select:">
          <v-select v-model="selectedMedia" :options="files" label="fullPath" multiple>
            <template v-slot:option="option">
              <div class="row">
                <div class="col-1">
                  <b-img-lazy :src="option.url" width="60" height="60" rounded alt="Responsive image"></b-img-lazy>
                </div>
                <div class="col-11" style="margin: 0">
                  <h3>{{ option.name }}</h3>
                  <em>{{ option.fullPath }}</em>
                </div>
              </div>
            </template>

            <template v-slot:selected-option="option">
              <div class="row">
                <div class="col-1 selected">
                  <b-img-lazy :src="option.url" width="60" height="60" rounded alt="Responsive image"></b-img-lazy>
                </div>
                <div class="col-11" style="margin: 0">
                  <h3>{{ option.name }}</h3>
                  <em>{{ option.fullPath }}</em>
                </div>
              </div>
            </template>
          </v-select>
        </b-form-group>
      </div>

      <b-button v-if="isEdit()" type="submit" variant="primary">Save</b-button>
      <b-button v-if="isEdit()" type="reset" variant="danger">Reset</b-button>
    </b-form>

    <debug-data :data="itemDebug"></debug-data>
  </div>
</template>

<script>
import DebugData from '~/components/cms/DebugData'

export default {
  components: {
    DebugData,
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    edit: {
      type: Boolean,
      default: false,
    },
    collection: {
      type: String,
      default: '',
    },
    collectionPath: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      show: true,
      selected: [], // Must be an array reference!
      options: [
        { text: 'Orange', value: 'orange' },
        { text: 'Apple', value: 'apple' },
        { text: 'Pineapple', value: 'pineapple' },
        { text: 'Grape', value: 'grape' },
      ],
      selectedMedia: null,
      files: [],
    }
  },
  computed: {
    itemDebug() {
      return {
        ...this.item,
        categories: this.selected,
        media: this.selectedMedia,
      }
    },
  },
  async mounted() {
    await this.loadFiles()
  },
  methods: {
    async loadFiles() {
      const result = await this.$store.dispatch('cms/files')
      this.files = result.status === 200 ? result.data : []
    },
    isEdit() {
      return this.edit
    },
    async onSubmit(evt) {
      evt.preventDefault()

      await this.$store.dispatch('cms/edit', {
        collection: this.collection,
        data: this.item,
      })
      this.$router.push(this.collectionPath)
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.item = { code: this.item.code }
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>

<style scoped>
#select {
  max-width: 30em;
  margin: 1em auto;
}

#select-media .selected img {
  width: 60px;
  height: 60px;
}

#select-media .dropdown li {
  border-bottom: 1px solid rgba(112, 128, 144, 0.1);
}

#select-media .dropdown li:last-child {
  border-bottom: none;
}

#select-media .dropdown li a {
  padding: 10px 20px;
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 1.25em;
}

#select-media .dropdown li a .fa {
  padding-right: 0.5em;
}
</style>
