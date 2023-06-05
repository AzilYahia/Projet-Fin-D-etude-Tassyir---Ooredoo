<script setup>
import  {RouterView, RouterLink} from "vue-router";
import router from "@/router";
import axios from '@/utils/axiosCustom';
import {onMounted, ref} from "vue";
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
import {clientCompanyId} from "@/utils/localStorageData";
let menuitems = [
    {
  link:"#/customer/dashboard",name: "Dashboard", tooltip: "Dashboard", icon: "bx-grid-alt"
}, {link: "#/customer/roles",name: "Roles", tooltip: "Roles", icon: "bx-shape-square"
  },
  {link: "#/customer/employees",name: "Employees", tooltip: "Employees", icon: "bxs-user-account"
  },
  {link: "#/customer/logs",name: "Logs", tooltip: "Logs", icon: "bx-history"
  },
  {link: "#/customer/calllines",name: "Call Lines", tooltip: "Call Lines", icon: "bx-phone"
  },
  {link: "#/customer/subscription",name: "Subscription", tooltip: "Subscription", icon: "bx-user"
  },
  {link: "#/customer/consumption",name: "Consumption", tooltip: "consumption", icon: "bx-cart"
  },
  {link: "#/customer/facturation",name: "Facturation", tooltip: "Facturation", icon: "bx-clipboard"
  },
  {link: "#/customer/settings",name: "Settings", tooltip: "Settings", icon: "bx-cog",
  },
  // {link: "#logout",name: "Log out", tooltip: "Log out", icon: "bx-log-out"
  // }
  ];
const instance = ref([]);
const companyName = ref();
onMounted(async () => {
    try {
        const response = await axios.get(`https://pfe.ramzi-issiakhem.com/api/v1/users/${clientCompanyId}`);
        instance.value = response.data.data;
        const companyNameResponse = await axios.get(`https://pfe.ramzi-issiakhem.com/api/v1/company/client/${clientCompanyId}`)
        companyName.value = companyNameResponse.data.data;
    } catch (error) {
        console.log(error);
    }
});


</script>
<style scoped>

</style>


<template>
  <VueSidebarMenuAkahon :menu-title="companyName?.nom ? companyName?.nom :'Company Name'"
  menu-icon="bxs-building" :menu-items= menuitems
  bg-color="#ffffff"
  home-section-color="#DF0327"
  icons-color="#A0A0A0"
  secondary-color="#F9F9F9"
  logo-title-color="#DF0327"
  menu-items-text-color="#A0A0A0"
  menu-items-hover-color="#df0327"
  />
</template>



<!--<template>-->
<!--    <v-card>-->
<!--        <v-layout>-->
<!--            <v-navigation-drawer-->
<!--                    expand-on-hover-->
<!--                    rail-->
<!--            >-->
<!--                <v-list>-->
<!--                    <v-list-item-->
<!--                            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"-->
<!--                            title="Sandra Adams"-->
<!--                            subtitle="sandra_a88@gmailcom"-->
<!--                    ></v-list-item>-->
<!--                </v-list>-->

<!--                <v-divider></v-divider>-->

<!--                <v-list density="compact" nav>-->
<!--                    <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles" @click="router.push({path:'/'})"></v-list-item>-->
<!--                    <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared" @click="router.push({path:'/employees'})"></v-list-item>-->
<!--                    <v-list-item prepend-icon="mdi-star" title="Starred" value="starred" @click="router.push({path:'/login'})"></v-list-item>-->
<!--                </v-list>-->
<!--            </v-navigation-drawer>-->

<!--&lt;!&ndash;            <v-main style="height: 250px"></v-main>&ndash;&gt;-->
<!--        </v-layout>-->
<!--    </v-card>-->
<!--</template>-->




<!--    <div class="links">-->
<!--      &lt;!&ndash;      <RouterLink to="/" active-class="active">&ndash;&gt;-->
<!--      <img src="../assets/ooredoo_white_logo_horizontal.png" alt="ooredoo" @click="router.push({path:'/',name: 'home',})">-->
<!--      &lt;!&ndash;      </RouterLink>&ndash;&gt;-->
<!--      <div class="textlinks">-->
<!--      <RouterLink to="/Support" active-class="active"><p>Support</p></RouterLink>-->
<!--      <RouterLink to="/FindUs" active-class="active"><p>Find Us</p></RouterLink>-->
<!--      <RouterLink to="/Language" active-class="active"><p>English</p></RouterLink>-->
<!--      <RouterLink to="/SignIn" active-class="active"><p>Sign In</p></RouterLink>-->
<!--      </div>-->
<!--      </div>-->
<!--    <RouterView />-->