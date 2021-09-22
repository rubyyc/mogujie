<template>
  <div class="page">
    <img class="img1" src="https://s10.mogucdn.com/mlcdn/c45406/190219_4ii32ja6gi9hdeb56k2487ce7eh24_60x60.png" />
    <img class="img2" src="https://sf3-ttcdn-tos.pstatp.com/img/user-avatar/2c0777c7966c8c1fff519460a136cec7~300x300.image" />
    <img class="img3" src="https://s5.mogucdn.com/mlcdn/c45406/210403_2j8kel0d05d556575j47e04iehela_640x960.jpg_500x9999.v1c7E.81.webp" />
    <img class="img4" src="https://s10.mogucdn.com/mlcdn/c45406/190102_088f4i166l4gkl08k297h5kk8690i_260x200.png" />
  </div>
</template>
<script>
export default {
  name: 'Scroll'
}
</script>
<style lang='scss' scoped>
.page {
	perspective: 1px;
	padding: 0;
	height: 1000px;
	overflow: auto;
}
.img3 {
	position: absolute;
	left: 30%;
	transform: translateZ(-1px) scale(2);
	width: 900px;
  // width: 640px;
}
.img1 {
	position: absolute;
	left: 60px;
	top: 30px;
  width: 60px;
  height: 60px;
}
.img2 {
	position: absolute;
	left: 60px;
	top: 130px;
  width: 300px;
  height: 300px;
}
.img4 {
	position: absolute;
	right: 60px;
	top: 230px;
  width: 260px;
  height: 300px;
}
</style>
