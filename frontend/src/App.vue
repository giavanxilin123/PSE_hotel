<template>
  <div id="app">
    <div id="nav">
      <div class="logo">
        <img src="./assets/hotel-logo.png" alt="" />
      </div>
      <div class="router">
        <router-link to="/">Home</router-link>
        <router-link to="/room">Rooms</router-link>
        <router-link to="/about-us">About us</router-link>
        <router-link to="/page">Page</router-link>
        <router-link to="/news">News</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link
          style="
            color: #c19b76;
            border-radius: 30%;
            border: 1px solid #c19b76;
            padding: 5px 30px;
            margin-left: 20px;
          "
          v-if="!user.nickname"
          to="/authenticate"
          >Login</router-link
        >
        <div style="color: white; padding: 5px 30px; margin-left: 20px" v-else>
          {{ user.nickname }}
        </div>
      </div>
    </div>
    <router-view />
    <div class="footer">
      <!-- footer  -->
      <div class="footer-text">
        <h2>Phone Support</h2>
        <h3>+ 01 345 647 745</h3>
      </div>
      <div class="footer-text">
        <h2>Connect With Us</h2>
        <div class="flex">
          <img
            src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/2017/07/icon-4.png"
            width="20"
          /><img
            src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/2017/07/icon-5.png"
            width="20"
          /><img
            src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/2017/07/icon-6.png"
            width="20"
          /><img
            src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/2017/07/icon-7.png"
            width="20"
          />
          <img
            src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/2017/07/icon-8.png"
            width="20"
          />
        </div>
      </div>
      <div class="footer-text">
        <h2>Newsletter</h2>
        <el-input placeholder="Please input" v-model="input"> </el-input
        ><el-button type="primary">Primary Button</el-button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 25px 100px;
  background-color: #1c1c1d;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#nav a {
  color: #878788;
  text-decoration: none;
  padding: 0 30px;
  font-weight: 500;
  display: flex;
  align-items: center;
}
#nav a:hover {
  color: #c19b76;
}

#nav a.router-link-exact-active {
  color: #c19b76;
}
</style>

<style scoped>
.logo img {
  width: 170px;
  height: 100%;
}
.router {
  display: flex;
}
.footer {
  padding: 25px 100px;
  background-color: #1c1c1d;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-text {
  color: #878788;
  text-decoration: none;
  padding: 0 30px;
  font-weight: 500;
  /* display: flex; */
  align-items: center;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
