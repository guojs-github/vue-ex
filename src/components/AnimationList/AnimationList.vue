<!--列表动画演示-->
<template>
	<div class='-content animation-list'>
		<div class='-title'>
			列表动画演示
		</div>
		
		<div class='row-demo'>
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
	</div>
</template>

<script>
export default {
	name: 'AnimationList', 
	
	components: {},
	
	data() {
		return {
			items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			nextNum: 10		
		};
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
		}
	}
};
</script>

<style src='./AnimationList.less' lang='less'/>
<style scoped>
</style>
