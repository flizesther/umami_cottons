<template>
  <actions-table-form :fields="this.fields" :actions="this.actions"></actions-table-form>
</template>

<script>
  import ActionsTableForm from '~/components/cms/ActionsTableForm';

  export default {
    layout: 'cms',
    data() {
      return {
        fields: [
          { key: 'code', label: 'Code', sortable: true },
          { key: 'title', label: 'Title', sortable: true },
          //{ key: 'actions', label: 'Actions' }
        ],
        actions: {
          list: { enable: true, name: 'cms/getPosts' },
          //edit: { enable: true },
          //new: { enable: true },
          //remove: { enable: true, name: 'cms/deletePost' }
        }
      }
    }
  }
</script>