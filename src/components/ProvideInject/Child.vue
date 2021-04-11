<template>
	<!--孩子组件-->
	<div class='child'>		
		<span class='title'>我是儿子</span>
		<div>
			数据：{{ data }}
		</div>
		
		<grand-child/>
	</div>
</template>

<script>
import GrandChild from './GrandChild.vue';

export default {
	name: 'Child', 
	
	components: {
		GrandChild
	},
	
	props: {
		data: {
			type: String,
			required: true
		}
	},
	
	data() {
		return {};
	},

	methods: {	
		/*************************/
	}
};
</script>

<style scoped src='./Child.less' lang='less'/>
<style scoped>
</style>
