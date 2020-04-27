
import Vue from 'vue';
import VueRouter from 'vue-router'
import Layout from './layout'
import Welcome from './components/Welcome'
import Login from './components/Login'
import Register from './components/Register'
import Chats from './components/Chats'

Vue.use(VueRouter)

export const constantRoutes = [
    {
      path: '/',
      name: 'welcome',
      component: Welcome,
      meta: { title: 'Welcome'},
    },  
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { title: 'Login'},
    },  
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { title: 'Register'},
    },  
    {
      path: '/chats',
      name: 'chats',
      component: Chats,
      meta: { title: 'Chats'},
    },  
];

//Routes


//Register Routes
const router = new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,

})
export default router;