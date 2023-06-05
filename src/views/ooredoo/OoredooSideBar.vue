<script setup>
import  {RouterView, RouterLink} from "vue-router";
import router from "@/router";
import axios from '@/utils/axiosCustom';
import {onMounted, ref} from "vue";
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
let menuitems = [
  {
    link:"#/ooredoo/dashboard",name: "Dashboard", tooltip: "Dashboard", icon: "bx-grid-alt"
  }, {link: "#/ooredoo/roles",name: "Roles", tooltip: "Roles", icon: "bx-shape-square"
  },
  {link: "#/ooredoo/employees",name: "Employees", tooltip: "Employees", icon: "bxs-user-account"
  },
  {link: "#/ooredoo/logs",name: "Logs", tooltip: "Logs", icon: "bx-history"
  },
  {link: "#/ooredoo/callLines",name: "Call Lines", tooltip: "Call Lines", icon: "bx-phone"
  },
  {link: "#/ooredoo/subscription",name: "Subscription", tooltip: "Subscription", icon: "bx-user"
  },
  {link: "#/ooredoo/affiliation",name: "Affiliation", tooltip: "Affiliation", icon: "bx-network-chart"
  },
  {link: "#/ooredoo/facturation",name: "Facturation", tooltip: "Facturation", icon: "bx-clipboard"
  },
  {link: "#/ooredoo/companies",name: "companies", tooltip: "companies", icon: "bxs-building"
  },

  {link: "#/ooredoo/consumption",name: "Consumption", tooltip: "Consumption", icon: "bx-cart"
  },
  // {link: "#logout",name: "Log out", tooltip: "Log out", icon: "bx-log-out"
  // }
];
const instance = ref([]);
onMounted(async () => {
  try {
    const response = await axios.get('https://pfe.ramzi-issiakhem.com/api/v1/users/3');//TODO client company id tae ooredoo
    instance.value = response.data.data;
  } catch (error) {
    console.log(error);
  }
});


</script>
<style scoped>

</style>

<template>
  <VueSidebarMenuAkahon :menu-title="'Ooredoo'"
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


