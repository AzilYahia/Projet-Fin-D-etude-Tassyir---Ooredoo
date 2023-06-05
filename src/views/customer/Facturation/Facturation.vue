<template>

    <vueper-slides
            :arrows-outside="false"
            :breakpoints="breakpoints"
            :bullets-outside="true"
            :dragging-distance="200"
            :gap="0"
            :infinite="true"
            :slide-ratio="1 / 2.8"
            :touchable="false"
            :visible-slides="1"
            class="no-shadow"
            slide-multiple
            transition-speed="450"
    >
        <template #arrow-left>
            <button class="chevron">
                <font-awesome-icon class="icon" icon="fas fa-chevron-left"/>
            </button>
        </template>
        <template #arrow-right>
            <button class="chevron">
                <font-awesome-icon class="icon" icon="fas fa-chevron-right"/>
            </button>
        </template>
        <template #bullet="{ active, slideIndex, index }">
            <i v-if="active">
                <font-awesome-icon class="circle-active" icon="fa-solid fa-circle" style="color: #DF0327"/>
            </i>

            <i v-else>
                <font-awesome-icon class="circle" icon="fa-regular fa-circle" style="color: #DF0327"/>

            </i>
        </template>

        <vueper-slide
                v-for="(slide, i) in instance"
                :key="i"
        >

            <template #content>
                <div class="vueperslide__content-wrapper" style="flex-direction: row;height: 100%">


                    <div class="role">
                        <div class="role-header">
                            <div class="hea">
                                <span class="role-name">Invoice details </span>
                            </div>
                        </div>
                        <div class="emplo">
                            <div class="whole">
                              <div class="header"><h3>Prix Forfait :</h3> <pre> {{ slide?.prix_forfait }} </pre> </div>
                              <div class="header"><h3>Prix Penalite :</h3> <pre> {{ slide?.prix_penalite }} </pre> </div>
                              <div class="header"><h3>Prix Totale :</h3> <pre> {{ slide?.prix_total }} </pre> </div>
                              <div class="header"><h3>Credit Penalite :</h3> <pre> {{ slide?.credit_penalite }}</pre> </div>
                              <div class="header"><h3>Internet Penalite :</h3> <pre> {{slide?.internet_penalite}} </pre> </div>
                              <div class="header"><h3>Date Debut :</h3> <pre> {{ slide?.date_debut.slice(0, 4) }} - {{slide?.date_debut.slice(5, 7)}} - {{slide?.date_debut.slice(8, 10)}} </pre> </div>
                              <div class="header"><h3>Date Fin :</h3> <pre> {{slide?.date_fin.slice(0, 4)}} - {{slide?.date_fin.slice(5, 7)}} - {{slide?.date_fin.slice(8, 10)}} </pre> </div>

                              </div>
                              </div>
                    </div>


                </div>
            </template>
        </vueper-slide>
    </vueper-slides>



</template>
<script setup>
import {VueperSlides, VueperSlide} from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import cars from '../../../data.json'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faChevronRight, faChevronLeft, faCircle} from "@fortawesome/free-solid-svg-icons";
import {faCircle as faCircleRegular} from "@fortawesome/free-regular-svg-icons";
import EditEmployeePopup from "@/views/customer/Employees/EditEmployeePopup.vue";
import EditRolePopup from "@/views/customer/Roles/EditRolePopup.vue";
import {onMounted, ref} from "vue";
import axios from '@/utils/axiosCustom';
import {clientCompanyId} from "@/utils/localStorageData";

library.add(faChevronLeft, faChevronRight, faCircle, faCircleRegular)

const breakpoints = {
    1400: {
        slideRatio: 1 / 2.4,
        visibleSlides: 1
    },
    900: {
        slideRatio: 1 / 2.4,
        visibleSlides: 1
    },
    600: {
        slideRatio: 1 / 0.5,
        visibleSlides: 1
    },
    1100: {
        slideRatio: 1 / 2.1,
        visibleSlides: 1
    },
    1900: {
        slideRatio: 1 / 2.5,
        visibleSlides: 1
    }
}

const loading = ref(true); // add a loading state
const instance = ref([]);
const instanceOfClientConsumption = ref([]);
const instanceOfYesterday = ref([]);
const dateSignature = ref(null);
const createdAt = ref(null);
const updatedAt = ref(null);

onMounted(async () => {
  try {
    const listClientContracts = await axios.get(`https://pfe.ramzi-issiakhem.com/api/v1/company/invoices/${clientCompanyId}`);
    instance.value = listClientContracts.data.data;
    console.log(instance.value)
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


    // ^ : {
    // "data": {
    //   "credit": 1708,
    //       "internet": 1875
    // },
    // "status": 200
    // }

    // ^ {
    // "data": {
    //   "credit": 823,
    //       "internet": 54
    // },
    // "status": 200
    // }

    loading.value = false;

  } catch (error) {
    console.log(error);
    loading.value = false;
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


</script>

<style scoped>

.role {
    text-align: center;
    background-color: white;
    /*width: 47%;*/
    /*width: clamp(280px,56%,350px);*/
    width: clamp(290px, 40vw, 450px);
    border: #c4c4c4 solid;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: clamp(395px, 90%, 600px);
}

.role-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    height: 55%;
    justify-content: space-around;
    width: 80%;
}


.hea {
    display: flex;
    flex-direction: column;
    width: 100%;
}


#edit {
    color: #DF0327;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
    cursor: pointer;
    align-self: end;
}


.role-name {
    font-size: 20px;
    font-weight: bold;
}


.actions-content-active {
    text-align: center;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    border: 2px solid #C4C4C4;
    border-radius: 10px;
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    font-family: 'Inter', sans-serif;
}


.emplo {
    height: 60%;
    width: 100%;
}


.whole {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 120%;
}


.header {
    display: flex;
    //justify-content: space-between;
  align-items: center;
    width: 90%;
}


.title {
    overflow: hidden;
    word-break: break-word;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
}


.option {
    color: #DF0327;
    font-size: 120%;
    font-weight: bold;
    cursor: pointer;
}


.list {
    display: flex;
    flex-direction: column;
    /*justify-content: space-around;*/
    overflow-y: scroll;
    position: relative;
    height: clamp(150px, 60%, 100%);
    width: 90%;
    /*background-color: #22B573;*/
    word-break: break-word;
    white-space: nowrap;
    padding-right: 10px;
}


.rectangle {
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

.image {
    width: 50px;
    height: 40px;
    background-color: #DF0327;
    border-radius: 20%;
}

.rectangle-info {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /*width: 80%;*/
    /*width: clamp(15px,10px,10px); */
    align-items: flex-start;
}

.name {
    font-size: 120%;
    overflow: hidden;
    word-break: break-word;
}

.info {
    color: #A0A0A0;
    font-size: 100%;
    overflow: hidden;
    word-break: break-word;
}

.edit {
    align-self: start;
    padding: 1%;
    color: #DF0327;
    font-weight: bold;
    cursor: pointer;
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

.loginbutton {
    border: 1px solid white;
    background-color: #DF0327;
    height: 50px;
    width: 130px;
    cursor: pointer;
    color: white;
    border-radius: 14px;
    font-family: inherit;
    font-size: inherit;
}

.loginbutton:hover {
    background-color: #6B7280;
    transition-duration: 0.3s;
}

.circle {
    border: none;
    background-color: #DF0327;
    color: white;
    height: 7px;
    width: 7px;
    border-radius: 90px;
    cursor: pointer;

}

.circle-active {
    border: none;
    background-color: #DF0327;
    color: white;
    height: 7px;
    width: 7px;
    border-radius: 90px;
    cursor: pointer;
    scale: 2;
    transition-duration: 0.2s;
}

.circle:hover {
    scale: 2.5;
    transition-duration: 0.2s;
}
.chevron {
    border: none;
    background-color: #DF0327;
    color: white;
    height: 35px;
    width: 35px;
    border-radius: 35px;
    /*padding: 4px;*/
    /*font-size: 9px;*/
    cursor: pointer;
    align-content: center;
    align-items: center;
    display: flex;
    justify-content: center;
}

.chevron:hover {
    background-color: #6B7280;
    transition-duration: 0.3s;
    scale: 1.5;
}


#red {
    color: #DF0A2D;
}

.setting-description-filler .chevron-down {
    color: #22B573;
}

.setting-description-filler {
    width: 70px;
}

.setting-filler {
    width: 90%;
}

.settings {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 300px
}

.settings-row .setting-name .chevron-down {
    margin-right: 10px;
    font-size: 20px;
}

.setting-description {
    /*margin-left: 80px;*/
}

.setting-name {
    font-weight: bold;
    display: flex;
    align-items: center;

}

.settings-row {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    color: #A0A0A0;
    height: 65px;
    align-items: center;

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

.whole {
    /*width: 90%;*/
    align-items: center;
    display: flex;
    flex-direction: column;
}

.chevron-down {
    color: #C4C4C4;
}

table {

    overflow: scroll;
    text-align: center;
    vertical-align: middle;
    min-width: 90%
    /*width: 90%;*/
}

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

tbody tr {
    height: 70px;

}

.search-field {
    border: none;
    outline: none;
    margin-left: 15px;
}

.search {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>