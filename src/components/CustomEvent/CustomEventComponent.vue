<template>
	<!--自定义事件组件-->
	<div class='custom-event-component'>	
		<input 
			type='text'
			:value='modelValue'
			@change='onChangeModelValue'/>

		<input 
			type='text'
			:value='lastName'
			@input='onInputLastName'/>

		<input 
			type='text'
			:value='midName'
			@change='onChangeMidName'/>

		<input 
			type='text'
			:value='firstName'
			@input='onInputFirstName'/>
	</div>
</template>

<script>
export default {
	name: 'CustomEventComponent', 
	
	components: {
	},
	
	props: {
		modelValue: String,
		modelModifiers: {
			default: () => ({})
		},
		lastName: String,
		midName: String,
		midNameModifiers: {
			default: () => ({})
		},
		firstName: String
	},
	
	emits: {
		'update:modelValue': null,
		'update:lastName': (value) => { // 对更新的数据进行检查
			if (value && value.trim().length > 0) {
				return true;
			} else {
				return false;
			}
		},
		'update:midName': null,
		'update:firstName': null
	},
	
	data() {
		return {};
	},

	methods: {
		onChangeModelValue(e) {
			console.log('On change model value.');
			let value = e.target.value;

			if (this.modelModifiers.capitalize) { // 大写
				value = value.charAt(0).toUpperCase() + value.slice(1);
			}			
			this.$emit('update:modelValue', value); // 发起事件,更新属性值
		},
		
		onInputLastName(e) {
			console.log('On input last name.');
			
			this.$emit('update:lastName', e.target.value); // 发起事件,更新属性值
		},
		
		onChangeMidName(e) {
			console.log('On change middle name.');
			let value = e.target.value;

			if (this.midNameModifiers.trim) { // 去掉空格
				value = value.trim();
			}			
			if (this.midNameModifiers.capitalize) { // 大写
				value = value.charAt(0).toUpperCase() + value.slice(1);
			}			
			this.$emit('update:midName', value); // 发起事件,更新属性值
		},

		onInputFirstName(e) {
			console.log('On input first name.');
			
			this.$emit('update:firstName', e.target.value); // 发起事件,更新属性值
		}
		
		/*************************/
	}
};
</script>

<style scoped src='./CustomEventComponent.less' lang='less'/>
<style scoped>
</style>
