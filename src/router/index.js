import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import User from '@/components/User'
import Store from '@/components/Store'
import Read from '@/components/Read'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/hello',
    name: 'Hello',
    component: Hello
  }, {
    path: '/user',
    name: 'User',
    component: User
  }, {
    path: '/store',
    name: 'Store',
    component: Store
  }, {
    path: '/read',
    name: 'Read',
    component: Read
  }]
})