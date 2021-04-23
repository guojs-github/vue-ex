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
	</div>
</template>

<script>
import { gsap } from 'gsap';

export default {
	name: 'AnimationState', 
	
	components: {},
	
	data() {
		return {
			number: 0,
			tweenedNumber: 0
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
		}
	},
	
	methods: {
		/*************************/
	}
};
</script>

<style src='./AnimationState.less' lang='less'/>
<style scoped>
</style>
