<template>
  <div class="sala">
    <div class="actions-square-hidden" @click="toggleMenu" v-show="!isMenuOpen">
      <font-awesome-icon icon="fas fa-bars" class="actions-square-icon"/>
    </div>
    <div class="actions-square" @click="toggleMenu" v-show="isMenuOpen">
      <font-awesome-icon icon="fas fa-pencil" class="actions-square-icon" @click="editEmployeeInfo(employee)"/>

      <font-awesome-icon icon="fas fa-trash-can" class="actions-square-icon" @click="removeEmployee(employee)" />

      <font-awesome-icon icon="fas fa-circle-plus" class="actions-square-icon" @click="assignPhoneLine(employee)" />

      <font-awesome-icon icon="fas fa-circle-info" class="actions-square-icon" @click="showEmployeeInfo(employee)" />
    </div>
    <ooredoo-edit-phone-line-popup  :employee="selectedEmployee" v-if="selectedEmployee !== null" @cancelFunction="()=>{editEmployeePopupisShown = !editEmployeePopupisShown;}" :isShown="editEmployeePopupisShown" />

    <ooredoo-phone-line-info-pop-up  :employee="selectedEmployee"
            v-if="selectedEmployee !== null"
            @cancelFunction="()=>{isShown = !isShown;}"
            :isShown="isShown" />

    <ooredo-assign-phone-line-popup  :employee="selectedEmployee"
                                     v-if="selectedEmployee !== null"
                                     @cancelFunction="()=>{ooredooAssignPopupIsShown = !ooredooAssignPopupIsShown;}" :ooredooAssignPopupIsShown="!ooredooAssignPopupIsShown" />



  </div>
</template>
<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import useDetectOutsideClick from '../../../composables/useDetectOutsideClick.js';
import {
  faBars,
  faChevronDown,faCirclePlus,
  faCircleInfo,
  faMagnifyingGlass,
  faPencil,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { ref, watchEffect } from "vue";
import carsData from "../../../data.json";
import Popup from "../../../components/Popup.vue";
import EditEmployeePopup from "@/views/customer/Employees/EditEmployeePopup.vue";
import axios from '@/utils/axiosCustom';
import EditPhoneLinePopup from "@/views/customer/CallLines/EditPhoneLinePopup.vue";
import OoredooPhoneLineInfoPopUp from "@/views/ooredoo/CallLines/ooredooPhoneLineInfoPopUp.vue";
import OoredooEditPhoneLinePopup from "@/views/ooredoo/CallLines/ooredooEditPhoneLinePopup.vue";
import OoredoAssignPhoneLinePopup from "@/views/ooredoo/CallLines/ooredoAssignPhoneLinePopup.vue"; // import the Popup component
library.add(faChevronDown,faCirclePlus, faMagnifyingGlass, faPlus, faPencil, faTrashCan, faCircleInfo, faBars);
const props = defineProps({
  employee: {
    type: Object,
    required: true
  }
})

const employee = ref(props.employee);
let isMenuOpen = ref(false);
let isShown = ref(false);
let ooredooAssignPopupIsShown = ref(false);
let editEmployeePopupisShown = ref(false);
let selectedEmployee = ref(null); // add a new reactive variable
function handleClickOutside(event) {
  if (!event.target.closest(".sala")) {
    isMenuOpen.value = false;
  }
}
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function showEmployeeInfo(employee) {
  selectedEmployee.value = employee;
  editEmployeePopupisShown.value = true;
  isShown.value = false;
}
function assignPhoneLine(employee) {
  selectedEmployee.value = employee;
  editEmployeePopupisShown.value = true;
  isShown.value = true;
  ooredooAssignPopupIsShown.value = false;
}

console.log(employee.id_line_ooredoo)
// setTimeout(() => {console.log(employee)},4000)
async function removeEmployee(employee) {
  try {
    const deleteUrl = `https://pfe.ramzi-issiakhem.com/api/v1/ooredoo/line/delete${this.employee.id_line_ooredoo}`;
    const response = await axios.delete(deleteUrl);

    // Handle the response as needed
    console.log(response.data);

    alert('successfully removed.');
    // Emit an event to indicate the role has been deleted
    // this.$emit("roleDeleted");
  } catch (error) {
    // Handle any errors
    console.error(error);
  }

}
function editEmployeeInfo(employee) {
  selectedEmployee.value = employee;
  isShown.value = true;
  editEmployeePopupisShown.value = false;
}


watchEffect(() => {
  if (isMenuOpen.value) {
    document.addEventListener("click", handleClickOutside);
  } else {
    document.removeEventListener("click", handleClickOutside);
  }
});

</script>


<style scoped>
* {
  font-family: Inter, sans-serif
}

thead tr {
  height: 50px;
  background-color: #E6E6E6;
}

thead {
  border-radius: 25px;
}

tbody tr td {
  border-bottom: 1px solid #CCCCCC;
  padding-inline: 10px;
}

tbody tr {
  height: 70px;

}

table {

  overflow: scroll;
  text-align: center;
  vertical-align: middle;
  min-width: 90%
  /*width: 90%;*/
}

.actions-square {
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


tbody tr td {
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

tbody th, td {
  /*max-width: 150px; !* Set a maximum width for table cells *!*/
  /*overflow: hidden; !* Hide overflow content *!*/
  /*text-overflow: ellipsis; !* Show ellipsis if content overflows *!*/
  /*white-space: nowrap; !* Prevent text wrapping *!*/
}
</style>