<template>
    <section>
        <div class="container is-fullhd"> 
            <b-field label="Username">
            <b-input v-model=username maxlength="30"></b-input>
        </b-field>

        <b-field label="Password">
            <b-input v-model=password type="password" maxlength="30"></b-input>
        </b-field>

         <b-button @click="login">Click Me</b-button>

        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
        username: "",
        password: ""
        };
    },
    methods: {
        login() {
            if(this.username == process.env.USER && this.password == process.env.PASS){
                this.$store.commit('auth')
                this.$buefy.notification.open("Logged in")
                let redirect_url = '/'
                this.$router.push(redirect_url)

            } else{
                this.$buefy.notification.open("Username and password incorrect")
                this.username = ""
                this.password = ""
            }
            
            
        }
    }
}
</script>