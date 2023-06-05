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


  <ooredoo-top-bar :page-title="pageTitle" v-if=" isOoredooSide && !pagesWithoutTopandSideBars.includes($route.name)"></ooredoo-top-bar>

    <TopBar :pageTitle="pageTitle" v-else v-if="!pagesWithoutTopandSideBars.includes($route.name)"></TopBar>


  <ooredoo-side-bar v-if="isOoredooSide && !pagesWithoutTopandSideBars.includes($route.name)"></ooredoo-side-bar>

    <SideBar v-else v-if="!pagesWithoutTopandSideBars.includes($route.name)"></SideBar>
<!--    <TopBar></TopBar>-->
<!--    <SpecialTopBar></SpecialTopBar>-->
    <RouterView></RouterView>
<!--    <Roles></Roles>-->
<!--   <router-view></router-view>-->
<!--   <Table></Table>-->
<!--code-->

<footer style=" bottom: 0; margin-left: -250px; z-index: 10000 ">
    <div style="height: 150px; "></div>
    <Footer></Footer>

</footer>
</template>

<script setup>
import TopBar from "@/views/customer/TopBar.vue";
import SideBar from "@/views/customer/SideBar.vue";
import {computed, ref, watch} from "vue";
import { useRoute } from "vue-router";
import Footer from "@/components/Footer.vue";
import OoredooTopBar from "@/views/ooredoo/ooredooTopBar.vue";
import OoredooSideBar from "@/views/ooredoo/OoredooSideBar.vue";
import router from "@/router";

const route = useRoute();
const pageTitle = ref(route.name);
const pagesWithoutTopandSideBars = ["Login", "Forgot Password", "NotFound","login","lOgin"];

watch(
    () => route.name,
    (newName) => {
        pageTitle.value = newName;
    }
);
const isOoredooSide = computed(() => {
  return router.currentRoute.value.path.startsWith('/ooredoo');
});

</script>

<style scoped>


</style>




