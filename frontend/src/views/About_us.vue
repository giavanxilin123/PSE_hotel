<template>
  <div>
    <div class="aboutus-background">
      <div class="shade-background">ABOUT US</div>
    </div>
    <div class="box-sizing">
      <div class="about_us_sentence">
        <div class="abu-main"> Hello. Our hotel has been present for over 20 years. We make the best
        for all our customers.</div>
        <div class="abu-sub">
          <div>
            <div>
            Phasellus enim libero, blandit  sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut.
            </div>
            <div style="margin-top: 10px">
              Phasellus enim libero, blandit  sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut.
            </div>
          </div>
          <div>
              <div>
         Phasellus enim libero, blandit  sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut.
          </div>
          <div style="margin-top: 10px">
             Phasellus enim libero, blandit  sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut.
          </div>
          </div>
        </div>
       
      </div>
      <div class="banner">
        <div class="banner_1">
          <div class="shade-background_banner">TOP RESTAURANT</div>
        </div>
        <div class="banner_2">
          <div class="shade-background_banner">SPA & WELLNESS</div>
        </div>
        <div class="banner_3">
          <div class="shade-background_banner">BEST SUITES</div>
        </div>
      </div>
    </div>
    <div class="test">
      <div class="test2">
        <div class="test3">Doing the right thing, <br>at the right time.</div>
          <div class="count-number">
            <div class="count-detail">
              <number ref="numberExample" :to="15" />
              <div class="content">SUITES</div>
            </div>
            <div class="count-detail">
              <number ref="numberExample" :to="100" />
              <div class="content">ROOMS</div>
            </div>
            <div class="count-detail">
              <number ref="numberExample" :to="47" />
              <div class="content">EMPLOYEES</div>
            </div>
            <div class="count-detail">
              <number ref="numberExample" :to="10" />
              <div class="content">SERVICES</div>
            </div>
          </div>
         
      </div>
    </div>
    
    <div class="box-sizing">
      <div class="banner">
        <div class="img-container">
          <img
            src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/2017/07/icon-13.png"
          />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          egestas magna at porttitor vehicula nullam augue ipsum dolor.
        </div>
        <div class="img-container">
          <img
            src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/2017/07/icon-11.png"
          />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          egestas magna at porttitor vehicula nullam augue ipsum dolor.
        </div>
      </div>
      <div class="banner">
        <div class="img-container">
          <img
            src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/2017/07/icon-12-1.png"
          />
          
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          egestas magna at porttitor vehicula nullam augue ipsum dolor.
          
        </div>
        <div class="img-container">
          <img
            src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/2017/07/icon-14-1.png"
          />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          egestas magna at porttitor vehicula nullam augue ipsum dolor.
        </div>
      </div>

      <button>CHECK ALL SERVICES</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
};
</script>
<style scoped>
.abu-main{
  text-align: right;
}
.content {
  font-size: 15px;
  margin-top: 10px;
  font-family: Arial, Helvetica, sans-serif;
}
.box-sizing {
  box-sizing: border-box;
  padding: 30px 200px;
}
.aboutus-background {
  background: url(http://www.nicdarkthemes.com/themes/hotel/wp/demo/wp-content/uploads/2017/06/parallax-10.jpg);
  height: 305px;
  background-position: center bottom;
  background-size: cover;
}

.banner_1 {
  background: url(http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/2017/07/img-8.jpg);
  height: 305px;
  width: 305px;
  background-position: center bottom;
  background-size: cover;
}
.banner_2 {
  background: url(http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/2017/07/img-9.jpg);
  height: 305px;
  width: 305px;
  background-position: center bottom;
  background-size: cover;
}
.banner_3 {
  background: url(http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/2017/07/img-11.jpg);
  height: 305px;
  width: 305px;
  background-position: center bottom;
  background-size: cover;
  
}
.shade-background {
  background-color: rgba(67, 74, 84, 0.3);
  height: 305px;
  font-size: 55px;
  color: white;
  line-height: 305px;
}
.shade-background_banner {
  background-color: rgba(67, 74, 84, 0.3);
  height: 305px;
  font-size: 20px;
  color: white;
  line-height: 500px;
}
.about_us_sentence {
  font-family: "Times New Roman", Times, serif;
  font-size: 40px;
  display: flex;
}
.abu-sub{
  line-height: 2;
  letter-spacing: 1px;
  margin-left: 30px;
  text-align: left;
  display: flex;
  font-size: 13px;
  color: #878787;
  letter-spacing: 2px;
  font-family: Arial, Helvetica, sans-serif;
}
.banner {
  padding: 2.5% 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.count-number {
  position: absolute;
  top: 60%;
  left: 12%;
  display: flex;
  justify-content: space-between;
  width: 40%;
  font-size: 50px;
  font-family: "Times New Roman", Times, serif;
  color: white;
}
.test{
  background: url(http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/2017/06/parallax-8.jpg);
  height: 470px;
  background-position-x: center;
  background-position-y: -130px;
  background-size: cover;
}

.test2 {
  width: 100%;
  height: 470px;
  background-color: rgba(101,100,96,0.5);
  position: relative;
}
.test3 {
  text-align: left;
  font-size: 40px;
  color: white;
  position: absolute;
  top: 120px;
  left: 180px;
  font-weight: 500;
  font-family: "Times New Roman", Times, serif;
}


.test4 {
  padding: 2.5% 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.test5 {
  /* background-color: rgba(67, 74, 84, 0.3); */
  /* height: 305px; */
  font-size: 50px;
  color: white;
  font-family: "Times New Roman", Times, serif;
  line-height: 10px;
}
.test6 {
  /* background-color: rgba(67, 74, 84, 0.3); */
  /* height: 305px; */
  font-size: 23px;
  color: white;
  line-height: 0px;
}

.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  text-align: left;
  color: #878787;
}

.img-container img{
  margin-right: 20px;
  width: 50px;
}
button{
  margin-top: 30px;
  background-color: #c19b76;
  border: none;
  border-radius: none;
  color: white;
  font-weight: 600;
  font-size: 12px;
  padding: 15px 30px;
  cursor: pointer;
  letter-spacing: 1px;
}


</style>
