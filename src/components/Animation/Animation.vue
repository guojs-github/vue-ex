<!--动画演示-->
<template>
	<div 
		class='-content animation'
		:style='{ backgroundColor: `hsl(${x}, 80%, 50%)` }'
		@mousemove='onMouseMove'>
		<div class='-title'>
			动画演示
		</div>

		<div class='-row'>
			X：{{ x }}
		</div>

		<div class='-row functions'>
			<div class='-inline -ef-click -light-red -red-button test-transition' @click='show=!show'>
				打个招呼吧
			</div>
			<transition name='fade'>
				<span v-if='show'>【您好！】</span>
			</transition>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Animation', 
	
	components: {
	},
	
	data() {
		return {
			x: 0,
			show: true
		};
	},

	methods: {	
		onMouseMove(e) {
			this.x = e.offsetX;
		}
		
		/*************************/
	}
};
</script>

<style scoped src='./Animation.less' lang='less'/>
<style scoped>
</style>
