/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue';
import Master from './layout/index'
import { store } from './store/store'

//SweetAlert2
import VueSweetalert2 from 'vue-sweetalert2';

import VeeValidate from 'vee-validate';

require('./bootstrap');

window.Vue = require('vue');

Vue.use(VueSweetalert2);
Vue.use(VeeValidate);

//Import View Router
import router from './routes';

import './permission'; // permission control
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('chats', require('./components/Chats.vue').default);


/*
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!localStorage.getItem('access_token')) {
        next({
          name: 'login',
        })
      } else {
        next()
      }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
      if (localStorage.getItem('access_token')) {
        next({
          name: 'chats',
        })
      } else {
        next()
      }
    } else {
      next()
    }
  })
*/
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const app = new Vue({
    el: '#app',
    router,
    store,
    components: { Master },
    template: '<Master/>'
});
