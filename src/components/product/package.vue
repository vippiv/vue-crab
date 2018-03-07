<template>
  <div class="package mt50">
    <div class="container">
    	<div class="row">
    		<div class="col-md-4 col-sm-6" v-for="item in packages">
    			<div class="package-item">
    					<div class="head">{{item.title}}</div>
    					<div class="img"><img :src="item.imglink" alt="" /></div>
    					<div class="buy-now"><router-link :to="'/packages/'+item.id">立即购买</router-link></div>
    			</div>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'package',
  data () {
    return {
      msg: '大闸蟹礼盒'
    }
  },
  computed : {
  	'packages'(){
  		return this.$store.state.b.product.packages;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.package-item{background-color: white; color: white;margin-bottom: 50px;}
.package-item a{color: white;}
.package-item img{max-width: 100%;}
.package-item .head{background: url("../../assets/title-bg.png"); line-height: 49px;}
.package-item .img{padding: 10px;}
.package-item .buy-now{background-color: #8a121e;cursor: pointer;}
.package-item .buy-now a{display: block; width: 100%; height: 100%;}
</style>
