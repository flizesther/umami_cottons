<template>
  <div>
    <h2>Profile</h2>

    <debug-data :data="this.user"></debug-data>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DebugData from "~/components/cms/DebugData";

export default {
  layout: "cms",
  computed: {
    ...mapGetters("cms", ["userAuth"]),
  },
  data() {
    return {
      user: {},
    };
  },
  async asyncData({ store }) {
    const user = await store.dispatch("cms/profile", store.state.cms.user);
    return { user };
  },
};
</script>

<style>
</style>

