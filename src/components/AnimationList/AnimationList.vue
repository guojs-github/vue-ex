<!--列表动画演示-->
<template>
	<div class='-content animation-list'>
		<div class='-title'>
			列表动画演示
		</div>
		
		<div class='row-demo'>
			<div class='sub-title'>
				样例1
			</div>
			<div class='-inline -ef-click -light-red -red-button' @click='add'>
				随机添加
			</div>

			<div class='-inline -ef-click -light-red -red-button' @click='del'>
				随机删除
			</div>

			<transition-group name='list' tag='p'> <!--此处的意思是转换后下面列表用一个<p>元素包裹-->
				<span v-for='item in items' :key='item' class='list-item'>
					{{ item }}
				</span>
			</transition-group>
		</div>
		
		<div class='row-demo'>
			<div class='sub-title'>
				样例2
			</div>
			<input v-model='query'/>
			<transition-group
				name='staggered-fade'
				tag='ul'
				:css='false'
				@before-enter='beforeEnter'
				@enter='enter'
				@after-enter='afterEnter'
				@before-leave='beforeLeave'
				@leave='leave'>
				<li v-for='(item, index) in computedList'
					:key='item.msg'
					:data-index='index'>
					{{ item.msg }}
				</li>
			</transition-group>			
		</div>
		
	</div>
</template>

<script>
export default {
	name: 'AnimationList', 
	
	components: {},
	
	data() {
		return {
			items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			nextNum: 10,
			query: '',
			list: [{
				msg: 'Bruce Lee' 
			}, { 
				msg: 'Jackie Chan'
			}, {
				msg: 'Chuck Norris'
			}, {
				msg: 'Jet Li'
			}, {
				msg: 'Kung Fury'
			}]
		};
	},

	computed: {
		computedList() {
			let _this = this;

			return this.list.filter(item => {
				return item.msg.toLowerCase().indexOf(_this.query.toLowerCase()) !== -1;
			});
		}
	},
  
	methods: {
		/*************************/
		randomIndex() { // 生成一个随机位置
			return Math.floor(Math.random() * this.items.length);
		},
		
		add() { // 随机添加一个数字
			this.items.splice(this.randomIndex(), 0, this.nextNum++);
		},
		
		del() { // 随机删除一个数字
			this.items.splice(this.randomIndex(), 1);
		},

		beforeEnter(el) { // JS自定义动画
			el.style.opacity = 0.1;
			el.style.transform = 'scale(0.1, 0.1)';
		},
		
		enter(el, done) { // JS自定义动画
			el.style['transition-property'] = 'all';
			el.style['transition-duration'] = '0.4s';
			el.style['transition-timing-function'] = 'ease';
			setInterval(() => { done(); }, 400);
		},

		afterEnter(el) { // JS自定义动画
			el.style.opacity = 1;
			el.style.transform = 'scale(1, 1)';
		},

		beforeLeave(el) { // JS自定义动画
			el.style.opacity = 0.1;
			el.style.transform = 'scale(0.1, 0.1)';
		},

		leave(el, done) { // JS自定义动画
			el.style['transition-property'] = 'all';
			el.style['transition-duration'] = '0.4s';
			el.style['transition-timing-function'] = 'ease';
			setInterval(() => { done(); }, 400);
		}
		
	}
};
</script>

<style src='./AnimationList.less' lang='less'/>
<style scoped>
</style>
