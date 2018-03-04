import * as types from "./mutation-type"


export default{
	[types.CHANGE_PRODUCTQTY](state,obj){
		//更改购物车中商品的数量
		alert(obj.id+";"+obj.qty);
	},
	[types.DELL_PRODUCT](state,id){
		//删除购物车中指定的商品
		alert(id);
	}
}
