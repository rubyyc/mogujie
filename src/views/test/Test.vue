<template>
  <div class="home">
    <c-launch class="home__lauch" mb-10></c-launch>
    <c-box-center class="btn" radius4 bg-tertiary>打开APP</c-box-center>
    <bug theme="multi-color" size="44" :fill="['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']" />
    <hamburger-button theme="multi-color" size="34" :fill="['#9c9393' ,'#326fc2' ,'#FFF' ,'#43CCF8']" :strokeWidth="2" />
    <star theme="multi-color" size="24" :fill="['#c79a41' ,'#f5a623' ,'#FFF' ,'#43CCF8']" />
  </div>
  <div class="box">
    <div class="box__item box__item--bg1"></div>
    <div class="box__item box__item--bg2"></div>
    <div class="box__item box__item--bg3"></div>
    <div class="box__item box__item--bg4"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Bug, HamburgerButton, Star } from '@icon-park/vue-next'
export default {
  name: 'Home',
  components: {
    Bug,
    HamburgerButton,
    Star
  }
}
</script>
<style lang="scss" scoped>
.btn {
	@include dimensions(75px, 25px);
}
.box{
  scroll-snap-type: x mandatory;
  overflow: auto;
  white-space: nowrap;
  &__item{
    display: inline-block;
    height: 100px;
    width: 100%;
    background-color: pink;
    scroll-snap-align: center;
    scroll-snap-stop: always;
    &--bg1{
      background-color: pink;
    }
    &--bg2{
      background-color: rgb(173, 111, 41);
    }
    &--bg3{
      background-color: rgb(20, 19, 19);
    }
    &--bg4{
      background-color: rgb(209, 192, 255);
    }
  }
}
</style>
