import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/career',
      name: 'career',
      component: () => import(/* webpackChunkName: "about" */ './views/Career.vue')
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: () => import(/* webpackChunkName: "about" */ './views/Gallery.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue')
    }
  ]
})
