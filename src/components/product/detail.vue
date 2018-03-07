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
    				<div class="col-sm-6"><input type="number" class="form-control" placeholder="请输入数字，默认为一份" v-model="qty"/></div>
    				<div class="col-sm-6"><button class="btn btn-primary" @click="add(id,type)">加入购物车</button></div>
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
	import * as types from "../../store/mutation-type"
export default {
  name: 'detail',
  data () {
    return {
      msg: '产品详情',
      id : "",
      title : "",
      price : "",
      spec : "",
      imglink : "",
      type : "",
      qty : ""
    }
  },
  computed : {
  	'coupons'(){
  		return this.$store.state.b.product.coupons;
  	},
  	'packages'(){
  		return this.$store.state.b.product.packages;
  	},
  	'single'(){
  		return this.$store.state.b.product.single;
  	},
  },
  methods : {
  	add(id,type){
  		var obj = {
  			id : id,
  			type : type,
  			qty : this.qty
  		}
  		this.$store.commit(types.CHANGE_PRODUCTQTY,obj);
//		setTimeout(function(){
//			alert('加入成功');
//		},0);
  	}
  },
  filters : {
  	minQty(){
  		if(this.qty<0){
  			return 0;
  		}
  		return this.qty;
  	}
  },
  mounted(){
  	let flag = this.$route.path.match(/\/(\w+)\//)[1];
  	let id = this.$route.params.id;
  	for(var i=0;i<this[flag].length;i++){
	  		if(this[flag][i]["id"] == id){
	  			this.id = this[flag][i].id;
	  			this.title = this[flag][i].title;
	  			this.price = this[flag][i].price;
	  			this.spec = this[flag][i].spec;
	  			this.imglink = this[flag][i].imglink;
	  			break;
	  		}
  	}
  	this.type = flag;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
