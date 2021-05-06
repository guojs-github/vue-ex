import { ref } from 'vue';

export default {
	setup() {
		const root = ref(null);

		// with JSX
		return () => 
			<div ref={root}>
				我是第二个模板(JSX)
			</div>;
	}
};
