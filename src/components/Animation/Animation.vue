<!--动画演示-->
<template>
	<div 
		class='-content animation'
		:style='{ backgroundColor: `hsl(${x}, 80%, 50%)` }'
		@mousemove='onMouseMove'>
		<transition
			appear
			appear-to-class='title-appear-to'
			appear-active-class='title-appear-active'>
			<div class='-title'>
				动画演示
			</div>
		</transition>

		<div class='-row'>
			X：{{ x }}
		</div>

		<div class='row-demo'>
			<div class='-inline -ef-click -light-red -red-button' @click='show=!show'>
				打个招呼吧
			</div>
			<transition name='fade'>
				<span v-if='show'>【您好！】</span>
			</transition>
		</div>

		<div class='row-demo'>
			<div class='-inline -ef-click -light-red -red-button' @click='show1=!show1'>
				Say Hi
			</div>
			<transition name='slide-fade'>
				<span v-if='show1'>【Hello！】</span>
			</transition>
		</div>

		<div class='row-demo'>
			<div class='-inline -ef-click -light-red -red-button' @click='show2=!show2'>
				早安
			</div>
			<transition name='bounce'>
				<p v-if='show2'>【早安！】</p>
			</transition>
		</div>

		<div class='row-demo'>
			<div class='-inline -ef-click -light-red -red-button' @click='show3=!show3'>
				Hello
			</div>
			<transition 
				name='bounce-1'
				enter-active-class='bounce-enter-active-1'
				leave-active-class='bounce-leave-active-1'
				:duration='{ enter: 1000, leave: 2000 }'
				@after-enter='onAfterEnter'
				@after-leave='onAfterLeave'>
				<p id='demo-hello' v-if='show3'>【Hello！】进入1s，离开2s</p>
			</transition>
		</div>

		<div class='row-demo'>
			<p>进入和退出动画同时发生（默认）</p>
			<transition name='fade'>
				<div v-if='on' class='-inline -ef-click -light-red -red-button' @click='onSwitch'>
					ON
				</div>
				<div v-else class='-inline -ef-click -light-red -red-button' @click='onSwitch'>
					OFF
				</div>
			</transition>
		</div>

		<div class='row-demo'>
			<p>先进入再退出</p>
			<transition name='fade' mode='in-out'>
				<div v-if='on1' class='-inline -ef-click -light-red -red-button' @click='onSwitch1'>
					ON
				</div>
				<div v-else class='-inline -ef-click -light-red -red-button' @click='onSwitch1'>
					OFF
				</div>
			</transition>
		</div>

		<div class='row-demo'>
			<p>先退出再进入</p>
			<transition name='fade' mode='out-in'>
				<div v-if='on2' class='-inline -ef-click -light-red -red-button' @click='onSwitch2'>
					ON
				</div>
				<div v-else class='-inline -ef-click -light-red -red-button' @click='onSwitch2'>
					OFF
				</div>
			</transition>
		</div>

		<div class='row-demo'>
			<p>动态加载组件</p>
			<input v-model='view' type='radio' value='a' id='a'><label for='a'>A</label>
			<input v-model='view' type='radio' value='b' id='b'><label for='b'>B</label>
			<transition name='fade' mode='out-in'>
				<component :is='view'></component>
			</transition>
		</div>
		
		<div class='row-demo'>
			<div class='-inline -ef-click -light-red -red-button' @click='list=!list'>
				列表显示与隐藏
			</div>
			<template v-for='(item, index) in listItems' :key='index'>
				<transition name='flip'>
					<p class='list-item shadow' v-if='list'>{{ item }}</p>
				</transition>
			</template>
		</div>		

		<div class='row-demo'>
			<div class='-inline -ef-click -light-red -red-button' @click='show4=!show4'>
				JS自定义动画
			</div>

			<transition
				name='user'
				@before-enter='onUserBeforeEnter'
				@enter='enter'
				@before-leave='onUserBeforeLeave'
				@leave='leave'
				:css='false'>
				<p v-show='show4'>Demo</p>
			</transition>
		</div>
	</div>
</template>

<script>
import a from './ComponentA';
import b from './ComponentB';

export default {
	name: 'Animation', 
	
	components: {
		a,
		b
	},
	
	data() {
		return {
			x: 0,
			show: false,
			show1: false,
			show2: false,
			show3: false,
			show4: false,
			on: false,
			on1: false,
			on2: false,
			view: 'a',
			list: false,
			listItems: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
		};
	},

	methods: {	
		onMouseMove(e) {
			this.x = e.offsetX;
		},
		
		onAfterEnter(e) {
			alert(`Transition after enter.【id=${e.id}】`);
		},
		
		onAfterLeave(e) {
			alert(`Transition after leave.【id=${e.id}】`);
		},
		
		onSwitch() {
			this.on = !this.on;
		},
		
		onSwitch1() {
			this.on1 = !this.on1;
		},
		
		onSwitch2() {
			this.on2 = !this.on2;
		},

		onUserBeforeEnter(el) { // JS自定义动画
			el.style.opacity = 1;
		},
		
		onUserBeforeLeave(el) { // JS自定义动画
			el.style.opacity = 0;
		},

		/*************************/
		enter(el, done) { // JS自定义动画
			el.style['transition-property'] = 'opacity';
			el.style['transition-duration'] = '1s';			
			setInterval(() => { done(); }, 3000);
		},

		leave(el, done) { // JS自定义动画
			el.style['transition-property'] = 'opacity';
			el.style['transition-duration'] = '1s';
			setInterval(() => { done(); }, 3000);
		}
	}
};
</script>

<style src='./Animation.less' lang='less'/>
<style scoped>
</style>
