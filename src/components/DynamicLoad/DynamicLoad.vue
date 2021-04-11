<!--动态加载组件-->
<template>
	<div class='-content dynamic-load'>
		<div class='-title'>
			动态加载组件
		</div>

		<button
			v-for='tab in tabs'
			:key='tab'
			:class='["tab-button", { active: currentTab === tab }]'
			@click='currentTab = tab'>
			{{ tab }}
		</button>
		<div class='tab-content'>
			<!--缓存页面对象-->
			<keep-alive>
				<component :is='currentTabComponent'/>
			</keep-alive>
		</div>
	</div>
</template>

<script>
import { defineAsyncComponent } from 'vue'; 

export default {
	name: 'DynamicLoad', 
	
	components: {
		TabHome: defineAsyncComponent(() => import('./TabHome.vue')),
		TabNews: defineAsyncComponent(() => import('./TabNews.vue'))
	},
	
	data() {
		return {
			currentTab: 'Home',
			tabs: ['Home', 'News']
	  };
	},
	
	computed: {
		currentTabComponent() {
			return 'tab-' + this.currentTab.toLowerCase();
		}
	},
	
	methods: {	
		/*************************/
	}
};
</script>

<style scoped src='./DynamicLoad.less' lang='less'/>
<style scoped>
</style>
