<template>
  <div class="product__add">
    <h3 class="product__title">{{ type === 'Create' ? 'Add New' : 'Update' }} Product</h3>
    <div id="form-add-product">
      <a-form :form="form" @submit="addProduct">
        <a-form-item label="Name" :label-col="formItemLong.labelCol" :wrapper-col="formItemLong.wrapperCol">
          <a-input
            v-decorator="['name', { rules: [{ required: true, message: 'Please input product name!' }] }]"
          />
        </a-form-item>
        <a-form-item label="Quatity" :label-col="formItemShort.labelCol" :wrapper-col="formItemShort.wrapperCol">
          <a-input-number
            class="width-100"
            v-decorator="['quantity', { initialValue: quantity }]" :min="0"

          />
        </a-form-item>
        <a-form-item label="Price" :label-col="formItemShort.labelCol" :wrapper-col="formItemShort.wrapperCol">
          <a-input-number
            class="width-150"
            v-decorator="['price', { initialValue: price }]" :min="0"
            :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
            :parser="value => value.replace(/\$\s?|(,*)/g, '')"

          />
        </a-form-item>

        <a-form-item label="Description" :label-col="formItemLong.labelCol" :wrapper-col="formItemLong.wrapperCol">
          <a-textarea
            v-decorator="['description', { rules: [{ required: true, message: 'Please input description!' }] }]"
            placeholder="Description" :rows="4" />
        </a-form-item>

        <!-- <a-form-item label="Upload" :label-col="formItemLong.labelCol" :wrapper-col="formItemLong.wrapperCol" class="upload-image">
          <a-upload
            v-decorator="[
              'upload',
              {
                valuePropName: 'fileList',
                getValueFromEvent: normFile,
              },
            ]"
            name="logo"
            list-type="picture"
          >
            <a-button> <a-icon type="upload" /> Click to upload </a-button>
          </a-upload>
        </a-form-item> -->

        <a-button type="primary" html-type="submit">
          {{ type }}
        </a-button>
      </a-form>
    </div>
  </div>
</template>

<script>


const formItemLong = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};

const formItemShort = {
  labelCol: { span: 6 },
  wrapperCol: { span: 1},
};


export default {
  name: 'product-create',
  data() {
    return {
      name: '',
      quantity: 1,
      price: 1000000,
      description: '',
      type: 'Create',
      formItemLong,
      formItemShort,
      id: parseInt(this.$route.params.productId)
    }
  },

  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'form-add-product' });
  },

  watch: {
    name(val)         { this.form.setFieldsValue({ name: val })},
    quantity(val)     { this.form.setFieldsValue({ quantity: val })},
    price(val)        { this.form.setFieldsValue({ price: val })},
    description(val)  { this.form.setFieldsValue({ description: val })}
  },


  mounted() {
    if(this.id){
      this.type = 'Update';
      this.$store.dispatch('product/getItemById', this.id).then((rs)=>{
        this.form.setFieldsValue({
          name : rs.name,
          quantity : rs.quantity,
          price : rs.price,
          description : rs.description
        });
      });
    }
  },

  methods: {
    addProduct(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          if(this.id){
            values.id = this.id;
            this.$store.dispatch('product/updateProduct', values)
          }
          else{
            this.$store.dispatch('product/addProduct', values)
          }
        }
      });
    },

  },
}
</script>

<style>
  .product__add {
    padding-top: 20px;
  }

  .product .ant-row {
    margin-bottom: 10px
  }

  .product .ant-form-explain{
    text-align: left;
  }

  .width-50 { width: 50px;}
  .width-100 { width: 100px;}
  .width-150 { width: 150px;}

  .upload-image .ant-form-item-control {
    text-align: left;
  }


</style>
