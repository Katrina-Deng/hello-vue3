/**
 * @file 产品list功能
 */
import { ref, onMounted, watch } from 'vue'
import { getData } from '@/api/data'

export default function getFundList(fundId) {
  const data = ref([])
  const getDetailData = async () => {
    const fullData = await getData()
    data.value = fullData.filter((v) => v.fund_id === fundId.value)
  }
  onMounted(getDetailData)
  watch(fundId, getDetailData)
  return {
    data,
    getDetailData
  }
}
