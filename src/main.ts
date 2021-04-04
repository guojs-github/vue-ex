import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import globalComponentA from './components/GlobalComponent/GlobalComponentA.vue';

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
app.component('global-component-a', globalComponentA);