<template>
	<!--全局组件A-->
	<div class='global-component-a'>
		<div class='title'>
			<slot>全局组件A</slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'GlobalComponentA', 
	
	components: {
	},
	
	data() {
		return {};
	},

	methods: {	
		/*************************/
	}
};
</script>

<style scoped src='./GlobalComponentA.less' lang='less'/>
<style scoped>
</style>
