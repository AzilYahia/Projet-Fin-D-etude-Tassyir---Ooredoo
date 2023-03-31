<template>

  <div class="wholedisplay">
<!--      <div class="mix">-->

      <div class="horizontal">
<!--button tae list a gauche-->
  <button class="chevron">
    <font-awesome-icon icon="fas fa-chevron-left" class="icon"/></button>
<!--  role-->
    <div class="role-list">
  <div class="role">
      <div class="role-header">
      <div class="hea">
          <span id="edit">Edit</span>
          <span class="role-name">Administrator</span>
      </div>
      <div class="actions-square">
          <div class="actions-content"> Actions</div>
          <font-awesome-icon icon="fas fa-chevron-down" class="chevron-down"/>

      </div>
      </div>
        <div class="emplo">
            <EmployeesList></EmployeesList>
        </div>
  </div>
  <div class="role">
      <div class="role-header">

      <div class="hea">
          <span id="edit">Edit</span>
          <span class="role-name">Administrator</span>
      </div>
      <div class="actions-square">
          <div class="actions-content"> Actions</div>
          <font-awesome-icon icon="fas fa-chevron-down" class="chevron-down"/>

      </div>
      </div>
      <div class="emplo">
          <EmployeesList></EmployeesList>
      </div>
  </div>

    </div>
<!--  button tae list a droite-->
  <button class="chevron">
    <font-awesome-icon icon="fas fa-chevron-right" class="icon"/></button>
</div>
      <div class="vertical">
      <!--  index tae ama page rak-->
      <div class="index">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
      </div>
<!--button tae create role yji lt7t flwst-->
  <div class="button">
    <button class="loginbutton">
      Create role
    </button>
  </div>
      </div>

  <!--      </div>-->
  </div>

</template>

<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser,faHeadset,faLocationDot, faGlobe, faEye, faEyeSlash, faChevronLeft, faChevronRight, faPlus, faChevronDown, } from '@fortawesome/free-solid-svg-icons'
import EmployeesList from "@/components/EmployeesList.vue";
import TopBar from "@/components/TopBar.vue";
library.add(faUser, faHeadset, faLocationDot,faGlobe,faChevronLeft,faChevronRight,faPlus,faChevronDown,)
</script>

<style scoped>
@import "../boxiconscss/boxicons.min.css";

.wholedisplay{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 80%;
    justify-content: space-around;
}

.horizontal{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;
    height: 80%;

}

.vertical{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 20%;
}


.role-list::-webkit-scrollbar-track {
    background: #ffffff; /* color of the scrollbar track */
}
.role-list::-webkit-scrollbar-thumb {
    background-color: #DF0327; /* color of the scrollbar thumb */
    border-radius: 5px; /* round the corners of the thumb */
}
.role-list::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* color of the scrollbar thumb on hover */
}
.role-list::-webkit-scrollbar {
    width: 5px; /* width of the scrollbar */
    height: 6px;
    position: absolute;
}

.role-list{
    width: 70%;
    height: 90%;
    display: flex;
    justify-content: space-between;
    overflow: scroll;
    /*position: relative ;*/
}
.role{
    text-align: center;
    background-color: white;
    width: 47%;
    border: #c4c4c4 solid;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.role-header{
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: space-around;
}
.hea{
    display: flex;
    flex-direction: column;
    width: 200%;
}
#edit{
    color: #DF0327;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;    align-self: end;
}
.role-name{
    font-size: 25px;
    font-weight: bold;
}

.emplo{
    /*background-color: #C4C4C4;*/
    height: 100%;
    width: 80%;
}





.chevron-down{
    color: #C4C4C4;
}
.actions-square{
    width: 70%;
    border: 2px solid #C4C4C4;
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    font-family: 'Inter', sans-serif;

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
.loginbutton:hover{
  background-color: #6B7280;
    transition-duration: 0.3s;
}
*{
  font-family: Inter, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /*float: bottom;*/
}
.index{
  display: flex;
    width: 50px;
    justify-content: space-between;
}
.circle{
  border: none;
  background-color: #DF0327;
  color: white;
  height: 7px;
  width: 7px;
  border-radius: 30px;
  cursor: pointer;

}
.circle:hover{
  scale: 2;
    transition-duration: 0.2s;
}
.chevron {
  border: none;
  background-color: #DF0327;
  color: white;
  height: 25px;
  width: 25px;
  border-radius: 30px;
  /*padding: 4px;*/
  /*font-size: 9px;*/
  cursor: pointer;
  align-content: center;
  align-items: center;
}
.chevron:hover{
  background-color: #6B7280;
    transition-duration: 0.3s;
    scale: 1.5;
}

</style>