<template>
  <span>view-ref:{{ count }}</span>
  <button @click="addCount">add</button>
  <input type="text" v-model="value" />
  <div>** {{ value }} **</div>
</template>

<script>
  import { ref, watch } from 'vue'

  export default {
    // data() {
    //   return {
    //     value: ''
    //   }
    // },
    setup() {
      const count = ref(0)
      const value = ref(123)
      const addCount = () => {
        count.value++
      }
      // watch(value, (newVal, preVal) => {
      //   console.log(newVal, preVal)
      // })
      return {
        count,
        addCount,
        value
      }
    }
  }
</script>

<style lang="scss" scoped>
  button {
    margin-left: 8px;
  }
</style>
