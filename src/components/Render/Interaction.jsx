/*
	Interaction
*/
import { defineComponent, h } from 'vue';

const Interaction = defineComponent({
	name: 'Interaction',
	
	props: ['age'], // v-model age
	emits: [
		'update:age', // v-model age 
		'click-once'
	],
	render() {
		return h('div', {
			class: 'interaction'			
		},[			
			h('div', {
				style: {
					color: 'red'
				}
			}, this.$slots.default())
			, h('input', {
				type: 'Number',
				placeholder: '请在此处输入',
				value: this.age, // v-model age 绑定到子组件
				onInput: $event => {
					this.$emit('update:age', $event.target.value); //// v-model age 自动更新值到父组件
				}
			})
			, h('div', {
				class: '-inline -ef-click -light-red -red-button',
				onClickOnce: () => {
					this.$emit('click-once');
				}
			}, "只能点一次哦")
		]);
	}
});

export default Interaction;
