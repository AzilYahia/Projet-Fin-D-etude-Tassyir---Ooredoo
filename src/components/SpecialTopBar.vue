<template>
<div class="top-bar-container">
    <div class="column">
        <h1>Good Morning Yahia!</h1>
        <p id="hopeyouarehaving">Hope you are having a good day</p>
    </div>
    <div class="top-bar">
    <font-awesome-icon icon="fa-regular fa-envelope" class="email"/>
    <div class="image"></div>
    <font-awesome-icon icon="fas fa-chevron-down" class="scrolldown-menu"/>
</div>
</div>
</template>

<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser,faHeadset,faLocationDot, faGlobe, faEye, faEyeSlash, faChevronLeft, faChevronRight, faPlus, faChevronDown,  } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faEnvelope, } from'@fortawesome/free-regular-svg-icons'
library.add(faUser, faHeadset, faLocationDot,faGlobe,faChevronLeft,faChevronRight,faPlus,faChevronDown, faEnvelope)
</script>

<style scoped>
.column{
    display: flex;
    flex-direction: column;
}
h1{
margin-left: 40px;
font-size: 25px;
color: black;
}
#hopeyouarehaving{
    margin-left: 40px;
    margin-bottom: 15px;
}
.top-bar-container{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #828282;
    font-size: 15px;

}
.top-bar{
    display: flex;
    justify-content: space-between;
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
.email, .scrolldown-menu{
    cursor: pointer;
}

</style>