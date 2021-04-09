<template>
	<!--Slot功能-->
	<div class='-content slot'>
		<div class='-title'>
			Slot功能
		</div>
		
		<slot-component :items='items'/>

		<slot-component 
			:items='items'
			:footFunc='customizedFootFunc'>
			<template #default>
				Hello！这是我的标题
			</template>
			<template #item='{ item }'>
				<span class='user-item'>{{ item }}</span>
			</template>
			<template #foot='{ footFunc }'>
				<span class='user-bottom'>{{ footFunc() }}</span>
			</template>
		</slot-component>		
	</div>
</template>

<script>
import SlotComponent from './SlotComponent.vue';

export default {
	name: 'Slot', 
	
	components: {
		SlotComponent
	},
	
	data() {
		return {
			items: ['张三丰', '郭靖', '黄蓉', '郭襄', '韦小宝']
		};
	},

	methods: {	
		/*************************/
		customizedFootFunc() {
			console.log('Customized foot function');
			
			return '这是GuoJS的测试信息......';
		}
	}
};
</script>

<style scoped src='./Slot.less' lang='less'/>
<style scoped>
	.user-item {
		color: red; 
		font-size: 10px;
	}

	.user-bottom {
		color: white; 
		font-size: 10px;
		background-color: black;
	}
</style>
