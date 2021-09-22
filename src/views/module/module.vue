<template>
  <div :class="$style.page">
    <div :class="$style.color">使用一个选择器</div>
  </div>
  <div :class="[$style.page,$style.color]">
    <div>同时使用两个选择器</div>
  </div>
  <hr>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue'
export default {
  name: 'Module',
  components: {},
  setup () {
    const data = reactive({
      list: []
    })
    onMounted(() => {
      console.log('onMounted')
    })
    return {
      ...toRefs(data)
    }
  }
}
</script>

<style lang="scss" module>
.page {
	font-size: 26px;
}
.color {
	color: red;
}
</style>
