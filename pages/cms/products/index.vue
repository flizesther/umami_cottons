<template>
  <b-row>
    <b-col>
      <b-btn variant="outline-success" class="mb-3" :to="'/cms/products/new'">
        New product
      </b-btn>
      <b-btn variant="outline-secondary" class="mb-3" @click="refresh">
        Refresh
      </b-btn>
      <b-table striped hover :items="products" :fields="fields">
        <template v-slot:cell(code)="data">
          <router-link :to="`/cms/products/${data.item.code}`">{{data.item.code}}</router-link>
        </template>
        <template v-slot:cell(name)="data">
          {{data.item.name}}
        </template>
        <template v-slot:cell(mainDescription)="data">
          {{data.item.mainDescription}}
        </template>
        <template v-slot:cell(actions)="data">
          <b-btn variant="outline-primary">
            <router-link :to="`/cms/products/${data.item.code}/edit`">edit</router-link>
          </b-btn>
          &nbsp;
          <b-btn variant="outline-secondary" @click="productCodeToDelete = data.item.code" v-b-modal.confirmDestroy>
            remove
          </b-btn>
        </template>
      </b-table>
      
      <b-modal id="confirmDestroy" title="Remove product" @ok="destroy">
        remove product with code "{{ productCodeToDelete }}" confirm?
      </b-modal>

      <debug-data :data="products"></debug-data>

    </b-col>
  </b-row>
</template>

<script>
  import DebugData from "~/components/cms/DebugData";

  export default {
    layout: 'cms',
    data() {
      return {
        products: [],
        productCodeToDelete: '',
        fields: [
          {
            key: 'code',
            label: 'Code',
            sortable: true,
          },
          {
            key: 'name',
            label: 'Name',
            sortable: true,
          },
          {
            key: 'mainDescription',
            label: 'Description',
            sortable: true,
          },
          {
            key: 'actions',
            label: 'Actions'
          }
        ]
      }
    },
    async asyncData({store}) {
      const products = await store.dispatch('cms/getProducts')
      return { products }
    },
    methods: {
      async destroy() {
        await this.$store.dispatch('cms/deleteProduct', {code: this.productCodeToDelete})
        this.refresh()
      },
      refresh() {
        this.$nuxt.refresh()
      }
    }
  }
</script>