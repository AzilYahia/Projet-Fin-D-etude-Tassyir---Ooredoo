<template>
<div class="container">
 <div v-if="car">
   <h1> The Car</h1>
   <p>Make: {{car.make}}</p>
   <p>Body: {{car.body}}</p>
   <p>Price: {{car.price}}</p>
   <p>Year: {{car.year}}</p>
 </div>
  <div v-else>
    car not found
  </div>

</div>
</template>

<script setup>
import {useRoute} from "vue-router";
import {ref, onBeforeMount} from "vue";
import cars from "../../data.json";

const car = ref(null)
const {id} = useRoute().params

onBeforeMount(() => {
   car.value = cars.find(c => c.id === parseInt(id))
})

</script>

<style scoped>

</style>