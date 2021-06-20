<template>
    <div>
        <div class="banner">
            <div class="bannertext"> BOOKING </div>
        </div> 
        <div class="room">
            <div class = "booking-bill">
                <div class= "booking-image">
                    <img src="../assets/smallRoom.jpeg" alt="">
                </div>
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
                    <el-input-number v-model="num" controls-position="right" ></el-input-number>
                    <div class="night">
                        <div style="font-size: 12px; letter-spacing: 1px; text-align: center; padding: 10px; color: white">NIGHTS</div>
                        <div class=" account">{{accountDate}}</div>
                    </div>
                </div>
                </div>
                <div class="total">
                  <span style="font-size: 30px">{{total}} $</span>     / TOTAL 
                </div>
            </div>
            
            <div style="text-align: left" class= "booking-info">
                <h1> Check Your Informations</h1>
                <div class = "checkOut">
                    <div class="inline">
                        Họ và tên: {{user.nickname}}     -     Email : {{user.email}}
                    </div>
                    <div class="inline">
                           CheckIn : {{date.checkIn}}     -     CheckOut: {{date.checkOut}}
                    </div>
                    <div class="inline">
                         RoomType : {{room[bookingID].name}}     
                    </div>
                    <div class="inline">
                         Total : {{total}} $
                    </div>
                </div>
                 
                 <button @click="checkOut" style = "margin-top: 30px; cursor: pointer"> Check Out</button>
            </div>
            
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
       return {
           num : 1 ,
           
       }
    },
    methods: {
        async checkOut(){
            // console.log(this.formTelegram)
            try{
                await this.$store.dispatch("checkOut", this.formTelegram);
                this.alertSuccess()
                this.$router.push("/");
            }catch(err){
                console.log(err);
            }
        },
        alertSuccess() {
        this.$message({
          showClose: true,
          message: "Booking Thành Công!",
          type: "success"
        });
      }
    },
    computed: {
        user(){
            return this.$store.state.user;
        },
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
        },
        total() {
            return this.room[this.bookingID - 1].price * this.accountDate;
        },
        bookingID() {
            return JSON.parse(localStorage.getItem('bookingID'));
        },
        formTelegram()  {
            return {
               nickname: this.user.nickname,
               email: this.user.email,
               roomType: this.room[this.bookingID].name,
               checkIn:  this.date.checkIn,
               checkOut:  this.date.checkOut,
               total: this.total
            }
        },

    },
    
}
</script>
<style scoped>
.checkOut {
    border : 1px solid silver;
    background-color: tan;
    padding: 20px;
}
.inline{
    display: flex;
    padding: 20px;
    justify-content: space-between;
    letter-spacing: 2px;
}
.checkOut{
    font-size: 20px;
    font-weight: 600 ;
    font-style: italic;
}
.booking-info {
    padding: 0 30px;
}
.total {
    background-color: #151516;
    color:white;
    padding: 25px;
    font-size: 15px;
}
.boxsizing{
    box-sizing: border-box;
    padding: 20px 200px;
}
.banner{
    width: 100%;
    height: 305px;
    background-position: center;
    background-size: cover;
    background-position: bottom center;
    background-image: url(http://www.nicdarkthemes.com/themes/hotel/wp/demo/wp-content/uploads/2017/06/parallax-10.jpg?id=779);
 }
.bannertext{
    color: #fff;
    font-size: 55px;
    text-align: center;
    font-family: 'Gilda Display';
    font-weight: 100;
    padding-top: 100px;
} 

.form-heading{
    font-family: "Gilda Display";
    color: #1c1c1d;
    font-weight: 100;
    font-size: 30px;
    text-align: left;
    margin-top: 50px;
    margin-bottom: 30px;
    letter-spacing: 1px;
}
.checkbox{
    grid-column: 3/4;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 12px;
    color: black;
    letter-spacing: 1px;
    position: left;
    text-align: left;
    margin-top: 0px;
}
.checkbox-text2{
    font-family: 'Roboto';
    font-weight: 100;
    font-size: 11px;
    color: #878788;
    letter-spacing: 1px;

}
.booking-image img {
    width: 100%;
}
.fill-container{
    grid-column: 2/3;
    margin-top: -80px;
    margin-left: 20px;
    margin-bottom: 0px;
}
.form{
    
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-size: 14px;
    color: #878788;
    letter-spacing: 1px;
    position: left;
    text-align: left;
    line-height: 27px;
}

.image img{
    width: 100%;
}
.booking {
    display: flex;
}
.booking-bill{
    width: 33%;
}
.night{
       margin: 15px;
       background-color: #151516;
       width: 140px;
   }
.guess-night{
      display: flex;
  }

  .el-input-number {
      margin: 15px;
      width: 140px;
  }

  
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
  }
  .guess-night{
      display: flex;
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