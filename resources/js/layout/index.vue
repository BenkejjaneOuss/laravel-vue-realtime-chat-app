<template>
<div>
    <div class="navbar navbar-dark shadow-sm p-3 px-md-4 mb-5 bg-white border-bottom">
        <div class="container d-flex flex-column flex-md-row align-items-center ">
            <h5 class="my-0 mr-md-auto font-weight-normal">Chat App</h5>
            <nav class="my-2 my-md-0 mr-md-3">
                <router-link to="/" class="p-2 text-dark">
                    Home
                </router-link>
            </nav>
            <nav class="my-2 my-md-0 mr-md-3">
                <router-link to="/chats" class="p-2 text-dark">
                    Chats
                </router-link>
            </nav>
            <nav class="my-2 my-md-0 mr-md-3">
                <router-link to="/login" class="p-2 text-dark" v-if="!loggedIn">
                    Login
                </router-link>
            </nav>
            <router-link to="/register" class="btn btn-outline-primary" v-if="!loggedIn">
                Sign up
            </router-link>
            <router-link to="/" class="btn btn-outline-primary" v-if="loggedIn">
                Logout
            </router-link>
          </div>
          </div>

        <router-view />

  </div>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
      loggedIn() {
            return this.$store.getters.loggedIn;
      }
  },
};
</script>

