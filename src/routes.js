import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import NotFoundPage from './pages/notFound.vue';

const routes = [
  {
    path: '/', name: 'home', component: HomePage,
  },
  {
    path: '/about', name: 'about', component: AboutPage,
  },
  {
    path: '/:CatchAll(.*)', name: 'notFound', component: NotFoundPage,
  },
];

const routers = createRouter({
  routes,
  history: createWebHistory(),
});

export default routers;
