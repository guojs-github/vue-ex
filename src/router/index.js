import {
	createRouter,
	createWebHashHistory
} from 'vue-router'; // 导入vue-router功能
// 组件表
import HelloWorld from '@/components/HelloWorld';

const routes = [{ // 路由表
	path: '/',
	name: 'HelloWorld',
	component: HelloWorld
}];

export default createRouter({
  history: createWebHashHistory(), 	// 使用历史
  routes							// 注册路由表
});