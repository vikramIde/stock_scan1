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

      <blockquote v-if="!hasITEMS">
          <small>
            Please Click on the (+) button to scan the item.
          </small>
      </blockquote>
      <div v-else class="list no-border">
          <div class="item two-lines item-delimiter" v-for="(item, id) in itemsInStock">
          
          </div>
      </div>
  <!-- cordova-only -->
   
    <q-fab class=" absolute-bottom-right" classNames="primary" direction="up">
     <q-small-fab class="absolute-bottom-right" @click.native="scanQR()" icon="phonelink_ring"></q-small-fab>
    </q-fab>
    <!-- <button class="grey push small" @click.native="scanQR()">
            run console.log(cordova)
           
          </button> -->
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
    console.log(this.$cordova);
  },
  data(){

    return {
      urls:false,
      itemsInStock:[]
    }

  },
  methods:{
    scanQR () {

      cordova.plugins.barcodeScanner.scan(
        function (result) {
            // alert("We got a barcode\n" +
            //       "Result: " + result.text + "\n" +
            //       "Format: " + result.format + "\n" +
            //       "Cancelled: " + result.cancelled);
            this.itemsInStock.push(result);
        },
        function (error) {
            alert("Scanning failed: " + error);
        },
        {
            preferFrontCamera : false, // iOS and Android
            showFlipCameraButton : true, // iOS and Android
            showTorchButton : true, // iOS and Android
            torchOn: false, // Android, launch with the torch switched on (if available)
            prompt : "Place a barcode inside the scan area", // Android
            resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
            // formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
            // orientation : "prtrait", // Android only (portrait|landscape), default unset so it rotates with the device
            disableAnimations : true, // iOS
            disableSuccessBeep: false // iOS
        }
     );
    },
    testMethod () {
        console.log('console.log(cordova): %O', cordova.plugins.barcodeScanner);
    }
  },
  computed: {
    hasITEMS () {
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
