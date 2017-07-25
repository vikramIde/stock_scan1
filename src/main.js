// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================
Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};
import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import appconfig from '../config/appconfig.js'
import axios from 'axios'

window.appconfig = appconfig;
window.axios = axios;

window.formatDate = function(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = hours >= 12 ? 'pm' : 'am';
  
  var strTime = hours + ':' + minutes + ':'+seconds;
  return date.getFullYear()+1 + "-" + date.getMonth() + "-" + date.getDate() + " " + strTime;
}



Vue.use(Quasar) // Install Quasar Framework
Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    render: h => h(require('./App'))
  })
})
