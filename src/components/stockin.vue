<template>
  <q-layout>
     <!-- Header -->
  <div slot="header" class="toolbar">
    <q-toolbar-title :padding="1">
      Scan Stock (beta)
    </q-toolbar-title>
  </div>
  <!-- Navigation Tabs -->
  <q-tabs slot="navigation">
    <q-tab icon="alarm" route="/stockin" exact replace>In</q-tab>
    <q-tab icon="alarm" route="/stockout" exact replace>Out</q-tab>
    <q-tab icon="help" route="/help" exact replace>help</q-tab>
  </q-tabs>
  
  <div class="layout-padding">
      
      <p class="caption">Qr Details</p>

      <blockquote v-if="!hasITEMS">
          <small>
            Please Click on the (+) button to scan the item.
          </small>
      </blockquote>
      <div v-else class="list striped" style="overflow:scroll;width:95%">
          <div class="item two-lines item-delimiter" v-for="(item, id) in itemsInStock">
            <div class="item-primary bg-primary text-white"><i>assignment</i></div> <div class="item-content has-secondary"><div>{{item.name}}</div> <div>{{item.code}}</div></div> <i class="item-secondary">dustbin</i>

              <div class="item-secondary">
                <i :ref="'target' + id">
                  more_vert
                </i>

                <q-popover :ref="'popover' + id">
                  <div class="list">
                    <div class="item item-link" @click="$refs['popover' + id][0].close(), editProduct(id)">
                      <i class="item-primary">edit</i>
                      <div class="item-content">Edit</div>
                    </div>
                    <div class="item item-link" @click="$refs['popover' + id][0].close(), deleteProduct(id)">
                      <i class="item-primary">delete</i>
                      <div class="item-content">Delete</div>
                    </div>
                  </div>
                </q-popover>
              </div>
          </div>

      </div>
      </div>
    <q-fab class=" absolute-bottom-right" classNames="primary" direction="up">
     <q-small-fab class="absolute-bottom-right" @click.native="scanQR()" icon="phonelink_ring"></q-small-fab>
    </q-fab>
  </div>
  <!-- Footer -->
  <div slot="footer" class="toolbar">
    All right reserved Nano Corporation .
  </div>
  </q-layout>
</template>

<script>
import { Dialog, Toast } from 'quasar'
import store from './product-store'

function addProduct (name,code) {
  let id = Math.random().toString(36).substr(2, 9)

  store.set(id, {name,code})
  Toast.create.positive('Product added')
}

export default {
  mounted(){
    // console.log(this.$cordova);
  },
  data(){

    return {
      urls:false,
      itemsInStock:store.state,
      product:{
        name:'',
        id:''
      },
    }

  },
  methods:{
    scanQR () {
      var that = this;
      cordova.plugins.barcodeScanner.scan( 
        function (result) {
            addProduct("randomName",result.text);
        },
        function (error) {
            alert("Scanning failed: " + error);
        },
        {
            preferFrontCamera : false, // iOS and Android
            showFlipCameraButton : true, // iOS and Android
            showTorchButton : true, // iOS and Android
            torchOn: false, 
            prompt : "Place a barcode inside the scan area", // Android
            resultDisplayDuration: 500
        }
     );
    },
    testMethod () {
        console.log(this.itemsInStock);
    },
    editProduct (id) {
      var item = store.state[id]
      var that = this;
      Dialog.create({
        title: 'Edit Product',
        message: '',
        form: {
          name: {
            type: 'textbox',
            label: 'Name',
            model: item.name
          },
          id: {
            type: 'textbox',
            label: 'id',
            model: item.id
          }
        },
        buttons: [
          'Cancel',
          {
            label: 'Save',
            preventClose: true,
            handler (data, close) {
              console.log(data);
              if (!data.name.length) {
                Toast.create.warning('Please fill in a name')
                return
              }
              if (!data.id.length) {
                Toast.create.warning('Please fill in a id')
                return
              }

              close()
              store.set(id, {
                name: data.name,
                id: data.id
              })
            }
          }
        ]
      })
    },
    deleteProduct (id) {
      var that = this;
      Dialog.create({
        title: 'Confirm',
        message: `
          Are you sure you want to delete the following entry?<br><br>
          <strong>${this.itemsInStock[id].name}</strong> - <em>${this.itemsInStock[id].code}</em>
        `,
        buttons: [
          'Cancel',
          {
            label: 'Delete',
            handler () {
              store.del(id)
              Toast.create.positive('Product removed')
            }
          }
        ]
      })
    }
  },
  computed: {
    hasITEMS () {
      console.log('After setting :'+this.itemsInStock);
      // alert(store.state);
      return Object.keys(this.itemsInStock).length > 0
    }
  }
}
</script>

<style lang="stylus">
.logo-container
  width 192px
  height 268px
  perspective 800px
  position absolute
  top 50%
  left 50%
  transform translateX(-50%) translateY(-50%)
.logo
  position absolute
  transform-style preserve-3d
</style>
