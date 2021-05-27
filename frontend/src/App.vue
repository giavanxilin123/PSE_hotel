<template>
  <div id="app">
    <div id="nav">
      <div class="logo">
        <img src="./assets/hotel-logo.png" alt="">
      </div>
      <div class="router">
         <router-link to="/">Home</router-link> 
         <router-link to="/room">Rooms</router-link>
         <router-link to="/about-us">About us</router-link>
         <router-link to="/page">Page</router-link> 
         <router-link to="/news">News</router-link>
         <router-link to="/contact">Contact</router-link>
         <router-link style="color: #c19b76; border-radius: 30%; border: 1px solid #c19b76; padding: 5px 30px; margin-left: 20px" v-if="!user.nickname" to="/authenticate">Login</router-link>
         <div style="color: white; padding: 5px 30px; margin-left: 20px" v-else>{{user.nickname}}</div>
         
      </div> 
    </div>
    <router-view/>
    <div class ="footer">
      <!-- footer  -->
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return {}
  },
  computed: {
    user(){
      return this.$store.state.user;
    }
  }
}
</script>
<style>
body{
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
  padding:25px 100px;
  background-color: #1c1c1d;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#nav a {
  color: #878788;
  text-decoration: none;
  padding:0 30px;
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
  .logo img{
    width: 170px;
    height: 100%;
  }
  .router{
    display: flex;
  }
  
</style>
