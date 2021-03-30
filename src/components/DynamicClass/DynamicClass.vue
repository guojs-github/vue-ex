<template>
	<!--动态样式类-->
	<div class='-content dynamic-class'>
		<div class='-title'>
			动态样式类
		</div>

		<div class='-row'>
			<div class='-inline -ef-click -light-red -red-button switch-class' :class='{ blue: flag }' @click='onSwitch'>
				点击切换样式
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DynamicClass', 
	
	components: {
	},
	
	data() {
		return {
			flag: false
		};
	},

	methods: {	
		onSwitch() {
			console.log('On switch.');
			
			this.flag = !this.flag;
		}
		
		/*************************/
	}
};
</script>

<style scoped src='./DynamicClass.less' lang='less'/>
<style scoped>
</style>
