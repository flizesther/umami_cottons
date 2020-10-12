<template>
  <div>
    <b-card class="mt-3" header="Debug Data">
      <pre class="m-0">{{ data }}</pre>
    </b-card>
  </div>
</template>

<script>
  export default {
    props: ['data'],
    methods: {
      isEnable(){
        return this.$config.DEBUG_ENABLE;
      }
    }
  }
</script>