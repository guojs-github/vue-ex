<template>
	<!--事件处理-->
	<div class='-content event-handler'>
		<div class='-title'>
			事件处理
		</div>

		<div class='-row'>
			<div class='-inline -ef-click -light-red -red-button' @click='onClearLog'>
				清除日志
			</div>
		</div>

		<div class='-row'>
			<input 
				v-model='inputValue'
				placeholder='Ctrl + Enter 清除输入'
				@keyup.ctrl.enter='onClearInput'
				@click.left='onClickInput("left")'
				@click.right='onClickInput("right")'
				@click.middle='onClickInput("middle")'
				/>
		</div>

		<div class='outside' @click='onClickOutside'>
			<div class='inside' @click.capture='onClickInside'>
				<div class='-inline -ef-click -light-red -red-button' @click='onClick'>
					点击
				</div>
				<div class='-inline -ef-click -light-red -red-button' @click.stop='onClickStopBubble'>
					点击（阻止冒泡）
				</div>
				<div class='-inline -ef-click -light-red -red-button'>
					<a href="http://www.baidu.com" @click.prevent>访问百度网站（阻止默认行为）</a>
				</div>
				<div class='-inline -ef-click -light-red -red-button' @click.once='onClickOnce'>
					点击（只有一次有效）
				</div>
			</div>
		</div>

		<div class='result' @scroll.passive='onScroll'>
			<div :key='index' v-for='(event, index) in events'>
				{{ event }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'EventHandler', 
	
	components: {
	},
	
	data() {
		return {
			events: [],
			inputValue: ''
		};
	},

	methods: {	
		onClickOutside() {
			this.addEvent('Click outside');
		},

		onClickInside() {
			this.addEvent('Capture inside');
		},

		onClick() {
			this.addEvent('Click');
		},

		onClickStopBubble() {
			this.addEvent('Click stop bubble');
		},

		onClickOnce() {
			this.addEvent('Click once');
		},
		
		onScroll() {
			this.addEvent('Passive scroll');
		},

		onClearLog() {
			this.events = [];
		},

		onClearInput() {
			this.inputValue = '';
		},
		
		onClickInput(button) {
			this.addEvent(`Click input box with ${button} button`);			
		},
		
		/*************************/		
		addEvent(e) {
			console.log(`Add event "${e}"`);
			let now = new Date();		
			let event = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}.${now.getMilliseconds()} ${e}`;
			
			this.events.push(event);			
		}
	}
};
</script>

<style scoped src='./EventHandler.less' lang='less'/>
<style scoped>
</style>
