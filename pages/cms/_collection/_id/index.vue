<template>
  <collection-form :item="this.item" :collection="this.collection" :collectionPath="this.collectionPath" :edit="this.isEdit()"></collection-form>
</template>

<script>
  import CollectionForm from "~/components/cms/CollectionForm";

  export default {
    layout: 'cms',
    name: "itemCollection",
    components: { CollectionForm },
    data(){
      return {
        collection: '',
        collectionPath: '',
        item: {},
        edit: false
      }
    },
    async asyncData({store, params, query}) {
      const collection = params.collection
      const collectionPath = '/cms/' + collection
      const edit = query && query.action == 'edit'
      const item = await store.dispatch('cms/show', { collection: collection, code: params.id })
      return { collection, collectionPath, item, edit }
    },
    methods: {
      isEdit(){
        return this.edit
      }
    }
  }
</script>