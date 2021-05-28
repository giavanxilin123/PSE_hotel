import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Authenticate from '../views/Authenticate.vue'
import About_us from '../views/About_us.vue'
import News from '../views/News.vue'


import Search from '../views/Search.vue'


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
  },
  {
    path: '/about-us',
    name: 'About_us',
    component: About_us
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/search',
    name: 'Search',
    component: Search

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
