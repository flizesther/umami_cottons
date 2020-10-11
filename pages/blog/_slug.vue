<template>
  <div>
    <h2>{{ post.title }}</h2>
    <span v-html="post.body"></span>
  </div>
</template>

<script>
import { mapGetters } from  'Vuex'
export default {
  layout: 'app',
  mounted() {
    this.post = this.getPostByCode(this.$route.params.slug)
  },
  computed: {
    ...mapGetters(['getPostByCode'])
  },
  data: () => ({
    post: {}
  })
};
</script>

<style>
</style>
