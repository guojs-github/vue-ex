<template>
	<!--孙子组件-->
	<div class='grand-child'>		
		<span class='title'>我是孙子</span>
		<div>
			{{ dataLength.value }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'GrandChild', 
	
	components: {
	},
	
	props: {
		data: {
		}
	},
	
	data() {
		return {};
	},
	
	inject: ['dataLength'], // 获取实时变化的数据注入

	methods: {	
		/*************************/
	}
};
</script>

<style scoped src='./GrandChild.less' lang='less'/>
<style scoped>
</style>
