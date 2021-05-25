import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Authenticate from '../views/Authenticate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/authenticate',
    name: 'Authenticat',
    component: Authenticate
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
