<template>
  <a-layout-content style="padding: 0 50px">
    <a-breadcrumb class="breadcrumb" style="margin: 16px 0;">
      <a-breadcrumb-item href="">

        <a href="" @click="routerLink({name: 'Home', path: '/'}, $event)"> <a-icon type="home" /> Home</a>
      </a-breadcrumb-item>
      <a-breadcrumb-item
        v-for="(item, index) in breadcrumbList"
        :item="item"
        :key="index"
      >
        <a href="" @click="routerLink(item, $event)">{{ item.name }}</a>
        <span></span>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <div :style="{ background: '#fff', paddingBottom: '100px', minHeight: '280px' }">
      <router-view></router-view>
    </div>
  </a-layout-content>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbList: []
    }
  },

  methods: {
    routerLink(item, e){
      e.preventDefault();
      if(item.path && this.$route.path !== item.path){
        this.$router.push(item.path)
      }
    }
  },

  watch: {
    '$route' () {
      this.breadcrumbList = this.$route.meta.breadcrumb
    }
  }
}
</script>

<style>
  .breadcrumb {
    text-align: left;
  }
</style>
