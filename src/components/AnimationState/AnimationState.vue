<!--状态动画演示-->
<template>
	<div class='-content animation-list'>
		<div class='-title'>
			状态动画演示
		</div>

		<div class='row-demo'>
			<div class='sub-title'>
				样例1
			</div>

			<input v-model.number='number' type='number' step='20' />
			<p>{{ animatedNumber }}</p>			
		</div>

		<div class='row-demo'>
			<div class='sub-title'>
				样例2
			</div>
			
			<svg class='demo-svg' width='200' height='200'>
				<!-- 例如 points="220,100 300,210 170,250"就是连接三个点的多边形 -->
				<polygon
					:points='points'/>
				<!-- (cx, cy)为圆心，r为半径 -->
				<circle 
					cx='100' 
					cy='100' 
					r='90'/>
			</svg>			
			<label>边数: {{ sides }}</label>
			<input 
				type='range' 
				min='3' 
				max='500' 
				v-model.number='sides'/>
			<label>最小半径: {{ minRadius }}%</label>
			<input 
				type='range' 
				min='0' 
				max='100' 
				v-model.number='minRadius'/>				
			<label>自动更新间隔: {{ updateInterval }} 秒</label>
			<input 
				type='range' 
				min='0' max='10' 
				v-model.number='updateInterval'/>
		</div>
	</div>
</template>

<script>
import { gsap } from 'gsap';

const defaultSides = 10;

export default {
	name: 'AnimationState', 
	
	components: {},
	
	data() {
		return {
			number: 0,
			tweenedNumber: 0,

			stats: [],
			points: '', // 多边形的顶点描述
			sides: defaultSides, // 多边形变数
			minRadius: 50, // 最小半径
			interval: null, // 任务句柄
			updateInterval: 0 // 动画长度毫秒
		};
	},

	computed: {
		animatedNumber() {
			return this.tweenedNumber.toFixed(0);
		}
	},

	watch: {
		number(newValue) {
			gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue });
		},

		sides(newSides, oldSides) { // 边数改变了
			let sidesDifference = newSides - oldSides;
			let stats = JSON.parse(JSON.stringify(this.stats));
			if (sidesDifference > 0) { // 边数有增加
				for (let i = 1; i <= sidesDifference; i++) {
					stats.push(this.newRandomValue()); // 向stats添加一些随机值
				}
			} else { // 没变化或者减少
				let absoluteSidesDifference = Math.abs(sidesDifference);
				for (let i = 1; i <= absoluteSidesDifference; i++) { // 删除减少的数量
					stats.shift(); // 删除第一个元素
				}
			}
						
			this.stats = stats; // 更新
		},

		stats(newStats) {
			gsap.to(
				this.$data, // 源数据结构
				0.5, // 过程秒数 
				{ points: this.generatePoints(newStats) } // 改变部分数据
			);
		},
		
		minRadius() { // 修改了最小半径
			let stats = JSON.parse(JSON.stringify(this.stats));
			for (let i = 0; i < stats.length; i++) { // 重填所有值
				stats[i] = this.newRandomValue();
			}
			
			this.stats = stats; // 更新
		},

		updateInterval() { // 刷新间隔更新，刷新自动更新机制
			this.resetInterval();
		}		
	},
	
	mounted() {
		this.init();
	},
	
	methods: {
		/*************************/
		init() {
			console.log('Initialize AnimationState');
			
			this.stats = Array
				.apply(null, { length: defaultSides }) // 生成1个长度为defaultSides的数组，值都为null
				.map(() => 100); // 为数组所有项填值100
				
			this.points = this.generatePoints(this.stats);
		},

		generatePoints(stats) { // 依据stats设置转换为多边形tag的points设置字符串
			let total = stats.length;
			return stats
				.map((stat, index) => {
					let point = this.valueToPoint(stat, index, total);
					return point.x + "," + point.y;
				})
				.join(" ");
		},

		valueToPoint(value/* stat数组中的值 */, index/* stat数组项index */, total/* stat数组长度 */) { // 依据stat设置转换为圆上坐标
			let x = 0;
			let y = -value * 0.9;
			let angle = ((Math.PI * 2) / total) * index;
			let cos = Math.cos(angle);
			let sin = Math.sin(angle);
			let tx = x * cos - y * sin + 100;
			let ty = x * sin + y * cos + 100;

			return { x: tx, y: ty };
		},

		newRandomValue() {
			// 返回stat value，感觉就是半径值
			// 最小半径值 + （100（最大半径设置） - 最小半径值） * 0到1之间的随机值 
			return Math.ceil(this.minRadius + Math.random() * (100 - this.minRadius));
		},

		randomizeStats() {
			// var vm = this;
			this.stats = this.stats.map(() => this.newRandomValue());
		},
	
		resetInterval() { // 重新设置自动更新机制
			// let _this = this;
			
			// 先停止现有任务
			clearInterval(this.interval); 
			
			// 启动新的任务
			if (this.updateInterval <= 0) {
				this.interval = null;
				return;
			}
			this.interval = setInterval(() => {
				this.randomizeStats();
			}, this.updateInterval * 1000);
		}
	}
};
</script>

<style src='./AnimationState.less' lang='less'/>
<style scoped>
</style>
