<template> 
    <div>
      <div class="account-background">
        <div class="shade-background">
          ACCOUNT
        </div>
      </div>
      <div class = "authenticate-user">
        <div class="border-form">
          <el-form @keyup.enter="login" :model="formLogin">
            <div style="font-size: 14px; background-color: #c19b77; display: inline; color: white; padding:5px 10px; font-weight: 500">ALREADY A MEMBER</div>
            <h2 style="font-weight: 300; color: #1c1c1d">Log In</h2>
            <el-form-item 
            label="Username" 
            prop="username"
            :rules="[{required: true, message:'Please input your username ', trigger:'blur'}]">
              <el-input v-model="formLogin.username" autocomplete="off"></el-input>
            </el-form-item>
             <el-form-item label="Password" 
             prop="password"
             :rules="[{required: true, message:'Please input your password ', trigger:'blur'}]">
              <el-input type="password"  v-model="formLogin.password" @keyup.enter.native="login" autocomplete="off"></el-input>
            </el-form-item>
            <el-button class="modal-form" type="primary"   @click="login" >LOG IN </el-button>
        </el-form>
        </div>
  
        <div class="border-form">
          <el-form :model="formRegister">
            <h2 style="font-weight: 300; color: #1c1c1d">Registration</h2>
            <el-form-item 
            label="Username" 
            prop="username"
            :rules="[{required: true, message:'Please input your username ', trigger:'blur'}]">
              <el-input v-model="formRegister.username" autocomplete="off"></el-input>
            </el-form-item>
             <el-form-item label="Password" 
             prop="password"
             :rules="[{required: true, message:'Please input your password ', trigger:'blur'}]">
              <el-input type="password" v-model="formRegister.password" autocomplete="off"></el-input>
            </el-form-item>
             <el-form-item 
            label="Nickname" 
            prop="nickname"
            >
              <el-input v-model="formRegister.nickname" autocomplete="off"></el-input>
            </el-form-item>
             <el-form-item label="Email" 
             prop="email"
             :rules="[{required: true, message:'Please input your email', trigger:'blur'},
                      {type: 'email', message: 'Please input correct email', trigger: ['blur', 'change'] }]">
              <el-input @keyup.enter.native="submit"  v-model="formRegister.email" autocomplete="off"></el-input>
            </el-form-item>
            <el-button class="modal-form" type="primary" @click="submit">REGISTRATION</el-button>
        </el-form>
        </div>
        
      </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return {
      formRegister: {
          nickname: '',
          email: '',
          username: '',
          password: ''
        },
        formLogin: {
          username: '',
          password: ''
        }
    }
  },
  // created(){
  //   axios.get('http://localhost:3000/api/register')
  //   .then(res => this.task = res.data)
  // },
  computed: {
    
  },
  methods: {
      submit(){
        axios.post('http://localhost:3000/api/register', this.formRegister)
        .then(res => {this.alertSuccess(res)})
        .catch(err => {this.alertErr(err)})
      },
    
      // async login(){
      //   await axios.post('http://localhost:3000/api/login', this.formLogin)
      //   .then(res => {
      //     console.log(res)
      //     this.alertSuccess()
      //     this.$router.push("/home");
      //   })
      //   .catch(err => this.alertErr(err.response.data))
      // },

      async login(){
        try{
          await this.$store.dispatch("logIn", this.formLogin);
          this.alertSuccess();
          this.$router.push("/home");
        }catch(err){
          this.alertErr(err)
        }
        console.log(this.user)
      },
      alertErr(err) {
      this.$message({
        showClose: true,
        message:  err.message || "Đã có lỗi xảy ra!",
        type: "error"
      });
      },
      alertSuccess() {
        this.$message({
          showClose: true,
          message: "Thành Công!",
          type: "success"
        });
      }
  }
}
</script>

<style scoped>
  .account-background{
   background: url(http://www.nicdarkthemes.com/themes/hotel/wp/demo/wp-content/uploads/2017/06/parallax-10.jpg);
   height: 305px;
   background-position: center bottom;
   background-size: cover;
  }
  .shade-background{
    background-color:rgba(67, 74, 84, 0.3);
    height: 305px;
    font-size : 55px;
    color: white;
    line-height: 305px;
  }
  .authenticate-user{
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding: 60px;
    margin: 0 60px;
  }
  .border-form{
    width: 100%;
    border: 1px solid #f1f1f1;
    margin: 15px;
    padding: 15px;
    text-align: initial;
  }
  .modal-form{
    width: 100%;
    background-color: #c19b77;
    border: none;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 1px;
  }
   .modal-form:hover{
    width: 100%;
    background-color: #e2ae7c;
  }
  
</style>
