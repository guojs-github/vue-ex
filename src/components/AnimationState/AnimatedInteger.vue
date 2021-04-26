<!--动画整数-->
<template>
	<span>{{ fullValue }}</span>
</template>

<script>
import { gsap } from 'gsap';

export default {
	name: 'AnimatedInteger', 
	
	components: {},

	props: {
		value: {
			type: Number,
			required: true
		}
	},	

	data() {
		return {
			tweeningValue: 0
		};
	},

	computed: {
		fullValue() {
			return Math.floor(this.tweeningValue); // 向下取整
		}
	},

	watch: {
		value(newValue, oldValue) { // 绑定数变化
			this.tween(newValue, oldValue); // 动画
		}	
	},
	
	mounted() {
		this.init();
	},
	
	methods: {
		/*************************/
		init() {
			console.log('Initialize AnimatedInteger');

			this.tween(this.value, 0); // 初始值动画
		},

		tween(newValue, oldValue) { // 改变值时候，展示动画
			console.log(`${oldValue} => ${newValue}`);
			
			gsap.to(this.$data, {
				duration: 0.5,
				tweeningValue: newValue,
				ease: 'sine'
			});
		}
	}
};
</script>

<style src='./AnimationState.less' lang='less'/>
<style scoped>
</style>
