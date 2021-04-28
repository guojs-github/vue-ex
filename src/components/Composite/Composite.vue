<!--组合API-->
<template>
	<div class='-content composite'>
		<div class='-title'>
			组合API
		</div>

		<div class='demo-row'>
			<span class='label'>用户：</span><input v-model='user' type='string' placeholder='例如：中国、USA'/>
		</div>

		<div class='demo-row'>
			<span class='label'>查询：</span><input v-model='search' type='string' />
		</div>

		<div class='demo-row'>
			<template v-if ='$refs["repositories"]'>
			<ul>
				<li v-for='(item) in $refs["repositories"].repositories' :key='item'>
					{{ item }}
				</li>
			</ul>
			</template>
		</div>
		
		<repositories 
			ref='repositories'
			:user='user'
			:search='search' />
	</div>
</template>

<script>
import Repositories from './Repositories/Repositories';

export default {
	name: 'Composite', 
	
	components: {
		Repositories
	},
	
	data() {
		return {
			user: '',
			search: ''
		};
	},

	methods: {	
		/*************************/
	}
};
</script>

<style scoped src='./Composite.less' lang='less'/>
<style scoped>
</style>
