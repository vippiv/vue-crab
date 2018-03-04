<template>
  <div class="index">
  	<head-guide></head-guide>
  	<div class="container">
			<router-view></router-view>
  	</div>
  	<foot-guide></foot-guide>
  </div>
</template>

<script>
	import headGuide from "./common/head-guide"
	import footGuide from "./common/foot-guide"
export default {
  name: 'index',
  data () {
    return {
      title: '入口文件'
    }
  },
  components : {
  	headGuide,
  	footGuide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
