<template>
  <div>
    <h2>Welcome to Counter</h2>
    <button
      @click="incrementCounter(2)"
    >Increment counter <span>({{ count }})</span></button>
  </div>
</template>

<script>

import {mapState} from 'vuex';
export default {
  namn: 'counter',
  data(){
    return {}
  },

  methods: {
    incrementCounter(number) {
      this.$store.dispatch('increment', number)
    }
  },

  computed: mapState([
        // map this.count to store.state.count
      'count'
  ])
}
</script>

<style>

</style>
