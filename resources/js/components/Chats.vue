<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Chats Component</div>

                    <div class="card-body">
                        I'm an Chats component.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },

        created() {

                axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
                axios.get('/api/getusers')
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(error => {
                    console.log(error)
                    })

        },
    }
</script>
