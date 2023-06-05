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
</template>
<script>
import axios from '@/utils/axiosCustom';
import router from "@/router";
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.get('https://pfe.ramzi-issiakhem.com/api/v1/ooredoo/user/login', {
          params:{
            email: this.email,
            motDePasse: this.password,
          },
        });
        const token = response.data.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(response.data.data.user));
          this.$router.push('/ooredoo/dashboard');
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