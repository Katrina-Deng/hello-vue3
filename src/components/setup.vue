<template>
  <div>123</div>
</template>

<script>
  import { defineComponent } from 'vue'
  import { getData } from '@/api/data'
  export default defineComponent({
    name: 'setup',
    props: {
      msg: String
    },
    setup() {
      let data = []
      const getDetailData = async () => {
        data = await getData()
      }
      
      return {
        data,
        getDetailData
      }
    }
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
