import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '@/pages/cart/CartView.vue'
import FormCreateCart from '@/pages/cart/FormCreateCart.vue'
import FormUpdateCart from '@/pages/cart/FormUpdateCart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/cart/form/',
      name: 'create_cart',
      component: FormCreateCart
    },
    {
      path: '/cart/form/update',
      name: 'update_cart',
      component: FormUpdateCart
    },
    {
      path: '/cart/:user_id',
      name: 'cart',
      component: CartView
    },
  ]
})

export default router
