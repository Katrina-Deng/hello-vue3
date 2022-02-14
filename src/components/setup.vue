<template>
  <h5 class="text">123</h5>
  <div v-for="item in data" :key="item.order_id">{{ item.fund_name }} - {{ item.fund_id }}</div>
  search <input v-model="searchQuery" placeholder="请输入" />
  <div class="res">
    <div v-for="item in getSearchRes" :key="item.order_id">{{ item.fund_name }} - {{ item.fund_id }}</div>
  </div>
</template>

<script>
  import { ref, onMounted, watch, toRefs, computed } from 'vue'
  import { getData } from '@/api/data'
  export default {
    name: 'setup',
    props: {
      fundId: String
    },
    // step1 setup 迁移
    setup(props) {
      // step2 ref 响应式变量
      const data = ref([]) // 直接给[]是非响应式的，要用ref包裹一下
      let fullData = []
      if (!props.fundId) return
      const getDetailData = async () => {
        fullData = await getData()
        data.value = fullData.filter((v) => v.fund_id === props.fundId)
      }
      // step3 生命周期函数
      onMounted(getDetailData)
      // 将非响应式的元素变成响应式 toRefs
      const { fundId } = toRefs(props)
      // step4 watch
      watch(fundId, getDetailData)
      // step5 computed
      // 它还无法生效，因为 data 变量是非响应式的。添加ref
      const searchQuery = ref('')
      const getSearchRes = computed(() => {
        return fullData.filter((v) => v.fund_id === searchQuery.value)
      })
      return {
        data,
        getDetailData,
        searchQuery,
        getSearchRes
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .text {
    color: #00acec;
  }
  .res {
    border: 1px solid rosybrown;
  }
</style>
