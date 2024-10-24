import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Movies from '../components/Movies.vue';

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
    },
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router
