<template>
  <div class="whole">
    <div class="control-board">
      <div class="search">
        <font-awesome-icon icon="fas fa-magnifying-glass" class="chevron-down" />
        <input type="text" placeholder="Search" class="search-field" v-model="search"/>
      </div>

    </div>
    <table v-if="loading"  cellspacing="0" >
      <thead>
      <tr>
        <th>Company ID</th>
        <th>Date Signature</th>
        <th>Nom Signataires</th>
        <th>Created At</th>
        <th >Updated At</th>
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
        <th>Company Name</th>
        <th>Date Signature</th>
        <th>Nom Signataires</th>
        <th>Created At</th>
        <th >Updated At</th>
        <th >Actions</th>
      </tr>
      </thead>
      <tbody v-for="oneInstance in filteredInstance">
      <tr>
        <td>{{ oneInstance?.entreprise_id }}</td>
        <td>{{ dateSignature }}</td>
        <td>{{oneInstance?.nom_signataires}}</td>
        <td>{{ createdAt }}</td>
        <td>{{ updatedAt }}</td>
        <td>
          <wx-contracts-ooredoo :employee="oneInstance"/>
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
  </div>
  <CreateEmployeePopup :isCreateEmployeePopupShown="!isCreateEmployeePopupShown"  @cancelFunction="()=>{isCreateEmployeePopupShown = !isCreateEmployeePopupShown}" />

</template>
<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faBars, faChevronDown, faCircleInfo, faMagnifyingGlass, faPencil, faPlus, faTrashCan,} from '@fortawesome/free-solid-svg-icons'
import {computed, ref, watchEffect} from "vue";
import Wx from "@/views/customer/Employees/Wx.vue";
import DropDownMenu from "@/components/DropDownMenu.vue";
import axios from '@/utils/axiosCustom';
import {onMounted} from "vue";
import EditEmployeePopup from "@/views/customer/Employees/EditEmployeePopup.vue";
import CreateEmployeePopup from "@/views/customer/Employees/createEmployeePopup.vue";
import WxEmployeesOoredoo from "@/views/ooredoo/Employees/wxEmployeesOoredoo.vue";
import WxContractsOoredoo from "@/views/ooredoo/Facturation/wxContractsOoredoo.vue";
library.add(faChevronDown, faMagnifyingGlass, faPlus,faPencil, faTrashCan, faCircleInfo, faBars, )
const instance = ref([]);
const loading = ref(true);
const userData = ref([]);
const colors = ['red','blue','yellow','green','teal','black','accentred','grey','purple','orange','yellow','blue','purple',]
let showDropdown = ref(false);
const selectedRole = ref('');
const roles = ref([]);
let user = ref([]);

const instanceOfClientConsumption = ref([]);
const instanceOfYesterday = ref([]);
const dateSignature = ref(null);
const createdAt = ref(null);
const updatedAt = ref(null);


onMounted(async () => {
  try {
    // const response = await axios.get('https://pfe.ramzi-issiakhem.com/api/v1/users/3');
    // instance.value = response.data.data;

    const usersResponse = await axios.get('https://pfe.ramzi-issiakhem.com/api/v1/company/client/lines/3');//TODO client company id tae ooredoo
    userData.value = usersResponse.data.data;

    const listClientContracts = await axios.get(`https://pfe.ramzi-issiakhem.com/api/v1/client/contracts/${"15"}?begin=${"2022-01-01"}&end=${""}`);//TODO client company id tae ooredoo
    instance.value = listClientContracts.data.data;
    // ^ {"data": [
    //   {
    //     "id": 7,
    //     "numero_contrat": "2023-4-8-1008",
    //     "entreprise_id": 15,
    //     "ooredoo_id": 2,
    //     "date_signature": "2023-03-27 17:00:00",
    //     "nom_signataires": "Ramzi issiakhem,Mohamed Azil",
    //     "created_at": "2023-04-08T21:11:34.000000Z",
    //     "updated_at": "2023-04-08T21:11:34.000000Z"
    //   }
    // ],
    //     "status": 200

    dateSignature.value = parseDate(instance.value?.date_signature)
    createdAt.value = parseDate(instance.value?.created_at)
    updatedAt.value = parseDate(instance.value?.updated_at)

    loading.value = false;
    // for (let i = 0; i < response.data.data.length; i++) {
    //     user[i] = {
    //         nom: instance.value[i].nom,
    //         prenom: instance.value[i].prenom,
    //         position: instance.value[i].position,
    //         email: instance.value[i].email,
    //         phone: userData.value[i].numeroTelephone,
    //     };
    // }
    const rolesSet = new Set();
    // for (let i = 0; i < user.length; i++) {
    //     rolesSet.add(user[i].position);
    // }

    // user.forEach((item) => {
    //     rolesSet.add(item.position);
    // });
    // // Assign the list of roles to the roles array
    roles.value = Array.from(rolesSet);


  } catch (error) {
    alert(error);
    loading.value = false; // set loading to false in case of error
  }
});
function parseDate(parsingDate){
  const date = new Date(parsingDate);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  // formattedDate.value = `${year}-${month}-${day}`;
  // return formattedDate.value
  return `${year}-${month}-${day}`;
}
function handleClickOutside(event) {
  if (
      showDropdown.value &&
      !event.target.closest('.dropdown-menu') &&
      !event.target.closest('.filter')
  ) {
    showDropdown.value = false;
  }
}
watchEffect(() => {
  if (showDropdown.value) {
    document.addEventListener('click', handleClickOutside);
  } else {
    document.removeEventListener('click', handleClickOutside);
  }
});
const search = ref('');
//change the below function to use the user array instead of the instance array
const filteredInstance = computed(() => {
  return instance.value.filter(item => {
    const nameMatch = item.nom.toLowerCase().includes(search.value.toLowerCase())
    const roleMatch = selectedRole.value === '' || item.role.nom === selectedRole.value.toLowerCase()
    return nameMatch && roleMatch
  })
})
// setTimeout(() => {console.log(user);}, 9000)
const isCreateEmployeePopupShown = ref(false);
function createEmployee() {
  isCreateEmployeePopupShown.value = true;
}




</script>
<style scoped>
.end-of-results{
  height: 70px;
  font-size: 14px;
  color: #999999;
}
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
.dropdown-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}.dropdown-menu li {
   padding: 5px;
   cursor: pointer;
 }

.dropdown-menu li:hover {
  background-color: #f7f7f7;
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
}
.whole{
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
  align-items: center;
  height: 70px;
}
.control-board {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 20px;
  height: 80px;
  border-bottom: 1px solid #CCCCCC;
  align-items: center;
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
.name{
  margin-left: 20px;
}

</style>


