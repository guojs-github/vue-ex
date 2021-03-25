<template>
	<div class='-content counter'>
		<div class='-title'>
			计数器
		</div>

		<div class='-row'>
			现在的数字是：{{count}}
		</div>
	</div>
</template>

<script>
export default {
	name: 'Counter', 
	
	components: {
	},
	
	data() {
		return {
			count: 0,
			timer: null
		};
	},

	created() {
		console.log('Counter created');
		
		this.init();
	},

	mounted () {
		console.log('On mounted counter.');
	},
	
	beforeUnmount() {
		console.log('On before destory counter.');

		this.uninit();
	},

	methods: {	
		/*************************/
		init() {
			console.log('Initialize.');

			// Start timer
			this.timer = setInterval(() => {
				console.log('Count number + 1');

				this.count++;
			}, 1000);
		},

		uninit() {
			console.log('Uninitialize.');
			
			// Stop timer
			this.timer && clearInterval(this.timer);
		}
	}
};
</script>

<style scoped src='./Counter.less' lang='less'/>
<style scoped>
</style>
