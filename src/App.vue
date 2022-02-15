<template>
  <setup :fundId="fundId" />
  <button @click="changeFundId">Click to change FundId</button>
  <!-- views -->
  <hr />
  <ref-comp />
  <hr />
  <watch />
  <hr />
  <computed-comp />
  <hr />
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import setup from './components/setup.vue'
  import refComp from './views/ref.vue'
  import watch from './views/watch.vue'
  import computedComp from './views/computed.vue'

  export default defineComponent({
    name: 'App',
    components: {
      setup,
      refComp,
      watch,
      computedComp
    },
    setup() {
      const fundId = ref('FM4620')
      const changeFundId = () => {
        fundId.value = 'FM5885'
      }
      return {
        fundId,
        changeFundId
      }
    }
  })
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
