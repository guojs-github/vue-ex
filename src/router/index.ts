import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/components/Home/Home.vue';
import Counter from '@/components/Counter/Counter.vue';
import String from '@/components/String/String.vue';
import UpdateOnce from '@/components/UpdateOnce/UpdateOnce.vue';
import RawHtml from '@/components/RawHtml/RawHtml.vue';
import Debounce from '@/components/Debounce/Debounce.vue';
import Throttle from '@/components/Throttle/Throttle.vue';
import DynamicClass from '@/components/DynamicClass/DynamicClass.vue';

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
}, {
	path: '/UpdateOnce',
	name: 'UpdateOnce',
	component: UpdateOnce
}, {
	path: '/RawHtml',
	name: 'RawHtml',
	component: RawHtml
}, {
	path: '/Debounce',
	name: 'Debounce',
	component: Debounce
}, {
	path: '/Throttle',
	name: 'Throttle',
	component: Throttle
}, {
	path: '/DynamicClass',
	name: 'DynamicClass',
	component: DynamicClass
}];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
