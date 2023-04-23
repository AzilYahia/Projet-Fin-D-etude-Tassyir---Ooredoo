<script setup>
import  {RouterView, RouterLink} from "vue-router";
import router from "@/router";
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
let menuitems = [
    {
  link:"#dashboard",name: "Dashboard", tooltip: "Dashboard", icon: "bx-grid-alt"
}, {link: "#roles",name: "Roles", tooltip: "Roles", icon: "bx-shape-square"
  },
  {link: "#employees",name: "Employees", tooltip: "Employees", icon: "bxs-user-account"
  },
  {link: "#logs",name: "Logs", tooltip: "Logs", icon: "bx-history"
  },
  {link: "#calllines",name: "Call Lines", tooltip: "Call Lines", icon: "bx-phone"
  },
  {link: "#subscription",name: "Subscription", tooltip: "Subscription", icon: "bx-user"
  },
  {link: "#facturation",name: "Facturation", tooltip: "Facturation", icon: "bx-clipboard"
  },
  {link: "#settings",name: "Settings", tooltip: "Settings", icon: "bx-cog",
  },
  {link: "#logout",name: "Log out", tooltip: "Log out", icon: "bx-log-out"
  }
  ]
</script>
<style scoped>

</style>

<template>
  <VueSidebarMenuAkahon menu-title="Ramzi Co."
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