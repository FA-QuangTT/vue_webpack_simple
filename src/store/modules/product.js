import Vue from 'vue'
import { router } from '../../router'

export const product = {
  namespaced: true,
  state: {
    list_product:
      localStorage.getItem('DATA-PRODUCT')
      ? JSON.parse(localStorage.getItem('DATA-PRODUCT'))
      : [
          {
            id: 1,
            key: 1,
            name: 'iPhone 11 Pro Max 64GB',
            price: 33990000,
            quantity: 5,
            description: `Chiếc iPhone mạnh mẽ nhất, lớn nhất, thời lượng pin tốt nhất đã xuất hiện. iPhone 11 Pro Max chắc chắn là chiếc điện thoại`,
          },

          {
            id: 2,
            key: 2,
            name: 'iPhone Xs Max 256GB',
            price: 32990000,
            quantity: 5,
            description: `Tin được không, iPhone Xs Max có màn hình lớn vượt trội so với mọi thế hệ iPhone trước đây.Bạn sẽ được tận hưởng một màn hình OLED 6,5 inch chất lượng cao và hỗ trợ hiển thị HDR.`,
          }
      ],
  },

  mutations: {
    addProduct(state, data) {
      // var image_url = data.upload && data.upload[0] ? data.upload[0].thumbUrl : '';
      let length = state.list_product.length;
      data.key = state.list_product[length-1].id + 1;
      data.id = state.list_product[length-1].id + 1;


      state.list_product.push(data);
      localStorage.setItem('DATA-PRODUCT', JSON.stringify(state.list_product));
      router.go(-1);


    },

    updateProduct(state, data) {
      data.key = data.id;
      Vue.set(state.list_product, data.index, data);
      localStorage.setItem('DATA-PRODUCT', JSON.stringify(state.list_product));
      router.go(-1);

    },

    deleteProduct(state, index) {
      state.list_product.splice(index,1);
      localStorage.setItem('DATA-PRODUCT', JSON.stringify(state.list_product));
    }

  },

  actions: {
    addProduct(context, data) {
      context.commit('addProduct', data);
    },

    updateProduct({ commit, dispatch }, data) {
      dispatch('getIndexById', data.id).then((index)=> {
        data.index = index;
        commit('updateProduct', data);
      })
    },

    deleteProduct({ commit, dispatch }, id) {
      dispatch('getIndexById', id).then((index)=> {
        commit('deleteProduct', index);
      })
    },

    getIndexById(context, id) {
      let rs = -1;
      this.state.product.list_product.forEach((item, index) => {
        if(item.id === id){
          rs = index;
        }
      });

      return rs;
    },


    getItemById(context, id){
      let rs = null;
      this.state.product.list_product.forEach((item, index) => {
        if(item.id === id){
          rs = item;
        }
      });


      return rs;
    }
  },

  getters: {
    list_product_reverse(state) {
      return [...state.list_product].reverse()
    },

  }

}
