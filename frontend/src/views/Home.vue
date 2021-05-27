<template>
  <div class="home">
    <div class="carousel">
        <div class="shade-background">
          <div class="home-introduction">
            <div style= "font-size: 12px; letter-spacing: 1px; font-weight: 500">LUXURY HOTEL & BEST RESORT</div>
            <div style="font-size: 65px; padding: 30px 0;">ENJOY A LUXURY AND EXPERIENCE</div>
            <el-button>ROOMS E SUITES</el-button>
          </div>
          <div class="home-booking">
              <div class="block">
                <el-date-picker
                  v-model="checkIn"
                  type="date"
                  format="yyyy/MM/dd"
                  value-format="yyyy-MM-dd"
                  placeholder="CHECK - IN"
                  >
                </el-date-picker>
                <el-date-picker
                  v-model="checkOut"
                  type="date"
                  format="yyyy/MM/dd"
                  value-format="yyyy-MM-dd"
                  placeholder="CHECK - OUT">
                </el-date-picker>
                <el-button @click="submitDate">CHECK AVAILABILITY</el-button>
              </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  data(){
    return {
      checkIn: '',
      checkOut: ''
    }
  },
  methods: {
    submitDate(){
      console.log(this.checkIn == '2021/05/27');
    }
  }
}
</script>

<style scoped>
  .carousel{
    background: url(../assets/homepage-carousel.jpeg);
    height: 765px;
    background-size: cover;
    background-position: center;
    width: 100%;
  }

  .shade-background{
    background-color:rgba(28, 28, 28, 0.4);
    height: 765px;
    color: white;
    position: relative;
  }
  .home-introduction{
    position: absolute;
    right: 50%;
    top: 15%;
    transform: translateX(50%);
    color: #ffffff;
  }
  .home-introduction .el-button{
    border: 1px solid white;
    border-radius: 0;
    background-color: transparent;
    color: white;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: 600;
    padding: 15px 30px;
  }
  .home-booking{
    position: absolute;
    right: 50%;
    bottom: 10%;
    transform: translateX(50%);
  }
  .el-date-picker{
    height: 138px;
  }
  .block .el-button {
    height: 138px;
    color: rgb(211, 205, 205);
    background-color: #1c1c1c;
    border: none;
    border-radius: 0;
    padding: 51px 30px;
    width: 192px;
  }
  
</style>

<style>
  .home-booking .block .el-date-editor input{
    height: 138px !important;
    border-radius: 0;
    cursor: pointer;
  }
  .home-booking .block .el-date-editor{
    width: 192px;
  }
  .home-booking .el-input--prefix .el-input__inner{
    padding-left: 60px;
  }
</style>
