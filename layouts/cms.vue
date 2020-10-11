<template>
  <main class="cms">
    <b-row no-gutters class="mb-3">
      <b-col class="bg-dark">
        <b-navbar toggleable="md" type="dark" variant="dark">
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
          <b-navbar-brand :to="'/cms'">CMS - Umami Cottons</b-navbar-brand>
          <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
              <b-nav-item class="text-white" :to="'/cms/products'">Products</b-nav-item>
              <b-nav-item class="text-white" :to="'/cms/packs'">Packs</b-nav-item>
              <b-nav-item class="text-white" :to="'/cms/fabrics'">Fabrics</b-nav-item>
              <b-nav-item class="text-white" :to="'/cms/categories'">Categories</b-nav-item>
              <b-nav-item class="text-white" :to="'/cms/blog'">Blog</b-nav-item>
              <b-nav-item class="text-white" :to="'/cms/media'">Media</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item class="text-white" :to="'/cms/profile'">{{ userAuth.name }} ({{ userAuth.email }})</b-nav-item>
              <b-nav-item class="text-white" @click="logout">Logout</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-col>
    </b-row>
    <b-container fluid>
      <nuxt/>
    </b-container>
  </main>
</template>
<script>
  import { mapGetters } from  'Vuex'

  export default {
    middleware: ['auth'],
    computed: {
      ...mapGetters('cms', ['userAuth'])
    },
    methods: {
      async logout() {
        await this.$store.dispatch('cms/logout', this.userAuth.toJSON());
        this.$router.push('/cms');
      }
    }
  }
</script>

<style lang="scss" scoped>

.cms * {
  font-family: var(--font-family-sans-serif);
}

</style>
