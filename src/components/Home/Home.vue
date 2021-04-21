<template>
	<!--主页-->
	<div class='-content home'>
		<div class='-title'>
			功能演示
		</div>

		<div class='-row functions'>
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
			<div class='-inline -ef-click -light-red -red-button test-dynamic-class' @click='onDynamicClass'>
				动态样式类
			</div>
			<div class='-inline -ef-click -light-red -red-button test-event-handler' @click='onEventHandler'>
				事件处理
			</div>
			<div class='-inline -ef-click -light-red -red-button test-input' @click='onInput'>
				输入控件演示
			</div>
			<div class='-inline -ef-click -light-red -red-button test-global-component' @click='onGlobalComponent'>
				全局控件演示
			</div>
			<div class='-inline -ef-click -light-red -red-button test-props' @click='onProps'>
				属性演示
			</div>
			<div class='-inline -ef-click -light-red -red-button test-none-prop-attrs' @click='onNonePropAttrs'>
				默认属性演示
			</div>
			<div class='-inline -ef-click -light-red -red-button test-custom-event' @click='onCustomEvent'>
				自定义事件
			</div>
			<div class='-inline -ef-click -light-red -red-button test-slot' @click='onSlot'>
				Slot功能
			</div>
			<div class='-inline -ef-click -light-red -red-button test-provide-inject' @click='onProvideInject'>
				Provide&Inject
			</div>
			<div class='-inline -ef-click -light-red -red-button test-provide-inject' @click='onDynamicLoad'>
				动态加载组件
			</div>
			<div class='-inline -ef-click -light-red -red-button test-provide-inject' @click='onAnimation'>
				动画演示
			</div>
			<div class='-inline -ef-click -light-red -red-button test-provide-inject' @click='onAnimationList'>
				列表动画演示
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

		onDynamicClass() {
			console.log('On demo dynamic class');
			
			this.route('DynamicClass');
		},

		onEventHandler() {
			console.log('On demo event handler');
			
			this.route('EventHandler');
		},

		onInput() {
			console.log('On demo input control');
			
			this.route('Input');
		},

		onGlobalComponent() {
			console.log('On demo global component');
			
			this.route('GlobalComponent');
		},

		onProps() {
			console.log('On demo component props');
			
			this.route('Props');
		},

		onNonePropAttrs() {
			console.log('On demo component none-prop attrs');
			
			this.route('NonePropAttrs');
		},

		onCustomEvent() {
			console.log('On demo custom event');
			
			this.route('CustomEvent');
		},

		onSlot() {
			console.log('On demo slot');
			
			this.route('Slot');
		},

		onProvideInject() {
			console.log('On demo provide&Inject');
			
			this.route('ProvideInject');
		},

		onDynamicLoad() {
			console.log('On demo dynamic load');
			
			this.route('DynamicLoad');
		},

		onAnimation() {
			console.log('On demo animation');
			
			this.route('Animation');
		},

		onAnimationList() {
			console.log('On demo animation list');
			
			this.route('AnimationList');
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
