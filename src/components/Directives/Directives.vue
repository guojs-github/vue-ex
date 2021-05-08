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
			<input type='range' min='0' max='500' v-model='padding'>
			<p v-pin:[direction]='padding'>固定在页面{{direction}}。距离{{padding}}px。</p>
		</div>
	</div>
</template>

<script>
import pin from './Pin.js';

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
		},
		pin: pin
	},
	
	data() {
		return {
			direction: 'right',
			padding: 200
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
