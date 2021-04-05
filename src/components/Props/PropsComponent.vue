<template>
	<!--属性演示组件-->
	<div class='props-component'>		
		<span>ID：{{ id }}</span>
		<div class='title'>
			标题：{{ givenTitle }} 【{{ time() }}】
		</div>
		<div>
			数字：{{ aNumber }}
		</div>
		<div>
			数字或者布尔：{{ aNumberOrBlean }}
		</div>
		<div>
			选择：{{ choice }}
		</div>
		<div>
			数组：{{ aArray.join(',') }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'PropsComponent', 
	
	components: {
	},
	
	props: {
		id: {
			type: Number,
			required: true
		},
		givenTitle: {
			type: String
		},
		aNumber: {
			type: Number,
			default: -1
		},
		aNumberOrBlean: {
			type: [Number, Boolean]
		},
		choice: {
			type: String,
			default: 'yes',
			validator: function(value) { // 自定义属性值检查
				return ['yes', 'no'].indexOf(value) !== -1;
			} 
		},
		time: {
			type: Function,
			default: function() {
				return new Date();
			}
		},
		aArray: {
			type: Array,
			default: function() {
				return [0,1,2,3,4,5,6,7,8,9];
			}
		}
	},
	
	data() {
		return {};
	},

	methods: {	
		/*************************/
	}
};
</script>

<style scoped src='./PropsComponent.less' lang='less'/>
<style scoped>
</style>
