
<template>
  <div>
      <div class="banner">
        <div class="banner-text">OUR NEWS</div>
    </div>
    <div class="box-sizing">
    <div class="content">
        <div class=" content2 container">
            <img src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/2017/07/blog-1.jpg" alt="" class="block1-img">
            <div class="title2">
                <div class="baotitle2">
                <div class="content2_title-text-small">LUXURY HOTEL</div>
                <div class="content2_title-text-big">New Website</div>
                <div class="content2_title-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed veritatis ab impedit quam quae </div>
                <a href="" class="link">READ MODE</a>
                </div>
            </div>
            <div class="block3">
                <div class="block3-text">Check New Events</div>
            </div>
            <div class="block4">
              
                <div class="block4-text">Follow our Resort </div>
                <div class="block4-text">Luxury Hotels </div>
                <div class="block4-text1">_____</div>
                <div class="block4-text ">"JONE DOE</div>
            </div>
            <img src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/2017/07/blog-2.jpg" alt="" class="block5-img">
            <div class="title6">
                <div class="baotitle2">
                <div class="content2_title-text-small">LUXURY HOTEL</div>
                <div class="content2_title-text-big">Around us</div>
                <div class="content2_title-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed veritatis ab impedit quam quae </div>
                <a href="" class="link">READ MODE</a>
                </div>
            </div>
            <div class="block7">
             <img src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/2017/07/blog-3.jpg" alt="" class="block7-img">   
                <div class="block7-text">Relax Zone</div>
                <div class="block7-text-small">Read more ></div>
            </div>
            <div class="block8">
            <img src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/2017/07/blog-4.jpg" alt="" class="block8-img">
                <div class="block8-text">Daily walk</div>
                <div class="block7-text-small">Read more ></div>
            </div>

        </div>
    </div>
    </div>
   </div>
   
</template>


<style scoped>

.box-sizing {
  box-sizing: border-box;
  padding: 20px 250px;
}
.menu{

    display: flex;
    justify-content: space-around;
    align-items: center;
}
.nav-links{
    margin-top: 20px!important;
    display: flex;
    margin-left: 100px;
  
    justify-content: space-evenly;
    align-items: center;
    width: 40%;
    list-style: none;
   
}
.nav-links-item {
    color: #878788 ;
    font-size: 14px;
    transition: 0.2s;
    font-weight: 500;
   font-family: 'Roboto';
    position: relative;
    
}
.logo-img{
    width: 150px;
}
.nav-links-item::before{
    content: "";
    position: absolute;
    left: 0;
   
    width: 100%;
    height: 1px;
    background-color: whitesmoke;
    bottom: -5px;
    transform: scaleX(0);
    transform-origin:left;
    transition:  550ms;
   
    
}
/* .current::before{
    transform: scaleX(1);
} */
.nav-links-item:hover::before{
    transform: scaleX(1);
}
ul li a:hover{
    color: #fff;
    text-shadow: 0 0 3px #c0392b;
    text-decoration: none;
    
   
}
.sign-up{
        padding: 0px 25px;
        background-color: whitesmoke;
        color: #313133;
        font-size: 12px;
        text-decoration: none!important;
}
 /* banner */
 .banner{
     width: 100%;
     height: 300px;
     transform: scale(1);
     background-position-x: top;
     background-image: url(http://www.nicdarkthemes.com/themes/hotel/wp/demo/wp-content/uploads/2017/06/parallax-8.jpg);
 }
 .banner-text{
     color: #fff;
     font-size: 50px;
     text-align: center;
     font-family: 'Gilda Display';
     font-weight: lighter;
    padding-top: 130px;

 }
 /* content */
 .content{
     width: 100%;
     height: 900px;
     background-color: #ffffff;
     width: 100%;
 }
 .content2{
     width: 90%;
     margin-top: 50px;
     display: grid;
    height: 850px;
    grid-template-columns: 1fr 1fr  1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;
 }
 .block1-img{
     width: 97.5%;
     height: 100%;
     grid-column: 1/2;
     grid-row: 1/5;
     padding: 5px;
     
  
 }
 /* ======= */
 .title2{
    width: 97,8%;
    height: 96%;
    grid-column: 1/2;
    grid-row: 5/9;
    border: solid 1px rgba(109, 105, 105, 0.349);
    margin: 5px;
    
  
 }
 .baotitle2{
     margin: 30px;
     text-align: left;
 }
 .content2_title-text-small{
     color: #1c1c1d;
     font-family: 'Roboto';
     font-size: 13px;
     margin-top: 10px;
 }
 .content2_title-text-big{
    color: #1c1c1d;
    font-family: 'Gilda Display';
    font-size: 28px;
    margin-top: 20px
 }
 .content2_title-text{
     color: #878788;
     font-family: 'Roboto';
     font-size: 14px;
     margin-top: 10px;
     line-height: 25px;
 }
 .link{
     display: inline-block;
     margin-top: 20px;
     padding: 5px 13px;
     border: solid 2px #C19B76;
     text-decoration: none!important;
     color: #C19B76;
     font-size: 14px;

 }
 .link:hover{
     color: #C19B76;
 }

 .block3{
    width: 97,8%;
    height: 96%;
    grid-column: 1/2;
    grid-row: 9/11;
    background-color: #1c1c1c;
    margin: 5px;

 }
 .block3-text{
     font-family: 'Gilda Display';
     color: #fff;
     font-weight: lighter;
     font-size: 25px;
     text-align: center;
     margin-top: 50px;
     

 }
 .block4{
    width: 97,8%;
    height: 96%;
    grid-column: 2/3;
    grid-row: 1/4;
    background-color: #c19b76;
    margin : 5px;
    
 
 }
 .block4-text{
    font-family: 'Gilda Display';
    color: #fff;
    font-weight: lighter;
    font-size: 25px;
    text-align: center;
    margin-top: 20px;
    width: 60%;
    margin-left: 80px;
}
.block4-text1{
    text-align: center;
    color: #fff;
    margin-top: -7px;
}
 .block5-img{
    width: 98%;
    height: 100%;
    grid-column: 2/3;
    grid-row: 4/7;
    padding: 5px;
   
    
 }
 .title6{
    width: 97,8%;
    height: 96%;
    grid-column: 2/3;
    grid-row: 7/11;
   
    border: solid 1px rgba(109, 105, 105, 0.349);
    margin: 5px;
 }
 .block7{
    width: 100%;
    height: 100%;
    grid-column: 3/4;
    grid-row: 1/6;
    padding: 5px;
    position: relative;
    
   
   
    
    
 }
 .block8{
    width: 100%;
    height: 100%;
    grid-column: 3/4;
    grid-row: 6/11;
    padding: 5px;
    position: relative;
   
   
    
 }
 .block8-img{
     width: 100%;
     height: 120%;
 }
 .block7-img{
    width: 98%;
    height: 100%;
}
*{margin:0;padding:0}
body{width: 100%;
margin: 0;padding: 0;
font-family: 'Rubik', sans-serif;}
@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fCRc4EsA.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  @font-face {
    font-family: 'Gilda Display';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/gildadisplay/v8/t5tmIRoYMoaYG0WEOh7HwMeR3TDPr6OH.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
header{
    height: 70px;
    width: 100%;
   
    background-color: #1c1c1d;
}
.block7-text{
    background-color: rgba(67, 74, 84, 0.3);
    height: 375px;
    width: 390px;
     position: absolute;
     bottom: 5px;
     color: #fff;
     left: 10px;
     z-index: 4;
     font-size: 24px;
     font-family: 'Roboto';
     padding: 5px 10px ;
     line-height: 550px ;
     text-align: left;
}
.block7-text-small{
  position: absolute;
     position: absolute;
     bottom: 50px;
     color: #fff;
     left: 20px;
     z-index: 4;
     font-size: 18px;
     font-family: 'Roboto';
     padding: 5px 10px ;
     
     border: solid 2px #C19B76;
}
.block8-text{
    background-color: rgba(67, 74, 84, 0.3);
    height: 450px;
    width: 390px;
     position: absolute;
     bottom: -70px;
     color: #fff;
     left: 10px;
     z-index: 4;
     font-size: 24px;
     font-family: 'Roboto';
     padding: 5px 10px ;
     line-height: 550px ;
     text-align: left;
}
</style>