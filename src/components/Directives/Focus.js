/*
	Global focus directives
*/

export default {
	mounted(el) { // mount事件处理
		el.focus();
		el.placeholder='写点什么？';
	}
};
