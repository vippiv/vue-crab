import * as types from "./mutation-type"


export default{
	[types.CHANGE_PRODUCTQTY](state,obj){
		//更改购物车中商品的数量
		var exist = false;
		//判断购物车中是否已经存在该商品，如果有则直接修改数量
		for( let i = 0 ; i < state.c.cart[obj.type].length ; i++ ){
			if( obj.id == state.c.cart[obj.type][i].id ){
				state.c.cart[obj.type][i].qty = obj.qty;
				exist = true;
			}
		}
		if(!exist){
			state.c.cart[obj.type].push({
				id : obj.id,
				qty : obj.qty
			});
		}
	},
	[types.DELL_PRODUCT](state,id){
		//删除购物车中指定的商品
		var index = 0 , type = "";
		for(var p in state.c.cart){
			for(let i = 0;i<state.c.cart[p].length;i++){
				if(id === state.c.cart[p][i].id){
					index = i;
					type = p;
				}
			}
		}
		state.c.cart[type].splice(index,1);
	}
}
