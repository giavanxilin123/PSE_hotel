<template>
  <div>
    <div class="account-background">
      <div class="shade-background">CONTACT</div>
    </div>
    <div class="authenticate-user">
      <div class="border-form">
        <h2
          style="
            font-weight: 300;
            color: #1c1c1d;
            font-family: 'Times New Roman', Times, serif;
          "
        >
          Drop us a line
        </h2>
        <p style="color: #1c1c1d; font-family: 'Times New Roman', Times, serif">
          Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat
          dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras
          sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis
          malesuada felis quis, ultricies convallis neque. Pellentesque
          tristique fringilla tempus. Vivamus bibendum nibh in dolor pharetra, a
          euismod nulla dignissim.
        </p>
        <h4>Name:</h4>
        <el-input placeholder="Please input" v-model="input"></el-input>
        <h4>Email:</h4>
        <el-input placeholder="Please input" v-model="input"></el-input>
        <h4>Message:</h4>
        <el-input
          type="textarea"
          :rows="2"
          placeholder="Please input"
          v-model="textarea"
        >
        </el-input>
        <br /><br />
        <el-button type="warning">SEND NOW</el-button>
      </div>

      <div class="border-form">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d480.3656704667982!2d106.70108334743196!3d10.775905166642627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f479e4f95db%3A0xcae127d5b519b548!2z44Os44OD44Kv44K544Ob44OG44Or!5e0!3m2!1sja!2s!4v1622215985927!5m2!1sja!2s"
          width="600"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <div class="table">
          <el-table :data="tableData1" style="width: 100%">
            <el-table-column prop="date" label="" width="180">
            </el-table-column>
            <el-table-column prop="name" label="" width="180">
            </el-table-column>
          </el-table>
          <el-table :data="tableData2" style="width: 100%">
            <el-table-column prop="date" label="" width="180">
            </el-table-column>
            <el-table-column prop="name" label="" width="180">
            </el-table-column>
          </el-table>
        </div>
        <br /><br />
        <p>AVAILABLE AT 10AM – 8PM</p>
        <h1>+ 202 555 0116</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: "",
      tableData1: [
        {
          date: "Address :",
          name: "Avenue 234",
        },
        {
          date: "City :",
          name: "New York - US",
        },
        {
          date: "Check-In :",
          name: "15:00 am",
        },
      ],
      tableData2: [
        {
          date: "Phone :",
          name: "00 837920234",
        },
        {
          date: "Email :",
          name: "info@hotel.com",
        },
        {
          date: "Check-Out :",
          name: "11:00 am",
        },
      ],
    };
  },
};
</script>

<style scoped>
.account-background {
  background: url(http://www.nicdarkthemes.com/themes/hotel/wp/demo/wp-content/uploads/2017/06/parallax-8.jpg);
  height: 305px;
  background-position: center;
  background-size: cover;
}
.shade-background {
  background-color: rgba(67, 74, 84, 0.3);
  height: 305px;
  font-size: 55px;
  color: white;
  line-height: 305px;
}
.authenticate-user {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 60px;
  margin: 0 60px;
}
.border-form {
  width: 100%;
  /* border: 1px solid #f1f1f1; */
  margin: 15px;
  padding: 15px;
  text-align: initial;
}
.modal-form {
  width: 100%;
  background-color: #c19b77;
  border: none;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 1px;
}
.modal-form:hover {
  width: 100%;
  background-color: #e2ae7c;
}
.table {
  display: flex;
}
</style>
