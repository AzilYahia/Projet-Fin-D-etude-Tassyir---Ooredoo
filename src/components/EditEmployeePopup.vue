<template>
    <div class="popup" v-show="!isShown" style="display: flex"> <!-- drt !isShown bl3ani, later nsgmha -->
        <div class="popup-content" v-if="employee.nom != null">
        <div class="header">
            <h2>Edit Employee Information</h2>
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
        <div class="popup-content" v-else-if="employee.utilisateur.nom != null" >
            <div class="header">
                <h2>Edit Call Line</h2>
            </div>
            <div class="content">
                <form @submit.prevent="saveCallLine" style="height: 80%; width: 100%;">
                    <div class="fields">
                        <div class="form-group" >
                            <label for="name"> Assigned to</label>
                            <input id="name" type="text" v-model="fullName" required disabled>
                        </div>
                        <div class="form-group">
                            <label for="other-fields">Phone Number</label>
                            <input id="other-fields" v-model="employee.numeroTelephone" disabled>
                        </div>
                        <div class="form-group">
                            <label for="role">Status</label>
                            <multiselect style="width: 80%"
                                v-model="value"
                                :options="options"
                                :multiple="false"
                                :close-on-select="false"
                                :show-labels="false"
                                placeholder="Pick a status"
                                label="name"
                                track-by="name"
                                :searchable="false"
                                selectLabel="Change status"
                                selectedLabel="Current status"
                                deselectLabel="Can't remove status"
                                         :allow-empty="false"

                            >

                            </multiselect>
<!--                            <input id="role" type="text" v-model="employee.utilisateur.etat" required>-->
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
import Multiselect from "vue-multiselect";

export default {
    components: {Multiselect},
    props: {
        employee: Object,
        isShown: Boolean,
    },
    methods:{
        cancelFunction() {
            this.$emit("cancelFunction", true);
        },
        saveEmployee() {
            this.$emit("saveEmployee", this.employee);
        },
        saveCallLine() {
            this.$emit("saveCallLine", this.employee);
        },
    },
    computed: {
        fullName: {
            get() {
                return `${this.employee.utilisateur.nom} ${this.employee.utilisateur.prenom}`;
            },
        },
    },
    data() {
        return {
            options: [{ name: 'Actif'}, { name: 'unactif'}],

            value: this.employee.utilisateur?.etat,
        };
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
