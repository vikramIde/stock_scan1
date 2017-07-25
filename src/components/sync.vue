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
    <q-tab icon="help" route="/sync" exact replace>sync</q-tab>
  </q-tabs>
  <!-- IF USING subRoutes only: -->
  <!-- <router-view class="layout-view"></router-view> -->
  <!-- OR ELSE, IF NOT USING subRoutes: -->
  <div class="layout-padding">
     <button class="primary" @click="synchFile">
          <i class="on-left">mail</i> Sync
      </button>
  </div>


  <!-- Footer -->
  <div slot="footer" class="toolbar">
    All right reserved Nano Corporatio 
  </div>
  </q-layout>
</template>

<script>

function onGetDirectoryFail()
{
  alert('Folder batch Doesnot Exist');
}

function gotNoFileEntry()
{
  alert('Product.json Does not exist');
}
import { Dialog, Toast } from 'quasar'

export default {
  
  methods:{
        synchFile(){
          console.log('Synch is Working')
        let scope = this;
         window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(dir) {

              Toast.create.warning('Synching...')

              try{
                  dir.getDirectory('batch', {
                        create: false,
                        exclusive: false
                    }, function(dir){
                      dir.getFile('product.json', {
                          create: false,
                          exclusive: false
                      }, function(dir){

                         dir.remove(function (file) {
                            Toast.create.positive('Synching Finished and file deleted...')
                            }, function (err) {
                              console.log(err); // Error while removing File
                            });

                      }, gotNoFileEntry);

                    }, onGetDirectoryFail);

              }
              catch(err){
                console.log(err);
              }
              
          });
      },
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
