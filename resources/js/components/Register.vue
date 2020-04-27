<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                    <h4 class="card-title">Register</h4>
                        <form action="#" @submit.prevent="register">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" :class="{'form-control': true, 'form-control-danger': errors.has('name') }" id="name" v-validate="'required'" name="name" v-model="form.name">
                                <small v-show="errors.has('name')" class="form-control-feedback">{{ errors.first('name') }}</small>
                            </div>
                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input type="email" :class="{'form-control': true, 'form-control-danger': errors.has('email') }" id="email" v-validate="'required|email'" name="email" v-model="form.email">
                                <small v-show="errors.has('email')" class="form-control-feedback">{{ errors.first('email') }}</small>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" :class="{'form-control': true, 'form-control-danger': errors.has('email') }" id="password" v-validate="'required|min:6'" name="password" v-model="form.password">
                                <small v-show="errors.has('password')" class="form-control-feedback">{{ errors.first('password') }}</small>
                            </div>
                            <div class="form-group">
                                <label for="confirm_password">Confirm Password</label>
                                <input type="password" :class="{'form-control': true, 'form-control-danger': errors.has('confirm_password') }" id="confirm_password" v-validate="'required'" name="confirm_password" v-model="form.confirm_password">
                                <small v-show="errors.has('confirm_password')" class="form-control-feedback">{{ errors.first('confirm_password') }}</small>
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
                    return 'Create account';
                }else{
                    return '<div class="spinner-border spinner-border-sm" role="status"><span class="sr-only">Loading...</span></div>';
                }
            },
        },
        methods: {
            register() {
                this.$validator.validateAll().then(result => {
                    if (!this.errors.any()) {
                        this.loading = true
                        axios.post('/api/register', this.form)
                        .then(res => {
                            if(res.data.success){
                                this.loading = false
                                const token = res.data.token
                                localStorage.setItem('access_token', token)
                                this.$router.push({ path: this.redirect || '/chats' });
                            }else{
                                this.loading = false 
                                let type = 'error'
                                let title = 'Error!'
                                let text = (res.data.msg !== '') ? res.data.msg : 'Please retry later' 
                                this.$swal.fire({
                                    icon: type,
                                    title: title,
                                    text: text,
                                    showConfirmButton: false,
                                    showCloseButton: true,  
                                })
                            }
                        }).catch(e => {
                            console.log('createForm', e)
                            this.loading = false
                        })
                    }
                })
            }
        }
    }
</script>
