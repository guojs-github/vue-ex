import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/components/Home/Home.vue';
import Counter from '@/components/Counter/Counter.vue';

const routes: Array<RouteRecordRaw> = [{
	path: '/',
	name: 'Home',
	component: Home
}, {
	path: '/Counter',
	name: 'Counter',
	component: Counter
}];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
