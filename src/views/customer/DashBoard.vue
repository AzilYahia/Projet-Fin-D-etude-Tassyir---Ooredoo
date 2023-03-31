<script setup>
import SideBar from "@/components/SideBar.vue";
import EmployeesList from "@/components/EmployeesList.vue";
import Chart from "@/components/Chart.vue";

</script>

<template>
<!--  left sidebar-->

  <SideBar/>
<!--  navbar-->
  <body>
  <h1>Good Morning Yahia!</h1>
  <p id="hopeyouarehaving">Hope you are having a good day</p>
<!--  right navbar-->
  <div class="squares">
    <div class="square">
      <h2 class="square-description">412 GB</h2>
      <h5 class="square-description">Left for this month</h5>
      <p class="square-description">17% increase from last month</p>
      </div>
    <div class="square" style="background-color: #FFFF0070">
      <h2 class="square-description">412 GB</h2>
      <h5 class="square-description">Left for this month</h5>
      <p class="square-description">17% increase from last month</p>
    </div>
    <div class="square" style="background-color: #DF032770">
      <h2 class="square-description">412 GB</h2>
      <h5 class="square-description">Left for this month</h5>
      <p class="square-description">17% increase from last month</p>
    </div>
  </div>
  <Chart/>

    <!--  graph-->

  <EmployeesList/>
<!--  employees-->
  </body>
</template>

<style scoped>
.squares{
  display: grid;
  float: right;
  margin-right: 25px;
}
.square{
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 110px;
  background-color: #ECEAFE;
  border-radius: 20px;
  margin-bottom: 20px;
  float: right;
}
#hopeyouarehaving{
  margin-left: 40px;
  margin-bottom: 15px;
}
h4{
  font-size: 15px;
}
*{
  margin: 0;
  padding: 0;
  font-family: Inter, sans-serif;
}
h1{
  margin-left: 40px;
  font-size: 25px;
  margin-top: 10px;
}
h2{
  font-size: 22px;
}
.square .square-description h2{
  margin-top: 0;
}
p{
  color: #828282;
  font-size: 13px;
}
</style>
