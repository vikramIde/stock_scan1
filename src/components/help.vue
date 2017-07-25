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
  <!-- IF USING subRoutes only: -->
  <!-- <router-view class="layout-view"></router-view> -->
  <!-- OR ELSE, IF NOT USING subRoutes: -->
  <div class="layout-padding">
      <blockquote >
          <small>
            To scan new product please click on (In) tab and then (+) button on the bottom right corner
          </small>
          
      </blockquote>
      <blockquote>
        <small>
            after scanning you can see the product Name and product code you can edit/delete them by clicking on the tripple on the right side of the item.
          </small>
      </blockquote>
  </div>


  <!-- Footer -->
  <div slot="footer" class="toolbar">
    All right reserved Nano Corporatio 
  </div>
  </q-layout>
</template>

<script>


export default {
  
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
