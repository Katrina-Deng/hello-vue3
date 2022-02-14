<template>
  <span>view-computed:{{ count }}</span>
  <span>doubleCount {{ doubleCount }}</span>
  <button @click="addCount">add</button>
</template>

<script>
  import { ref, computed } from 'vue'

  export default {
    setup() {
      const count = ref(0)
      const doubleCount = computed(() => count.value * 2)
      const addCount = () => {
        count.value++
      }
      return {
        count,
        addCount,
        doubleCount
      }
    }
  }
</script>

<style lang="scss" scoped>
  button {
    margin-left: 8px;
  }
</style>
