<!--渲染函数-->
<template>
	<div class='-content render'>
		<div class='-title'>
			渲染函数
		</div>

		<div class='row-demo'>
			<div class='sub-title'>
				标题组件
			</div>
			<anchored-heading :level='1'> <span>Hello</span> world! 1 </anchored-heading>
			<anchored-heading :level='2'> <span>Hello</span> world! 2</anchored-heading>
			<anchored-heading :level='3'> <span>Hello</span> world! 3</anchored-heading>
		</div>

		<div class='row-demo'>
			<div class='sub-title'>
				交互组件
			</div>
			<div>
				{{ ageTitle}}:{{ ageValue }}
			</div>
			<interaction 
				v-model:age='ageValue'
				@click-once='onClickOnce'>
				年龄
			</interaction>
		</div>
	</div>
</template>

<script>
import AnchoredHeading from './AnchoredHeading.jsx';
import Interaction from './Interaction.jsx';

export default {
	name: 'Render', 
	
	components: {
		AnchoredHeading,
		Interaction
	},
	
	data() {
		return {
			ageValue: 10,
			ageTitle: '年龄'
		};
	},

	methods: {	
		onClickOnce() {
			alert('已经点了一次了！');
		}
		/*************************/
	}
};
</script>

<style scoped src='./Render.less' lang='less'/>
<style scoped>
</style>
