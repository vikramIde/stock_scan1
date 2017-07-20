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
          <!-- <button class="grey push small" @click="testMethod()"> -->
            <!-- run console.log(cordova) -->
            <!-- <i class="on-right">Enter</i> -->
          <!-- </button> -->
          <router-link to="/help">
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

export default {
  data () {
    return {}
  },
  methods: {
    testMethod () {
        console.log('console.log(cordova): %O', cordova)
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
