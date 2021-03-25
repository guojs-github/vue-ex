<template>
	<div class='-content home'>
		<div class='-title'>
			功能演示
		</div>

		<div class='-row'>
			<div class='-inline -ef-click -light-red -red-button test-print' @click='onCount'>
				计数器
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home', 
	
	components: {
	},
	
	data() {
		return {
		};
	},

	created() {
		console.log('Home created');
		
		this.init();
	},

	mounted () {
		console.log('On mounted home.');
	},
	
	beforeUnmount() {
		console.log('On before destory home.');

		this.uninit();
	},

	methods: {	
		onCount() {
			console.log('On demo count');
			
			this.$router.push({
				path: '/Counter',
				name: 'Counter'
			});
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

<style scoped src='./Home.less' lang='less'/>
<style scoped>
</style>
