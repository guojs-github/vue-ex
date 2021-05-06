<!--模板引用-->
<template>
	<div class='-content template-reference'>
		<div class='-title'>
			模板引用
		</div>

		<div class='row-demo'>
			<div class='sub-title'>
				模板1
			</div>

			<template1/>
		</div>

		<div class='row-demo'>
			<div class='sub-title'>
				模板2
			</div>
			<template2/>
		</div>

		<div class='row-demo'>
			<div class='sub-title'>
				模板3
			</div>
			<template3/>
		</div>

		<div class='row-demo'>
			<div class='sub-title'>
				模板4
			</div>
			<template4/>
		</div>
	</div>
</template>

<script>
import template1 from  './Template1.vue';
import template2 from  './Template2.jsx';
import template3 from  './Template3.jsx';
import template4 from  './Template4.vue';

export default {
	name: 'TemplateReference', 
	
	components: {
		template1,
		template2,
		template3,
		template4
	},
	
	data() {
		return {
			inputText: []
		};
	},

	methods: {
		/*************************/
	}
};
</script>

<style scoped src='./TemplateReference.less' lang='less'/>
<style scoped>
</style>
