<template>
  <div class="account text-left">
  	<div class="container mt50">
  		<div class="row">
	    	<h3>{{ msg }}</h3>
	    	<hr />
	    	<table class="table table-striped text-center" v-for="(item,key) in cart">
	    		<caption>{{key}}</caption>
	    		<thead>
			    	<tr>
			    		<th>图片</th>
			    		<th>标题</th>
			    		<th>单价</th>
			    		<th>数量表单</th>
			    		<th>总价</th>
			    		<th>操作</th>
			    	</tr>
		    	</thead>
		    	<tbody>
		    		<tr v-for="pitem in item">
		    			<td><img :src="pitem.imglink" :alt="pitem.spec" :title="pitem.spec" class="img-responsive"/></td>
		    			<td><a :href="'/coupons/'+pitem.id">{{pitem.title}}</a></td>
		    			<td>{{pitem.price}}</td>
		    			<td>
		    					<calc-qty v-bind:qty="pitem.qty" v-bind:id="pitem.id" v-on:getQty="changeQty"></calc-qty>
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
  		return this.$store.state.cart;
  	}
  },
  methods : {
  	del(id){
  		alert(id);
  	},
  	changeQty(eventData){
  		var obj = {
  			id : eventData.id,
  			qty : eventData.qty
  		}
  		this.$store.commit(types.CHANGE_PRODUCTQTY,obj);
  	}
  },
  components : {
  	calcQty
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
caption{
	caption-side: top;
}
.table{table-layout: fixed;}
.table th:nth-child(1){width: 10%;}
.table th:nth-child(2){width: 15%;}
.table th:nth-child(3){width: 10%;}
.table th:nth-child(4){width: 15%;}
</style>
