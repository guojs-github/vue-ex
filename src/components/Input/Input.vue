<template>
	<!--输入控件演示-->
	<div class='-content input'>
		<div class='-title'>
			输入控件演示
		</div>

		<div class='-row section'>			
			<span class='label'>v-mode绑定</span>
			<input 
				v-model='vModelValue'
				class='-inline input'
				placeholder='请输入文本'/>
			<span class='value'>{{ vModelValue }}</span>
		</div>

		<div class='-row section'>			
			<span class='label'>@input绑定</span>
			<input 
				class='-inline input'
				@input='onInput'
				placeholder='请输入文本'/>
			<span class='value'>{{ inputValue }}</span>
		</div>

		<div class='-row section'>			
			<span class='label'>lazy绑定</span>
			<input 
				v-model.lazy='lazyValue'
				class='-inline input'
				placeholder='请输入文本'/>
			<span class='value'>{{ lazyValue }}</span>
		</div>

		<div class='-row section'>			
			<span class='label'>只能是数字</span>
			<input 
				v-model.number='numberValue'
				type='number'
				class='-inline input'
				placeholder='请输入数字'/>
			<span class='value'>{{ numberValue }}</span>
		</div>

		<div class='-row section'>			
			<span class='label'>去掉前后空格</span>
			<input 
				v-model.trim='trimValue'
				class='-inline input'
				placeholder='请输入文本'/>
			<span class='value'>{{ trimValue }}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'EventHandler', 
	
	components: {
	},
	
	data() {
		return {
			vModelValue: '',
			inputValue: '',
			lazyValue: '',
			numberValue: null,
			trimValue: ''
		};
	},

	methods: {		
		onInput(e) {
			console.log('On input value.');

			this.inputValue = e.target.value; // 原生DOM事件
		}
		
		/*************************/		
	}
};
</script>

<style scoped src='./Input.less' lang='less'/>
<style scoped>
</style>
