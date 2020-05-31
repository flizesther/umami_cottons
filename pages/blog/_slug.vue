<template>
  <div>{{ post }}</div>
</template>

<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { post: payload };
    else
      return {
        post: await require(`~/assets/content/blog/${params.slug}.json`)
      };
  }
};
</script>

<style>
</style>
