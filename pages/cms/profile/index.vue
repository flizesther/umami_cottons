<template>
  <div>
    <h2>Profile</h2>

    <debug-data :data="user"></debug-data>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DebugData from '~/components/cms/DebugData'

export default {
  layout: 'cms',
  components: {
    DebugData,
  },
  async asyncData({ store }) {
    const user = await store.dispatch('cms/profile', store.state.cms.user)
    return { user }
  },
  data() {
    return {
      user: {},
    }
  },
  computed: {
    ...mapGetters('cms', ['userAuth']),
  },
}
</script>

<style></style>
