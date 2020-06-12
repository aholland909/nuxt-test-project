<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="subtitle">Homepage</h1>
      <nuxt-link to="/testpage">
        <h1 class="subtitle">testpage</h1>
      </nuxt-link>
      <nuxt-link to="/google">
        <h1 class="subtitle">redirect to google</h1>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  data() {
    return {
      cold: "",
      back: ""
      // wp: process.env.WP_URL,
      // base_url: process.env.BASE_URL,
    };
  },
  components: {
    Logo
  },
  mounted(){
    console.log(this.$router.history)
  },
  computed: {
    // env_test() {
    //   return process.env.wordpressdata;
    // },
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
