<template>
  <div>
    <navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import Footer from '@/components/Footer'
export default {
  components: {
    navbar,
    Footer
  },
  created () {
    this.$store.dispatch('getProducts')
    this.$store.dispatch('getTest')
  }
}
</script>

<style lang="scss">

</style>
