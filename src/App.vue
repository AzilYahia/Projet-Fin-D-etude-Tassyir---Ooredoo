<script setup>
import TopBar from "@/components/TopBar.vue";
import SideBar from "@/components/SideBar.vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const pageTitle = ref(route.name);

watch(
    () => route.name,
    (newName) => {
        pageTitle.value = newName;
    }
);

</script>

<template>
<!--  if general side:-->
<!--  <NavBar></NavBar>-->
<!--  if entreprise ooredoo side-->
<!--  code-->
<!--  if entreprise customer side-->
<!-- <DashBoard></DashBoard>-->
<!--    <router-view to="roles"></router-view>-->
<!--    i want to check if im on the dashboard page, if yes, use SpecialTopBar, else use TopBar         -->
<!--    <SpecialTopBar v-if="this.$route.name === 'dashboard'"></SpecialTopBar>-->

    <TopBar :pageTitle="pageTitle"></TopBar>

    <SideBar></SideBar>
<!--    <TopBar></TopBar>-->
<!--    <SpecialTopBar></SpecialTopBar>-->
    <RouterView></RouterView>
<!--    <Roles></Roles>-->
<!--   <router-view></router-view>-->
<!--   <Table></Table>-->
<!--code-->
</template>



<style scoped>

</style>




