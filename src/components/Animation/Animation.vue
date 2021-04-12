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
	</div>
</template>

<script>
export default {
	name: 'Animation', 
	
	components: {
	},
	
	data() {
		return {
			x: 0
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
