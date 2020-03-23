import Vue from 'vue'
import Vuex from 'vuex'
import { router } from '../router';
import { product } from './modules/product'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules : {
    product
  }
})
