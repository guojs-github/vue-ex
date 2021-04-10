<template>
	<!--Provide&Inject-->
	<div class='-content provide-inject'>
		<div class='-title'>
			Provide&Inject
		</div>
		
		<div class='-row data'>
			<input v-model='data'/>
		</div>
		
		<child :data='data'/>
	</div>
</template>

<script>
import { computed } from 'vue';
import Child from './Child.vue';

export default {
	name: 'ProvideInject', 
	
	components: {
		Child
	},
	
	provide() {
		return {
			dataLength: computed(() => this.data.length) // 提供实时变化的数据源
		};
	},
	
	data() {
		return {
			data: '样例数据'
		};
	},
	
	computed: {
		dataLength: function() {
			return this.data.length;
		}
	},
	
	methods: {	
		/*************************/
	}
};
</script>

<style scoped src='./ProvideInject.less' lang='less'/>
<style scoped>
</style>
