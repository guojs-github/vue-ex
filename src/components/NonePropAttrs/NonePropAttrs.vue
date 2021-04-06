<template>
	<!--默认属性演示-->
	<div class='-content none-prop-attrs'>
		<div class='-title'>
			默认属性演示
		</div>

		<div class='-row'>
			<component-with-attrs 
				id = '1'
				text='根对象设置默认属性' 
				:style='style'
				@click='onClick'/>

			<component-with-attrs 
				id = '2'
				:bind-root='false'
				text='按钮对象设置默认属性'
				:style='style'
				@click='onClick'/>
		</div>		
	</div>
</template>

<script>
import ComponentWithAttrs from './ComponentWithAttrs.vue';

export default {
	name: 'NonePropAttrs', 
	
	components: {
		ComponentWithAttrs
	},
	
	data() {
		return {
			style: {
				backgroundColor: 'black'
			}
		};
	},

	methods: {	
		onClick() {
			console.log('On click component with attrs');
			
			alert('On click component with attrs');
		}
		
		/*************************/
	}
};
</script>

<style scoped src='./NonePropAttrs.less' lang='less'/>
<style scoped>
</style>
