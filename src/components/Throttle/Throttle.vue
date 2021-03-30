<template>
	<!--节流阀-->
	<div class='-content throttle'>
		<div class='-title'>
			节流阀（与防止抖动的区别是，最后的更新不会丢失）
		</div>

		<div class='-row' v-once>
			搜索：<input class='-inline' v-model='value' @keyup='throttleInput' autofocus/>
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
	name: 'Throttle', 
	
	components: {
	},
	
	data() {
		return {
			value: '',
			events: [],
			throttleInput: _.throttle(this.onInput, 3000)
		};
	},

	methods: {	
		onInput() {
			console.log('On change input of search box.');
			let now = new Date();		
			let event = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}.${now.getMilliseconds()} 搜索框文字改变【${ this.value }】，搜索......`;
			
			this.events.push(event);
		}
		
		/*************************/
	}
};
</script>

<style scoped src='./Throttle.less' lang='less'/>
<style scoped>
</style>
