import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Authenticate from '../views/Authenticate.vue'
import About_us from '../views/About_us.vue'
import Review from '../views/Review.vue'
import News from '../views/News.vue'
import Contact from '../views/Contact.vue'
import Booking from '../views/Booking.vue'
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
    path: '/review',
    name: 'Review',
    component: Review
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
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/booking',
    name: 'Booking',
    component: Booking
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
