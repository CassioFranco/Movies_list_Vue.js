import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Movies from '../components/Movies.vue';
import Favoritos from '../components/Favoritos.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/movies/:id',
      name: 'movies',
      component: Movies,
      meta: {
        title: 'Movie'
      }
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: Favoritos,
      meta: {
        title: 'Favoritos'
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router
