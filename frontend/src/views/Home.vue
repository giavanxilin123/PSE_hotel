<template>
<div>
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
                 <!-- <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number> -->
                <el-button @click="submitDate">CHECK AVAILABILITY</el-button>
              </div>
          </div>
        </div>
    </div>
  </div>
    <div class="box-sizing-1">
      <div class ="relax-container">
        <div class="relax-text" >
          <div class="relax-text-small"> HOTEL BAYVIEW </div>
          <div class="relax-text-big">Relax in our</div>
          <div class="relax-text-big">Resort</div>
          <div class="relax-text-small">Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis malesuada felis.</div>
          <a href="" class="link">About us</a>      
        </div>
        
        <img src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/2017/06/img-1-1024x963.jpg" alt="" class="relax-image-1" >
        
      </div>
    </div>
  
    <div class ="discover-container">
      <img src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/2017/08/parallax-6.jpg?id=738" alt="" class="discover-image">
      <div class="discover-text">
        <div class="discover-text-small"> LUXURY HOTEL & BEST RESORT </div>
        <div class="discover-text-big">Discover Our</div>
        <div class="discover-text-big2">Location</div>
        <div class="discover-text-small2">Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis. Blandit vel sapien vitae, condimentum ultricies magna et orci ut et lobortis, Phasellus enim.</div>
        <a href="" class="link2">CHECK ALL PACKAGE</a>
      </div>
      
    </div>
    <div class="discover-bottom-text">Phasellus enim libero, blandit vel sapien vitae, condimentumultricies magna et. Best services orci ut et lobortis. Blandit vel sapienvitae, condimentum</div>
    <div class="box-sizing-1">
      <div class ="restaurant-container">
        <div class="res-text" >
          <div class="res-text-small"> FINE FOOD </div>
          <div class="res-text-big">Restaurant</div>
          
          <div class="res-text-small">Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis. Phasellus enim libero, blandit.</div>
          <a href="" class="link3">READ MORE</a>      
        </div>
        <img src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/revslider/home-section/img-16.jpg" alt="" class="res-image" >
        
      </div>
      <div class="restaurant-container">
        <img src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/revslider/home-section-2/img-17.jpg" alt="" class="res-image" >

        <div class="res-text" >
          <div class="res-text-small"> HOTEL LUXURY </div>
          <div class="res-text-big">RECEPTION</div>
          
          <div class="res-text-small">Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis. Phasellus enim libero, blandit.</div>
          <a href="" class="link3">READ MORE</a>      
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
          num: 1,
          checkIn: '',
          checkOut: '', 
    }
  },
  methods: {
    submitDate(){
      console.log(this.checkIn);
      this.$router.push("/search")
    }
  }
}
</script>

<style scoped>
  .box-sizing-1{
    box-sizing: border-box;
    background-color: f8f9fa;
  padding: 20px 200px;
  }
  .box-sizing-2{
    box-sizing: border-box;
  padding: 0px 0px;
  }
  
  .block .el-button {
    white-space: initial;
    line-height: 1.5;
    letter-spacing: 2px;
    font-size: 12px
  }
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
  .el-input-number{
    width: 192px;
  }
  

.link2{
     display: inline-block;
     margin-top: 60px;
     margin-left: 80px;
     padding: 5px 13px;
     border: solid 2px #161616;
     text-decoration: none!important;
     background-color: #161616;
     font-size: 14px;
     color: white ;
}
.link3{
     display: inline-block;
     margin-top: 20px;
     padding: 5px 13px;
     border: solid 2px #C19B76;
     text-decoration: none!important;
     color: #C19B76;
     font-size: 14px;

 }
 .relax-text{
   
    display: inline-block;
    width:750px;
    margin-top: 200px;
    margin-left: 050px;
   
 }
 .relax-text-small{
   color: #1c1c1d;
     font-family: 'Roboto';
     font-size: 16px;
     margin-top: 10px;
     font-weight: light;
 }
 .relax-text-big{
   color: #1c1c1d;
    font-family: 'Gilda Display';
    font-size: 64px;
    margin-top: 10px
 }
.relax-container{
    display: flex
}

  
.relax-image-1{
  display: inline-block;
  vertical-align: top;
  margin-left: 30px;
  width:40%;
}
.link{
     display: inline-block;
     margin-top: 20px;
     padding: 5px 13px;
     border: solid 2px #C19B76;
     text-decoration: none!important;
     background-color: #C19B76;
     color: white;
     font-size: 14px;

 }

.discover-text-big{
    color: white ;
    font-family: 'Gilda Display';
    font-size: 72px;
    margin-top: 20px;
    margin-left: 80px;
}
.discover-text-big2{
  color: #c09b76;
  font-family: 'Gilda Display';
  font-size: 72px;
  margin-top: 20px;
  margin-left: 80px;
}
.discover-image{
  display: inline-block;
  vertical-align: top;
  margin-left: 0px;
  width:50%;
}
.discover-text{
  display: inline-block;
  vertical-align: top;
  width:1500px;
  height: 700px;
  margin-top:0px;
  margin-left: 40px;
  background-color: #1b1c1c;
  text-align: left;
}
.discover-text-small{
   color: white;
     font-family: 'Roboto';
     font-size: 16px;
     margin-top: 50px;
     font-weight: light;
     text-align: left;
     margin-left: 80px;
 }
 .discover-bottom-text{
   color: black;
   text-align: center;
   width:750px;
   height: 100px;
   margin-top: 80px;
   font-family:"gilda display";
   font-size: 24px;
   margin-left : 500px;
   font-weight: light;
 }
 .discover-container{
   display: flex;
 }
 .discover-text-small2{
   color: white;
     font-family: 'Roboto';
     font-size: 18px;
     margin-top: 50px;
     width: 400px;
     font-weight: light;
     text-align: left;
     margin-left: 80px;

 }
 .restaurant-container{
   display: flex;
   flex-direction: row;
 }
 .res-text{
   
    display: inline-block;
    width:551px;
    margin-top: 180px;
    margin-left: 050px;
   
 }
 .res-text-small{
   color: #1c1c1d;
     font-family: 'Roboto';
     font-size: 16px;
     margin-top: 10px;
     font-weight: light;
 }
 .res-text-big{
   color: #1c1c1d;
    font-family: 'Gilda Display';
    font-size: 64px;
    margin-top: 10px
 }
.res-image{
  display: inline-block;
  vertical-align: top;
  margin-left: 30px;
  width:40%;
}
</style>

<style>
  .block {
    display: flex;
  }
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
  .home-booking .block .el-input__inner{
    font-size: 14px;
  }
</style>
