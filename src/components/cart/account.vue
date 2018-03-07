<template>
  <div class="account text-left">
  	<div class="container">
  		<div class="row">
	    	<h3 style="margin-top: 50px;">{{ msg }}</h3>
	    	<hr />
	    	<table class="table table-striped text-center" v-for="(item,key) in cart" :key="key">
	    		<caption>{{key | transformName}}</caption>
	    		<thead>
			    	<tr>
			    		<th></th>
			    		<th>图片</th>
			    		<th>标题</th>
			    		<th>单价</th>
			    		<th>数量表单</th>
			    		<th>总价</th>
			    		<th>操作</th>
			    	</tr>
		    	</thead>
		    	<tbody>
		    		<tr v-for="pitem in item" v-bind:class={del:pitem.isDel}>
		    			<td><span v-if="pitem.isDel" class="red">无效</span></td>
		    			<td><img :src="pitem.imglink" :alt="pitem.spec" :title="pitem.spec" class="img-responsive"/></td>
		    			<td><a :href="'/#/'+key+'/'+pitem.id">{{pitem.title}}</a></td>
		    			<td>{{pitem.price}}</td>
		    			<td>
		    					<calc-qty v-bind:qty="pitem.qty" v-bind:id="pitem.id" v-bind:type="key" v-on:getQty="changeQty" ></calc-qty>
		    			</td>
		    			<td>{{parseFloat(pitem.price) * pitem.qty}}</td>
		    			<td><span @click="del(pitem.id)" class="pointer">删除</span></td>
		    		</tr>
	    		</tbody>
	    	</table>
    	</div>
    </div>
  </div>
</template>

<script>
	import * as types from "../../store/mutation-type"
	import calcQty from "./calc-qty"
export default {
  name: 'account',
  data () {
    return {
      msg: '结算中心',
      qty : 10
    }
  },
  computed : {
  	cart(){
  		return this.$store.getters.cartExtend;
  	}
  },
  methods : {
  	del(id){
  		this.$store.commit(types.DELL_PRODUCT,id);
  	},
  	changeQty(eventData){
  		var obj = {
  			id : eventData.id,
  			qty : eventData.qty,
  			type : eventData.type,
  		}
  		this.$store.commit(types.CHANGE_PRODUCTQTY,obj);
  	}
  },
  components : {
  	calcQty
  },
  filters : {
  	transformName(n){
  		var name = "";
  		switch(n){
  			case "coupons":
  				name = "大闸蟹礼券";
  				break;
  			case "packages":
  				name = "大闸蟹礼盒";
  				break;
  			case "single":
  				name = "单品";
  				break;
  		}
  		return name;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
caption{
	caption-side: top;
}
.table{table-layout: fixed;}
.table th:nth-child(1){width: 6%;}
.table th:nth-child(2){width: 10%;}
.table th:nth-child(2){width: 15%;}
.table th:nth-child(4){width: 10%;}
.table th:nth-child(5){width: 15%;}
.del{color: #CCC;}
.del a{color: #CCC;}
</style>
