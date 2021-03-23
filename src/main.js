import { createApp } from 'vue'; 	// 导入vue组件
import App from './App.vue'; 		// 导入应用入口组件
import router from './router';		// 导入路由表

createApp(App)
	.use(router) 	// 使用指定路由设置
	.mount('#app'); // 显示在id=‘app’的元素下main
