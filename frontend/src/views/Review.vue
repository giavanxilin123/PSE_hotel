<template>
  <div>
    <div class="review-background">
      <div class="shade-background">REVIEW</div>
    </div>
    <div class="box">
        <div class="demonstration">Select which hotel you review?</div>
      <el-select v-model="value" placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <br><br>

      <span class="demonstration">Your overall rating of this property</span><br>
      <el-rate v-model="value1"></el-rate>
      <br />
      <span class="demonstration">Title of your review </span>
      <el-input placeholder="Please input" v-model="input"></el-input>
      <br /><br />
      <span class="demonstration">Your review </span>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="Please input"
        v-model="textarea"
      >
      </el-input>
      <button >SEND NOW</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {options: [{
          value: 'Option1',
          label: 'Hotel1'
        }, {
          value: 'Option2',
          label: 'Hotel2'
        }, {
          value: 'Option3',
          label: 'Hotel3'
        }, {
          value: 'Option4',
          label: 'Hotel4'
        }, {
          value: 'Option5',
          label: 'Hotel5'
        }],
        value: ''
      };
  },
};
</script>
<style scoped>
.review-background {
  background: url(http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/2017/11/parallax-16.jpg);
  height: 305px;
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
.box {
  margin: 30px 30%;
  /* padding: 0 30%; */
  text-align: left;
  font-size: 16px;
  font-weight: 600;
}
button{
  background-color: #c19b76;
  border-radius: none;
  border: none;
  padding: 15px 40px;
  color: white;
  letter-spacing: 1px;
  font-size: 12px;
  font-weight: 600;
}
</style>
