<template>
  <div>
    <b-form-checkbox
      v-model="checked"
      name="check-button"
      @change="change"
      switch
    >
      Debug enable <b>({{ checked }})</b>
    </b-form-checkbox>

    <b-row>
      <b-col>
        <a
          variant="btn btn-block outline-secondary"
          class="mb-3"
          :href="this.url"
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
    <div class="mt-3">Selected file: {{ file ? file.name : "" }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  layout: "cms",
  data() {
    return {
      url: "",
      file: null,
      checked: false,
    };
  },
  async asyncData({ store }) {
    const checked = store.state.cms.debug;
    const url = await store.dispatch("cms/backup");
    return { checked, url };
  },
  methods: {
    change(checked) {
      this.$store.dispatch("cms/debug", checked);
    },
  },
};
</script>
