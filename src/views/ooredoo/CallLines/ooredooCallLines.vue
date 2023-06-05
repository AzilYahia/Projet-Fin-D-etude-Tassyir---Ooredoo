<template>
  <div class="whole">
    <div class="control-board" >
      <div class="search">
        <font-awesome-icon icon="fas fa-magnifying-glass" class="chevron-down"/>
        <input type="text" placeholder="Search Lines" class="search-field" v-model="search">

      </div>
      <button class="add" @click="createEmployee">
        <font-awesome-icon icon="fas fa-plus" />
      </button>

    </div>
    <table v-if="loading"  cellspacing="0" >
      <thead>
      <tr>
        <th>Number</th>

        <th>Assigned to.</th>
        <th>Status</th>
        <th >Actions</th>
      </tr>
      </thead>
      <tbody  >
      <tr >
        <td  colspan="6"  style="text-align:center;border-bottom: none;">
          <span class="loading-spinner"> </span>
        </td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td colspan="6" class="end-of-results" >
          End of results.
        </td>
      </tr>
      <tr style="height: 480px"></tr>
      </tfoot>
    </table>
    <table v-else cellspacing="0" >
      <thead>
      <tr>
        <th>Number</th>

        <th>Assigned to.</th>
        <th>Status</th>
        <th >Actions</th>
      </tr>
      </thead>
      <tbody v-for="(oneInstance, index) in filteredInstance" :key="oneInstance.id_line_client">
      <tr>
        <td>
          <span class="name">{{oneInstance.numeroTelephone}}</span>
        </td>
        <td class="aso" v-if="oneInstance.utilisateur == null">
          None
        </td>

        <td class="aso" v-else>
          {{oneInstance.utilisateur.prenom}} {{oneInstance.utilisateur.nom}}
        </td>

        <td>
          <div class="image-name" >
            <div  v-if="oneInstance.etatLigne === 'Actif' " class="dot" :style="{'background-color': 'green' }"></div>
            <div v-else-if="oneInstance.etatLigne === 'Non-Assigne' " class="dot" :style="{'background-color': 'blue'}"></div>
            <div v-else class="dot" :style="{'background-color': 'red'}"></div>
            {{oneInstance.etatLigne}}
          </div>
        </td>
        <td >
          <wx-ooredoo-call-lines :employee="oneInstance"/>
        </td>
      </tr>

      </tbody>
      <tfoot>
      <tr>
        <td colspan="6" class="end-of-results" >
          End of results.
        </td>
      </tr>
      <tr style="height: 480px"></tr>            </tfoot>

    </table>
  </div>
  <ooredo-assign-phone-line-popup :isAssignEmployeePopupShown="!isAssignEmployeePopupShown"  @cancelFunction="()=>{isAssignEmployeePopupShown = !isAssignEmployeePopupShown}" />

  <ooredoo-create-phone-line-popup :isCreateEmployeePopupShown="!isCreateEmployeePopupShown"  @cancelFunction="()=>{isCreateEmployeePopupShown = !isCreateEmployeePopupShown}" />

</template>
<script setup>
import Wx from "@/views/customer/Employees/Wx.vue";
import ooredooCreatePhoneLinePopup from "@/views/ooredoo/CallLines/ooredooCreatePhoneLinePopup.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faBars, faChevronDown, faCircleInfo, faMagnifyingGlass, faPencil, faPlus, faTrashCan,} from '@fortawesome/free-solid-svg-icons'
import {ref, onMounted, computed, reactive} from "vue";
import axios from '@/utils/axiosCustom';
import AssignPhoneLinePopup from "@/views/customer/CallLines/assignPhoneLinePopup.vue";
import WxCallLines from "@/views/customer/CallLines/wxCallLines.vue";
import WxOoredooCallLines from "@/views/ooredoo/CallLines/wxOoredooCallLines.vue";
import OoredoAssignPhoneLinePopup from "@/views/ooredoo/CallLines/ooredoAssignPhoneLinePopup.vue";
import CreateEmployeePopup from "@/views/customer/Employees/createEmployeePopup.vue";
import {localStorageUser} from "@/utils/localStorageData";
library.add(faChevronDown, faMagnifyingGlass, faPlus,faPencil, faTrashCan, faCircleInfo, faBars )
const instance = ref([]);
const userData = ref([]);
ref([]);
const loading = ref(true); // add a loading state
let consumptionData = reactive({});
onMounted(async () => {
  try {
    const response = await axios.get(`https://pfe.ramzi-issiakhem.com/api/v1/ooredoo/lines/${localStorageUser.role.id_entreprise}`);
    instance.value = response.data.data;
    const usersResponse = await axios.get('https://pfe.ramzi-issiakhem.com/api/v1/company/ooredoo/users');
    userData.value = usersResponse.data.data;

    // console.log('apres boucle')
    // console.log(clientConsumption.value[0])


    loading.value = false; // set loading to false when data is fetched
  } catch (error) {
    console.log(error);
    loading.value = false; // set loading to false in case of error

  }
});
const search = ref('');

const filteredInstance = computed(() => {
  return instance.value.filter(item => {
    return item.numeroTelephone.includes(search.value)
  })
})



// setTimeout(() => {
//     console.log(filteredInstance.value[0].utilisateur.id_client_user)
// }, 5000)
const isAssignEmployeePopupShown = ref(false);
function assignEmployee() {
  isAssignEmployeePopupShown.value = true;
}



const isCreateEmployeePopupShown = ref(false);
function createEmployee() {
  isCreateEmployeePopupShown.value = true;
}
</script>

<style scoped>
.loading-spinner {
  border: 5px solid #f3f3f3; /* Light grey */
  border-top: 5px solid #DF0327; /* Blue */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
  display: block;
  margin: auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.end-of-results{
  height: 70px;
  font-size: 14px;
  color: #999999;
}
.dot{
  height: 7px;
  width: 7px;
  border-radius: 50px;
  margin-right: 20px;
}
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
  /*justify-content: center;*/
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

.name{
  margin-left: 20px;
}


</style>