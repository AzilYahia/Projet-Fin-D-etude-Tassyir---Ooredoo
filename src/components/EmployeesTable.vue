<style scoped>
*{
    font-family:Inter, sans-serif
}
thead tr{
    height: 50px;
    background-color: #E6E6E6;
}
thead{
    border-radius: 25px;
}
tbody tr td{
    border-bottom: 1px solid #CCCCCC;
    padding-inline: 10px;
}
tbody tr{
    height: 70px;

}

table{

    overflow: scroll;
    text-align: center;
    vertical-align: middle;
    min-width:90%
    /*width: 90%;*/
}
.whole{
    /*width: 90%;*/
    align-items: center;
    display: flex;
    flex-direction: column;
}
.image{
    width:40px;
    height: 40px;
    background-color: #DF0327;
    border-radius: 50%;
}
.image-name{
    display: flex;
    /*justify-content: space-between;*/
    align-items: center;
    height: 70px;
}
.control-board {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-bottom: 20px;
    height: 80px;
    /*background-color: #DF0327;*/
    border-bottom: 1px solid #CCCCCC;
    align-items: center;
}
.filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    height: 100%;
}
.filter{
    width: 35%;
    border: 1px solid #C4C4C4;
    border-radius: 8px;
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    height: 40%;
}
.chevron-down{
    color: #C4C4C4;
}
.second-half{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    height: 100%;
}
.search-field{
    border: none;
    outline: none;
    margin-left: 15px;
}
.search{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.search-field:focus{
    border-bottom: 1px solid #DF0327;
}
.add{
    border: none;
    background-color: #DF0327;
    color: white;
    height: 40px;
    width: 40px;
    border-radius: 50px;
    font-size: 20px;
    cursor: pointer;
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

}
.add:hover{
    background-color: #868484;
    transition-duration: 0.2s;
}
.actions-square{
    width: 100px;
    height: 30px;
    background-color: #E6E6E6;
    border-radius: 25px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #A0A0A0;
}
.actions-square-hidden {
    width: 30px;
    height: 30px;
    background-color: #E6E6E6;
    border-radius: 25px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #A0A0A0;
    cursor: pointer;
}


tbody tr td{
    text-align: -webkit-center;
    overflow: auto;
    word-break: break-word;
    white-space: nowrap;
    /*text-overflow: ellipsis;*/
}
aso::-webkit-scrollbar-track {
    background: #ffffff; /* color of the scrollbar track */
}
aso::-webkit-scrollbar-thumb {
    background-color: #DF0327; /* color of the scrollbar thumb */
    border-radius: 5px; /* round the corners of the thumb */
}
aso::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* color of the scrollbar thumb on hover */
}
aso::-webkit-scrollbar {
    width: 5px; /* width of the scrollbar */
    height: 6px;
    position: absolute;
}

.sala {
    width: 100px;
}

.name{
    margin-left: 20px;
}

tbody th, td {
    /*max-width: 150px; !* Set a maximum width for table cells *!*/
    /*overflow: hidden; !* Hide overflow content *!*/
    /*text-overflow: ellipsis; !* Show ellipsis if content overflows *!*/
    /*white-space: nowrap; !* Prevent text wrapping *!*/
}
</style>
<template>



<div class="whole">
    <div class="control-board">
        <div class="search">
            <font-awesome-icon icon="fas fa-magnifying-glass" class="chevron-down"/>
            <input type="text" placeholder="Search employees" CLASS="search-field">
        </div>
        <div class="filters">
            <div class="filter">
                <div class="filter-content"> Role</div>
                <font-awesome-icon icon="fas fa-chevron-down" class="chevron-down"/>
            </div>
            <div class="filter">
                <div class="filter-content"> Add filter</div>
                <font-awesome-icon icon="fas fa-chevron-down" class="chevron-down"/>
            </div>
        </div>
            <button class="add">
           <font-awesome-icon icon="fas fa-plus" />

            </button>
    </div>
  <table cellspacing="0" >
      <thead>
      <tr>
      <th>Name</th>
      <th>Role</th>
      <th>Mail</th>
      <th>Mobile</th>
      <th >Actions</th>
      </tr>
      </thead>
      <tbody v-for="car in cars">
      <tr>
          <td class="image-name" >
              <div class="image" :style="{  'background-color': carcolors[car.id]}"></div>
              <span class="name">{{car.make}}</span>
          </td>
      <td>{{car.body}}</td>
      <td>said@gmail.com</td>
      <td class="aso">{{car.description}}</td>
          <td class="okl">
              <div class="sala">
          <div class="actions-square-hidden" @click="isHidden = !isHidden" v-show="!isHidden" >
              <font-awesome-icon icon="fas fa-bars" class="actions-square-icon"/>
          </div>
          <div class="actions-square" @click="isHidden = !isHidden" v-show="isHidden" >
              <font-awesome-icon icon="fas fa-pencil" class="actions-square-icon"/>
              <font-awesome-icon icon="fas fa-trash-can" class="actions-square-icon"/>
              <font-awesome-icon icon="fas fa-circle-info" class="actions-square-icon"/>
          </div>
              </div>
          </td>
      </tr>
<!--      <tr>-->
<!--          <td class="image-name"><div class="image"></div> Said Abderrahmane</td>-->
<!--          <td>Admin</td>-->
<!--          <td>said@gmail.com</td>-->
<!--          <td>0553659655</td>-->
<!--          <td class="okl">-->
<!--              <div class="sala">-->
<!--                  <div class="actions-square-hidden" @click="isHidden = !isHidden" v-show="!isHidden" >-->
<!--                      <font-awesome-icon icon="fas fa-bars" class="actions-square-icon"/>-->
<!--                  </div>-->
<!--                  <div class="actions-square" @click="isHidden = !isHidden" v-show="isHidden" >-->
<!--                      <font-awesome-icon icon="fas fa-pencil" class="actions-square-icon"/>-->
<!--                      <font-awesome-icon icon="fas fa-trash-can" class="actions-square-icon"/>-->
<!--                      <font-awesome-icon icon="fas fa-circle-info" class="actions-square-icon"/>-->
<!--                  </div>-->
<!--              </div>-->
<!--          </td>-->
<!--      </tr> <tr>-->
<!--          <td class="image-name"><div class="image"></div> Said Abderrahmane</td>-->
<!--          <td>Admin</td>-->
<!--          <td>said@gmail.com</td>-->
<!--          <td>0553659655</td>-->
<!--          <td class="okl">-->
<!--              <div class="sala">-->
<!--                  <div class="actions-square-hidden" @click="isHidden = !isHidden" v-show="!isHidden" >-->
<!--                      <font-awesome-icon icon="fas fa-bars" class="actions-square-icon"/>-->
<!--                  </div>-->
<!--                  <div class="actions-square" @click="isHidden = !isHidden" v-show="isHidden" >-->
<!--                      <font-awesome-icon icon="fas fa-pencil" class="actions-square-icon"/>-->
<!--                      <font-awesome-icon icon="fas fa-trash-can" class="actions-square-icon"/>-->
<!--                      <font-awesome-icon icon="fas fa-circle-info" class="actions-square-icon"/>-->
<!--                  </div>-->
<!--              </div>-->
<!--          </td>-->
<!--      </tr>-->
<!--      <tr>-->
<!--          <td class="image-name"><div class="image"></div>Said Abderrahmane</td>-->
<!--          <td>Admin</td>-->
<!--          <td>said@gmail.com</td>-->
<!--          <td>0553659655</td>-->
<!--          <td class="okl">-->
<!--              <div class="sala">-->
<!--                  <div class="actions-square-hidden" @click="isHidden = !isHidden" v-show="!isHidden" >-->
<!--                      <font-awesome-icon icon="fas fa-bars" class="actions-square-icon"/>-->
<!--                  </div>-->
<!--                  <div class="actions-square" @click="isHidden = !isHidden" v-show="isHidden" >-->
<!--                      <font-awesome-icon icon="fas fa-pencil" class="actions-square-icon"/>-->
<!--                      <font-awesome-icon icon="fas fa-trash-can" class="actions-square-icon"/>-->
<!--                      <font-awesome-icon icon="fas fa-circle-info" class="actions-square-icon"/>-->
<!--                  </div>-->
<!--              </div>-->
<!--          </td>-->
<!--      </tr>-->
<!--      <tr>-->
<!--          <td class="image-name"><div class="image"></div>Said Abderrahmane</td>-->
<!--          <td>Admin</td>-->
<!--          <td>said@gmail.com</td>-->
<!--          <td>0553659655</td>-->
<!--          <td class="okl">-->
<!--              <div class="sala">-->
<!--                  <div class="actions-square-hidden" @click="isHidden = !isHidden" v-show="!isHidden" >-->
<!--                      <font-awesome-icon icon="fas fa-bars" class="actions-square-icon"/>-->
<!--                  </div>-->
<!--                  <div class="actions-square" @click="isHidden = !isHidden" v-show="isHidden" >-->
<!--                      <font-awesome-icon icon="fas fa-pencil" class="actions-square-icon"/>-->
<!--                      <font-awesome-icon icon="fas fa-trash-can" class="actions-square-icon"/>-->
<!--                      <font-awesome-icon icon="fas fa-circle-info" class="actions-square-icon"/>-->
<!--                  </div>-->
<!--              </div>-->
<!--          </td>-->
<!--      </tr>-->
<!--      <tr>-->
<!--          <td class="image-name"><div class="image"></div>Said Abderrahmane</td>-->
<!--          <td>Admin</td>-->
<!--          <td>said@gmail.com</td>-->
<!--          <td>0553659655</td>-->
<!--          <td class="okl">-->
<!--              <div class="sala">-->
<!--                  <div class="actions-square-hidden" @click="isHidden = !isHidden" v-show="!isHidden" >-->
<!--                      <font-awesome-icon icon="fas fa-bars" class="actions-square-icon"/>-->
<!--                  </div>-->
<!--                  <div class="actions-square" @click="isHidden = !isHidden" v-show="isHidden" >-->
<!--                      <font-awesome-icon icon="fas fa-pencil" class="actions-square-icon"/>-->
<!--                      <font-awesome-icon icon="fas fa-trash-can" class="actions-square-icon"/>-->
<!--                      <font-awesome-icon icon="fas fa-circle-info" class="actions-square-icon"/>-->
<!--                  </div>-->
<!--              </div>-->
<!--          </td>-->
<!--      </tr>-->
<!--      <tr>-->
<!--          <td class="image-name"><div class="image"></div>Said Abderrahmane</td>-->
<!--          <td>Admin</td>-->
<!--          <td>said@gmail.com</td>-->
<!--          <td>0553659655</td>-->
<!--          <td class="okl">-->
<!--              <div class="sala">-->
<!--                  <div class="actions-square-hidden" @click="isHidden = !isHidden" v-show="!isHidden" >-->
<!--                      <font-awesome-icon icon="fas fa-bars" class="actions-square-icon"/>-->
<!--                  </div>-->
<!--                  <div class="actions-square" @click="isHidden = !isHidden" v-show="isHidden" >-->
<!--                      <font-awesome-icon icon="fas fa-pencil" class="actions-square-icon"/>-->
<!--                      <font-awesome-icon icon="fas fa-trash-can" class="actions-square-icon"/>-->
<!--                      <font-awesome-icon icon="fas fa-circle-info" class="actions-square-icon"/>-->
<!--                  </div>-->
<!--              </div>-->
<!--          </td>-->
<!--      </tr>-->
<!--      <tr>-->
<!--          <td class="image-name"><div class="image"></div>Said Abderrahmane</td>-->
<!--          <td>Admin</td>-->
<!--          <td>said@gmail.com</td>-->
<!--          <td>0553659655</td>-->
<!--          <td class="okl">-->
<!--              <div class="sala">-->
<!--                  <div class="actions-square-hidden" @click="isHidden = !isHidden" v-show="!isHidden" >-->
<!--                      <font-awesome-icon icon="fas fa-bars" class="actions-square-icon"/>-->
<!--                  </div>-->
<!--                  <div class="actions-square" @click="isHidden = !isHidden" v-show="isHidden" >-->
<!--                      <font-awesome-icon icon="fas fa-pencil" class="actions-square-icon"/>-->
<!--                      <font-awesome-icon icon="fas fa-trash-can" class="actions-square-icon"/>-->
<!--                      <font-awesome-icon icon="fas fa-circle-info" class="actions-square-icon"/>-->
<!--                  </div>-->
<!--              </div>-->
<!--          </td>-->
<!--      </tr>-->
      </tbody>
  </table>
</div>


</template>

<script setup>

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import {faChevronDown, faMagnifyingGlass, faPlus, faPencil, faTrashCan, faCircleInfo, faBars, } from '@fortawesome/free-solid-svg-icons'
import {ref} from "vue";
library.add(faChevronDown, faMagnifyingGlass, faPlus,faPencil, faTrashCan, faCircleInfo, faBars )
import carsData from"../data.json"
const cars = ref(carsData);


const carcolors = ['red','blue','yellow','green','teal','black','accentred','grey','purple','orange','yellow','blue','purple',]
let isHidden = ref(false);
// actionsRectangle.addEventListener("click", () => {
//     actionsRectangle.classList.toggle("expanded");
// });


</script>

