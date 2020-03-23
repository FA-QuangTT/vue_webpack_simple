import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../pages/Home';
import Product from '../pages/products/Product';
import ProductAdd from '../pages/products/ProductAdd';
// import ProductCreate from '../components/products/ProductCreate';
export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',

      component: Home,
      meta: {
        key: 1,
        breadcrumb: [
        ]
      }
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
      meta: {
        key: 2,
        breadcrumb: [
          {name: 'Product', path: '/product'}
        ]
      }

    },
    {
      path: '/product/add',
      name: 'product-add',
      component: ProductAdd,
      meta: {
        key: 2,
        breadcrumb: [
          {name: 'Product', path: '/product'},
          {name: 'Add'}
        ]
      }
    },

    {
      path: '/product/edit/:productId',
      name: 'product-edit',
      component: ProductAdd,
      meta: {
        breadcrumb: [
          {name: 'Product', path: '/product'},
          {name: 'Edit'}
        ]
      }
    }



  ]
})
