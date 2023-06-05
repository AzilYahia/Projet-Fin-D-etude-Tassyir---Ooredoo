<template>
  <div class="popup" v-show="!isShown">
    <div class="user-infos" >
      <div class="name-and-infos">
        <h3 >{{ instance?.nom}} </h3>
        <div class="infos">
          <p><strong>Adresse:</strong> {{ instance?.adresse }}</p>
          <p><strong>Phone:</strong> {{instance?.telephone}}</p>
          <p><strong>Created At:</strong> {{createdAt}}</p>
        </div>
      </div>

    </div>
    <div class="buttons">
      <button class="cancel-button" @click="cancelFunction()">Cancel</button>

    </div>
  </div>
</template>
<script>
import {onMounted, ref} from "vue";
import axios from '@/utils/axiosCustom';

export default {
  props: {
    employee: Object,
    isShown: Boolean,
  },
  methods: {
    cancelFunction() {
      this.$emit("cancelFunction", true);
    },
  },
  setup(props){
    const instance = ref([]);
    const loading = ref(true);
    const createdAt = ref(null);

    onMounted(async () => {
      try {
        const response = await axios.get(`https://pfe.ramzi-issiakhem.com/api/v1/company/client/${this.employee.entreprise_id}`);
        instance.value = response.data.data;
        // {
        //   "data": {
        //   "id_entreprise_client": 2,
        //       "id_entreprise": 3,
        //       "nom": "Nom Entreprise1",
        //       "adresse": "Cheraga,Alger",
        //       "telephone": "0558457292",
        //       "numeroRIB": "34500014702151",
        //       "numeroAI": "05B22121221",
        //       "numeroRC": "34500014702151",
        //       "numeroNIF": "05B22121221",
        //       "etat": "Actif",
        //       "createdAt": "2023-03-25T17:01:19.000000Z"
        // },
        //   "status": 200
        // }

        createdAt.value = parseDate(instance.value?.created_at)

        loading.value = false;




      } catch (error) {
        alert(error);
        loading.value = false; // set loading to false in case of error
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
    return {
      instance,
      loading,
      createdAt,
      cancelFunction() {
        this.$emit("cancelFunction", true);
      },
    };
  }
};



</script>

<style scoped>
* {
  font-family: Inter, sans-serif
}

.infos{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: clamp(80px, 60%, 200px);
}
.user-infos{
  display: flex;
  flex-direction: column;
  height: clamp(100px, 90%, 260px);
  justify-content: space-between;
}
.popup{
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: clamp(120px,60%, 600px);
  height: clamp(390px,50%, 450px);
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
.name-and-infos{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: clamp(100px, 80%, 200px);
}
.user-image {
  width: clamp(50px, 80%, 100px);;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 20px;
}
.buttons{
  display: flex;
  justify-content: center;
  align-items: center;
  width: clamp(100px, 80%, 600px);
  height: clamp(40px, 20%, 200px);
}


.cancel-button{
  border: 1px solid #DF0327 ;
  background-color: #DF0327;
  height: 50px;
  width: 140px;
  cursor: pointer;
  color: white;
  border-radius:14px;
  font-family: inherit;
  font-size: inherit;
  font-weight: bold;
}
.cancel-button:hover{
  background-color: #6B7280;
  border: 1px solid #6B7280 ;

  transition-duration: 0.3s;
}

.logout-button{
  border: 2px solid #DF0327 ;
  background-color: white;
  height: 50px;
  width: 140px;
  cursor: pointer;
  color: #DF0327;
  border-radius:14px;
  font-family: inherit;
  font-size: inherit;
  font-weight: bold;

}
.logout-button:hover{
  background-color: #6B7280;
  border: 1px solid #6B7280 ;
  color: white;
  transition-duration: 0.3s;
}



</style>