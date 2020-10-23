<template>
  <b-row>
    <b-col>
      <a variant="btn btn-block outline-secondary" class="mb-3" :href="this.url" target="_blank">
        Download all
      </a>
    </b-col>
  </b-row>
</template>

<script>
export default {
  layout: 'cms',
  data() {
    return {
      url: ''
    }
  },
  asyncData({ store }) {
    const url =  store.dispatch('cms/backup')
    return { url }
  }
}
</script>
