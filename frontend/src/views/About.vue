<template>
    <div>
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

        
          <el-form :model="formLogin">
            <h2 >Đăng nhập</h2>
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
    
      login(){
        axios.post('http://localhost:3000/api/login', this.formLogin)
        .then(res => this.alertSuccess(res))
        .catch(err => this.alertErr(err.response.data))
      },
      alertErr(err) {
      this.$message({
        showClose: true,
        message:  err.message || "Đã có lỗi xảy ra!",
        type: "error"
      });
      },
      alertSuccess(res) {
        console.log(res)
        this.$message({
          showClose: true,
          message: res.data.message +  "thành Công!",
          type: "success"
        });
      }
  }
}
</script>

<style >

</style>
