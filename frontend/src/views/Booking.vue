<template>
    <div>
        <div class="banner">
            <div class="bannertext"> BOOKING </div>
        </div> 
        <div class="boxsizing">
            <div class="reservation-container">
                <div class="rc-pic">
                    <div class="rc-pic-text">Small Room</div>
                </div>
                <div class ="form-container1">
                    <div class="form-heading">Add Extra Services</div>
                    <div class="checkbox-container">
                        <div class="checkbox">
                        <input type="checkbox" id="option1" name="option1" value="wifi">
                        <label for="option1">Wifi: 100$ (Room/Night) = 100$   </label><br>
                        <input type="checkbox" id="option1" name="option1" value="carrental">
                        <label for="option2">Car Rental: 30$ (Room/Night) = 30$   </label><br>
                        <input type="checkbox" id="option1" name="option1" value="TV">
                        <label for="option3">Satelite TV: 50$ (Room/Night) = 50$   </label><br>
                        <input type="checkbox" id="option1" name="option1" value="seaview">
                        <label for="option4">Sea View: 10$ (Room/Night) = 10$   </label><br>
                        <input type="checkbox" id="option1" name="option1" value="laundry">
                        <label for="option5">Laundry: 10$ (Room/Night) = 10$   </label><br>
                        <input type="checkbox" id="option1" name="option1" value="breakfast">
                        <label for="option6">Breakfast: 10$ (Room/Night) = 10$   </label><br>
                        </div>    
                        
                        
                    </div>
                </div>
                <div class="rc-content">
                    
                    <div class="rc-content-box1">
                        <div class="rc-content-text2">CHECK IN</div>
                        <div class="rc-content-text2-1">01</div>
                    </div>
                    <div class="rc-content-box1">
                        <div class="rc-content-text2">CHECK OUT</div>
                        <div class="rc-content-text2-1">02</div>
                    </div>
                    <div class="rc-content-box2">
                        <div class="rc-content-text3">1</div>
                        <div class="rc-content-text4">Guest</div>
                    </div>
                    <div class="rc-content-box2">
                        <div class="rc-content-text3">1</div>
                        <div class="rc-content-text4">Nights</div>
                    </div>
                    
                </div>
                    <div class="fill-container">
                        <div class="form-heading">Add your infomation: </div>
                        <div class="form">
                            <form>
                                <div class="checkbox-container">
                                <label for="name">Name*</label><br>
                                <input type="text" id="name" name="name" size="40" style="font-family: 'Roboto',sans-serif; color: #878787;font-weight: 400; font-size: 20px; "><br>
                                <label for="surname">Surname*</label><br>
                                <input type="text" id="surname" name="surname" size="40" style="font-family: 'Roboto',sans-serif; color: #878787;font-weight: 400; font-size: 20px; "><br>
                                <label for="email">Email*</label><br>
                                <input type="text" id="email" name="email" size="40" style="font-family: 'Roboto',sans-serif; color: #878787;font-weight: 400; font-size: 20px; "><br>
                                <label for="telephone">Telephone*</label><br>
                                <input type="text" id="telephone" name="telephone" size="40" style="font-family: 'Roboto',sans-serif; color: #878787;font-weight: 400; font-size: 20px; "><br>
                                <label for="address">Address*</label><br>
                                <input type="text" id="address" name="address" size="40" style="font-family: 'Roboto',sans-serif; color: #878787;font-weight: 400; font-size: 20px; "><br>
                                <label for="city">City*</label><br>
                                <input type="text" id="city" name="city" size="40" style="font-family: 'Roboto',sans-serif; color: #878787;font-weight: 400; font-size: 20px; "><br>
                                <label for="country">Country*</label><br>
                                <input type="text" id="country" name="country" size="40" style="font-family: 'Roboto',sans-serif; color: #878787;font-weight: 400; font-size: 20px; "><br>
                                <label for="zip">ZIP*</label><br>
                                <input type="text" id="zip" name="zip" size="40" style="font-family: 'Roboto',sans-serif; color: #878787;font-weight: 400; font-size: 20px; "><br>
                                </div>
                                <label for="request">Request*</label><br>
                                <textarea id="request" name="request" rows="5" cols="96" style="font-family: 'Roboto',sans-serif; color: #878787;font-weight: 400; font-size: 20px; "></textarea><br>
                                <label for="arrival">Arrival*</label><br>
                                <input type="text" id="arrival" name="arrival" size="40" style="font-family: 'Roboto',sans-serif; color: #878787;font-weight: 400; font-size: 20px; "><br>
                                <label for="coupon">Coupon*</label><br>
                                <input type="text" id="coupon" name="coupon" size="40" style="font-family: 'Roboto',sans-serif; color: #878787;font-weight: 400; font-size: 20px; "><br>
                                <input type="checkbox" id="option7" name="option7" value="terms" style="font-family: 'Roboto',sans-serif; color: #878787;font-weight: 100; font-size: 14px; line-height: 27px;">
                                <label for="option7">Terms and Conditions* </label><br>
                                
                            </form>
                        </div>
                        
                    </div>
                    
                    
                
                

            </div>
            <div class="rc-content-box3">
                <div class="rc-content-text5">30$/total</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
.reservation-container{
    display: grid;
    grid-template-columns: 400px auto;
    height: auto;
}
.rc-pic{
    background-image: url(http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/2017/06/room-1-1024x664.jpg);
    width: 400px;
    height: 305px;
    background-position: center;
    background-size: cover;
}
.rc-pic-text{
    font-family: 'Roboto';
    font-weight: 100;
    font-size: 11px;
    color: #ffffff;
    background-color: black;
    width: 120px;
    letter-spacing: 2px;
    margin-top: 20px;
}
.rc-content{
    grid-row: 2/4;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;
    background-color: #1C1C1D;
    padding: 10px;
    height: 300px;
}
.rc-content-box1{
    background-color: #151516;
    height: 100px;
    width: 80px;
    position: center;
    margin-left: 40px;

}
.rc-content-box2{
    background-color: #151516;
    height: fit-content;
    width: 80px;
    margin-left: 40px;

}
.rc-content-text2{
    font-family: 'Roboto';
    font-weight: 100;
    font-size: 12px;
    color: #c19b77;
    margin: 5px;
}
.rc-content-text3{
    font-family: 'Roboto';
    font-weight: 100;
    font-size: 30px;
    color: #ffffff;
}
.rc-content-text4{
    font-family: 'Roboto';
    font-weight: 100;
    font-size: 11px;
    color: #ffffff;
}
.rc-content-text2-1{
    font-family: 'Roboto';
    font-weight: 100;
    font-size: 50px;
    color: #c19b77;
    margin: 5px;
}
.form-container1{
    grid-column: 2/3;
    
    margin: 10px;

}
.checkbox-container{
    -webkit-columns: 100px 2;
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
.rc-content-box3{
    grid-column: 1/2;
    grid-row: 4/5;
    background-color: #151516;
    height: 100px;
    width: 400px;
    position: center;
    margin-top: -258px;
    margin-bottom: 300px;
}
.rc-content-text5{
    font-family: "Roboto", sans-serif;
    font-weight: 100;
    font-size: 40px;
    color: #ffffff;
    line-height: 50px;
    position: center;
    

}
</style>