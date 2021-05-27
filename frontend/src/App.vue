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
         <router-link style="border-right: 1px solid #c19b76" to="/contact">Contact</router-link>
         <router-link style="color: #c19b76; border-radius: 30%; border: 1px solid #c19b76; padding: 5px 30px; margin-left: 20px" v-if="!user.nickname" to="/authenticate">Login</router-link>
         <div style="color: white; padding: 5px 30px; display: flex; align-items: center" v-else>
           <div class="avatar">{{user.nickname[0]}}</div>
            <el-dropdown style="cursor: pointer; color: #c19b76" trigger="click">
              <span style="padding-left: 5px;" class="el-dropdown-link">
                {{user.nickname}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="signOut" icon="el-icon-switch-button">Log Out</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
         </div>
         
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
    return {

    }
  },
  computed: {
    user(){
      return this.$store.state.user;
    }
  },
  methods: {
    signOut() {
        this.$store.dispatch('signOut');
        this.$router.push('/')
      },
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
/* .el-dropdown-menu__item:not(.is-disabled):hover{
  color: #c19b76 !important;
  background-color: #f7f4f1 !important;
} */
</style>

<style scoped>
  .logo img{
    width: 170px;
    height: 100%;
  }
  .router{
    display: flex;
  }
  .avatar {
    border: 1px solid #c19b76;
    color: #c19b76;
    margin-right: 20px;
    padding: 5px;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    line-height: 24px;
  }
</style>
