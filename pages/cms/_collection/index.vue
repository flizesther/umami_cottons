<template>
  <actions-table-form :fields="this.fields()" :collection="this.collection" :actions="this.actions()"></actions-table-form>
</template>

<script>
  import { mapGetters } from  'vuex'
  import ActionsTableForm from '~/components/cms/ActionsTableForm';

  export default {
    layout: 'cms',
    computed: {
      ...mapGetters('cms', ['collections'])
    },
    data() {
      return {
        collection: '',
      }
    },
    async asyncData({ params }) {
      const collection = params.collection
      return { collection }
    },
    methods: {
      fields() {
        return this.collections[this.collection].fields
      },
      actions() {
        return this.collections[this.collection].actions
      }
    }
  }
</script>