<template>
  <b-row>
    <b-col>
      <b-btn variant="outline-success" class="mb-3" :to="`${path}/new`" v-if="actionNewEnable()">
        New
      </b-btn>
      <b-btn variant="outline-secondary" class="mb-3" @click="getItems" v-if="actionListEnable()">
        Refresh
      </b-btn>
      <b-table striped hover :items="items" :fields="fields" :busy="isLoading" v-if="actionListEnable()">
        
        <template v-slot:cell(code)="data">
          <router-link :to="`${path}/${data.item.code}`">{{data.item.code}}</router-link>
        </template>
        
        <template v-slot:cell(name)="data">
          {{data.item.name}}
        </template>
        
        <template v-slot:cell(mainDescription)="data">
          {{data.item.mainDescription}}
        </template>

        <template v-slot:cell(test)="data">
          {{data.item.test}}
        </template>

        <template v-slot:cell(actions)="data">
          <b-btn variant="outline-primary" v-if="actionEditEnable()">
            <router-link :to="`${path}/${data.item.code}/edit`">edit</router-link>
          </b-btn>
          &nbsp;
          <b-btn variant="outline-secondary" @click="itemCodeToRemove = data.item.code" v-b-modal.confirmRemove v-if="actionRemoveEnable()">
            remove
          </b-btn>
        </template>

        <template v-slot:table-caption>Total: <strong>{{ totalItems() }}</strong></template>

        <template v-slot:table-busy>
          <div class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong>Loading...</strong>
          </div>
        </template>

      </b-table>
      
      <b-modal id="confirmRemove" title="Remove" @ok="remove" v-if="actionRemoveEnable()">
        remove data with code "{{ itemCodeToRemove }}" confirm?
      </b-modal>

      <debug-data :data="items"></debug-data>

    </b-col>
  </b-row>
</template>

<script>
  import DebugData from "~/components/cms/DebugData";

  export default {
    layout: 'cms',
    props: ['fields', 'actions'],
    data() {
      return {
        path : this.$route.path,
        items: [],
        itemCodeToRemove: '',
        isLoading: false
      }
    },
    async fetch() {
        await this.getItems()
    },
    methods: {
      async getItems(){
        this.isLoading = true
        if(this.actionListEnable()){
            this.items = await this.$store.dispatch(this.actions.list.name)
        }
        this.isLoading = false
      },
      async remove() {
        this.isLoading = true
        if(this.actionRemoveEnable()){
            await this.$store.dispatch(this.actions.remove.name, {code: this.itemCodeToRemove})
            this.getItems()
        }
        this.isLoading = false
      },
      //refresh() {
      //  this.$nuxt.refresh()
      //},
      actionListEnable(){
        return this.actions && this.actions.list && this.actions.list.enable && this.actions.list.name
      },
      actionEditEnable(){
        return this.actions && this.actions.edit && this.actions.edit.enable
      },
      actionNewEnable(){
        return this.actions && this.actions.new && this.actions.new.enable
      },
      actionRemoveEnable(){
        return this.actions && this.actions.remove && this.actions.remove.enable && this.actions.remove.name
      },
      totalItems(){
        return this.items.length
      }
    }
  }
</script>