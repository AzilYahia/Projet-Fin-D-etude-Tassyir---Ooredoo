<script setup>
import {LineChart} from "vue-chart-3";
import { Chart, registerables, } from "chart.js";
import {ref} from "vue";
import axios from 'axios';
import {onMounted} from "vue";

const instance = ref([]);
const loading = ref(true);
Chart.register(...registerables);

onMounted(async () => {
    try {
        const response = await axios.get('https://pfe.ramzi-issiakhem.com/api/v1/users/3');
        instance.value = response.data.data;
        loading.value = false;
    } catch (error) {
        console.log(error);
        loading.value = false; // set loading to false in case of error
    }
});

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
              style="    width: clamp(660px, 100%, 100%);
; height: clamp(300px, 100%, 100%);
"
  />
</template>
