<template>
  <div>view-watch:{{ count }}</div>
  <span>open the console platform to review the result</span>
  <button @click="addCount">add</button>
</template>

<script>
  import { ref, watch, onMounted, nextTick, reactive } from 'vue'

  export default {
    setup() {
      // 侦听器数据源可以是返回值的 getter 函数，也可以直接是 ref
      const count = ref(0)
      const addCount = () => {
        count.value++
      }
      watch(count, (newCount, preCount) => {
        console.log('newCount, preCount', newCount, preCount)
      })

      const firstName = ref('')
      const lastName = ref('')

      // 监听多个数据
      watch(
        [firstName, lastName],
        (newValues, prevValues) => {
          //   console.log(newValues, prevValues)
        },
        { flush: 'sync' }
      )

      // **1 非函数变动就依次执行
      //   firstName.value = 'John' // logs: ["John", ""] ["", ""]
      //   lastName.value = 'Smith' // logs: ["John", "Smith"] ["John", ""]
      // **2 函数变动只会执行一次
      // 2.1 { flush: 'sync' } 可以通过这个配置实现上面的效果，但是不推荐，性能可能会差
      // 2.2 或者使用nextTick
      const changeValues = async () => {
        firstName.value = 'John'
        await nextTick()
        lastName.value = 'Smith'
        // 打印 ["John", "Smith"] ["", ""]
      }
      // **3 监听一个响应式的对象
      const state = reactive({
        id: 1,
        attributes: {
          name: ''
        }
      })

      watch(
        () => state,
        (state, prevState) => {
          // 直接不执行了
          console.log('not deep', state.attributes.name, prevState.attributes.name)
        }
      )

      watch(
        () => state,
        (state, prevState) => {
          // 执行了，但是只返回他最新的值 ↓
          console.log('deep', state.attributes.name, prevState.attributes.name)
        },
        { deep: true }
      )
      state.attributes.name = 'Alex' // 日志: "deep" "Alex" "Alex"
      //  如果想要拿到他写旧值和新值的比较那么就需要用到lodash.deepClone
      onMounted(changeValues)
      return {
        count,
        addCount,
        changeValues
      }
    }
  }
</script>

<style lang="scss" scoped>
  button {
    margin-left: 8px;
  }
</style>
