<template>
  <div>
    <b-card v-if="enable" class="mt-3" header="Debug Data">
      <pre class="m-0">{{ data }}</pre>
    </b-card>
  </div>
</template>

<script>
  export default {
    props: ['data'],
    data: () => {
      return {
        enable: false
      }
    },
    async fetch() {
      this.enable = this.$config.DEBUG_ENABLE
    }
  }
</script>