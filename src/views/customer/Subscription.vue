<template>
    <div class="whole">
        <div class="control-board">
            <div class="search">
                <font-awesome-icon icon="fas fa-magnifying-glass" class="chevron-down"/>
                <input type="text" placeholder="Search Lines" CLASS="search-field">
            </div>

            <button class="add">
                <font-awesome-icon icon="fas fa-plus" />

            </button>
        </div>
        <table cellspacing="0" >
            <thead>
            <tr>
                <th>Subscription</th>
                <th>Minutes</th>
                <th>Data</th>
                <th>Starting At</th>
                <th>Ending At</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody v-for="car in cars">
            <tr>
                <td>
                    <span class="name">{{car.make}}</span>
                </td>
                <td>{{car.minutes}}</td>
                <td>{{ car.data }}</td>
                <td class="aso">{{car.startingDate}}</td>
                <td>
                    <div class="image-name">
                        <div class="dot" :style="{'background-color': car.colorj}"></div>
                        {{car.endingDate}}
                    </div>
                </td>
                <td >
                    <wx2actions/>
                </td>
            </tr>


            </tbody>
            <tfoot>
            <tr>
                <td colspan="6" class="end-of-results" >
                    End of results.
                </td>
            </tr>
            </tfoot>

        </table>
    </div>
</template>

<script setup>

import Wx from "@/components/Wx.vue";
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
import carsData from "../../data.json"
import {color} from "chart.js/helpers";
import Wx2actions from "@/components/wx2actions.vue";
library.add(faChevronDown, faMagnifyingGlass, faPlus,faPencil, faTrashCan, faCircleInfo, faBars )
const cars = ref(carsData);


</script>

<style scoped>
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