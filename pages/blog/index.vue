<template>
  <div>
    <div v-for="post in posts" :key="post.slug">
      <h2>{{ post.title }}</h2>
      <nuxt-link :to="`/blog/${post.slug}`">ver post</nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      posts: state => state.posts
    })
  }
};
</script>

<style>
@font-face {
  font-family: "merlodAutre";
  src: url("../../assets/fonts/MerlodAutre-Regular.otf");
}
* {
  font-family: "merlodAutre";
}
</style>
