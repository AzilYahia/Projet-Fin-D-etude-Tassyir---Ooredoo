<template>
<div class="top-bar-container" >

    <div class="page-name">
<h1>{{ pageTitle }}</h1>
    </div>
    <div class="top-bar">
        <font-awesome-icon icon="fa-regular fa-envelope" class="email"/>
    <div class="image"></div>
        <div class="dropdown">
            <font-awesome-icon icon="fas fa-chevron-down" class="scrolldown-menu" @click="toggleMenu"  />

            <div class="dropdown-content" v-show="isMenuOpen"  ref="dropdownContent" >
                <div class="user-info">
                    <img decoding="async" src="../assets/picture.jpg" alt="">
                    <span>Username</span>
                </div>
                <div class="row-menu" @click="goToProfile()">
                    <div class="drop-down-icon">
                    <font-awesome-icon icon="fa-solid fa-user" class="drop-down-icons"/>
                    </div>
                    My Profile

                        <font-awesome-icon icon="fas-regular fa-chevron-right" class="drop-down-icons"/>
     </div>
                <div class="row-menu" @click="goToSettings()">
                    <div class="drop-down-icon">
                        <font-awesome-icon icon="fa-solid fa-gear" class="drop-down-icons"/>
                    </div>
                    Settings


                        <font-awesome-icon icon="fas-regular fa-chevron-right" class="drop-down-icons"/>
               </div>
                <div class="row-menu" @click="logOut()">
                    <div class="drop-down-icon">
                        <font-awesome-icon icon="fa-solid fa-right-from-bracket" class="drop-down-icons"/>
                    </div>                                       Log out



                        <font-awesome-icon icon="fas-regular fa-chevron-right" class="drop-down-icons"/>

                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser,faHeadset,faLocationDot, faGlobe, faEye, faEyeSlash, faChevronLeft, faChevronRight, faPlus, faChevronDown, faGear, faRightFromBracket, } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faEnvelope, } from'@fortawesome/free-regular-svg-icons'
import {ref, watchEffect, defineProps } from "vue";
import router from "@/router";
library.add(faUser, faHeadset, faLocationDot,faGlobe,faChevronLeft,faChevronRight,faPlus,faChevronDown, faEnvelope, faGear, faRightFromBracket, )
const props = defineProps({
    pageTitle: {
        type: String,
        required: true
    }
})
let isMenuOpen = ref(false);
function handleClickOutside(event) {
    if (
        isMenuOpen.value &&
        !event.target.closest('.dropdown-content') &&
        !event.target.closest('.scrolldown-menu')
    ) {
        isMenuOpen.value = false;
    }
}
function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}
watchEffect(() => {
    if (isMenuOpen.value) {
        document.addEventListener('click', handleClickOutside);
    } else {
        document.removeEventListener('click', handleClickOutside);
    }
});

import {useRouter} from "vue-router";
const routerr = useRouter()
function goToSettings(){
    routerr.push('/settings')
}
function logOut(){
    routerr.push('/logout')
}
function goToProfile(){
    routerr.push('/myProfile')
}

</script>

<style scoped>
.page-name{
    width: 75%;

}
.top-bar-container{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

}
.top-bar{
    display: flex;
    justify-content: space-around;
    width: 20%;
    /*height: 100px;*/
    margin: 20px;
    align-items: center;
}

.image{
    width: 60px;
    height: 60px;
    background-color: #DF0327;
    border-radius: 30px;
}
.email{
        cursor: pointer;
}
.scrolldown-menu{
    cursor: pointer;

}
.scrolldown-menu:hover{
    color: #DF0327;
}
.drop-down-icon{
    width: 35px;
    height: 35px;
    /*font-size: 10px;*/
    background-color: #E6E6E6;
    border-radius: 25px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #A0A0A0;
}
.drop-down-icons{
    color: #A0A0A0;
}
.row-menu:hover{
    /*background-color: #F2F2F2;*/
    border-radius:20px;
    width: 85%;
    transition-duration: 0.3s;
    color: #DF0327;
}
.row-menu{
    display: flex;
    align-items: center;
    height: 60px;
    justify-content: space-between;
    width: 80%;
    color: #A0A0A0;
    cursor: pointer;
}
.dropdown {
    position: relative;
    display: inline-block;
}
.dropdown-content {
    /*display: none;*/
    position: absolute;
    top: 250%;
    /*left: 90%;*/
    right: 10%;
    /*left: -900%;*/
    z-index: 1;
    background-color: #f9f9f9;
    min-width: 300px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
/* Links inside the dropdown */
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}
/* Change color of dropdown links on hover */
/* Show the dropdown menu on hover */
.dropdown .dropdown-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 3px solid #ccc;
    border-radius: 20px;
}
/* Style the user info section */
.user-info {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    /*width: 90%;*/
    width: clamp(90%, 90%, 90%);
    border-bottom: 2px solid #ccc;
    height: 65px;
}
.user-info img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 8px;
}
.user-info span {
    margin-left: 10px;
    font-size: 16px;
    font-weight: bold;
}
</style>