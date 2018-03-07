<template>
  <div class="single mt50">
    <div class="container">
    	<div class="row">
    		<div class="col-md-4 col-sm-6" v-for="item in singles">
    			<div class="single-item">
    					<div class="head">{{item.title}}</div>
    					<div class="img"><img :src="item.imglink" alt="" /></div>
    					<div class="buy-now"><router-link :to="'/single/'+item.id">立即购买</router-link></div>
    			</div>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'single',
  data () {
    return {
      msg: '大闸蟹单品'
    }
  },
  computed : {
  	'singles'(){
  		return this.$store.state.b.product.single;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.single-item{background-color: white; color: white; margin-bottom: 50px;}
.single-item a{color: white;}
.single-item img{max-width: 100%;}
.single-item .head{background: url("../../assets/title-bg.png"); line-height: 49px;}
.single-item .img{padding: 10px;}
.single-item .buy-now{background-color: #8a121e;cursor: pointer;}
.single-item .buy-now a{display: block; width: 100%; height: 100%;}
</style>
