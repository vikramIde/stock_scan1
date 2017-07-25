<template>
  <div class="error-page window-height window-width bg-light column items-center">
    <div class="error-code bg-primary flex items-center justify-center">
      Nano Corp
    </div>
    <div>
      <div class="error-card card bg-white column items-center justify-center">
        <!-- <i class="text-grey-5">error_outline</i> -->
        <p class="caption text-center">Welcome Screen...</p>
        <p class="text-center group">
          <router-link to="/help" v-if="batch==true">
            <button class="grey push small">
              Go home
              <!-- <i class="on-right">Enter</i> -->
            </button>
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import store from './product-store'
import { Toast,Loading,Dialog } from 'quasar'
import Router from 'router'

    function gotNoFileEntry(e) {
        console.log(e);
        Router.replace({ path: 'help' })
        // Dialog.create({
        //     title: 'Confirm',
        //     message: 'Select option to progress..',
        //     buttons: [
        //       {
        //         label: 'Continue',
        //         handler () {
        //           Router.replace({ path: 'help' })
        //         }
        //       }
        //     ]
        // })
    }

    function onFileSystemSuccess(fileSystem) {

        fileSystem.getDirectory('batch', {
            create: false,
            exclusive: false
        }, onGetDirectorySuccess, onGetDirectoryFail);
    }

    function onGetDirectorySuccess(dir,directury) {
        dir.getFile('product.json', {
            create: false,
            exclusive: false
        }, gotFileEntry, gotNoFileEntry);
    }

    function gotFileEntry(dir){

      Dialog.create({
          title: 'Confirm',
          message: 'Select option to progress..',
          buttons: [
            {
              label: 'Synch',
              handler () {
                Router.replace({ path: 'sync' })
              }
            },
            {
              label: 'Continue',
              handler () {
                Router.replace({ path: 'stockin' })
              }
            }
          ]
      })

    }

    function onGetDirectoryFail(err)
    {
      console.log('Direcotory Error :'+err);
    }

export default {
  mounted(){
      console.log('Componenet Mounted');
      const url = appconfig.dev.BASE_URL+'/api/product_check_in/';
      this.checkFile();
  },
  data () {
    return {
        itemsInStock:store.state,
    }
  },
  computed: {
    // hasITEMS () {
    //    if(this.itemsInStock.length<0)
    //    {
    //       this.getProductSku();
    //    }
    //    else{
    //       console.log('itemsInStock available')
    //    }
    // }
  },
  methods: {
    testMethod () {
        console.log('console.log(cordova): %O', cordova)
    },
    getProductSku() {
      Loading.show();
      const url = appconfig.dev.BASE_URL+`/get_shankar_products/`;
       axios.get(url).then(response => {
        response.data.forEach(function(item){

            addProduct(item._sku,item._barcode,item.movement,item.id,item.updated_at,item.created_at)

        });
        Loading.hide()
        Toast.create.positive('Product added')
        // console.log(store);
      });
    },
    checkFile(){
       window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(dir) {
            console.log('got main dir',dir);
            try{
                onFileSystemSuccess(dir,'fileName');
            }
            catch(err){
              console.log(err);
            }
            
        });
    }
  }
}
</script>

<style lang="stylus">
.error-page
  .error-code
    height 50vh
    width 100%
    padding-top 4vh
    font-size 21vmax
    color rgba(255, 255, 255, .2)
    overflow hidden
  .error-card
    margin-top -25px
    width 90vw
    max-width 600px
    padding 50px
    i
      font-size 5rem
</style>
