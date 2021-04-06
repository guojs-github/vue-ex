<template>
	<!--默认属性演示组件-->
	<div class='component-with-attrs' :='$attrs' v-if='bindRoot'>		
		<div class='-inline -ef-click -light-red -red-button'>
			id：{{$attrs['id']}}，text：{{ $attrs['text'] }}
		</div>
	</div>
	<div class='component-with-attrs' v-else>		
		<div class='-inline -ef-click -light-red -red-button' :='$attrs'>
			id：{{$attrs['id']}}，text：{{ $attrs['text'] }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'ComponentWithAttrs', 
	
	inheritAttrs: false, // true的话，默认把外部传入的attrs属性填入根节点，false的话则什么都不填，自己决定
	
	components: {
	},
	
	props: {
		bindRoot: {
			type: Boolean,
			default: true
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

<style scoped src='./ComponentWithAttrs.less' lang='less'/>
<style scoped>
</style>
