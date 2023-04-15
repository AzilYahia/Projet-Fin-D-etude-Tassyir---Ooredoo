<template>
    <div class="overlay" v-show="isHidden" >
        <div class="popup-container">
            <span class="content">Are you sure to log out?</span>
          <div class="buttons">
            <button class="cancel-button" @click="cancelFunction()" >
                Cancel</button>
            <button class="logout-button">Log Out</button>
        </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
import {RouterView, RouterLink} from "vue-router";
import {useRouter} from "vue-router";
const router = useRouter()

let isHidden = ref(true);

 let cancelFunction = () => {

    isHidden = !isHidden;
     router.push({ path: 'Dashboard' })
}
</script>

<style scoped>
.content{
    font-size: 25px;
    margin-bottom: 20px;

}
.buttons{
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 340px;
}
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup-container {
    background-color: white;
    width: 450px;
    height: 230px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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

.logout-button{
    border: 2px solid #DF0327 ;
    background-color: white;
    height: 50px;
    width: 140px;
    cursor: pointer;
    color: #DF0327;
    border-radius:14px;
    font-family: inherit;
    font-size: inherit;
    font-weight: bold;

}
.logout-button:hover{
    background-color: #6B7280;
    border: 1px solid #6B7280 ;
    color: white;
    transition-duration: 0.3s;
}
/*.cancel-button {*/
/*    background-color: gray;*/
/*    color: white;*/
/*    border: none;*/
/*    padding: 10px;*/
/*    margin-right: 10px;*/
/*}*/

/*.logout-button {*/
/*    background-color: red;*/
/*    color: white;*/
/*    border: none;*/
/*    padding: 10px;*/
/*}*/
</style>