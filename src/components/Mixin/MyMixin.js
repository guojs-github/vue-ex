/*
	My Mixin样例服用代码
*/

export default {
	data() {
		return {
			message: '喂',
			foo: 'abc'
		};
	},

	created() {
		this.createdLog.push(`Mixin Created事件`);
	},
	
	methods: {
		/*************************/
		a() {
			return `Mixin a函数`;
		},

		c() {
			return `Mixin c函数`;
		}
	}
	
};