<script setup>
import carsData from"../data.json"
import {ref} from "vue";
const cars = ref(carsData);

const carcolors = ['red','blue','yellow','green','yellow','purple','blue','darkgrey','grey','purple','yellow','blue','purple',]

</script>
<style scoped>

.whole{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.header{
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.rectangle{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: #F9F9F9;
    width: 100%;
    height: 40px;
    /*margin-left: 40px;*/
    /*margin-top: 15px;*/
    border-radius: 10px;
}
.rectangle-info{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 88%;
}
.image{
    width: 4%; /*5% = 80px*/
    height: 70%; /*30% = 30px*/
    background-color: #DF0327;
    border-radius: 20%;
}
.edit{
    align-self: start;
    padding: 1%;
    color: #DF0327;
    font-weight: bold;
}
.info{
    color: #A0A0A0;
    font-size: 100%;    overflow: hidden;
    word-break: break-word;
}
.name{
    font-size: 120%;    overflow: hidden;
    word-break: break-word;
}
.title{    overflow: hidden;
    word-break: break-word;
    font-size: 160%;
    font-weight: bold;
}
.option{
    color: #DF0327;
    font-size: 120%;
    font-weight: bold;
    cursor: pointer;
}
.list{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow-y: scroll;
    position: relative ;
    height: 350px;
}
.list::-webkit-scrollbar-track {
    background: #ffffff; /* color of the scrollbar track */
}
.list::-webkit-scrollbar-thumb {
    background-color: #DF0327; /* color of the scrollbar thumb */
    border-radius: 5px; /* round the corners of the thumb */
}
.list::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* color of the scrollbar thumb on hover */
}
.list::-webkit-scrollbar {
    width: 5px; /* width of the scrollbar */
    height: 6px;
    position: absolute;
}
</style>
<template>

    <div class="whole">
        <div class="header"><!-- row -->
            <div class="title">Employees</div>
            <div class="option">View All</div>
        </div>
        <div class="list"> <!-- column -->
            <div class="rectangle" v-for="car in cars.slice(0,3)" :key="car.id"><!-- row -->
                <div class="image" :style="{  'background-color': carcolors[car.id]}"></div>
                <div class="rectangle-info"> <!-- column -->
                    <div class="name">
                        {{car.make}}
                        <!--                            {{car.make}}-->
                    </div>
                    <div class="info">
                        $
                        <!--                            {{car.description}}-->
                        {{car.description}}
                    </div>
                </div>
                <div class="edit">Edit</div>
            </div>


        </div>
    </div>


<!--  -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->




<!--  <div class="employees-header">-->
<!--    <h2>Employees</h2>-->
<!--    <h2 id="viewAll">View All</h2>-->
<!--  </div>-->

<!--  <div class="employees">-->
<!--    <div  v-for="car in cars" class="square" :key="car.id">-->
<!--      <div class="square-content">-->
<!--        <div class="picture"-->
<!--             :style="{  'background-color': carcolors[car.id]}">-->
<!--        </div>-->
<!--        <div class="square-infos">-->
<!--          <h4>{{car.make}}</h4>-->
<!--          <p> ${{car.description}}</p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</template>
<!--<style scoped>-->
<!--.employees::-webkit-scrollbar-track {-->
<!--  background: #ffffff; /* color of the scrollbar track */-->
<!--}-->
<!--&lt;!&ndash;&ndash;&gt;-->
<!--.employees::-webkit-scrollbar-thumb {-->
<!--  background-color: #DF0327; /* color of the scrollbar thumb */-->
<!--  border-radius: 5px; /* round the corners of the thumb */-->
<!--}-->
<!--&lt;!&ndash;&ndash;&gt;-->
<!--.employees::-webkit-scrollbar-thumb:hover {-->
<!--  background-color: #555; /* color of the scrollbar thumb on hover */-->
<!--}-->
<!--.employees::-webkit-scrollbar {-->
<!--  width: 5px; /* width of the scrollbar */-->
<!--  height: 6px;-->
<!--  position: absolute;-->
<!--}-->
<!--.employees{-->
<!--  overflow-y: scroll;-->
<!--  position: relative ;-->
<!--  height: 190px;-->
<!--  /*margin: 0 360px 0 0;*/-->
<!--}-->
<!--h4{-->
<!--  font-size: 15px;-->
<!--}-->
<!--.employees-header {-->
<!--  margin-left: 40px;-->
<!--  display: flex;-->
<!--  justify-content: space-between;-->
<!--  width: 650px;-->
<!--  margin-bottom: 10px;-->
<!--}-->
<!--#viewAll{-->
<!--  color: #DF0327;-->
<!--}-->
<!--.square-infos{-->
<!--  display: block;-->
<!--  margin-left: 20px;-->
<!--}-->
<!--.picture{-->
<!--  height:40px ;-->
<!--  width:40px ;-->
<!--  /*background-color: var(&#45;&#45;);*/-->
<!--  border-radius: 10px;-->
<!--}-->
<!--.square-content{-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--  margin-left: 20px;-->
<!--  justify-content: start;-->
<!--}-->
<!--.square{-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--  background-color: #F9F9F9;-->
<!--  width: 650px;-->
<!--  height: 50px;-->
<!--  margin-left: 40px;-->
<!--  margin-top: 15px;-->
<!--  border-radius: 10px;-->
<!--}-->
<!--*{-->
<!--  margin: 0;-->
<!--  padding: 0;-->
<!--  font-family: Inter, sans-serif;-->
<!--}-->
<!--h1{-->
<!--  margin-left: 40px;-->
<!--  font-size: 25px;-->
<!--  margin-top: 10px;-->
<!--}-->
<!--h2{-->
<!--  margin-top: 20px;-->
<!--  font-size: 20px;-->
<!--}-->

<!--p{-->
<!--  color: #828282;-->
<!--  font-size: 13px;-->
<!--}-->
<!--</style>-->