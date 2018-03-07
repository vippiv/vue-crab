<template>
  <div class="coupon mt50">
    <div class="container">
    	<div class="row">
    		<div class="col-md-4 col-sm-6" v-for="item in coupons">
    			<div class="coupon-item">
    					<div class="head">{{item.title}}</div>
    					<div class="img"><img :src="item.imglink" alt="" /></div>
    					<div class="buy-now"><router-link :to="'/coupons/'+item.id">立即购买</router-link></div>
    			</div>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'coupon',
  data () {
    return {
      msg: '大闸蟹礼券'
    }
  },
  computed : {
  	'coupons'(){
  		return this.$store.state.b.product.coupons;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.coupon-item{background-color: white; color: white;margin-bottom: 50px;}
.coupon-item a{color: white;}
.coupon-item img{max-width: 100%;}
.coupon-item .head{background: url("../../assets/title-bg.png"); line-height: 49px;}
.coupon-item .img{padding: 10px;}
.coupon-item .buy-now{background-color: #8a121e;cursor: pointer;}
.coupon-item .buy-now a{display: block; width: 100%; height: 100%;}
</style>
