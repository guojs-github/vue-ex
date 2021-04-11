import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/components/Home/Home.vue';
import Counter from '@/components/Counter/Counter.vue';
import String from '@/components/String/String.vue';
import UpdateOnce from '@/components/UpdateOnce/UpdateOnce.vue';
import RawHtml from '@/components/RawHtml/RawHtml.vue';
import Debounce from '@/components/Debounce/Debounce.vue';
import Throttle from '@/components/Throttle/Throttle.vue';
import DynamicClass from '@/components/DynamicClass/DynamicClass.vue';
import EventHandler from '@/components/EventHandler/EventHandler.vue';
import Input from '@/components/Input/Input.vue';
import GlobalComponent from '@/components/GlobalComponent/GlobalComponent.vue';
import Props from '@/components/Props/Props.vue';
import NonePropAttrs from '@/components/NonePropAttrs/NonePropAttrs.vue';
import CustomEvent from '@/components/CustomEvent/CustomEvent.vue';
import Slot from '@/components/Slot/Slot.vue';
import ProvideInject from '@/components/ProvideInject/ProvideInject.vue';
import DynamicLoad from '@/components/DynamicLoad/DynamicLoad.vue';

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
}, {
	path: '/EventHandler',
	name: 'EventHandler',
	component: EventHandler
}, {
	path: '/Input',
	name: 'Input',
	component: Input
}, {
	path: '/GlobalComponent',
	name: 'GlobalComponent',
	component: GlobalComponent
}, {
	path: '/Props',
	name: 'Props',
	component: Props
}, {
	path: '/NonePropAttrs',
	name: 'NonePropAttrs',
	component: NonePropAttrs
}, {
	path: '/CustomEvent',
	name: 'CustomEvent',
	component: CustomEvent
}, {
	path: '/Slot',
	name: 'Slot',
	component: Slot
}, {
	path: '/ProvideInject',
	name: 'ProvideInject',
	component: ProvideInject
}, {
	path: '/DynamicLoad',
	name: 'DynamicLoad',
	component: DynamicLoad
}];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
