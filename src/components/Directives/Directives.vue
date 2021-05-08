<!--Directives-->
<template>
	<div class='-content directives'>
		<div class='-title'>
			自定义指令（Directives）
		</div>

		<div class='row-demo'>
			<div class='sub-title'>
				全局自定义指令
			</div>

			<input v-focus/>			
		</div>

		<div class='row-demo'>
			<div class='sub-title'>
				局部自定义指令
			</div>

			<div v-custom-style='{color:"red", fontWeight:"bold", fontSize:"24px"}'>自定义显示样式</div>
		</div>

		<div class='row-demo'>
			<div class='sub-title'>
				动态参数
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Directives', 
	
	components: {
	},

	directives: { // 局部指令
		customStyle: {
			mounted(el, binding) {
				el.style.color = binding.value.color;
				el.style['font-weight'] = binding.value.fontWeight;
				el.style['font-size'] = binding.value.fontSize;
			}
		}
	},
	
	data() {
		return {
		};
	},

	methods: {
		/*************************/
	}
};
</script>

<style scoped src='./Directives.less' lang='less'/>
<style scoped>
</style>
