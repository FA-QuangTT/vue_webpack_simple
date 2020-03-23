<template>
  <a-layout-header>
    <!-- <div class="logo" /> -->
    <a-menu
      class="menu"
      theme="dark"
      mode="horizontal"
      :defaultSelectedKeys="defaultSelected"
      :selectedKeys="defaultSelected"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1" class="menu_item">
        <router-link to="/">Home</router-link>
      </a-menu-item>

      <a-menu-item key="2">
        <router-link to="/product">Product</router-link>
      </a-menu-item>
      <!-- <a-sub-menu key="2" title="Product">
        <a-menu-item key="7"><router-link to="/product/">List</router-link></a-menu-item>
        <a-menu-item key="8"><router-link to="/product/create">Create</router-link></a-menu-item>
      </a-sub-menu> -->
    </a-menu>
  </a-layout-header>
</template>

<script>

export default {
  data() {
    return {
      defaultSelected: ['1']
    }
  },

  watch: {
    '$route' () {
      // console.log(this.$route.meta.key)
      // this.defaultSelected[0] = ''+this.$route.meta.key;
      this.$set(this.defaultSelected, 0, ''+this.$route.meta.key);
    }
  }
}
</script>

<style>
  .menu {
    text-align: left;
  }
</style>
