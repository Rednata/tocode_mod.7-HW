import { createApp } from 'vue';
import App from './App.vue';
import './assets/style/main.scss';
import routers from './routes';
import { store } from './store';

createApp(App)
  .use(store)
  .use(routers)
  .mount('#app');
