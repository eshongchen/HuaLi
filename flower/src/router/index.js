import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Details from '../views/Details.vue'
import SearchList from '../views/SearchList.vue'
import Cart from '../views/Cart.vue'
import Header from '../components/Header.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/details/:id',
    component: Details
  },
  {
    path: '/searchlist/:keyword',
    component: SearchList
  },
  {
    path: '/cart/:uid',
    component: Cart
  },
  {
    path: '/header',
    component: Header
  }

  
]

const router = new VueRouter({
  routes
})

export default router
