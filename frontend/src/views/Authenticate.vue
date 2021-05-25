<template> 
    <div>
      <div class="account-background"></div>
      <div class = "authenticate-user">
         <el-form :model="formLogin">
            <h2 >Đăng nhập {{user.username}}</h2>
            <el-form-item 
            label="Username" 
            prop="username"
            :rules="[{required: true, message:'Please input your username ', trigger:'blur'}]">
              <el-input v-model="formLogin.username" autocomplete="off"></el-input>
            </el-form-item>
             <el-form-item label="Mật khẩu" 
             prop="password"
             :rules="[{required: true, message:'Please input your password ', trigger:'blur'}]">
              <el-input type="password" v-model="formLogin.password" autocomplete="off"></el-input>
            </el-form-item>
            
            <el-button class="modal-login" type="primary" @click="login">Đăng nhập</el-button>
          </el-form>
          
         <el-form :model="formRegister">
            <h2 >Tạo tài khoản</h2>
            <el-form-item 
            label="Username" 
            prop="username"
            :rules="[{required: true, message:'Please input your username ', trigger:'blur'}]">
              <el-input v-model="formRegister.username" autocomplete="off"></el-input>
            </el-form-item>
             <el-form-item label="Mật khẩu" 
             prop="password"
             :rules="[{required: true, message:'Please input your password ', trigger:'blur'}]">
              <el-input type="password" v-model="formRegister.password" autocomplete="off"></el-input>
            </el-form-item>
             <el-form-item label="Email" 
             prop="email"
             :rules="[{required: true, message:'Please input your email', trigger:'blur'},
                      {type: 'email', message: 'Please input correct email', trigger: ['blur', 'change'] }]">
              <el-input  v-model="formRegister.email" autocomplete="off"></el-input>
            </el-form-item>
            
            <el-button class="modal-register" type="primary" @click="submit">Tạo tài khoản</el-button>
          </el-form>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return {
      formRegister: {
          email: '',
          username: '',
          password: ''
        },
        formLogin: {
          username: '',
          password: ''
        },
        user:{
          username: ''
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
      handle_interceptor(){
        axios.interceptors.request.use((config) => {
        config.headers.common["interceptorheader"] = "Interceptor Header";
        config.payload = "hihi";
        return config;
        }, (error) => {
            return Promise.reject(error);
         });
      },
      submit(){
        axios.post('http://localhost:3000/api/register', this.formRegister)
        .then(res => {this.alertSuccess(res)})
        .catch(err => {this.alertErr(err)})
      },
    
      login(){
        this.handle_interceptor()
        axios.post('http://localhost:3000/api/login', this.formLogin)
        .then(res => {
          console.log(res)
          this.alertSuccess()
        })
        .catch(err => this.alertErr(err.response.data))
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
  .authenticate-user{
    display: flex;
    justify-content: space-around;
  }
</style>
