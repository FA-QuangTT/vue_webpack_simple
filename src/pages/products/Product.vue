<template>
  <div class="product">


    <!-- <img src="." alt=""> -->
    <a-table class="mt-10 width-pc-80" bordered :columns="columns" :dataSource="list_product_reverse" :scroll="{ y: 300 }">
      <template slot="title">
        <a-row type="flex" justify="space-between" align="top">
          <a-col :span="6" class="text-left"><h2 class="text-left color-blue">Product List</h2></a-col>
          <a-col :span="2">
            <router-link to="/product/add"><a-button type="primary">Add Product</a-button></router-link>
          </a-col>
        </a-row>
      </template>

      <div class="clearfix" slot="image" slot-scope="text">
        <img
          @click="handlePreview(text != '' ? text : no_image)"
          class="thumbnail" :src="text != '' ? text : no_image" alt="avatar" />
        <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
          <img alt="example" style="width: 100%" :src="previewImage" />
        </a-modal>
      </div>

      <span slot="action" slot-scope="text, record">
        <a-popconfirm title="Are you sure？" @confirm="deleteProduct(record.id)">
          <a-icon slot="icon" type="question-circle-o" style="color: red" />
          <a-button type="danger" icon="delete" size="small">Delete</a-button>
        </a-popconfirm>

        <a-divider type="vertical" />
        <a-button type="primary" icon="edit" size="small" @click="editProduct(record.id)">Edit</a-button>
      </span>


    </a-table>
  </div>
</template>

<script>

  const columns = [
    {
      title: 'Name',
      key: 'name',
      dataIndex: 'name',
      width: '20%'

    },

    {
      title: 'Quantiy',
      key: 'quantity',
      dataIndex: 'quantity',
      width: '10%'

    },

    {
      title: 'Price',
      key: 'price',
      dataIndex: 'price',
      width: '10%'

    },

    {
      title: 'Description',
      key: 'description',
      dataIndex: 'description',
      width: '20%',

    },

    // {
    //   title: 'Image',
    //   key: 'image',
    //   dataIndex: 'image_url',
    //   slots: { title: 'customTitle' },
    //   scopedSlots: { customRender: 'image' },
    //   width: '20%'

    // },

    {
      title: 'Action',
      key: 'action',
      scopedSlots: { customRender: 'action' },
      width: '20%'
    },
  ];


import { mapState } from 'vuex'
export default {

  data() {
    return {
      no_image: require('../../assets/images/no-image.png'),
      previewVisible: false,
      previewImage: '',
      columns,
    };
  },

  computed: {
    list_product_reverse() {
      return this.$store.getters['product/list_product_reverse']
    }
  },

  methods: {
    handlePreview (imagePre) {
      this.previewImage = imagePre;
      this.previewVisible = true;
    },

    handleCancel() {
      this.previewVisible = false;
    },

    deleteProduct(id) {
      this.$store.dispatch('product/deleteProduct', id)
    },

    editProduct(id) {
      this.$router.push({ name: 'product-edit', params: { productId: id }})
    }
  },
}
</script>

<style>
  .pl-10 { padding-left: 10px; }

  .mt-10 { margin-top: 10px; }
  .mt-20 { margin-top: 20px; }
  .mt-30 { margin-top: 30px; }
  .mt-40 { margin-top: 40px; }

  .thumbnail{
    width: 100px;
  }

  .text-left {
    text-align: left;
  }

  .color-blue {
    color: #1890ff;
  }
</style>
