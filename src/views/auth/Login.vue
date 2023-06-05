<template>
    <div class="d-flex align-center justify-center" style="height: clamp(400px, 100%, 850px);width: clamp(700px, 80%, 1350px); padding: 0">
        <v-sheet width="400" class="mx-auto">
            <v-form fast-fail @submit.prevent="login" align="center">
<!--                <v-img-->
<!--                    :width="200"-->
<!--                    aspect-ratio="4/3"-->

<!--                    src="../../assets/ooredoo_red_logo_horizontal.png"-->
<!--                    alt=""-->
<!--                ></v-img>-->

                <img  src="../../assets/ooredoo_logo_vertical.svg" alt=""  style="margin-bottom: 10px; width: clamp(180px,40%,250px)">

                <v-text-field variant="outlined" type="email" required v-model="email" label="Email"  rounded></v-text-field>

                <v-text-field variant="outlined" type="text" v-model="password" label="password" rounded ></v-text-field>
                <div style="display: flex; justify-content: end" >
                <a href="#/forgotpassword" class="text-body-2 font-weight-regular" style="color: darkblue">Forgot Password?</a>
                </div>
                <v-btn type="submit" color="#df0327" block class="mt-5" height="50"  style="color: white">
                    Sign in
                </v-btn>

            </v-form>
            <div class="mt-5">
                <p class="text-body-2">Don't have an account? <a href="#/customer/dashboard" style="color: darkblue">Sign Up</a></p>
            </div>
        </v-sheet>
    </div>
  <div ref="popup" style="display: none;">
    <div class="popup" style="display: flex; flex-direction: column">
      <div class="popup-content">
        <div class="header">
          <h2>Choose your company</h2>
        </div>
        <div class="content">
          <form @submit.prevent="saveEmployee()" style="height: 80%; width: 100%;">
            <div class="fields">
              <div class="form-group" style="width: 80%">

                <label >List of companies</label>
                <multiselect
                    v-model="value"
                    :options="options"
                    :multiple="false"
                    :close-on-select="true"
                    :clear-on-select="false"
                    placeholder="Companies"
                    label="Company name"
                    track-by="name"
                    :searchable="false"
                >
                </multiselect>

              </div>
            </div>
            <div class="buttons">
              <!---->
              <button type="button" class="cancel-button" @click="hidePopup()">Cancel</button>
              <button type="submit" class="save-button" >Save</button>
            </div>
          </form>
          <!---->
          <!---->
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import axios from '@/utils/axiosCustom';
import router from "@/router";
import Multiselect from "vue-multiselect";
import {ref} from "vue";
export default {
  components: {Multiselect},
  data() {
    return {
      email: '',
      password: '',
      popup : '',
      popupvaluestyledisplay:'',
      value:'',
      options:[]

    };
  },
  methods: {
    async saveEmployee() {
      //njibo company id
      let theID=null;
      const user = localStorage.getItem('user');
      if (user.entreprises_clients?.length > 1) {
        for (let item in user.entreprises_clients) {
          const companyInfo = await axios.get(`https://pfe.ramzi-issiakhem.com/api/v1/company/client/${item.id}`);
          if (this.value === companyInfo.data.data.nom)
          {theID=item.id;
          break;
        }}
      if(theID != null){
        localStorage.setItem('theCompanyID',theID)
        alert('success')
      }
      else {
        alert('failure')
      }
      }
      this.hidePopup()
    },
    showPopup(){
      if (this.popup.value.style.display === 'none') {
      this.popup.value.style.display = 'block';
      this.popupvaluestyledisplay = this.popup.value.style.display;
    } else {
      this.popup.value.style.display = 'none';
      this.popupvaluestyledisplay = this.popup.value.style.display;
    }
      },
     hidePopup() {
  if (this.popup.value.style.display === 'block') {
    this.popup.value.style.display = 'none';
  } else {
    this.popup.value.style.display = 'block';
  }
},
    async login() {
      try {
        alert('login')
        const response = await axios.get('https://pfe.ramzi-issiakhem.com/api/v1/user/client/login', {
          params:{
            email: this.email,
            motDePasse: this.password,
          },
        });
        const token = response.data.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(response.data.data.user));
        const user = localStorage.getItem('user');

        if(user.entreprises_clients?.length>1){
          //n3mro list of companies
          // let options=ref([]);
          let i;
          let index;
          for ( (i) in user.entreprises_clients ) {
            const companyInfo = await axios.get(`https://pfe.ramzi-issiakhem.com/api/v1/company/client/${i.id}`);
            this.options.push(companyInfo.data.data.nom)
          }
            //display popup
          this.showPopup()

          //mor ma tvalidi popup bdl global variable tae company id w dir push to dashboard

        }else {
          this.$router.push('/customer/dashboard');
        }
      } catch (error) {
        alert(error)
        console.log(error);
      }
    },
  },
}
</script>

<style>


</style>