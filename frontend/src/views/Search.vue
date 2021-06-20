<template>
    <div>
        <div class="search-background">
            <div class="shade-background">
                SEARCH
            </div>
        </div>
        <div class="room">
            <div class="filter-room-booking">
                 <div class="block">
                <el-date-picker
                  v-model="date.checkIn"
                  type="date"
                  format="dd MMM"
                  value-format="yyyy-MM-dd"
                  >
                </el-date-picker>
                <el-date-picker
                  v-model="date.checkOut"
                  type="date"
                  format="dd MMM"
                  value-format="yyyy-MM-dd"
                  >
                </el-date-picker>
                 
              </div>
                <div class="guess-night">
                    <!-- <el-input-number v-model="num" controls-position="right" ></el-input-number> -->
                    <div class="night">
                        <div style="font-size: 12px; letter-spacing: 1px; text-align: center; padding: 10px; color: white">NIGHTS</div>
                        <div class=" account">{{accountDate}}</div>
                    </div>
                </div>
            </div>
            <div class= "room-model">
                <div v-for="(r,i) in room" :key="r.id" :index="i" class="room-detail">
                <div class="image">
                    <img :src="`${images[i]}`" alt="">
                </div>
                <div class="room-content">
                     <div class="room-name">
                    {{r.name}}
                    </div>
                    <div class="room-description">
                        {{r.description}}
                    </div>
                    <button @click="booking(r.id)" class= "room-price">BOOK NOW FOR {{r.price}} $</button>
                    <div class="full-info">
                        <div class="info-img">
                            <img src="../assets/icon-1.png" alt="">
                            <img src="../assets/icon-2.png" alt="">
                            <img src="../assets/icon-3.png" alt="">
                            <img src="../assets/icon-4.png" alt="">
                        </div>
                        <div style="font-size: 12px">FULL INFO >></div>
                    </div>
                </div>
               
            </div>
            </div>
            
            
        </div>
    </div>
   
</template>

<script>

export default {
    data(){
        return {
            images: [
                require('../assets/smallRoom.jpeg'),
                require('../assets/luxuryRoom.jpeg'),
                require('../assets/doubleRoom.jpeg'),
                require('../assets/familyRoom.jpeg')
            ],
            num : 1 
        }
    },
    computed: {
        room(){
            return this.$store.state.searchRoom.roomType;
        },
        date(){
            return this.$store.state.searchRoom.dateForm;
        },
        accountDate(){
            let date1 = new Date(this.date.checkIn);
            let date2 = new Date(this.date.checkOut);
            let diffTime = Math.abs(date2 - date1);
            let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            return diffDays;
        }
    },
    // mounted(){
    //     console.log(this.date);
    // },
    methods:{
        async booking(id){
            // room['totalPrice'] = room.price * this.accountDate;
            if (!this.checkPermission()) {
                return this.alertErr();
            }
            else {
                try{
                await this.$store.dispatch("booking", {id: id, ls: this.$store.state.searchRoom});
                this.$router.push("/booking")
                }catch(err){
                    console(this.err)
                } 
            } 
         },
         checkPermission() {
            const check =
                JSON.parse(localStorage.getItem('accessToken')) &&
                JSON.parse(localStorage.getItem('user'));
            if (check) {
                return true;
            }
            return false;
        },
        alertErr() {
            this.$message({
                showClose: true,
                message: 'You need to login to book this room!',
                type: 'error',
            });
            },
    }
}
</script>

<style scoped>
   .night{
       margin: 15px;
       background-color: #151516;
       width: 140px;
   }
   .search-background{
   background: url(http://www.nicdarkthemes.com/themes/hotel/wp/demo/wp-content/uploads/2017/06/parallax-10.jpg);
   height: 305px;
   background-position: center bottom;
   background-size: cover;
  }
  .shade-background{
    font-family: 'Times New Roman', Times, serif;
    background-color:rgba(67, 74, 84, 0.3);
    height: 305px;
    font-size : 55px;
    color: white;
    line-height: 305px;
  }
  .room {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 50px 100px;
  }
  .image img{
      width: 100%;
  }
  .room-detail {
      margin: 15px;
      border: 1px solid #f1f1f1;
      cursor: pointer
  }
  .room-content {
      padding: 20px;
      text-align: left;
  }
  .room-name{
      color: #1c1c1d;
      font-size: 30px;
      font-family: 'Times New Roman', Times, serif;
  }
  .room-description {
      color: #878787;
      margin: 15px 0;
  }
  .room button {
    border: 2px solid #1c1c1c;
    color: #1c1c1c;
    padding: 15px 30px;
    letter-spacing: 1px;
    font-weight: 600;
    font-size: 12px;
    background-color: white;
    text-align: left;
  }
  .room-price{
      cursor: pointer;
  }
  .room-price:hover{
      color: white;
      background-color: #151516;
      transition: linear 0.2s;
  }
  .room-model {
      display: grid;
      grid-template-columns: 50% 50%;
  }
  .filter-room-booking{
      padding: 15px;
      background-color: #1c1c1d;
      margin: 15px;
  }
  .guess-night{
      display: flex;
      justify-content: center;
  }
  .el-input-number {
      margin: 15px;
      width: 140px;
  }
  .account {
      font-size: 50px;
      text-align: center;
      padding: 10px;
      color: #c19b77;
      font-family: 'Times New Roman', Times, serif;
  }
  .info-img img{
      width: 23px;
      margin: 10px;
  }
  .full-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #878788;
      letter-spacing: 1px;
      border-top: 1px solid #eee8e8;
      margin-top: 20px;
      padding-top: 10px;
  }
  
</style>

<style>
    .guess-night .el-input-number .el-input input {
        font-size: 50px;
        color: #c19b76;
        font-family: 'Times New Roman', Times, serif;
        padding-top: 30px;
    }
    .guess-night .el-input-number__increase{
        right: 25px;
        top: 52px;
        color: white;
        background-color: #151516;
        font-size: 20px;
        border: none;
        border-bottom: none !important;
    }
    .guess-night .el-input-number__increase:hover{
        color: #c19b76;
    }
    .guess-night .el-input-number__decrease{
        bottom: 22px !important;
        right: 25px !important;
        color: white;
        background-color: #151516;
        font-size: 20px;
        border: none;
        border-bottom: none;
        border-left: none !important;
    }
    .guess-night .el-input-number__decrease:hover{
        color: #c19b76;
    }
    .guess-night .el-input-number input{
        height: 118px;
        background-color: #151516;
        border: none;
        border-radius: none;
    }
   .block {
    display: flex;
  }
   .room .block .el-date-editor input{
    height: 118px !important;
    border-radius: 0;
    cursor: pointer;
    font-size: 22px;
    background-color: #151516;
    color: #c19b76;
    border: none;
    font-family: 'Times New Roman', Times, serif;
    padding-left: 40px;
  }
   .room .block .el-date-editor{
    width: 140px !important;
    margin: 15px;
  }
</style>
