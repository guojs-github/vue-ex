import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import globalComponentA from './components/GlobalComponent/GlobalComponentA.vue';
import focusDirective from './components/Directives/Focus.js';
import i18nPlugin from './components/Plugins/i18n.js';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(i18nPlugin, {
	greetings: {
		hi: 'Hallo!'
	}
});
app.directive('focus', focusDirective); // 注册v-focus自定义指令，directives
app.mount('#app');
app.component('global-component-a', globalComponentA); // 注册全局组件