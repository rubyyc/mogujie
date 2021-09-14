<template>
  <div class="home">
    <c-launch class="home__lauch" mb-10></c-launch>
    <c-box-center class="btn" radius4 bg-tertiary>打开APP</c-box-center>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>
<style lang="scss" scoped>
.btn {
	@include dimensions(75px, 25px);
}
</style>
