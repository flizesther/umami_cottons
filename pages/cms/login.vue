<template>
  <b-container fluid class="footer-pad">
    <b-row class="h-60" align-h="center" align-v="center">
      <b-col sm="12" lg="6">
        <login></login>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import Login from '~/components/cms/Login.vue'
  import { mapGetters } from  'Vuex'

  export default {
    components: { Login }
  }
</script>

<style scoped>
  .h-60 {
    height: 60vh;
  }
</style>