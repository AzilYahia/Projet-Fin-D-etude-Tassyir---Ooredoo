<script setup>
import Roles from "@/views/customer/Roles.vue"
import DashBoard from "@/views/customer/DashBoard.vue";
import TopBar from "@/components/TopBar.vue";
import NavBar from "@/components/NavBar.vue";
import {RouterView, RouterLink} from "vue-router";
import SideBar from "@/components/SideBar.vue";
</script>

<template>
<!--  if general side:-->
<!--  <NavBar></NavBar>-->
<!--  if entreprise ooredoo side-->
<!--  code-->
<!--  if entreprise customer side-->
<!-- <DashBoard></DashBoard>-->
<!--    <router-view to="roles"></router-view>-->
    <SideBar></SideBar>
    <TopBar></TopBar>
    <RouterView></RouterView>
<!--    <Roles></Roles>-->
<!--   <router-view></router-view>-->
<!--   <Table></Table>-->
<!--code-->
</template>



<style scoped>

</style>




