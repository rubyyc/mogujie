<template>
  <c-box-skin type="bottom">
    <c-singer-center class="c-launch">
      <img class="c-launch__logo" src="https://s10.mogucdn.com/mlcdn/c45406/190219_4ii32ja6gi9hdeb56k2487ce7eh24_60x60.png" ml15 mr10 />
      <div class="c-launch__download">
        <span style="color: #000" mb5>蘑菇街 总有高手帮你挑</span>

        <c-single-center>
          star
          <span style="color: #8e8e92" ml10>超过2亿用户已下载</span>
        </c-single-center>
      </div>
      <c-box-center class="c-launch__button" @click="goAppStore" radius4 bg-tertiary>打开APP</c-box-center>
    </c-singer-center>
  </c-box-skin>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue'
export default {
  name: 'CLaunch',
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
@include b(c-launch) {
  height: 47px;
  @include e(logo) {
    @include dimensions(30px);
  }

  @include e(download) {
    @include grid($flex-direction: column);
  }

  @include e(button) {
    @include dimensions(75px, 25px);
    margin-left: 60px;
  }
}
</style>
