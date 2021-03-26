<template>
	<div class='-content string'>
		<div class='-title'>
			字符串
		</div>

		<div class='-row'>
			<div class='-inline -ef-click -light-red -red-button test-print' @click='onReverse'>
				颠倒字符串：{{ reverseString }}
			</div>
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
			reverseString: "这是一个非常有趣的试验！0123456789"
		};
	},

	created() {
		console.log('String created');
		
		this.init();
	},

	mounted () {
		console.log('On mounted string.');
	},
	
	beforeUnmount() {
		console.log('On before unmount string.');

		this.uninit();
	},

	methods: {	
		onReverse() {
			console.log('Reverse string.');
			
			this.reverseString = this.reverseString.split('').reverse().join('');
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

<style scoped src='./String.less' lang='less'/>
<style scoped>
</style>
