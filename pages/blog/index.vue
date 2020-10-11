<template>
  <div>
    <div v-for="post in posts" :key="post.code">
      <nuxt-link :to="`/blog/${post.code}`">{{ post.title }}</nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  layout: 'app',
  computed: {
    ...mapState({
      posts: state => state.posts
    })
  }
};
</script>
