<template>
  <div>
    <b-card v-if="this.isDebug" class="mt-3" header="Debug Data">
      <pre class="m-0">{{ data }}</pre>
    </b-card>
  </div>
</template>

<script>
import { BCard } from 'bootstrap-vue'

export default {
  name: 'DebugData',
  components: {
    BCard,
  },
  props: ["data"],
  computed: {
    isDebug () {
      return this.$store.state.cms.debug
    }
  },
};
</script>