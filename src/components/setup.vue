<template>
  <div class="text">123</div>
</template>

<script>
  import { ref } from 'vue'
  import { getData } from '@/api/data'
  export default {
    name: 'setup',
    props: {
      msg: String
    },
    setup() {
      let data = ref([]) // 直接给[]是非响应式的，要用ref包裹一下
      const getDetailData = async () => {
        data = await getData()
      }
      // 它还无法生效，因为 data 变量是非响应式的。
      return {
        data,
        getDetailData
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .text {
    color: #00acec;
  }
</style>
