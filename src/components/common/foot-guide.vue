<template>
  <div class="foot-guide">
  	<div class="container">
	  	<div class="quality text-center">
	  		<img src="../../assets/q.png" class="img-responsive"/>
	  	</div>
	    <p>{{ msg }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footGuide',
  data () {
    return {
      msg: '版权所有  大闸蟹公司  联系电话：000-0000000'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.quality{margin: 15px 0px;}
</style>
