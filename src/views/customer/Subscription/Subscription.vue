<template>
  <div class="wholedisplay">
    <div class="role-and-circles">
      <div class="horizontal">
        <div class="role-list" >
          <div class="role">
            <div class="hea">
              <!--                <span id="edit" @click="editRole">View</span>-->
              <!--                <EditRolePopup :role="role" :editRolePopupIsShown="!editRolePopupIsShown"  @cancelFunction="()=>{editRolePopupIsShown = !editRolePopupIsShown}" />-->
              <span  class="role-name">Current Subscription</span>

              <div class="settings-row">
                <div class="setting-name">
                  Tarif:
                </div>
                <div class="setting-description">
                  {{currentSubscription?.tarif}} DA
                </div>
              </div>
              <div class="settings-row">
                <div class="setting-name">
                  Internet:
                </div>
                <div class="setting-description">
                  {{currentSubscription?.internetInitial}} GB
                </div>
              </div>
              <div class="settings-row">
                <div class="setting-name">
                  Credit:
                </div>
                <div class="setting-description">
                  {{currentSubscription?.creditInitial}} Min
                </div>
              </div>
              <div class="settings-row">
                <div class="setting-name">
                  Starting Date:
                </div>
                <div class="setting-description">
                  {{currentSubscription?.dateDebut}}
                </div>
              </div>
              <div class="settings-row">
                <div class="setting-name">
                  Ending Date:
                </div>
                <div class="setting-description">
                  {{currentSubscription?.dateFin}}
                </div>
              </div>
            </div>
          </div>

          <div class="role" style="justify-content: space-between">
            <div class="hea" style="margin-top: 20px">
              <!--                <span id="edit" @click="editRole">View</span>-->
              <!--                <EditRolePopup :role="role" :editRolePopupIsShown="!editRolePopupIsShown"  @cancelFunction="()=>{editRolePopupIsShown = !editRolePopupIsShown}" />-->
              <span  class="role-name">Next Subscription</span>

              <div class="settings-row">
                <div class="setting-name">
                  Tarif:
                </div>
                <div class="setting-description">
                  {{currentSubscription?.tarif}} DA
                </div>
              </div>
              <div class="settings-row">
                <div class="setting-name">
                  Internet:
                </div>
                <div class="setting-description">
                  {{currentSubscription?.internetInitial}} GB
                </div>
              </div>
              <div class="settings-row">
                <div class="setting-name">
                  Credit:
                </div>
                <div class="setting-description">
                  {{currentSubscription?.creditInitial}} Min
                </div>
              </div>
<!--              <div class="settings-row">-->
<!--                <div class="setting-name">-->
<!--                  Starting Date:-->
<!--                </div>-->
<!--                <div class="setting-description">-->
<!--                  {{nextMonthStartDate}}-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="settings-row">-->
<!--                <div class="setting-name">-->
<!--                  Ending Date:-->
<!--                </div>-->
<!--                <div class="setting-description">-->
<!--                  {{nextMonthEndDate}}-->
<!--                </div>-->
<!--              </div>-->
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="button">
      <button class="loginbutton" @click="createRole">
        Edit Next Subscription
      </button>
    </div>
  </div>






  <div ref="popup" style="display: none;">
    <div class="popup" style="display: flex; flex-direction: column">
      <div class="popup-content">
        <div class="header">
          <h2>Edit Next Subscription</h2>
        </div>
        <div class="content">
          <form @submit.prevent="saveEmployee" style="height: 80%; width: 100%;">
            <div class="fields">

              <div class="form-group">
                <label for="other-fields">Tarif </label>
                <input id="other-fields"     v-model="currentSubscription.tarif"   >
              </div>

              <div class="form-group">
                <label for="other-fields">Credit Initial </label>
                <input id="other-fields"     v-model="currentSubscription.creditInitial"   >
              </div>

              <div class="form-group">
                <label for="other-fields">Internet Initial </label>
                <input id="other-fields"     v-model="currentSubscription.internetInitial"   >
              </div>

            </div>
            <div class="buttons">
              <button type="button" class="cancel-button" @click="hideCreateRole()">Cancel</button>
              <button type="submit" class="save-button" @click="saveEmployee">Save</button>
            </div>
          </form>


        </div>
      </div>
    </div>
  </div>


</template>

<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser,faHeadset,faLocationDot, faGlobe, faEye, faEyeSlash, faChevronLeft, faChevronRight, faPlus, faChevronDown, } from '@fortawesome/free-solid-svg-icons'
import axios from '@/utils/axiosCustom';
import {onMounted, ref, watchEffect} from "vue";
import Multiselect from 'vue-multiselect'
import EditEmployeePopup from "@/views/customer/Employees/EditEmployeePopup.vue";
import EditRolePopup from "@/views/customer/Roles/EditRolePopup.vue";
import car from '../../../data.json';
import {clientCompanyId} from "@/utils/localStorageData";
library.add(faUser, faHeadset, faLocationDot,faGlobe,faChevronLeft,faChevronRight,faPlus,faChevronDown,)
const currentSubscription = ref([]);
const loading = ref(true); // add a loading state
const popup = ref(null);
const isShown = ref(false);

let popupvaluestyledisplay;

onMounted(async () => {
  try {
    const currentSub = await axios.get(`https://pfe.ramzi-issiakhem.com/api/v1/company/current/subscription/${clientCompanyId}`);
    currentSubscription.value = currentSub.data.data;
    loading.value = false;
  } catch (error) {
    console.log(error);
    loading.value = false;
  }
});
const currentEndDateStr = currentSubscription?._value?.dateFin || currentSubscription?.dateFin;
console.log(currentSubscription.tarif)
const year = parseInt(currentEndDateStr?.slice(0, 4), 10);
const month = parseInt(currentEndDateStr?.slice(5, 7), 10) - 1; // Month is zero-based (0-11)
const day = parseInt(currentEndDateStr?.slice(8, 10), 10);

const currentEndDate = new Date(year, month, day);
const nextMonthStartDate = new Date(currentEndDate);
nextMonthStartDate.setDate(nextMonthStartDate.getDate() + 1);

const nextMonthEndDate = new Date(nextMonthStartDate);
nextMonthEndDate.setMonth(nextMonthEndDate.getMonth() + 1);



function createRole() {
  if (popup.value.style.display === 'none') {
    popup.value.style.display = 'block';
    popupvaluestyledisplay = popup.value.style.display;
  } else {
    popup.value.style.display = 'none';
    popupvaluestyledisplay = popup.value.style.display;

  }
}
function hideCreateRole() {
  if (popup.value.style.display === 'block') {
    popup.value.style.display = 'none';
  } else {
    popup.value.style.display = 'block';
  }
}
async function saveEmployee() {
  try {
    const data = {
      dateDebut: nextMonthStartDate,
      dateFin: nextMonthEndDate,
      tarif: currentSubscription.tarif,
      creditInitial: currentSubscription.creditInitial,
      internetInitial: currentSubscription.internetInitial,
    };
    const response = await axios.post(`https://pfe.ramzi-issiakhem.com/api/v1/subscription/client/modify/next/${clientCompanyId}`, data);
    // Handle the response as needed
    console.log(response.data);
    // Clear the form fields
    alert('Modified with Success.')
    hideCreateRole();
  } catch (error) {
    console.log(error);
    alert('Modified.')
    hideCreateRole();
  }
}



</script>

<style scoped>
.setting-description {
  /*margin-left: 80px;*/
  font-size: 19px;
}

.setting-name {
  font-weight: bold;
  display: flex;
  align-items: center;
  color: black;
  margin-right: 10px;
  font-size: 19px;
}

.settings-row {
  display: flex;
//justify-content: space-between;
  font-size: 22px;
  color: #A0A0A0;
  height: 65px;
  align-items: center;

}
.edit{
  align-self: start;
  padding: 1%;
  color: #DF0327;
  font-weight: bold;
  cursor: pointer;
}
input{
  width: 80%;
  height: 40px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 16px;
  margin-top: 5px;
}
label{
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  color: dimgrey;
}
.form-group{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.fields{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 80%;
}
.content{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.popup-content {
  background-color: #fff;
  width: 80%;
  max-width: 600px;
  height: clamp(300px, 70%, 700px);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.popup{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.buttons{
  margin-top: 15px;
  display: flex;
  justify-content: space-evenly;
  height: 20%;
  align-items: center;
  width: 100%;
}
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

.save-button{
  border: 1px solid darkgreen ;
  background-color: darkgreen;
  height: 50px;
  width: 140px;
  cursor: pointer;
  color: white;
  border-radius:14px;
  font-family: inherit;
  font-size: inherit;
  font-weight: bold;
}
.save-button:hover{
  background-color: #6B7280;
  border: 1px solid #6B7280 ;

  transition-duration: 0.3s;
}
select:hover{
  border: 2px solid #C4C4C4;
  border-radius: 10px;
}

.actions-content-active{
  outline: none;
  font-size: 14px;
  font-weight: 500;
  width: 120px;
  border: 2px solid #C4C4C4;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
}
.actions-content-active:hover{
  border: 2px solid #C4C4C4;
  border-radius: 10px;
}

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
  height: clamp(410px,80%,800px);
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
  width: clamp(700px,80%,900px);

  /*width: 700px;*/
  /*height: 450px;*/
  height: clamp(400px,100%,900px);
  display: flex;
  justify-content: space-between;
}



.role{
  text-align: center;
  background-color: white;
  /*width: 47%;*/
  width: clamp(300px,45%,600px);
  height: clamp(400px,100%,900px);

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
  width: 90%;
}
#edit{
  color: #DF0327;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  align-self: end;
}
.role-name{
  font-size: 23px;
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
  width: 190px;
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
