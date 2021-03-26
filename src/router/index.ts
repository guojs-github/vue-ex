import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/components/Home/Home.vue';
import Counter from '@/components/Counter/Counter.vue';
import String from '@/components/String/String.vue';

const routes: Array<RouteRecordRaw> = [{
	path: '/',
	name: 'Home',
	component: Home
}, {
	path: '/Counter',
	name: 'Counter',
	component: Counter
}, {
	path: '/String',
	name: 'String',
	component: String
}];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
