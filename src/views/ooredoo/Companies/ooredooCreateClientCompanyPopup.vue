<template>
  <div class="popup" v-show="!isCreateEmployeePopupShown" style="width: 100%">
    <!-- drt !isShown bl3ani, later nsgmha -->
    <div class="popup-content" style="height: 99%; width: 100%">
      <v-form style="width: 100%; height: 90%">
        <v-container style="height: 100%; width: 100%">
          <v-row style="height: 100%; width: 100%">
            <v-col cols="3" md="3">
              <v-text-field
                  v-model="entreprise.nom"
                  label="Entreprise Name"
                  required
                  clearable
              ></v-text-field>
            </v-col>

            <v-col
                cols="3"
                md="3"
            >
              <v-text-field
                  v-model="entreprise.adresse"
                  label="address"
                  required
                  clearable
              ></v-text-field>
            </v-col>

            <v-col cols="3" md="3">
              <v-text-field v-model="entreprise.telephone" label="Telephone" required clearable></v-text-field>
            </v-col>

            <v-col cols="3" md="3">
              <v-text-field v-model="entreprise.numeroRIB" label="Numero RIB" required clearable></v-text-field>
            </v-col>

            <v-col cols="3" md="3">
              <v-text-field v-model="entreprise.numeroRC" label="Numero RC" required clearable></v-text-field>
            </v-col>

            <v-col cols="3" md="3">
              <v-text-field v-model="entreprise.numeroNIF" label="Numero NIF" required clearable></v-text-field>
            </v-col>

            <v-col cols="3" md="3">
              <v-text-field v-model="entreprise.numeroAI" label="Numero AI" required clearable></v-text-field>
            </v-col>

            <v-col cols="3" md="3">
              <v-text-field v-model="contrat.dateSignature" label="Date Signature" required clearable></v-text-field>
            </v-col>

            <v-col cols="3" md="3">
              <v-text-field v-model="contrat.nomSignataires" label="Nom Signataires" required clearable></v-text-field>
            </v-col>

            <v-col cols="2" md="3">
              <v-text-field v-model="nombreDeLignes" label="Lignes" required clearable></v-text-field>
            </v-col>

            <v-col cols="3" md="3">
              <v-text-field v-model="forfait.dateDebut" label="Date Debut" required clearable></v-text-field>
            </v-col>

            <v-col cols="2" md="3">
              <v-text-field v-model="forfait.dateFin" label="Date Fin" required clearable></v-text-field>
            </v-col>

            <v-col cols="2" md="3">
              <v-text-field v-model="forfait.tarif" label="Tarif" required clearable></v-text-field>
            </v-col>

            <v-col cols="3" md="3">
              <v-text-field v-model="forfait.creditInitial" label="Credit" required clearable></v-text-field>
            </v-col>

            <v-col cols="3" md="3">
              <v-text-field v-model="forfait.internetInitial" label="Internet" required clearable></v-text-field>
            </v-col>

            <v-col cols="3" md="3">
              <v-text-field v-model="gerants[0].prenom" label="Prenom Gerant" required clearable></v-text-field>
            </v-col>

            <v-col cols="3" md="3">
              <v-text-field v-model="gerants[0].nom" label="Nom Gerant" required clearable></v-text-field>
            </v-col>
            <v-col cols="3" md="3">
              <v-text-field v-model="gerants[0].email" label="Email Gerant" required clearable></v-text-field>
            </v-col>
            <v-col cols="3" md="3">
              <v-text-field v-model="gerants[0].nomUtilisateur" label="UserName Gerant" required clearable></v-text-field>
            </v-col>
            <v-col cols="3" md="3">
              <v-text-field v-model="gerants[0].dateNaissance" label="Birthdate Gerant" required clearable></v-text-field>
            </v-col>
            <v-col cols="2" md="3">
              <v-text-field v-model="gerants[0].genre" label="genre Gerant" required clearable></v-text-field>
            </v-col>

          </v-row>

          <v-row align="center" justify="center" style=" height: 25%;">
            <v-col cols="auto">
              <v-btn size="large" rounded="lg" variant="outlined" @click="cancelFunction()">cancel</v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn size="large" color="#df0327"  variant="flat" rounded="lg" type="submit"
                     style="color: white" @click="saveEmployee()"
              >submit</v-btn>
            </v-col>
          </v-row>
        </v-container>

      </v-form>

      <!--            </div>-->
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
import {clientCompanyId, localStorageToken} from "@/utils/localStorageData";
library.add(faEyeSlash);
export default {
  data(){
    return{
      valid: true,
      entreprise: {
        nom: '',
        adresse: '',
        etat: 'A',
        telephone: '',
        numeroRIB: '',
        numeroRC: '',
        numeroNIF: '',
        numeroAI: '',
      },
      contrat: {
      dateSignature: '',
      nomSignataires: '',
      },
      nombreDeLignes:0,
      forfait: {
        dateDebut: '',
        dateFin: '',
        tarif: '',
        creditInitial: '',
        internetInitial: '',
      },
      gerants: [
        {
          prenom: "",
          nom: "",
          email: "",
          nomUtilisateur: "",
          dateNaissance: "",
          genre: "",
          nationalite: "Algerienne",
          etat: "A"
        }
      ],
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
        const postUrl = `https://pfe.ramzi-issiakhem.com/api/v1/company/client/add`;
        const response = await axios.post(postUrl, JSON.stringify({
          entreprise: this.entreprise,
          contrat: this.contrat,
          nombreDeLignes: this.nombreDeLignes,
          forfait: this.forfait,
          gerants: this.gerants,
        }), {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': localStorageToken
          },
        });
        // Handle the response as needed
        console.log(response.data);
        // Emit an event to indicate the role has been saved
        // this.$emit('roleSaved');
        alert(this.firstname + ' '+ this.lastname +'Created.');
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
  max-width: 800px;
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
