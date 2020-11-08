<template>
  <div>
    <b-form-checkbox
      v-model="checked"
      name="check-button"
      switch
      @change="change"
    >
      Debug enable <b>({{ checked }})</b>
    </b-form-checkbox>

    <b-row>
      <b-col>
        <a
          variant="btn btn-block outline-secondary"
          class="mb-3"
          :href="url"
          target="_blank"
        >
          Download all
        </a>
      </b-col>
    </b-row>

    <b-form-file
      v-model="file"
      :state="Boolean(file)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
      accept=".json"
    ></b-form-file>
    <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
  </div>
</template>

<script>
import { BRow, BFormCheckbox, BFormFile } from 'bootstrap-vue'

export default {
  layout: 'cms',
  components: {
    BRow,
    BFormCheckbox,
    BFormFile,
  },
  async asyncData({ store }) {
    const checked = store.state.cms.debug
    const url = await store.dispatch('cms/backup')
    return { checked, url }
  },
  data() {
    return {
      url: '',
      file: null,
      checked: false,
    }
  },
  methods: {
    change(checked) {
      this.$store.dispatch('cms/debug', checked)
    },
  },
}
</script>
