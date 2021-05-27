<template>
  <div>
    <div class="account-background">
      <div class="shade-background">ABOUT US</div>
    </div>
    <div class="box-sizing">
      <div class="about_us_sentence">
        Hello. Our hotel has been present for over 20 years. We make the best
        for all our customers.
      </div>

      <div class="about_us_background_1">
        <div class="shade-background_about_us">TOP RESTAURANT</div>
      </div>
      <div class="about_us_background_2">
        <div class="shade-background_about_us">SPA & WELLNESS</div>
      </div>
      <div class="about_us_background_3">
        <div class="shade-background_about_us">BEST SUITES</div>
      </div>
      
    </div>
  </div>
</template>


<style scoped>
.box-sizing {
  box-sizing: border-box;
  padding: 30px 300px;
}
.account-background {
  background: url(http://www.nicdarkthemes.com/themes/hotel/wp/demo/wp-content/uploads/2017/06/parallax-10.jpg);
  height: 305px;
  background-position: center bottom;
  background-size: cover;
}

.about_us_background_1 {
  background: url(http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/2017/07/img-8.jpg);
  height: 305px;
  width: 305px;
  background-position: center bottom;
  background-size: cover;
  float: left;
  margin: 30px;
}
.about_us_background_2 {
  background: url(http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/2017/07/img-9.jpg);
  height: 305px;
  width: 305px;
  background-position: center bottom;
  background-size: cover;
  float: left;
  margin: 30px;
}
.about_us_background_3 {
  background: url(http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/2017/07/img-11.jpg);
  height: 305px;
  width: 305px;
  background-position: center bottom;
  background-size: cover;
  float: left;
  margin: 30px;
}
.shade-background {
  background-color: rgba(67, 74, 84, 0.3);
  height: 305px;
  font-size: 55px;
  color: white;
  line-height: 305px;
}
.shade-background_about_us {
  background-color: rgba(67, 74, 84, 0.3);
  height: 305px;
  font-size: 20px;
  color: white;
  line-height: 500px;
}
.about_us_sentence {
  text-align: center;
  font-size: 40px;
  width: 50%;
  /* padding-right: 200px;
      padding-left: 200px; */
}

</style>
