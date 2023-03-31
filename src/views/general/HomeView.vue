<script setup>
import carsData from "../../data.json"
import {ref} from "vue";
import router from "@/router";
const cars = ref(carsData);
import {useRouter} from "vue-router";
</script>

<template>
  <main class="container">


    <h1> our cars</h1>
    <div class="cards">
<!--   bch dir hdik tae ki tcklicki ela widget troh l kch plassa, t9dr dirha soit hka:  -->
<!--      -->
<!--      < RouterLink :to="`/car/${car.id}`" v-for="car in cars" class="card" :key="car.id">-->
<!--        <h1>{{car.make}}</h1>-->
<!--        <p> ${{car.price}}</p>-->
<!--      </RouterLink>-->
<!--      soit haka: -->
      <div  v-for="car in cars" class="card" :key="car.id" @click="router.push(`/car/${car.id}`)">
        <h1>{{car.make}}</h1>
        <p> ${{car.price}}</p>
      </div>

    </div>

  </main>
</template>

<style scoped>
.cards {
  display: flex;
  width: 1000px;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: center;
}
.card {
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.207);
  padding: 15px;
  width: 150px;
  margin-right: 15px;
  cursor: pointer;
  margin-bottom: 20px;
}
.links {
  padding: 20px
}
.links a {
  margin: 0 5px
}
</style>
