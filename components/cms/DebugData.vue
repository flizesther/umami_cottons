<template>
  <div>
    <b-card v-if="this.isDebug" class="mt-3" header="Debug Data">
      <pre class="m-0">{{ data }}</pre>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["data"],
  computed: {
    ...mapGetters("cms", ["isDebug"]),
  },
};
</script>