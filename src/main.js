import { createApp } from 'vue';
import App from './App.vue';
import './assets/style/main.scss';
import routers from './routes';

createApp(App).use(routers).mount('#app');
