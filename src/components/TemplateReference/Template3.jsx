import { defineComponent, ref } from 'vue';

const Template3 = defineComponent({
	name: 'Template3',
	
	setup(/*props*/) {
		const input = ref(null); // 创建引用

		const click = (e) => { // Click事件处理
			console.log(e);
			console.log(input.value);
		};
		
		return {
			click,
			input
		};
	},
	
	render () {
		return (
			<>
				<div>我是第三个模板(JSX)</div>
				<button onClick={this.click}>点击</button>
				<input v-model={this.input} placeholder='啊这'/>
			</>
		);
	}
});

export default Template3;
