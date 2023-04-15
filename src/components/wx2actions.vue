<template>
    <div class="sala">
        <div class="actions-square-hidden" @click="isHidden = !isHidden" v-show="!isHidden">
            <font-awesome-icon icon="fas fa-bars" class="actions-square-icon"/>
        </div>
        <div class="actions-square" @click="isHidden = !isHidden" v-show="isHidden">
            <font-awesome-icon icon="fas fa-pencil" class="actions-square-icon"/>
            <font-awesome-icon icon="fas fa-circle-info" class="actions-square-icon"/>
        </div>
    </div>
</template>
<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faBars,
    faChevronDown,
    faCircleInfo,
    faMagnifyingGlass,
    faPencil,
    faPlus,
    faTrashCan,
} from '@fortawesome/free-solid-svg-icons'
import {ref} from "vue";
import carsData from "../data.json"
library.add(faChevronDown, faMagnifyingGlass, faPlus,faPencil, faTrashCan, faCircleInfo, faBars )
let isHidden = ref(false);
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
    width: 70px;
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