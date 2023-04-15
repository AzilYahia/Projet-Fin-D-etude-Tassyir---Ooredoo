<template>
   <div class="popup" v-show="!isShown">
       <div class="user-infos">
       <img decoding="async" src="../assets/picture.jpg" alt="" class="user-image">
       <div class="name-and-infos">
           <h3>{{ employee.nom}} {{employee.prenom}}</h3>
           <div class="infos">
           <p><strong>Position:</strong> {{ employee.role.nom }}</p>
           <p><strong>Email:</strong> {{employee.email}}</p>
           <p><strong>Phone:</strong> {{employee.nationalite}}</p>
       </div>
       </div>
       </div>
       <div class="buttons">
           <button class="cancel-button" @click="cancelFunction()">Cancel</button>
           <button class="logout-button">Edit</button>
           <button class="logout-button">Remove</button>
       </div>
   </div>
</template>
<script>
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
}
.buttons{
    display: flex;
    justify-content: space-between;
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