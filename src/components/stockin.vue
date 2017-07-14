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
    <q-tab icon="shopping" route="/stockin" exact replace>In</q-tab>
    <q-tab icon="alarm" route="/stockout" exact replace>Out</q-tab>
    <q-tab icon="help" route="/help" exact replace>help</q-tab>
  </q-tabs>
  <!-- IF USING subRoutes only: -->
  <router-view class="layout-view"></router-view>
  <!-- OR ELSE, IF NOT USING subRoutes: -->
  <div class="layout-padding">

      <blockquote v-if="!hasURLs">
          <small>
            Please Click on the (+) button to scan the item.
          </small>
      </blockquote>
      <div v-else class="list no-border">
          <div class="item two-lines item-delimiter" v-for="(item, id) in itemsInStock">
          
          </div>
      </div>
  <!-- cordova-only -->
   <q-small-fab class="absolute-bottom-right" @click="scanQR()" icon="phonelink_ring"></q-small-fab>
    <!-- <q-fab class=" absolute-bottom-right" classNames="primary" direction="up">
     
    </q-fab> -->

  </div>
  <!-- Footer -->
  <div slot="footer" class="toolbar">
    All right reserved Nano Corporation .
  </div>
  </q-layout>
</template>

<script>
import { Dialog, Toast } from 'quasar'

export default {
  mounted(){
    console.log(window.cordova);
  },
  data(){

    return {
      hasURLs:false,
      itemsInStock:[]
    }

  },
  methods:{
    scanQR () {
      cordova.plugins.barcodeScanner.scan(
        result => {
          if (result.cancelled) {
            Toast.create('QR code scanning aborted...')
            return
          }
        },
        error => {
          Dialog.create({
            message: 'Failed to scan the QR code: ' + error
          })
        }
      )
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
