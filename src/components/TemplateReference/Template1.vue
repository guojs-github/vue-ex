<!--模板1-->
<template> 
	<div ref='root' class='template-1'>我是第一个模板</div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
	setup() {
		const root = ref(null); // 创建一个对null值的引用

		onMounted(() => {
			// DOM元素将在初始渲染后分配给ref
			console.log(`template-1：${root.value}`);
		});

		return {
			root
		};
	}
};
</script>

<style scoped>
.template-1 {
	font-weight: normal;
	background-color: transparent;
}
</style>
