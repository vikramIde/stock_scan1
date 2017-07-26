import Vue from 'vue'
import { LocalStorage } from 'quasar'

export default {
  state: LocalStorage.get.item('products_in_stock') || {},
  set (id, item) {
    Vue.set(this.state, id, item)
    LocalStorage.set('products_in_stock', this.state)
  },
  del (id) {
    Vue.delete(this.state, id)
    LocalStorage.set('products_in_stock', this.state)
  },
  clear(){
  	this.state ={};
  	LocalStorage.remove('products_in_stock')
  }

}
