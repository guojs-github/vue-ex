<!--Plugins-->
<template>
	<div class='-content plugins'>
		<div class='-title'>
			插件
		</div>

		<div class='row-demo'>
			<div class='sub-title'>
				简单翻译插件
			</div>
			<span>"{{ input }}" = {{ $translate(input) }}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Plugins', 
	
	components: {
	},

	data() {
		return {
			input: 'greetings.hi'
		};
	},

	methods: {
		/*************************/
	}
};
</script>

<style scoped src='./Plugins.less' lang='less'/>
<style scoped>
</style>
