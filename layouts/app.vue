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
    Footer,
  },
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'merlodAutre';
  src: url('../assets/fonts/MerlodAutre-Regular.otf');
}

/* @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&display=swap'); */

.app * {
  font-family: 'merlodAutre';
}

.app a {
  color: $dark-grey;
}
</style>
