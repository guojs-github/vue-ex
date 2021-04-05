<template>
	<!--属性演示-->
	<div class='-content props'>
		<div class='-title'>
			属性演示
		</div>

		<props-component
			:='data'
			:given-title = 'data.title'
			:a-number = 'data.number'
			:a-number-or-blean = 'data.numberOrBlean'
			:choice = 'data.choice'
			:time = 'data.time'
			:a-array = 'data.array'
		/>
	</div>
</template>

<script>
import propsComponent from './PropsComponent.vue';

export default {
	name: 'Props', 
	
	components: {
		propsComponent
	},
	
	data() {
		return {
			data: {
				id: 999,
				title: '指定标题',
				number: 1,
				numberOrBlean: true,
				choice: 'hello',
				time: function() { return '今天时休息日哦！';},
				array: ['哈','哈哈','哈哈哈']
			}
		};
	},

	methods: {	
		/*************************/
	}
};
</script>

<style scoped src='./Props.less' lang='less'/>
<style scoped>
</style>
