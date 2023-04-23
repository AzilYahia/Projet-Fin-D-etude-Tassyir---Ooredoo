<template>
    <div class="popup" v-show="!isShown"> <!-- drt !isShown bl3ani, later nsgmha -->
        <div class="popup-content">
        <div class="header">
            <h2>Edit Employee Information</h2>
            <h2>{{isShown}}</h2>
        </div>
        <div class="content">
            <form @submit.prevent="saveEmployee" style="height: 80%; width: 100%;">
                <div class="fields">
                <div class="form-group" >
                    <label for="name">Family Name</label>
                    <input id="name" type="text" v-model="this.employee.nom" required>
                </div>
                <div class="form-group">
                    <label for="other-fields">Nickname</label>
                    <input id="other-fields" v-model="employee.prenom">
                </div>
                    <div class="form-group">
                        <label for="role">Role</label>
                        <input id="role" type="text" v-model="employee.role.nom" required>
                    </div>
                </div>
                <div class="buttons">
                    <button type="button" class="cancel-button" @click="cancelFunction()">Cancel</button>
                    <button type="submit" class="save-button" @click="saveEmployee">Save</button>
                </div>
            </form>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        employee: Object,
        isShown: Boolean,
    },
    methods:{
        cancelFunction() {
            this.$emit("cancelFunction", false);
        },
        saveEmployee() {
            this.$emit("saveEmployee", this.employee);
        },
    },

}
</script>
<style scoped>
input{
    width: 80%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 10px;
    font-size: 16px;
    margin-top: 5px;
}
label{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
    color: dimgrey;
}
.form-group{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
}
.fields{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 80%;
}
.content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
.popup-content {
    background-color: #fff;
    width: 80%;
    max-width: 600px;
    height: clamp(300px, 70%, 700px);
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
align-items: center;
}
.popup{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    justify-content: center;
    align-items: center;
    z-index: 100;
}
.buttons{
    margin-top: 15px;
    display: flex;
    justify-content: space-evenly;
    height: 20%;
    align-items: center;
    width: 100%;
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

.save-button{
    border: 1px solid darkgreen ;
    background-color: darkgreen;
    height: 50px;
    width: 140px;
    cursor: pointer;
    color: white;
    border-radius:14px;
    font-family: inherit;
    font-size: inherit;
    font-weight: bold;
}
.save-button:hover{
    background-color: #6B7280;
    border: 1px solid #6B7280 ;

    transition-duration: 0.3s;
}
</style>
