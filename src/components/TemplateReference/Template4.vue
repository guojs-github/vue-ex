<!--模板4-->
<template>
	<div ref='root'>我是第四个模板</div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
	setup() {
		const root = ref(null);

		watchEffect(() => {
			console.log(`template-4：${root.value}`);
		}, 
		{
			flush: 'post' // DOM更新后运行
		});

		return {
			root
		};
	}
}
</script>