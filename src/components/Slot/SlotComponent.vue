<template>
	<!--Slot功能组件-->
	<div class='slot-component'>
		<div class='title'>
			【<slot>默认标题</slot>】
		</div>
		<div class='content'>		
			<ul>
				<li :key='index' v-for='(item, index) in items'>
					<slot name='item' :item='item'>
						{{ item }}
					</slot>
				</li>
			</ul>			
		</div>
		<div class='foot'>
			--
			<slot name='foot' :footFunc='footFunc'>
				{{ footFunc() }}
			</slot>
			--
		</div>
	</div>
</template>

<script>
export default {
	name: 'SlotComponent', 
	
	components: {
	},
	
	props: {
		items: {
			type: Array,
			default: () => ([])
		},
		footFunc: {
			type: Function,
			default: () => ('默认底部信息')
		}
	},
		
	data() {
		return {};
	},

	methods: {
		/*************************/
	}
};
</script>

<style scoped src='./SlotComponent.less' lang='less'/>
<style scoped>
</style>
