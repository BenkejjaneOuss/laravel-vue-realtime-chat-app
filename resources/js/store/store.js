import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://chat.test/api'

export const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
  },
  getters: {
    loggedIn(state) {
      return state.token !== null
    },
    anyRemaining(state, getters) {
      return getters.remaining != 0
    },
  },
  mutations: {
      /*
    addTodo(state, todo) {
      state.todos.push({
        id: todo.id,
        title: todo.title,
        completed: false,
        editing: false,
      })
    },
    updateTodo(state, todo) {
      const index = state.todos.findIndex(item => item.id == todo.id)
      state.todos.splice(index, 1, {
        'id': todo.id,
        'title': todo.title,
        'completed': todo.completed,
        'editing': todo.editing,
      })
    },
    deleteTodo(state, id) {
      const index = state.todos.findIndex(item => item.id == id)
      state.todos.splice(index, 1)
    },
    checkAll(state, checked) {
      state.todos.forEach(todo => (todo.completed = checked))
    },
    updateFilter(state, filter) {
      state.filter = filter
    },
    clearCompleted(state) {
      state.todos = state.todos.filter(todo => !todo.completed)
    },
    retrieveTodos(state, todos) {
      state.todos = todos
    },
    clearTodos(state) {
      state.todos = []
    },
    */
    login(state, token) {
      state.token = token
    },
    logout(state) {
      state.token = null
    },
  },
  actions: {
    register(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('/register', {
          name: data.name,
          email: data.email,
          password: data.password,
        })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    logout(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.post('/logout')
            .then(response => {
              localStorage.removeItem('access_token')
              context.commit('logout')
              resolve(response)
              // console.log(response);
              // context.commit('addTodo', response.data)
            })
            .catch(error => {
              localStorage.removeItem('access_token')
              context.commit('logout')
              reject(error)
            })
        })
      }
    },
    login(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('/login', {
          email: credentials.email,
          password: credentials.password,
        })
          .then(response => {
              const token = response.data.token
              localStorage.setItem('access_token', token)
              context.commit('login', token)
              resolve(response.data)

            // console.log(response);
            // context.commit('addTodo', response.data)
          })
          .catch(error => {
            reject(error)
          })
        })
    },
  }
})