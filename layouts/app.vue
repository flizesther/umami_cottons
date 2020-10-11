<template>
  <main class="app">
    <navbar />
    <nuxt />
    <Footer />
  </main>
</template>

<script>
import navbar from '@/components/navbar'
import Footer from '@/components/Footer'
export default {
  components: {
    navbar,
    Footer
  }
}
</script>

<style lang="scss" scoped>

@font-face {
  font-family: "merlodAutre";
  src: url("../assets/fonts/MerlodAutre-Regular.otf");
}

.app * {
  font-family: "merlodAutre";
  background-color: $light-grey;
}

.app a {
  color: $dark-grey;
}

</style>