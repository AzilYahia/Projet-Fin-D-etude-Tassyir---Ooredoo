<template>

  <div class="wholedisplay">
<!--      <div class="mix">-->
<div class="role-and-circles">
      <div class="horizontal">
<!--button tae list a gauche-->
  <button class="chevron">
    <font-awesome-icon icon="fas fa-chevron-left" class="icon"/></button>
<!--  role-->
    <div class="role-list" >
        <div v-if="loading" v-for="two in [1,2]" class="role" style="opacity: 40%;">
            <div class="role-header">
                <div class="hea">
                    <span id="edit">Edit</span>
                    <span class="role-name">Role </span>
                </div>
                <div class="actions-square">
                    <div class="actions-content"> Actions</div>
                    <font-awesome-icon icon="fas fa-chevron-down" class="chevron-down"/>
                </div>
            </div>
            <div class="emplo">
                <div class="whole">
                    <div class="header"><!-- row -->
                        <div class="title">Employees</div>
                        <div class="option">View All</div>
                    </div>
                    <div class="list"> <!-- column -->
                        <div class="rectangle" v-for="one in [1,2,3]" style="background-color: #F9F9F9; opacity: 40%"><!-- row -->
                            <div class="image"
                                 :style="{  'background-color': carcolors[one] }" style="opacity: 20%"></div>
                            <div class="rectangle-info"> <!-- column -->
                                <div class="name" style="color: #A0A0A0">
                                    Name
                                </div>
                                <div class="info">
                                    Role
                                </div>
                            </div>
                            <div class="edit" >Edit</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="role" v-else v-for="role in roless" :key="id_user">
      <div class="role-header">
      <div class="hea">
          <span id="edit">Edit</span>
          <span v-if="role.nom" class="role-name">{{ role.nom }}</span>
          <span v-else class="role-name" style="color: #747171">Role </span>
      </div>
      <div class="actions-square">
          <div class="actions-content"> Actions</div>
          <font-awesome-icon icon="fas fa-chevron-down" class="chevron-down"/>
      </div>
      </div>
        <div class="emplo">
            <div class="whole">
                <div class="header"><!-- row -->
                    <div class="title">Employees</div>
                    <div class="option">View All</div>
                </div>
                <div class="list"> <!-- column -->
                    <div class="rectangle" v-if="loading" v-for="one in [1,2,3]" style="background-color: #F9F9F9; opacity: 40%"><!-- row -->
                        <div class="image"
                             :style="{  'background-color': carcolors[one] }" style="opacity: 20%"></div>
                        <div class="rectangle-info"> <!-- column -->
                            <div class="name" style="color: #A0A0A0">
                                Name
                            </div>
                            <div class="info">
                                Role
                            </div>
                        </div>
                        <div class="edit" >Edit</div>
                    </div>

                    <div class="rectangle" v-else v-for="car in employees" :key="car.id_user"><!-- row -->
                        <div class="image"
                             :style="{  'background-color': carcolors[car.id_user]}"></div>
                        <div class="rectangle-info"> <!-- column -->
                            <div class="name" v-if="car.nom">
                                {{ car.nom}}
                            </div>
                            <div class="name" v-else>
                                Name
                            </div>
                            <div class="info" v-if="car.role.nom">
                                {{ car.role.nom }}
                            </div>
                            <div class="info" v-else>
                                Role
                                  </div>
                        </div>
                        <div class="edit">Edit</div>
                    </div>


                </div>
            </div>
        </div>
  </div>
    </div>
<!--  button tae list a droite-->
  <button class="chevron">
    <font-awesome-icon icon="fas fa-chevron-right" class="icon"/></button>
</div>
    <div class="index">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
    </div>
</div>

      <!--  index tae ama page rak-->
<!--button tae create role yji lt7t flwst-->
  <div class="button">
    <button class="loginbutton">
      Create role
    </button>
  </div>

  <!--      </div>-->
  </div>
</template>
<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser,faHeadset,faLocationDot, faGlobe, faEye, faEyeSlash, faChevronLeft, faChevronRight, faPlus, faChevronDown, } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import carsData from"../data.json"
library.add(faUser, faHeadset, faLocationDot,faGlobe,faChevronLeft,faChevronRight,faPlus,faChevronDown,)
import {onMounted, ref} from "vue";

const carcolors = ['red','blue','yellow','green','yellow','purple','blue','darkgrey','grey','purple','yellow','blue','purple',]
const instance = ref([]);
const employees = ref([]);
const roless = ref([]);
const loading = ref(true); // add a loading state


onMounted(async () => {
    try {
        const response = await axios.get('https://pfe.ramzi-issiakhem.com/api/v1/user/role/1');
        instance.value = response.data.data;
        const responseemployees = await axios.get('https://pfe.ramzi-issiakhem.com/api/v1/users/3');
        employees.value = responseemployees.data.data;
        const rolesResponse = await axios.get('https://pfe.ramzi-issiakhem.com/api/v1/company/roles/4');
        roless.value = rolesResponse.data.data;
        loading.value = false;
    } catch (error) {
        console.log(error);
        loading.value = false;
    }
});


</script>

<style scoped>
@import "../boxiconscss/boxicons.min.css";

.whole{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /*width:100%;*/
}
.header{
    /*width: 100%;*/
    /*width: 50px;*/
    display: flex;
    justify-content: space-between;
}

.rectangle{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: #F9F9F9;
    padding: 10px 5px;
    height: 60px;
    margin: 10px 0;
    border-radius: 10px;
}
.rectangle-info{
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 80%;
    /*width: clamp(15px,10px,10px); */
    align-items: flex-start;
}
.image{
    width:50px;
    height: 40px;
    background-color: #DF0327;
    border-radius: 20%;
}
.edit{
    align-self: start;
    padding: 1%;
    color: #DF0327;
    font-weight: bold;
}
.info{
    color: #A0A0A0;
    font-size: 100%;    overflow: hidden;
    word-break: break-word;
}
.name{
    font-size: 120%;    overflow: hidden;
    word-break: break-word;
}
.title{
    overflow: hidden;
    word-break: break-word;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
}
.option{
    color: #DF0327;
    font-size: 120%;
    font-weight: bold;
    cursor: pointer;
}
.list{
    display: flex;
    flex-direction: column;
    /*justify-content: space-around;*/
    overflow-y: scroll;
    position: relative ;
     height: 250px;
    /*background-color: #22B573;*/
    word-break: break-word;
    white-space: nowrap;
    padding-right: 10px;

}
.list::-webkit-scrollbar-track {
    background: #ffffff;
    /* color of the scrollbar track */
}
.list::-webkit-scrollbar-thumb {
    background-color: rgba(134, 132, 132, 0.1); /* color of the scrollbar thumb */
    border-radius: 5px; /* round the corners of the thumb */
}
.list::-webkit-scrollbar-thumb:hover {
    background-color: #DF0327;
    /* color of the scrollbar thumb on hover */
}
.list::-webkit-scrollbar {
    width: 4px; /* width of the scrollbar */
    /*height: 4px;*/
    /*position: absolute;*/

}
.wholedisplay{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /*height: 550px;*/
    height: clamp(475px,90%,900px);
    justify-content: flex-start;
}
.role-and-circles{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: clamp(470px,80%,800px);
}
.horizontal{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    /*width: 900px;*/
    width: clamp(1000px,100%,1200px);
    /*height: 400px;*/
    height: clamp(400px,70%,900px);
}
.role-list{
    width: clamp(700px,70%,900px);

    /*width: 700px;*/
    /*height: 450px;*/
    height: clamp(430px,100%,900px);
    display: flex;
    justify-content: space-between;
}



.role{
    text-align: center;
    background-color: white;
    /*width: 47%;*/
    width: clamp(300px,47%,600px);

    border: #c4c4c4 solid;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.role-header{
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: space-around;
}
.hea{
    display: flex;
    flex-direction: column;
    width: 280px;
}
#edit{
    color: #DF0327;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    align-self: end;
}
.role-name{
    font-size: 25px;
    font-weight: bold;
}

.emplo{
    /*background-color: #C4C4C4;*/
    height: 300px;
    width: 270px;
}





.chevron-down{
    color: #C4C4C4;
}
.actions-square{
    width: 120px;
    border: 2px solid #C4C4C4;
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    font-family: 'Inter', sans-serif;
}

.loginbutton{
  border: 1px solid white ;
  background-color: #DF0327;
  height: 50px;
  width: 130px;
  cursor: pointer;
  color: white;
  border-radius:14px;
  font-family: inherit;
  font-size: inherit;
}
.loginbutton:hover{
  background-color: #6B7280;
    transition-duration: 0.3s;
}

.index{
  display: flex;
    width: 50px;
    justify-content: space-between;
    margin-top: 30px;
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