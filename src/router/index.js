import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import VerMasView from '../views/VerMasView.vue'
import CategoriasView from '../views/CategoriasView.vue'
import BlogView from '../views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: InicioView
    },
    {
      path: '/vermas/:id',
      name: 'vermas',
      component: VerMasView
    },
    {
      path: '/blog/:param?',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: CategoriasView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
