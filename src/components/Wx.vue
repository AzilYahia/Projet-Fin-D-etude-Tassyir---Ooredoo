<template>
    <div class="sala">
        <div class="actions-square-hidden" @click="toggleMenu" v-show="!isMenuOpen">
            <font-awesome-icon icon="fas fa-bars" class="actions-square-icon"/>
        </div>
        <div class="actions-square" @click="toggleMenu" v-show="isMenuOpen">
            <font-awesome-icon icon="fas fa-pencil" class="actions-square-icon" @click="editEmployeeInfo(employee)"/>
            <font-awesome-icon icon="fas fa-trash-can" class="actions-square-icon"/>
            <font-awesome-icon icon="fas fa-circle-info" class="actions-square-icon" @click="showEmployeeInfo(employee)" />
        </div>
        <EditEmployeePopup  :employee="selectedEmployee" v-if="selectedEmployee !== null" @cancelFunction="()=>{editEmployeePopupisShown = !editEmployeePopupisShown;}" :isShown="editEmployeePopupisShown" />
        <Popup  :employee="selectedEmployee" v-if="selectedEmployee !== null"  @cancelFunction="()=>{isShown = !isShown;}"  :isShown="isShown" />



    </div>
</template>
<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import useDetectOutsideClick from '../composables/useDetectOutsideClick.js';
import {
    faBars,
    faChevronDown,
    faCircleInfo,
    faMagnifyingGlass,
    faPencil,
    faPlus,
    faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { ref, watchEffect } from "vue";
import carsData from "../data.json";
import Popup from "./Popup.vue";
import EditEmployeePopup from "@/components/EditEmployeePopup.vue"; // import the Popup component
library.add(faChevronDown, faMagnifyingGlass, faPlus, faPencil, faTrashCan, faCircleInfo, faBars);
const props = defineProps({
    employee: {
        type: Object,
        required: true
    }
})

const employee = ref(props.employee);
let isMenuOpen = ref(false);
let isShown = ref(false);
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
const popupRef = ref()
const EditEmployeepopupRef = ref()
// useDetectOutsideClick(popupRef, () => {
//     isShown.value = false;
// })
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