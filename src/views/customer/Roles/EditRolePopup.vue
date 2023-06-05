<template>
    <div class="popup" v-show="!editRolePopupIsShown" style="display: flex"> <!-- drt !isShown bl3ani, later nsgmha -->
        <div class="popup-content">
            <div class="header">
                <h2>Edit Role </h2>
            </div>
            <div class="content">
                <form @submit.prevent="saveRole()" style="height: 80%; width: 100%;">
                    <div class="fields">
                        <div class="form-group" >
                            <label for="name">Role Name</label>
                            <input id="name" type="text" v-model="this.role.nom" required>
                        </div>
                      <div class="form-group" >
                        <label for="name">Description</label>
                        <input id="name" type="text" v-model="this.role.description" required>
                      </div>
                        <div class="form-group">
                            <label for="other-fields">Actions</label>
<!--                            <input id="other-fields" v-model="employee.prenom">-->
                            <multiselect style="width: 80%; "
                                    v-model="value"
                                    :options="options"
                                    :multiple="true"
                                    :close-on-select="false"
                                    :clear-on-select="false"
                                    placeholder="Actions"
                                    label="name"
                                    track-by="name"
                                    :searchable="false"
                                    selectLabel="Add Action"
                                    selectedLabel="Added"
                                    deselectLabel="Remove Action"

                            >
                            </multiselect>
                        </div>
                    </div>
                    <div class="buttons">
                      <button type="button" class="cancel-button" @click="cancelFunction()">Cancel</button>
                      <button type="button" class="delete-button" @click="deleteRole()">Delete Role</button>
                        <button type="submit" class="save-button" @click="saveRole()">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script >


import Multiselect from "vue-multiselect";
import axios from '@/utils/axiosCustom';
// import { ref, defineEmits } from "vue";

export default {
    props: {
        role: {
            type: Object,
            required: true
        },
        editRolePopupIsShown: {
            type: Boolean,
            required: true
        }
    },
    methods:{
      async saveRole() {
        try {
          const patchUrl = `https://pfe.ramzi-issiakhem.com/api/v1/company/role/edit/${this.role.id}`;
          const response = await axios.patch(patchUrl, {
            nom: this.role.nom,
            description: this.role.description,
            actions: this.role.actions
          });


          // Handle the response as needed

          // Emit an event to indicate the role has been saved
          // this.$emit('roleSaved');
          this.$emit("cancelFunction", false);
        } catch (error) {
          // Handle any errors
          console.error(error);
        }
      },
      async deleteRole() {
        try {
          const deleteUrl = `https://pfe.ramzi-issiakhem.com/api/v1/company/role/delete/${this.role.id}`;
          const response = await axios.delete(deleteUrl);

          // Handle the response as needed
          console.log(response.data);
          alert(this.role.nom + ' ' + 'successfully removed.');
          this.$emit("cancelFunction", false);
          // Emit an event to indicate the role has been deleted
          // this.$emit("roleDeleted");
        } catch (error) {
          // Handle any errors
          console.error(error);
        }
      },
        cancelFunction() {
            this.$emit("cancelFunction", false);
        },
    },
    data() {
        return {
            value: [ { name: 'Create User'},
                { name: 'Edit Roles'},],
            options: [
                { name: 'Create User'},
                { name: 'Edit Roles'},
                { name: 'View List of Employees'},
                { name: 'Create Contract'},
                {name: 'Add Phone Line'}
            ],

        }

    },
    components: {
        Multiselect
    }

}
// const emit = defineEmits(['saveRole', 'cancelFunction']);
// const props = defineProps({
//     role: {
//         type: Object,
//         required: true
//     },
//     editRolePopupIsShown: {
//         type: Boolean,
//         required: true
//     }
// })
// const role = ref(props.role);
// const editRolePopupIsShown = ref(props.editRolePopupIsShown);
    // function cancelFunctionFunction () {
    //       emit("cancelFunction", false);
    //     }
    // function  saveRole() {
    //         emit("saveRole", this.role);
    // }
    // const value = ref([]);
    // const options = ref([]);
    // options.value = [
    //         { name: 'Create User'},
    //         { name: 'Edit Roles'},
    //         { name: 'View List of Employees'},
    //         { name: 'Create Contract'},
    //         {name: 'Add Phone Line'}
    //                 ]


</script>

<style scoped>
input{
    width: 80%;
    height: 40px;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    color: #adadad;
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
    border: 1px solid grey ;
    background-color: grey;
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
    background-color: lightgray;
    border: 1px solid lightgray ;
    transition-duration: 0.3s;
}

.delete-button{    border: 1px solid #DF0327 ;
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
.delete-button:hover{
  background-color: red;
  border: 1px solid red ;
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
    background-color: green;
    border: 1px solid green ;

    transition-duration: 0.3s;
}
</style>
