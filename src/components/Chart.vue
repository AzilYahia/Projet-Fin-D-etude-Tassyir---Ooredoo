<script setup>
import {defineComponent} from "vue";
import {LineChart} from "vue-chart-3";
import { Chart, registerables, } from "chart.js";
Chart.register(...registerables);

const testData = {
  labels: ['Oct 2022','Nov 2022','Dec 2022','Jan 2023','Feb 2023',],
  datasets: [
    {
      label: 'Cubic interpolation (monotone)',
      borderColor: ['#FB896B'],
      fill: false,
      cubicInterpolationMode: 'monotone',
      tension: 0.4,
      data: [28,20,17,20,25],
      pointBorderWidth:0,

    },{
      label: 'salam ',
      borderColor: ['#DF0327'],
      fill: false,
      cubicInterpolationMode: 'monotone',
      tension: 0.4,
      data: [20,22,28,25,30],
      pointBorderWidth:0.1,
      // backgroundColor: ['#D0327D', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
    },{
      label: 'salam ',
      borderColor: ['#BEB5F4'],
      fill: false,
      cubicInterpolationMode: 'monotone',
      tension: 0.4,
      data: [17,20,26,23,28],
      pointBorderWidth:0,

      // backgroundColor: ['#BEB5F4'],
    },
  ],
};
</script>

<template>
  <LineChart  :chartData="testData" :cssClasses="chart"
              style="width: 670px; height: 300px;
              margin-left: 40px;
"
  />
</template>


<style scoped>

</style>