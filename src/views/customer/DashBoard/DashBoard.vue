<template>
    <div class="wholey">
        <div class="vertical">
           <div class="chart">
               <Chart/>
           </div>

            <div class="employes-list">
                <div class="whole">
                    <div class="header"><!-- row -->
                        <div class="title">Employees </div>
                        <div class="option" @click="ViewAll">View All</div>
                    </div>
                    <div class="list"> <!-- column -->
                        <div class="rectangle" v-if="loading" v-for="one in [1,2,3]" style="background-color: #F9F9F9; opacity: 40%"><!-- row -->
                            <div class="image"
                                 :style="{  'background-color': colors[one] }" style="opacity: 20%"></div>
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



                        <div class="rectangle" v-else v-for="oneInstance in instance" :key="oneInstance.id_user"><!-- row -->
                            <div class="image"
                                 :style="{  'background-color': colors[oneInstance.id_user]}"></div>
                            <div class="rectangle-info"> <!-- column -->
                                <div class="name">
                                    {{ oneInstance.nom}} {{oneInstance.prenom}}
                                </div>
                                <div class="info">
                                    {{ oneInstance.role.nom }}
                                </div>
                            </div>
                            <div class="edit" @click="editEmployee()">Edit</div>
                            <EditEmployeePopup :employee="oneInstance" :isShown="!isShown"  @cancelFunction="()=>{isShown = !isShown}" />
<!--                            <div ref="editpopup" class="editbrk" style="display: none;">
                                <div style=" position: fixed;top: 0;left: 0;width: 100%;  height: 100%; flex-direction: column;background-color: rgba(0,0,0,0.7);z-index: 999;display: flex; justify-content: center;align-items: center;"> edit</div> </div>
                      <EditEmployeePopup ref="popup" :employee="oneInstance" v-if="oneInstance !== null" :isShown="isShown" @cancelFunction="()=>{isShown = !isShown}"/>-->
                        </div>
                    </div>
                    <div ref="popup" style="display: none;">
                        <div class="popup" style="display: flex; flex-direction: column">
                            <div class="popup-content">
                                <div class="list-of-employees-popup" style="display: flex; flex-direction: column; height: clamp(200px,80%, 500px)">
                                <div class="title">Employees</div>
                                <div class="list"> <!-- column -->
                                    <div class="rectangle"  v-for="oneInstance in instance" :key="oneInstance.id_user"><!-- row -->
                                        <div class="image"
                                             :style="{  'background-color': colors[oneInstance.id_user]}"></div>
                                        <div class="rectangle-info"> <!-- column -->
                                            <div class="name">
                                                {{ oneInstance.nom}} {{oneInstance.prenom}}

                                            </div>
                                            <div class="info">
                                                {{ oneInstance.role.nom }}
                                            </div>
                                        </div>
                                        <div class="edit" @click="editEmployeeinPopUp">Edit</div>
                                    </div>

                                </div>
                                </div>

                                <div class="buttons">
                                    <button class="cancel-button" @click="hidePopup()" >
                                        Cancel</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="squares">
            <div class="square">
                <!-- testing if the credit is loaded or no -->
                <h2 class="square-description" v-if="credit == null"> -- GB</h2>
                <h2 class="square-description" v-else>{{credit.internetInitial - cons.internet}} GB</h2>
                <h5 class="square-description">Left for this month</h5>
            </div>

            <div class="square" style="background-color: #FFFF0070">
                <h2 class="square-description" v-if="credit == null"> -- Min</h2>
                <h2 class="square-description" v-else>{{credit.creditInitial - cons.credit}} DA</h2>
                <h5 class="square-description">Left for this month</h5>
            </div>

            <div class="square" style="background-color: #00B0FF60">
                <h2 class="square-description" v-if="timeleft == null"> -- D -- h</h2>
                <h2 class="square-description" v-else> {{timeleft.days}}D {{timeleft.hours}}h</h2>
                <h5 class="square-description">Left for this month's Subscription</h5>
            </div>
        </div>
    </div>
</template>
<script setup>
import Chart from "@/views/customer/DashBoard/Chart.vue";
import {ref} from "vue";
import axios from '@/utils/axiosCustom';
import {onMounted} from "vue";
import EditEmployeePopup from "@/views/customer/Employees/EditEmployeePopup.vue";
import Popup from "@/components/Popup.vue";
import useDetectOutsideClick from "@/composables/useDetectOutsideClick";
import {clientCompanyId} from "@/utils/localStorageData";
let isShown = ref(false);
const popupRef = ref()
const instance = ref([]);
const cons = ref();
const timeleft = ref();
const credit = ref();
const loading = ref(true);
const colors = ['red','blue',
    'yellow','green','teal','black','accentred','grey','purple','orange','yellow','blue','purple',]
onMounted(async () => {
    try {
        const response = await axios.get(`https://pfe.ramzi-issiakhem.com/api/v1/users/${clientCompanyId}`);
        instance.value = response.data.data;

      const currentDate = new Date();
      const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).toISOString().split('T')[0];
      const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).toISOString().split('T')[0];
        const consumption = await axios.get(`https://pfe.ramzi-issiakhem.com/api/v1/company/consumption/${clientCompanyId}?begin=${startOfMonth}&end=${endOfMonth}`);
        cons.value = consumption.data.data;

        const time = await axios.get(`https://pfe.ramzi-issiakhem.com/api/v1/company/current/subscription/remaining/${clientCompanyId}`);
        timeleft.value = time.data.data;

        const consu = await axios.get(`https://pfe.ramzi-issiakhem.com/api/v1/company/current/subscription/${clientCompanyId}`);
        credit.value = consu.data.data;


        console.log(timeleft.value)
        loading.value = false;
    } catch (error) {
        console.log(error);
        loading.value = false; // set loading to false in case of error
    }
});
const popup = ref(null);
function ViewAll() {
    if (popup.value.style.display === 'none') {
        popup.value.style.display = 'block';
    } else {
        popup.value.style.display = 'none';
    }
}
function hidePopup() {
    if (popup.value.style.display === 'block') {
        popup.value.style.display = 'none';
    } else {
        popup.value.style.display = 'block';
    }
}
// const showPopup = function (employee) {
//     this.editingEmployee = employee;
//     this.$refs.popup.open();
// }
// function editEmployee(employee) {
//     selectedEmployee.value = employee;
//     isShown.value = false;
// }
function editEmployee() {
    isShown.value = true;
}
function editEmployeeinPopUp() {
    hidePopup();
    isShown.value = true;
}
// useDetectOutsideClick(popupRef, () => {
//     isShown.value = false;
// })
// console.log(isShown.value)
</script>

<style scoped>

.cancel-button{
    border: 1px solid #DF0327 ;
    background-color: #DF0327;
    height: 50px;
    width: 140px;
    cursor: pointer;
    color: white;
    border-radius:14px;
    font-family: inherit;
    font-size: inherit;
    font-weight: bold;
}
.cancel-button:hover{
    background-color: #6B7280;
    border: 1px solid #6B7280 ;

    transition-duration: 0.3s;
}

.buttons{
    margin-top: 15px;
    display: flex;
    justify-content: space-evenly;
    height: 20%;
    align-items: center;
    width: 100%;
}
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    flex-direction: column;
    background-color: rgba(0,0,0,0.7);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup-content {
    background-color: #fff;
    width: 80%;
    max-width: 600px;
    height: clamp(300px, 70%, 700px);
    padding: 20px;
    border-radius: 10px;
}
.rectangle-info{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    margin-left: 20px;
}
.image{
    width:50px;
    height: 40px;
    background-color: #DF0327;
    border-radius: 20%;
}.edit{
     align-self: start;
     padding: 1%;
     color: #DF0327;
     font-weight: bold;
     cursor: pointer;
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
.title{    overflow: hidden;
    word-break: break-word;
    font-size: 22px;
    font-weight: bold;
}
.option{
    color: #DF0327;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
}
.list{
    display: flex;
    flex-direction: column;
    /*justify-content: space-around;*/
    overflow-y: scroll;
    position: relative ;
    padding-right: 10px;
    /*height: 150px;*/
    height: clamp(160px, 100% , 600px);
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


.wholey{
    display: flex;
    padding: 0 10px;
    justify-content: space-around;
    width: clamp(900px, 100% , 100%);
    height: clamp(500px, 100% , 100%);
}
.whole{
    display: flex;
    flex-direction: column;
    /*justify-content: space-evenly;*/
    /*width: 660px;*/
    width: clamp(660px, 100%, 100%);
    height: clamp(203px, 60% , 65%);

}
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

}.rectangle{
     display: flex;
     flex-direction: row;
     justify-content: space-evenly;
     align-items: center;
     background-color: #F9F9F9;
     width: 100%;
     padding:10px 5px;
     margin:10px 0;
     border-radius: 10px;
 }


.vertical{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: clamp(840px, 80% , 80%);
    height: clamp(500px, 100% , 100%);

}

/**/

.squares{
    display: flex;
    flex-direction: column;
    /*width: clamp(10px, 40%, 100%);*/
    width: clamp(150px, 15%, 100%);
    justify-content: flex-start;
    /*flex:1;*/
}
.square{
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  /*width: 300px;*/
  /*  min-width: 250px;*/
    width: clamp(150px, 100%, 100%);
  height: 110px;
  background-color: #ECEAFE;
  border-radius: 20px;
  margin-bottom: 20px;
  float: right;
}
.square-description{
    text-align: center;
}

h4{
  font-size: 15px;
}

h1{
  margin-left: 40px;
  font-size: 25px;
  /*margin-top: 10px;*/
}
h2{
  font-size: 22px;
}
.square .square-description h2{
  margin-top: 0;
}
p{
  color: #828282;
  font-size: 13px;
}

main{
  display:flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}
.main-content{
  /*flex:3;*/
}

.main-content > div{
  margin-bottom:50px;
}


/* styli had rule bch t specifier l height */
.employes-list{
    height: clamp(200px, 50%, 50%);

    /*height:200px;*/
    margin-top: 20px;
  /*overflow-y: scroll;*/
    width: clamp(660px, 100%, 100%);

}

.chart {
    width: clamp(660px, 100%, 100%);
    height: clamp(300px, 40%, 40%);
}
</style>
