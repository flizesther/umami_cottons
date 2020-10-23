<template>
  <b-row>
    <b-col>
      
      <b-btn variant="outline-success" class="mb-3" @click="showNew" v-if="actionNewEnable()">
        New
      </b-btn>
      
      <b-btn variant="outline-secondary" class="mb-3" @click="getItems" v-if="actionListEnable()">
        Refresh <strong>{{ totalItems() }}</strong>
      </b-btn>
       
      <b-table id="table" 
        striped 
        hover 
        :items="items" 
        :fields="fields" 
        :busy="isLoading" 
        :per-page="perPage"
        :current-page="currentPage" 
        v-if="actionListEnable()">
        
        <template v-slot:cell(code)="data">
          <router-link v-if="actionShowEnable()" :to="`${path}/${data.item.code}`">{{data.item.code}}</router-link>
          <span v-else>{{ data.item.code }}</span>
        </template>
        
        <template v-slot:cell(name)="data">
          {{data.item.name}}
        </template>
        
        <template v-slot:cell(mainDescription)="data">
          {{data.item.mainDescription}}
        </template>

        <template v-slot:cell(status)="data">
          {{data.item.status}}
        </template>

        <template v-slot:cell(actions)="data">
          <b-btn variant="outline-primary" size="sm" v-if="actionEditEnable()">
            <router-link :to="`${path}/${data.item.code}?action=edit`">edit</router-link>
          </b-btn>
          &nbsp;
          <b-btn variant="outline-secondary" size="sm" @click="itemCodeToRemove = data.item.code" v-b-modal.confirmRemove v-if="actionRemoveEnable()">
            remove
          </b-btn>
          <b-btn variant="outline-success" size="sm" @click="data.toggleDetails" class="mr-2">
            {{ data.detailsShowing ? 'hide' : 'show'}} details
          </b-btn>
        </template>

        <template v-slot:row-details="data">
          <b-card>
            <b-row class="mb-2">
              <b-col sm="2" class="text-sm-right"><b>Description:</b></b-col>
              <b-col>{{ data.item.mainDescription }}</b-col>
            </b-row>

            <b-row class="mb-2">
              <b-col sm="2" class="text-sm-right"><b>Image:</b></b-col>
              <b-col>{{ data.item.mainImage }}</b-col>
            </b-row>
          </b-card>
        </template>

        <template v-slot:table-busy>
          <div class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong>Loading...</strong>
          </div>
        </template>

      </b-table>

      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="table"
      ></b-pagination>
      
      <b-modal id="confirmRemove" title="Remove" @ok="remove" centered v-if="actionRemoveEnable()">
        remove data with code "{{ itemCodeToRemove }}" confirm?
      </b-modal>

      <new-modal-form 
        :show="newModalShow" 
        @cancel="hideNew" 
        @ok="okNew">
      </new-modal-form>

      <debug-data :data="items"></debug-data>

    </b-col>
  </b-row>
</template>

<script>
  import NewModalForm from "~/components/cms/NewModalForm"
  import DebugData from "~/components/cms/DebugData"

  export default {
    layout: 'cms',
    props: ['fields', 'collection', 'actions'],
    data() {
      return {
        path : this.$route.path,
        items: [],
        itemCodeToRemove: '',
        isLoading: false,
        newModalShow: false,
        perPage: 5,
        currentPage: 1,
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    },
    async fetch() {
        await this.getItems()
    },
    methods: {
      async getItems(){
        this.isLoading = true
        if(this.actionListEnable()){
            const result = await this.$store.dispatch('cms/list', { collection: this.collection })
            this.items = result.status == 200 ? result.data : []
            // TODO mostrar algun error
        }
        this.isLoading = false
      },
      async remove() {
        this.isLoading = true
        if(this.actionRemoveEnable()){
            await this.$store.dispatch('cms/remove', { collection: this.collection, code: this.itemCodeToRemove })
            this.getItems()
        }
        this.isLoading = false
      },
      async new(data) {
        this.isLoading = true
        if(this.actionNewEnable()){
            await this.$store.dispatch('cms/new', { collection: this.collection, data: data } )
            this.getItems()
        }
        this.isLoading = false
      },


      actionListEnable(){
        return this.actions && this.actions.list && this.actions.list.enable
      },
      actionShowEnable(){
        return this.actions && this.actions.show && this.actions.show.enable
      },
      actionEditEnable(){
        return this.actions && this.actions.edit && this.actions.edit.enable
      },
      actionNewEnable(){
        return this.actions && this.actions.new && this.actions.new.enable
      },
      actionRemoveEnable(){
        return this.actions && this.actions.remove && this.actions.remove.enable
      },
      totalItems(){
        return this.items.length
      },


      showNew(){
        this.newModalShow = true
      },
      hideNew(){
        this.newModalShow = false
      },
      okNew(event) {
        this.new(event)
      }

    }
  }
</script>