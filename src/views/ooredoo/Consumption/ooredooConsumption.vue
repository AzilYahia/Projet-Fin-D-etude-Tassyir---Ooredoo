<template>
  <div style="width: 100%; height: 80%; display: flex;  justify-content: center; align-items: center;">

    <v-sheet
        elevation="12"
        max-width="450"
        rounded="lg"
        width="80%"
        height="80%"
        class="pa-4 text-center "

    >

      <v-card title="Your Consumption"  height="100%">
        <h3>Yesterday</h3>

        <div class="setting-filler" style="height: 35%">
          <div class="settings" style="height: 100%">
            <div class="settings-row" style="height: 100%">
              <div class="setting-name">
                Credit :
              </div>
              <div class="setting-description" v-if="instanceOfYesterday?.credit==null" style="color: red;font-weight: bold">
                No phone line assigned.
              </div>
              <div class="setting-description" v-else>
                {{instanceOfYesterday?.credit}}
              </div>
            </div>
            <div class="settings-row" style="height: 20%">
              <div class="setting-name">
                Internet :
              </div>
              <div class="setting-description" v-if="instanceOfYesterday?.credit==null" style="color: red;font-weight: bold">
                No phone line assigned.
              </div>
              <div class="setting-description" v-else>
              </div>
            </div>
          </div>
        </div>

<br>
        <h3>This month</h3>
        <div class="setting-filler" style="height: 20%">
          <div class="settings" style="height: 100%">
            <div class="settings-row" style="height: 100%">
              <div class="setting-name">
                Credit :
              </div>
              <div class="setting-description" v-if="instanceOfYesterday?.credit==null" style="color: red;font-weight: bold">
                No phone line assigned.
              </div>
              <div class="setting-description" v-else>
              </div>
            </div>
            <div class="settings-row" style="height: 20%">
              <div class="setting-name">
                Internet :
              </div>
              <div class="setting-description" v-if="instanceOfYesterday?.credit==null" style="color: red;font-weight: bold">
                No phone line assigned.
              </div>
              <div class="setting-description" v-else>
              </div>
            </div>
          </div>
        </div>


        <!--        <v-card-actions >-->
        <!--         <div style="display: flex; width: 100%; justify-content: center; position:absolute; bottom:20px">-->
        <!--          <v-btn  variant="tonal" color="red">Click me</v-btn>-->
        <!--          <v-btn variant="outlined" color="success">Click me</v-btn>-->
        <!--         </div>-->
        <!--        </v-card-actions>-->
      </v-card>
    </v-sheet>
    <div style="width: 50px"></div>
    <v-sheet
        elevation="12"
        max-width="450"
        rounded="lg"
        width="80%"
        height="80%"
        class="pa-4 text-center "

    >

      <v-card title="Company Consumption"  height="100%">

        <div class="setting-filler"  >
          <div class="settings">
            <div class="settings-row">
              <div class="setting-name" style="width: 50%">
                Date Debut :
              </div>
              <div class="setting-description">
                {{instance?.date_debut}}
              </div>
            </div>
            <div class="settings-row">
              <div class="setting-name">
                Date Fin :
              </div>
              <div class="setting-description">
                {{instance?.date_fin}}
              </div>
            </div>
            <div class="settings-row">
              <div class="setting-name">
                Credit :
              </div>
              <div class="setting-description">
                {{instance?.credit}}
              </div>
            </div>
            <div class="settings-row">
              <div class="setting-name">
                Internet :
              </div>
              <div class="setting-description">
                {{instance?.internet}}
              </div>
            </div>
          </div>
        </div>

        <!--        <v-card-actions >-->
        <!--          <div style="display: flex; width: 100%; justify-content: center; position:absolute; bottom:20px">            <v-btn  variant="tonal" color="red">Click me</v-btn>-->
        <!--            <v-btn variant="outlined" color="success">Click me</v-btn>-->
        <!--          </div>-->
        <!--        </v-card-actions>-->
      </v-card>
    </v-sheet>

  </div>
</template>




<script setup>
import {onMounted, ref} from "vue";
import axios from '@/utils/axiosCustom';
import {localStorageUser} from "@/utils/localStorageData";

const loading = ref(true); // add a loading state
const instance = ref([]);
const instanceOfClientConsumption = ref([]);
const instanceOfYesterday = ref([]);
const dateDebut = ref(null);
const dateFin = ref(null);

//get client consumption
onMounted(async () => {
  try {
    const companyConsumption = await axios.get(`https://pfe.ramzi-issiakhem.com/api/v1/company/consumption/${localStorageUser.role.id_entreprise}?begin=&end=`);
    instance.value = companyConsumption.data.data;
    const clientPhoneLineId = await axios.get(`https://pfe.ramzi-issiakhem.com/api/v1/company/user/line/${localStorageUser.id_ooredoo_user}`);
    if (clientPhoneLineId) {

      const clientConsumption = await axios.get(` https://pfe.ramzi-issiakhem.com/api/v1/ooredoo/user/consumption/${clientPhoneLineId}?begin=2021-01-01`);
      instanceOfClientConsumption.value = clientConsumption.data.data;
      // ^ : {
      // "data": {
      //   "credit": 1708,
      //       "internet": 1875
      // },
      // "status": 200
      // }

      const clientYesterday = await axios.get(`https://pfe.ramzi-issiakhem.com/api/v1/ooredoo/user/consumption/yesterday/${localStorageUser.role.id_entreprise}`);
      instanceOfYesterday.value = clientYesterday.data.data;
      // ^ {
      // "data": {
      //   "credit": 823,
      //       "internet": 54
      // },
      // "status": 200
      // }


      dateDebut.value = parseDate(instance.value.date_debut)
      dateFin.value = parseDate(instance.value.date_fin)
      loading.value = false;

    }
    else {
      alert('client phone line id is null')
    }
  }
  catch
      (error)
  {
    console.log(error);
    loading.value = false;
  }
});

function parseDate(parsingDate){
  const date = new Date(parsingDate);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  // formattedDate.value = `${year}-${month}-${day}`;
  // return formattedDate.value
  return `${year}-${month}-${day}`;
}

</script>

<style scoped>

.settings{
  display: flex;
  flex-direction:column;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  height: 100%;
}
.settings-row .setting-name .chevron-down{
//margin-right: 10px;
  font-size: 20px;
}
.setting-description{
  /*margin-left: 80px;*/
  width: 100%;
  display: flex;
}
.setting-name{
  width: 40%;
  font-weight: bold;
  display: flex;
  align-items: center;

}

.settings-row{
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color:black;
  height: 40%;
  width: 80%;
  align-items: center;


}
.setting-filler{
  width: 100%;
  height: 60%;
}
</style>