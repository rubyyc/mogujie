<template>
  <div class="c-singer-center">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CSingleCenter'
}
</script>

<style lang='scss' scoped>
@include b(c-singer-center){
  @include grid($align-item: center)
}
</style>
