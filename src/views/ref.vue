<template>
  <span>view-ref:{{ count }}</span>
  <button @click="addCount">add</button>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const count = ref(0)
      const addCount = () => {
        count.value++
      }
      return {
        count,
        addCount
      }
    }
  }
</script>

<style lang="scss" scoped>
  button {
    margin-left: 8px;
  }
</style>
