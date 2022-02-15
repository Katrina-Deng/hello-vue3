/**
 * @file 产品list搜索功能
 */
import { ref, computed } from 'vue'

export default function getSearchFundList(data) {
  const searchQuery = ref('')
  const getSearchRes = computed(() => {
    return data.value.filter((v) => {
      return v.state_str.includes(searchQuery.value)
    })
  })
  return {
    searchQuery,
    getSearchRes
  }
}
