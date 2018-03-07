//存放购物车信息

const state = {
	cart : {
		coupons : [
			{
				id : 2,
				qty : 10
			},
			{
				id : 4,
				qty : 5
			}
		],
		packages : [
			{
				id : 11,
				qty : 2
			}
		],
		single : [
			{
				id : 21,
				qty : 4
			},
			{
				id : 29,
				qty : 4
			}
		]
	}
}

const getters = {
	cartExtend(state, getters, rootState, rootGetters){
		var cartExtend = {};
		for(let p in state.cart){
			if( rootState.b.product.hasOwnProperty(p) ){
				for(let i = 0 ; i<state.cart[p].length ; i++){
					//查找实时快照
					for(let j = 0 ; j<rootState.b.product[p].length ; j++){
						if( !(cartExtend[p] instanceof Array) ){
							cartExtend[p] = [];
						}
						
						if( state.cart[p][i].id == rootState.b.product[p][j].id){
							//在实时快照中能找到
							cartExtend[p].push({
								id : rootState.b.product[p][j].id,
								pid : rootState.b.product[p][j].pid,
								qty : state.cart[p][i].qty,
								title : rootState.b.product[p][j].title,
								price : rootState.b.product[p][j].price,
								spec : rootState.b.product[p][j].spec,
								imglink : rootState.b.product[p][j].imglink,
							});
						}
					}
					//判断在实时快照中是否找到
					if( cartExtend[p].length<i+1 ){
							//在实时快照中找不到，则去查所有产品快照
							for(let k = 0 ; k<rootState.a.product[p].length ; k++){
								if( state.cart[p][i].id == rootState.a.product[p][k].id){
									cartExtend[p].push({
										id : rootState.a.product[p][k].id,
										pid : rootState.a.product[p][k].pid,
										qty : state.cart[p][i].qty,
										title : rootState.a.product[p][k].title,
										price : rootState.a.product[p][k].price,
										spec : rootState.a.product[p][k].spec,
										imglink : rootState.a.product[p][k].imglink,
										isDel : true
									});
								}
							}
					}
				}
			}
		}
		return cartExtend;
	},
	allProductQty(state, getters, rootState, rootGetters){
		var qty = 0;
		for(let p in state.cart){
			for(let i = 0 ; i < state.cart[p].length; i++){
				qty+=parseInt(state.cart[p][i].qty);
			}
		}
		return qty;
	}
}

export default{
	state,
	getters
}

