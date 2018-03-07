<template>
  <div class="head-guide">
  	<div class="logo text-center"><router-link to="/"><img src="../../assets/logo.png" alt="" /></router-link></div>
  	<div style="background-color: black;">
  		<div class="container">
			  <ul class="clearfix nav">
			  	<li><router-link to="/coupons">大闸蟹礼券</router-link></li>
			  	<li><router-link to="/packages">大闸蟹礼盒</router-link></li>
			  	<li><router-link to="/single">大闸蟹单品</router-link></li>
			  	<li><router-link to="/account">结算中心<span class="qty abs">{{allQty}}</span></router-link></li>
			  </ul>
		  </div>
	  </div>
	  <banner></banner>
  </div>
</template>

<script>
	import banner from "./banner"
export default {
  name: 'headGuide',
  data () {
    return {
      msg: '头部组件'
    }
  },
  computed : {
  	"allQty"(){
  		return this.$store.getters.allProductQty
  	}
  },
  components : {
  	banner
  },
  watch :{
  	"allQty"(newV,oldV){
  		var msg = "";
  		if(newV<oldV){
  			msg = "success";
  		}else{
  			msg = "添加成功";
  		}
  		alert(msg);
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.logo{margin: 15px 0px;}
	.nav{margin: 0 auto;}
.nav>li{padding:0 1em;line-height: 2.5;}
.nav>li>a{color: white;}
.qty{width:20px; height:20px; line-height:20px; font-size: 12px; text-align: center; background-color: darkred; color: white; border-radius: 50%;}
</style>
