// plugins/i18n.js
export default {
	install: (app, options) => { // 安装插件，添加插件功能
		app.config.globalProperties.$translate = key => {
			return key.split('.').reduce((o, i) => {
				if (o) return o[i];
			}, options);
		};
	}
};