<template>
  <div class="calc-qty">
			<div class="d-flex flex-row">
				  <div class="p-1 pointer" @click="reduce">-</div>
				  <div class="p-2"><input type="text" class="form-control" v-model='size'/></div>
				  <div class="p-1 pointer" @click="increase">+</div>
				</div>
  </div>
</template>

<script>
export default {
  name: 'calcQty',
  data () {
    return {
      msg: '修改商品数量组件',
      size : this.qty
    }
  },
  props : ["qty","id"],
  methods : {
  	reduce(){
  		if(this.size>1){
  			this.size--;
  		}
  		this.emitQty();
  	},
  	increase(){
  		this.size++;
  		this.emitQty();
  	},
  	emitQty(){
  		var obj = {
  			id : this.id,
  			qty : this.size
  		}
  		this.$emit("getQty",obj);
  	}
  },
  watch : {
  	size(){
  		this.emitQty();
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
