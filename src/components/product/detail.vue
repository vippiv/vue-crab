<template>
  <div class="detail">
    <div class="container text-left">
    	<div class="row" style="margin: 50px 0px;">
    		<div class="col-md-6">
    			<img :src="imglink" class="img-responsive" style="margin-left: -15px;"/>
    		</div>
    		<div class="col-md-6">
    			<h3 class="red">{{title}}</h3>
    			<p>全国统一零售价：{{price}} 量大从优</p>
    			<p style="margin-bottom: 0;"><strong>礼盒包含</strong></p>
    			<p>{{spec}}</p>
    			<div class="row">
    				<div class="col-sm-6"><input type="number" class="form-control" placeholder="请输入数字，默认为一份"/></div>
    				<div class="col-sm-6"><button class="btn btn-primary">加入购物车</button></div>
    			</div>
    		</div>
    	</div>
    	<div class="row">
    		<img src="../../assets/dec01.jpg" class="img-responsive" />
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      msg: '产品详情',
      id : "",
      title : "",
      price : "",
      spec : "",
      imglink : ""
    }
  },
  computed : {
  	'coupons'(){
  		return this.$store.state.product.coupons;
  	},
  	'packages'(){
  		return this.$store.state.product.packages;
  	},
  	'single'(){
  		return this.$store.state.product.single;
  	}
  },
  mounted(){
  	let flag = this.$route.path.match(/\/(\w+)\//)[1];
  	let id = this.$route.params.id;
  	for(var i=0;i<this[flag].length;i++){
	  		if(this[flag][i]["pid"] == id){
	  			this.id = this[flag][i].id;
	  			this.title = this[flag][i].title;
	  			this.price = this[flag][i].price;
	  			this.spec = this[flag][i].spec;
	  			this.imglink = this[flag][i].imglink;
	  			break;
	  		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
