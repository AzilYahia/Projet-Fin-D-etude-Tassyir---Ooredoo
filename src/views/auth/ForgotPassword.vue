<template>

    <div class="d-flex align-center justify-center flex-column" style="height: clamp(400px, 100%, 850px);width: clamp(700px, 80%, 1350px); padding: 0">
        <v-sheet width="650" class="mx-auto"  style="padding: 45px 30px; border-radius: 10px" color="grey-lighten-4">
            <v-form fast-fail @submit.prevent="login" align="center">

                        <span class="text-h3 ">Password Reset</span>
                <br> <br>
                <p class="font-weight-medium text-left text-body-3">Seems like you forgot your password, if this is true, click below to reset your password.
                </p>

<!--                <v-text-field variant="outlined" v-model="username" label="User Name"  rounded></v-text-field>-->




                <div v-show="firstIsHidden" class="mt-8 mb-6" style="display: flex;flex-direction: column; align-items: center">
                    <v-text-field style="width: 80%; " class="mb-3" variant="solo" v-model="password" label="Your e-mail address."  ></v-text-field>

                    <v-btn  type="submit" color="#df0327" rounded="lg" size="large"  height="60" style="color: white" @click="first">
                        Reset My Password
                    </v-btn>
                </div>



                <div v-show="secondIsHidden" class="mt-8 mb-6" style="display: flex;flex-direction: column; align-items: center">
                <v-text-field style="width: 80%; " class="mb-3" variant="solo" v-model="password" label="8 Digits code received on e-mail"  ></v-text-field>

                    <v-btn  type="submit" color="#df0327" rounded="lg" size="large"  height="50" style="color: white"   @click="second">
                        Continue
                    </v-btn>
                </div>


                <div v-show="thirdIsHidden" class="mt-8 mb-6" style="display: flex;flex-direction: column; align-items: center">
                    <v-text-field style="width: 80%; " class="mb-1" variant="solo" v-model="password" label="New Password"  ></v-text-field>
                    <v-text-field style="width: 80%; " class="mb-1" variant="solo" v-model="password" label="Confirm New Password"  ></v-text-field>

                    <v-btn  type="submit" color="#df0327" rounded="lg" size="large"  height="50" style="color: white" @click="third">
                        Continue
                    </v-btn>
                </div>


            </v-form>
            <div >
                <p class="text-body-3 font-weight-medium text-left "> If you did not forgot your password you can re-try to Log In again.  <a href="#/login" style="color: darkblue">Sign In</a></p>
            </div>
        </v-sheet>
        <img  src="../../assets/ooredoo_red_logo_horizontal.svg" alt=""  style="margin-top: 40px; width: clamp(180px,40%,250px)">

    </div>

</template>
<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            firstIsHidden: true,
            secondIsHidden: false,
            thirdIsHidden: false,
        };
    },
    methods: {
        login() {
            // Your login logic here
        },
        first(){
            this.firstIsHidden = false;
            this.secondIsHidden = true;
        },
        second(){
            this.secondIsHidden = false;
            this.thirdIsHidden = true;
        },
        third(){
            this.thirdIsHidden = false;
            this.firstIsHidden = true;
        }
    },
}
</script>
<style scoped>


</style>