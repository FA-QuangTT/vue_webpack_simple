<template>
  <div id="app">
    <a-layout id="components-layout" class="layout">
      <Header />
      <Main/>
      <Footer/>
    </a-layout>
  </div>
</template>

<script>

import Header  from './components/Header'
import Main  from './components/Main'
import Footer  from './components/Footer'
export default {
  name: 'app',
  data () {
    return {

    }
  },

  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

</style>
