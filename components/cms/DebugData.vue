<template>
  <div>
    <b-card class="mt-3" header="Debug Data">
      <pre class="m-0">{{ data }}</pre>
    </b-card>
  </div>
</template>

<script>
  import { DEBUG_ENABLE } from '~/infrastructure/config'

  export default {
    props: ['data'],
    methods: {
      isEnable(){
        return DEBUG_ENABLE;
      }
    }
  }
</script>