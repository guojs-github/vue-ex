<template>
	<!--消除抖动-->
	<div class='-content debounce'>
		<div class='-title'>
			消除抖动
		</div>

		<div class='-row' v-once>
			<div class='-inline -ef-click -light-red -red-button' @click='onClick'>
				一般点击
			</div>
			<div class='-inline -ef-click -light-red -red-button' @click='debounceClick'>
				消除抖动点击
			</div>
		</div>

		<div class='result'>
			<div :key='index' v-for='(event, index) in events'>
				{{ event }}
			</div>
		</div>
	</div>
</template>

<script>
import _ from 'lodash';

export default {
	name: 'Debounce', 
	
	components: {
	},
	
	data() {
		return {
			events: [],
			debounceClick: _.debounce(this.onClick, 1000)
		};
	},

	methods: {	
		onClick() {
			console.log('On normal click.');
			let now = new Date();		
			let event = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}.${now.getMilliseconds()} 点击了按钮`;
			
			this.events.push(event);
		}
		
		/*************************/
	}
};
</script>

<style scoped src='./Debounce.less' lang='less'/>
<style scoped>
</style>
