<script setup>
import  {RouterView, RouterLink} from "vue-router";
import router from "@/router";
import HomeView from "@/views/general/HomeView.vue";
import BottomBar from "@/components/BottomBar.vue"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser,faHeadset,faLocationDot, faGlobe, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
library.add(faUser, faHeadset, faLocationDot,faGlobe)



</script>
<style scoped>
.cards {
  display: flex;
  width: 1000px;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: center;
}
.card {
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.207);
  padding: 15px;
  width: 150px;
  margin-right: 15px;
  cursor: pointer;
  margin-bottom: 20px;
}

.links {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /*text-align: start;*/
  height: 70px;
  background-color: #DF0327;
  border-radius: 0 0 20px 20px;
  /*  top left - top right - bottom left -  bottom right*/
}
.textlinks{
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: space-between;

}
.active{
  color: #6B7280;
}
.links p{
  color: white;
}
.links img{
  width: auto;
  height: auto;
  margin-left: 20px;

}


.navbar{
  /*margin: -9px;*/
  display: flex;
  align-items: center;
  justify-content: space-around;
  height:5vw;
  background-color: #DF0327;
  color: white;
  font-family: Inter,sans-serif;
  border-radius: 0 0 1.5vw 1.5vw;
  font-size: 1.4vw;
}
.logo{  /*margin-left: 0;*/
  cursor: pointer;
}
.iconandtext{
  /*margin-left: 40px;*/
  cursor: pointer;
  display: flex;
  align-items: center;
}
.icon{
  margin-right: 1vw;
}
.loginicon{
  margin-right: 0.5vw;
}
.loginbutton{
  border: 0.226vw solid white ;
  background-color: #DF0327;
  height: 4vw;
  width: 10vw;
  cursor: pointer;
  color: white;
  border-radius:1vw;
  font-family: inherit;
  font-size: inherit;
}
.rectangle{
  color: white;
  height: 300px;
  width: 1200px;
  background: linear-gradient(167deg, rgba(223,3,39,1) 0%, rgba(242,242,242,0.14962189730232556) 100%);
  border-radius: 30px;
}
body{
/*display: flex;*/
/*  flex-direction: column;*/
/*  justify-content: center;*/
max-width: max-content;
  margin: auto;
  padding: 50px 20px 50px 20px ;
  font-family: Inter, sans-serif;
  background-color: white;
}
.buttonrectanglered{
  border: 0.1vw solid #DF0327 ;
  background-color: #DF0327;
  height: 4vw;
  width: 10vw;
  cursor: pointer;
  color: white;
  border-radius:1vw;
  font-size: inherit;
  font-weight: bold;
  align-items: center;
  display: flex;
  justify-content: center;
}
.two-rectangles{
  display: flex;
}
.buttonrectanglewhite{
  border: 0.1vw solid white ;
  height: 4vw;
  width: 10vw;
  cursor: pointer;
  color: white;
  border-radius:1vw;
  font-size: inherit;
  font-weight: bold;
  align-items: center;
  display: flex;
  justify-content: center;
}
.underrectangle{
  color: #6B7280;
  font-family: Inter, sans-serif;
}
.startnowbutton{
  border: 0.1vw solid #DF0327 ;
  background-color: #DF0327;
  height: 3vw;
  width: 11vw;
  cursor: pointer;
  color: white;
  border-radius:2vw;
  font-size: inherit;
  font-weight: normal;
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: Inter, sans-serif;
}
p{
  font-family: Inter, sans-serif;
}
.firstfooterpart{
  height: 200px;
  background-color: #424242;
}
.socialmedia{
  height: 50px;
  background-color: #DF0327;
}
.org{
  background-color: #333333;
  height: 30px;
}
</style>

<template>
  <main>
    <div class="navbar">
      <div class="logo">
        <img src="../assets/ooredoo_white_logo_horizontal.png"
             alt="ooredoo" @click="router.push({path:'/',name: 'home',})">
      </div>
      <div class="iconandtext">
        <font-awesome-icon icon="fa-solid fa-headset" class="icon"/>
        <div class="textlink">Support</div>
      </div>
      <div class="iconandtext">
        <font-awesome-icon icon="fa-solid fa-location-dot" class="icon"/>
        <div class="textlink">Find Us</div>
      </div>
      <div class="iconandtext">
        <font-awesome-icon icon="fa-solid fa-globe" class="icon" />
        <div class="textlink">English</div>
      </div>
      <div class="login">
        <button class="loginbutton">
          <font-awesome-icon icon="fa-solid fa-user" class="loginicon"/>
            Sign In
        </button>
      </div>
    </div>
  </main>
  <body>
<div class="rectangle">
  <h1>Manage your companies without difficulties!</h1>
  <p>With our B2B solution, managing your companies became easier than before! all what you have to do is to Register, and discover our features!</p>
  <div class="two-rectangles">
    <div class="buttonrectanglered">
      <p>Get Started!</p>
</div>
    <div class="buttonrectanglewhite" style="margin-left: 15px">
      <p>More info</p>
</div>
  </div>
</div>
<div class="underrectangle">
<p>Besides that, we got a very good service for all type of companies, even the small companies that are still strugling to get their accomodation, and then we have to go there by going. Besides that, we got a very good service for all type of companies Besides that, we got a very good service for all type of companies Besides that</p>
</div>
  <div class="startnowbutton">
    <p>Start now!</p>
  </div>
  </body>
<footer>
  <BottomBar></BottomBar>
</footer>
</template>





<!--    <div class="links">-->
<!--      &lt;!&ndash;      <RouterLink to="/" active-class="active">&ndash;&gt;-->
<!--      <img src="../assets/ooredoo_white_logo_horizontal.png" alt="ooredoo" @click="router.push({path:'/',name: 'home',})">-->
<!--      &lt;!&ndash;      </RouterLink>&ndash;&gt;-->
<!--      <div class="textlinks">-->
<!--      <RouterLink to="/Support" active-class="active"><p>Support</p></RouterLink>-->
<!--      <RouterLink to="/FindUs" active-class="active"><p>Find Us</p></RouterLink>-->
<!--      <RouterLink to="/Language" active-class="active"><p>English</p></RouterLink>-->
<!--      <RouterLink to="/SignIn" active-class="active"><p>Sign In</p></RouterLink>-->
<!--      </div>-->
<!--      </div>-->
<!--    <RouterView />-->