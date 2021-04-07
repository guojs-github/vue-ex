<template>
	<!--自定义事件-->
	<div class='-content custom-event'>
		<div class='-title'>
			自定义事件
		</div>
		
		<div class='-row'>
			【编号】{{ no }}
		</div>

		<div class='-row'>
			【姓氏】{{ lastName }}
		</div>

		<div class='-row'>
			【中间】{{ midName }}
		</div>

		<div class='-row'>
			【名字】{{ firstName }}
		</div>
		
		<div class='-row'>
			<custom-event-component
				v-model.capitalize = 'no'
				v-model:lastName = 'lastName'
				v-model:midName.capitalize.trim = 'midName'
				v-model:firstName = 'firstName'/>
		</div>
	</div>
</template>

<script>
import CustomEventComponent from './CustomEventComponent.vue';

export default {
	name: 'CustomEvent', 
	
	components: {
		CustomEventComponent
	},
	
	data() {
		return {
			no: 'A000001',
			lastName: '张',
			firstName: '三丰',
			midName: 'China'
		};
	},

	methods: {	
		/*************************/
	}
};
</script>

<style scoped src='./CustomEvent.less' lang='less'/>
<style scoped>
</style>
