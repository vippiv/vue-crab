<template>
  <div class="banner">
	  <div class="swiper-container">
			<div class="swiper-wrapper">
					<div class="swiper-slide"><img src="../../assets/banner/1.jpg" alt=""></div>
					<div class="swiper-slide"><img src="../../assets/banner/2.jpg" alt=""></div>
					<div class="swiper-slide"><img src="../../assets/banner/3.jpg" alt=""></div>
			</div>
		</div>
  </div>
</template>

<script>
	import Swiper from "swiper"
export default {
  name: 'banner',
  data () {
    return {
      msg: 'banner'
    }
  },
  mounted(){
  	new Swiper('.swiper-container',{
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			loop: true
		});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	 @import "../../../node_modules/swiper/dist/css/swiper.min.css"
</style>
