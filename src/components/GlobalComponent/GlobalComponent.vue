<template>
	<!--全局组件演示-->
	<div class='-content debounce'>
		<div class='-title'>
			全局组件演示
		</div>

		<global-component-a/>

		<global-component-a :key='index' v-for='index in 10'>
			全局组件{{index}}
		</global-component-a>
	</div>
</template>

<script>
export default {
	name: 'GlobalComponent', 
	
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

<style scoped src='./GlobalComponent.less' lang='less'/>
<style scoped>
</style>
