<template>
  <div class="popup" v-show="!isCreateEmployeePopupShown"> <!-- drt !isShown bl3ani, later nsgmha -->
    <div class="popup-content">
      <v-form v-model="valid" style="width: 100%; height: 100%;">
        <v-container style=" height: 100%;">
          <v-row style=" height: 80%;">
            <v-col
                cols="12"
                md="6"
            >
              <v-text-field
                  v-model="firstname"
                  :counter="10"
                  label="First name"
                  required
                  clearable
              ></v-text-field>
            </v-col>

            <v-col
                cols="12"
                md="6"
            >
              <v-text-field
                  v-model="lastname"
                  :counter="10"
                  label="Last name"
                  required
                  clearable
              ></v-text-field>
            </v-col>

            <v-col
                cols="12"
                md="6"
            >
              <v-text-field
                  v-model="email"
                  label="E-mail"
                  required
                  clearable
              ></v-text-field>
            </v-col>


            <v-col
                cols="12"
                md="6"
            >
              <v-text-field
                  v-model="username"
                  label="User Name"
                  required
                  clearable
              ></v-text-field>
            </v-col>

            <v-col
                cols="12"
                md="6"
            >
              <!--                                    :rules="[birthDateRules.required, birthDateRules.min]"-->

              <v-text-field
                  type="date"
                  v-model="birthdate"
                  label="Birth Date"
                  required
                  clearable
              ></v-text-field>
            </v-col>

            <v-col
                cols="12"
                md="6"
            >
              <!--                                :rules="[nationalityRules.required, nationalityRules.min]"-->

              <v-select
                  v-model="nationality"
                  label="Nationality"
                  :items="nationalities"
                  required
                  clearable
              ></v-select>
            </v-col>
            <v-col
                cols="12"
                md="6"
            >
              <!--                                                                    :rules="[userTypeRules.required, userTypeRules.min]"
              -->
              <v-select
                  v-model="usertype"
                  :items="['E', 'S', 'A']"
                  label="User Type"
                  required
                  clearable
              ></v-select>
            </v-col>

            <v-col
                cols="12"
                md="6"
            >
              <v-text-field
                  v-model="password"
                  label="Password"
                  required
                  clearable
                  :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  hint="Provide a strong password!"
                  counter
                  @click:append-inner="show1 = !show1"
              ></v-text-field>
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
import {clientCompanyId} from "@/utils/localStorageData";
library.add(faEyeSlash);
export default {
  data(){
    return{
      valid: true,
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      birthdate:'',
      nationality :null,
      usertype:null,
      password:'',
      show1:false,
      nationalities:['Afghan',
        'Albanian', 'Algerian', 'American', 'Andorran', 'Angolan', 'Anguillan', 'Argentine', 'Armenian', 'Australian', 'Austrian', 'Azerbaijani', 'Bahamian', 'Bahraini', 'Bangladeshi', 'Barbadian', 'Belarusian', 'Belgian', 'Belizean', 'Beninese', 'Bermudian', 'Bhutanese', 'Bolivian', 'Botswanan', 'Brazilian', 'British', 'British Virgin Islander', 'Bruneian', 'Bulgarian', 'Burkinan', 'Burmese', 'Burundian', 'Cambodian', 'Cameroonian', 'Canadian', 'Cape Verdean', 'Cayman Islander', 'Central African', 'Chadian', 'Chilean', 'Chinese', 'Citizen of Antigua and Barbuda', 'Citizen of Bosnia and Herzegovina', 'Citizen of Guinea-Bissau', 'Citizen of Kiribati', 'Citizen of Seychelles', 'Citizen of the Dominican Republic', 'Citizen of Vanuatu', 'Colombian', 'Comoran', 'Congolese (Congo)', 'Congolese (DRC)', 'Cook Islander', 'Costa Rican', 'Croatian', 'Cuban', 'Cymraes', 'Cymro', 'Cypriot', 'Czech', 'Danish', 'Djiboutian', 'Dominican', 'Dutch', 'East Timorese', 'Ecuadorean', 'Egyptian', 'Emirati', 'English', 'Equatorial Guinean', 'Eritrean', 'Estonian', 'Ethiopian', 'Faroese', 'Fijian', 'Filipino', 'Finnish', 'French', 'Gabonese', 'Gambian', 'Georgian', 'German', 'Ghanaian', 'Gibraltarian', 'Greek', 'Greenlandic', 'Grenadian', 'Guamanian', 'Guatemalan', 'Guinean', 'Guyanese', 'Haitian', 'Honduran', 'Hong Konger', 'Hungarian', 'Icelandic', 'Indian', 'Indonesian', 'Iranian', 'Iraqi', 'Irish', 'Israeli', 'Italian', 'Ivorian', 'Jamaican', 'Japanese', 'Jordanian', 'Kazakh', 'Kenyan', 'Kittitian', 'Kosovan', 'Kuwaiti', 'Kyrgyz', 'Lao', 'Latvian', 'Lebanese', 'Liberian', 'Libyan', 'Liechtenstein citizen', 'Lithuanian', 'Luxembourger', 'Macanese', 'Macedonian', 'Malagasy', 'Malawian', 'Malaysian', 'Maldivian', 'Malian', 'Maltese', 'Marshallese', 'Martiniquais', 'Mauritanian', 'Mauritian', 'Mexican', 'Micronesian', 'Moldovan', 'Monegasque', 'Mongolian', 'Montenegrin', 'Montserratian', 'Moroccan', 'Mosotho', 'Mozambican', 'Namibian', 'Nauruan', 'Nepalese', 'New Zealander', 'Nicaraguan', 'Nigerian', 'Nigerien', 'Niuean', 'North Korean', 'Northern Irish', 'Norwegian', 'Omani', 'Pakistani', 'Palauan', 'Palestinian', 'Panamanian', 'Papua New Guinean', 'Paraguayan', 'Peruvian', 'Pitcairn Islander', 'Polish', 'Portuguese', 'Prydeinig', 'Puerto Rican', 'Qatari', 'Romanian', 'Russian', 'Rwandan', 'Salvadorean', 'Sammarinese', 'Samoan', 'Sao Tomean', 'Saudi Arabian', 'Scottish', 'Senegalese', 'Serbian', 'Sierra Leonean', 'Singaporean', 'Slovak', 'Slovenian', 'Solomon Islander', 'Somali', 'South African', 'South Korean', 'South Sudanese', 'Spanish', 'Sri Lankan', 'St Helenian', 'St Lucian', 'Stateless', 'Sudanese', 'Surinamese', 'Swazi', 'Swedish', 'Swiss', 'Syrian', 'Taiwanese', 'Tajik', 'Tanzanian', 'Thai', 'Togolese', 'Tongan', 'Trinidadian', 'Tristanian', 'Tunisian', 'Turkish', 'Turkmen', 'Turks and Caicos Islander', 'Tuvaluan', 'Ugandan', 'Ukrainian', 'Uruguayan', 'Uzbek', 'Vatican citizen', 'Venezuelan', 'Vietnamese', 'Vincentian', 'Wallisian', 'Welsh', 'Yemeni', 'Zambian', 'Zimbabwean'],
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
        console.log(this.firstname, this.lastname, this.email, this.username, this.birthdate, this.nationality, this.usertype, this.usertype, this.password)
        const postUrl = `https://pfe.ramzi-issiakhem.com/api/v1/ooredoo/user/register`;
        const response = await axios.post(postUrl, {
          prenom: this.firstname.toString(),
          nom: this.lastname.toString(),
          email:this.email.toString(),
          nomUtilisateur:this.username.toString(),
          dateNaissance:'2023-03-27T00:00:00.000000Z',
          genre:"Homme".toString(),
          nationalite: this.nationality.toString(),
          etat: "A".toString(),
          role: 2,
          typeUtilisateur: this.usertype.toString(),
          motDePasse: this.password.toString(),
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
