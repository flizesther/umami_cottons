<template>

<span>TEST: {{ test }}</span>

</template>

<script>
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: "Test"
    };
  },
  computed: {
    ...mapState(['test'])
  }
};
</script>

<style lang="scss" scoped>

</style>
