<template>
  <div class="c-box-center" font-tertiary>
    <slot></slot>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue'
export default {
  name: 'CBoxCenter',
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

<style lang='scss' scoped>
// @include b(c-box-center) {
// 	@include grid($align-items: center, $justify-content: center);
// }
@include b(c-box-center){
  @include box-center
}
</style>
