<template>
  <actions-table-form
    :fields="fields()"
    :collection="collection"
    :actions="actions()"
  ></actions-table-form>
</template>

<script>
import { mapGetters } from 'vuex'
import ActionsTableForm from '~/components/cms/ActionsTableForm'

export default {
  layout: 'cms',
  components: {
    ActionsTableForm,
  },
  asyncData({ params }) {
    const collection = params.collection
    return { collection }
  },
  data() {
    return {
      collection: '',
    }
  },
  computed: {
    ...mapGetters('cms', ['collections']),
  },
  methods: {
    fields() {
      return this.collections[this.collection].fields
    },
    actions() {
      return this.collections[this.collection].actions
    },
  },
}
</script>
