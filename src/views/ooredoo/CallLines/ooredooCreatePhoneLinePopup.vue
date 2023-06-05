<template>
  <div class="popup" v-show="!isCreateEmployeePopupShown"> <!-- drt !isShown bl3ani, later nsgmha -->
    <div class="popup-content">
      <div class="header">
        <h2>Create Ooredoo phone lines</h2>
      </div>
      <div class="content">
        <form @submit.prevent="saveEmployee" style="height: 80%; width: 100%;">
          <div class="fields">
            <div class="form-group" >
              <label for="name">Number of lines</label>
              <input id="name" type="text"  v-model="lignes" required>
            </div>
          </div>
          <div class="buttons">
            <button type="button" class="cancel-button" @click="cancelFunction()">Cancel</button>
            <button type="submit" class="save-button" @click="saveEmployee">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import {faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import "vuetify/dist/vuetify.min.css";
import { useField, useForm } from 'vee-validate'

import {library} from "@fortawesome/fontawesome-svg-core";
import {onMounted, ref} from "vue";
import axios from '@/utils/axiosCustom';
import {localStorageUser} from "@/utils/localStorageData";
library.add(faEyeSlash);
export default {
  data(){
    return{
      lignes: 0,

    }},
  props: {
    isCreateEmployeePopupShown: Boolean,
  },
  methods:{
    cancelFunction() {
      this.$emit("cancelFunction", false);
    },
    async saveEmployee() {
      try {
        const postUrl = `https://pfe.ramzi-issiakhem.com/api/v1/ooredoo/lines/add/${localStorageUser.id_ooredoo_user}`;
        const response = await axios.post(postUrl, {
          lignes: this.lignes,

        });
        // Handle the response as needed
        console.log(response.data);
        // Emit an event to indicate the role has been saved
        // this.$emit('roleSaved');
        alert('Created.');
        this.$emit("cancelFunction", true);
        // this.$emit("cancelFunction", false);
      } catch (error) {
        // Handle any errors
        console.error(error);
      }
    },
  },

// setup(){
//     const firstname = ref('');
//     const lastname = ref('');
//     const email = ref('');
//     const username = ref('');
//     const birthdate = ref('');
//     const nationality = ref('');
//     const usertype = ref('');
//     const password = ref('');
//     const show1 = ref(false);
// }
}
</script>
<style scoped>
input{
  width: 80%;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 16px;
  margin-top: 5px;
}
label{
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 3px;
  color: dimgrey;
}
.form-group{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.fields{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 80%;
}
.content{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.popup-content {
  background-color: #fff;
  width: 80%;
  max-width: 600px;
  height: clamp(560px, 80%, 600px);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.popup{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  justify-content: center;
  align-items: center;
  display: flex;

  z-index: 100;
}
.buttons{
  margin-top: 15px;
  display: flex;
  justify-content: space-evenly;
  height: 20%;
  align-items: center;
  width: 100%;
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

.save-button{
  border: 1px solid darkgreen ;
  background-color: darkgreen;
  height: 50px;
  width: 140px;
  cursor: pointer;
  color: white;
  border-radius:14px;
  font-family: inherit;
  font-size: inherit;
  font-weight: bold;
}
.save-button:hover{
  background-color: #6B7280;
  border: 1px solid #6B7280 ;

  transition-duration: 0.3s;
}
</style>
