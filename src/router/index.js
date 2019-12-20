import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/order/payment'
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order.vue'),
    redirect: '/order/paymnet',
    children: [
      {
        path: 'payment',
        name: 'OrderPayment',
        component: () => import('../views/OrderPayment.vue')
      },
      {
        path: 'card',
        name: 'OrderByCard',
        component: () => import('../views/OrderByCard.vue')
      },
      {
        path: 'atm',
        name: 'OrderByATM',
        component: () => import('../views/OrderByATM.vue')
      },
      {
        path: 'shop',
        name: 'OrderByShop',
        component: () => import('../views/OrderByShop.vue')
      },
      {
        path: 'complete',
        name: 'OrderComplete',
        component: () => import('../views/OrderComplete.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
