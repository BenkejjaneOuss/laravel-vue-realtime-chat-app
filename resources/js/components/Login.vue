<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                    <h4 class="card-title">Login</h4>
                        <form action="#" @submit.prevent="login">
                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input type="email" :class="{'form-control': true, 'form-control-danger': errors.has('email') }" id="email" v-validate="'required|email'" name="email" v-model="form.email">
                                <small v-show="errors.has('email')" class="form-control-feedback">{{ errors.first('email') }}</small>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" :class="{'form-control': true, 'form-control-danger': errors.has('password') }" id="password" v-validate="'required'" name="password" v-model="form.password">
                                <small v-show="errors.has('password')" class="form-control-feedback">{{ errors.first('password') }}</small>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block" v-html="load"></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                form:{
                    email: '',
                    password: ''
                },
                loading: false,
            }
        },
          watch: {
            $route: {
            handler: function(route) {
                this.redirect = route.query && route.query.redirect;
            },
            immediate: true,
            },
        },
        computed: {
            load() {
                if(this.loading == false){
                    return 'Login';
                }else{
                    return '<div class="spinner-border spinner-border-sm" role="status"><span class="sr-only">Loading...</span></div>';
                }
            },
        },
        methods: {
            login() {
                this.$validator.validateAll().then(result => {
                    if (!this.errors.any()) {
                        this.loading = true
                        this.$store.dispatch('login', this.form)
                        .then(res => {
                            this.loading = false
                                this.$router.push({ name:'chats' });

                        })
                                  .catch(error => {
                                let type = 'error'
                                let title = 'Error!'
                                let text =  error.message 
                                this.$swal.fire({
                                    icon: type,
                                    title: title,
                                    text: text,
                                    showConfirmButton: false,
                                    showCloseButton: true,  
                                })                                })
                    }
                })
            }
        }
    }
</script>
