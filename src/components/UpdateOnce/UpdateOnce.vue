<template>
	<div class='-content update-once'>
		<div class='-title'>
			只更新一次与每次都更新
		</div>

		<div class='-row' v-once>
			显示时间（不变化）：{{ currentTime }}
		</div>
		<div class='-row'>
			显示时间：{{ currentTime }}
		</div>

		<div class='-row'>
			<div class='-inline -ef-click -light-red -red-button test-print' @click='onUpdateTime'>
				更新时间
			</div>
		</div>		
	</div>
</template>

<script>
export default {
	name: 'UpdateOnce', 
	
	components: {
	},
	
	data() {
		return {
			currentTime: new Date()
		};
	},

	created() {
		console.log('ShowOnce created.');
		
		this.init();
	},

	mounted () {
		console.log('ShowOnce mounted.');
	},
	
	beforeUnmount() {
		console.log('ShowOnce before unmount.');

		this.uninit();
	},

	methods: {	
		onUpdateTime() {
			console.log('Update time.');
			
			this.currentTime = new Date();
		},
		
		/*************************/
		init() {
			console.log('Initialize.');
		},

		uninit() {
			console.log('Uninitialize.');
		}
	}
};
</script>

<style scoped src='./UpdateOnce.less' lang='less'/>
<style scoped>
</style>
