<!--Mixin-->
<template>
	<div class='-content mixin'>
		<div class='-title'>
			Mixin
		</div>

		<div class='row-demo'>
			<div class='sub-title'>
				Mixin与data数据
			</div>
			<div>message = {{message}}，<span class='attention'>Mixin变量值覆盖了组件内值</span></div>
			<div>foo = {{foo}}，<span class='attention'>Mixin注入的新变量</span></div>
			<div>bar = {{bar}}，<span class='attention'>组件原有变量</span></div>
		</div>

		<div class='row-demo'>
			<div class='sub-title'>
				Mixin与created事件(Mixin中事件会先发生)
			</div>
			<div v-for='(item) in createdLog' :key='item'>
				{{item}}
			</div>
		</div>

		<div class='row-demo'>
			<div class='sub-title'>
				Mixin与methods、components、directives
			</div>
			<div>a() = {{a()}}，<span class='attention'>Mixin注入新方法</span></div>
			<div>b() = {{b()}}，<span class='attention'>组件原有方法</span></div>
			<div>c() = {{c()}}，<span class='attention'>Mixin、组件同名方法，组件方法生效</span></div>
		</div>		
	</div>
</template>

<script>
import MyMixin from './MyMixin.js';

export default {
	name: 'Mixin', 
	
	components: {
	},
	
	mixins: [MyMixin],

	data() {
		return {
			message: '喂',
			bar: '星巴克',
			
			createdLog: []
		};
	},

	created() {
		this.createdLog.push(`组件Created事件`);
	},	

	methods: {
		/*************************/
		b() {
			return `组件 b函数`;
		},

		c() {
			return `组件 c函数`;
		}
	}
};
</script>

<style scoped src='./Mixin.less' lang='less'/>
<style scoped>
</style>
