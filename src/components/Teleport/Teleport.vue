<!--Teleport-->
<template>
	<div class='-content teleport'>
		<div class='-title'>
			Teleport（传送）
		</div>

		<div class='row-demo'>
			<div class='sub-title'>
				父元素
			</div>
			<child/>
		</div>
	
		<child-4-app/>
	</div>
</template>

<script>
import Child from './Child.vue';
import Child4App from './Child4App.vue';

export default {
	name: 'Teleport', 
	
	components: {
		Child,
		Child4App
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

<style scoped src='./Teleport.less' lang='less'/>
<style scoped>
</style>
