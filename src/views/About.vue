<template>
  <div>
    <div v-for="item in list" :key="item.name">
      <span>{{item.name}}--{{item.age}}</span>
    </div>
  </div>
</template>
<script>
import { getUsers } from '@/api'
import { onMounted, reactive, toRefs } from 'vue'
export default {
  name: 'About',
  setup () {
    const data = reactive({
      list: []
    })
    onMounted(() => {
      console.log('onMounted')
      getUsers().then(res => {
        console.log(res)
        data.list = res.data
      })
    })
    return {
      ...toRefs(data)
    }
  }
}
</script>
<style lang="">
</style>
