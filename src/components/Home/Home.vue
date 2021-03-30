<template>
	<!--主页-->
	<div class='-content home'>
		<div class='-title'>
			功能演示
		</div>

		<div class='-row'>
			<div class='-inline -ef-click -light-red -red-button test-count' @click='onCount'>
				计数器
			</div>
			<div class='-inline -ef-click -light-red -red-button test-string' @click='onString'>
				字符串
			</div>
			<div class='-inline -ef-click -light-red -red-button test-update-once' @click='onUpdateOnce'>
				只更新一次显示
			</div>
			<div class='-inline -ef-click -light-red -red-button test-raw-html' @click='onRawHtml'>
				动态加载HTML
			</div>
			<div class='-inline -ef-click -light-red -red-button test-debounce' @click='onDebounce'>
				消除抖动
			</div>
			<div class='-inline -ef-click -light-red -red-button test-throttle' @click='onThrottle'>
				节流阀
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
			
			this.route('Counter');
		},

		onString() {
			console.log('On demo string');
			
			this.route('String');
		},

		onUpdateOnce() {
			console.log('On demo update once');
			
			this.route('UpdateOnce');
		},

		onRawHtml() {
			console.log('On demo raw html');
			
			this.route('RawHtml');
		},

		onDebounce() {
			console.log('On demo debounce');
			
			this.route('Debounce');
		},

		onThrottle() {
			console.log('On demo throttle');
			
			this.route('Throttle');
		},

		/*************************/
		init() {
			console.log('Initialize.');
		},

		uninit() {
			console.log('Uninitialize.');
		},
		
		route(path) {
			console.log(`Route to ${path}`);

			this.$router.push({
				path: `/${path}`,
				name: path
			});
		}
	}
};
</script>

<style scoped src='./Home.less' lang='less'/>
<style scoped>
</style>
