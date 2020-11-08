<template>
  <collection-form
    :item="item"
    :collection="collection"
    :collection-path="collectionPath"
    :edit="isEdit()"
  ></collection-form>
</template>

<script>
import CollectionForm from '~/components/cms/CollectionForm'

export default {
  layout: 'cms',
  name: 'ItemCollection',
  components: {
    CollectionForm,
  },
  async asyncData({ store, params, query }) {
    const collection = params.collection
    const collectionPath = '/cms/' + collection
    const edit = query && query.action === 'edit'
    const result = await store.dispatch('cms/show', {
      collection,
      code: params.id,
    })
    const item = result.status === 200 ? result.data : {}
    return { collection, collectionPath, item, edit }
  },
  data() {
    return {
      collection: '',
      collectionPath: '',
      item: {},
      edit: false,
    }
  },
  methods: {
    isEdit() {
      return this.edit
    },
  },
}
</script>
