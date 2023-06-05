<script >
import { LineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import { ref } from "vue";
import axios from '@/utils/axiosCustom';
import { onMounted } from "vue";
import {clientCompanyId, localStorageUser} from "@/utils/localStorageData";
Chart.register(...registerables);
export default {
  components: { LineChart },
  setup() {
    const instance = ref([]);
    const loading = ref(true);
    const testData = ref({
      labels: [],
      datasets: [
        {
          label: "Internet",
          borderColor: ["#FB896B"],
          fill: false,
          cubicInterpolationMode: "monotone",
          tension: 0.4,
          data: [],
          pointBorderWidth: 0,
        },
        {
          label: "Credit",
          borderColor: ["#5DA5DA"],
          fill: false,
          cubicInterpolationMode: "monotone",
          tension: 0.4,
          data: [],
          pointBorderWidth: 0,
        },
      ],
    });

    onMounted(async () => {
      try {

        const currentDate = new Date();
        const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).toISOString().split('T')[0];
        const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).toISOString().split('T')[0];

        console.log(localStorageUser.role.id_entreprise)
        const response = await axios.get(`https://pfe.ramzi-issiakhem.com/api/v1/ooredoo/analytics/consumption/1?begin=2023-05-01`);



        instance.value = response.data.data;
        const labels = Object.keys(instance.value);
        const datasetDataInternet = labels.map(
            (label) => instance.value[label].internet
        );
        const datasetDataCredit = labels.map(
            (label) => instance.value[label].credit
        );
        testData.value.labels = labels;
        testData.value.datasets[0].data = datasetDataInternet;
        testData.value.datasets[1].data = datasetDataCredit;
        loading.value = false;
      } catch (error) {
        console.log(error);
        loading.value = false; // set loading to false in case of error
      }
    });

    return { testData, loading };
  },
};
</script>

<template>
  <LineChart
      :chartData="testData"
      :cssClasses="chart"
      style="width: clamp(660px, 100%, 100%); height: clamp(300px, 100%, 100%);"
  />
</template>
