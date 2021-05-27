<template>
  <div>
    <div class="account-background">
      <div class="shade-background">ABOUT US</div>
    </div>
    <div class="box-sizing">
      <div class="about_us_sentence">
        Hello. Our hotel has been present for over 20 years. We make the best
        for all our customers. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Aenean egestas magna at porttitor vehicula nullam augue
        ipsum dolor.
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
        <div class="box-sizing">
          <div class="test3">Doing the right thing, at the right time.</div>
          <div class="count-number">
            <number ref="numberExample" :to="15" />
            <number ref="numberExample" :to="100" />
            <number ref="numberExample" :to="47" />
            <number ref="numberExample" :to="10" />
          </div>
          
            <div class="hoge">
              <pre>    SUITES         ROOMS     EMPLOYEES   SERVICES</pre>
              </div>
          
        </div>
      </div>
    </div>
    <div class="margin">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="suites" label="SUITES"> </el-table-column>
        <el-table-column prop="rooms" label="ROOMS"> </el-table-column>
        <el-table-column
          prop="employees"
          label="EMPLOYEES
"
        >
        </el-table-column>
        <el-table-column prop="services" label="SERVICES"> </el-table-column>
      </el-table>
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          suites: "15",
          rooms: "100",
          employees: "47",
          services: "10",
        },
      ],
    };
  },
};
</script>
<style scoped>
.box-sizing {
  box-sizing: border-box;
  padding: 30px 200px;
}
.account-background {
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
  /* float: left;
  margin: 30px; */
}
.banner_2 {
  background: url(http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/2017/07/img-9.jpg);
  height: 305px;
  width: 305px;
  background-position: center bottom;
  background-size: cover;
  /* float: left;
  margin: 30px; */
}
.banner_3 {
  background: url(http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/2017/07/img-11.jpg);
  height: 305px;
  width: 305px;
  background-position: center bottom;
  background-size: cover;
  /* float: left;
  margin: 30px; */
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
}
.banner {
  padding: 2.5% 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.count-number {
  padding:  0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  font-size: 100px;
  font-family: "Times New Roman", Times, serif;
  color: white;
}
.test {
}
.test2 {
  background: url(http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/2017/06/parallax-8.jpg);
}
.test3 {
  /* background-color: rgba(67, 74, 84, 0.3); */
  /* height: 305px; */
  font-size: 50px;
  color: white;
  line-height: 200px;
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
}
.margin {
  margin: 20px 300px;
}
.hoge{
  font-size: 40px;
  font-family: "Times New Roman", Times, serif;
  color: white;
}
</style>
