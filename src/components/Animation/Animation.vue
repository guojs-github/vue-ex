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

		<div class='-row functions'>
			<div class='-inline -ef-click -light-red -red-button test-transition' @click='show1=!show1'>
				Say Hi
			</div>
			<transition name='slide-fade'>
				<span v-if='show1'>【Hello！】</span>
			</transition>
		</div>

		<div class='row-demo'>
			<div class='-inline -ef-click -light-red -red-button test-transition' @click='show2=!show2'>
				早安
			</div>
			<transition name='bounce'>
				<p v-if='show2'>【早安！】</p>
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
			show: false,
			show1: false,
			show2: false
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

<style src='./Animation.less' lang='less'/>
<style scoped>
</style>
