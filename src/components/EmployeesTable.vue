<template>
    <div class="whole">
        <div class="control-board">
            <div class="search">
                <font-awesome-icon icon="fas fa-magnifying-glass" class="chevron-down" />
                <input type="text" placeholder="Search employees" class="search-field" v-model="search"/>
            </div>
            <DropDownMenu :instance="instance" @selectedRole="role => selectedRole = role" />

            <button class="add">
                <font-awesome-icon icon="fas fa-plus" />
            </button>
        </div>
        <table v-if="loading"  cellspacing="0" >
            <thead>
            <tr>
                <th>Number</th>
                <th>Minutes</th>
                <th>Connection</th>
                <th>Assigned to.</th>
                <th>Status</th>
                <th >Actions</th>
            </tr>
            </thead>
            <tbody  >
            <tr >
                <td  colspan="6"  style="text-align:center;border-bottom: none;">
                    <span class="loading-spinner"> </span>
                </td>
            </tr>
            </tbody>
        </table>
        <table v-else cellspacing="0" >
            <thead>
            <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Mail</th>
                <th>Mobile</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody v-for="oneInstance in filteredInstance">
            <tr>
                <td class="image-name">
                    <div class="image" :style="{ 'background-color': colors[oneInstance.id_user] }"></div>
                    <span class="name">{{ oneInstance.nom}} {{oneInstance.prenom}}</span>
                </td>
                <td>{{ oneInstance.role.nom }}</td>
                <td>{{oneInstance.email}}</td>
                <td>{{ oneInstance.nationalite }}</td>
                <td>
                    <wx :employee="oneInstance"/>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faBars, faChevronDown, faCircleInfo, faMagnifyingGlass, faPencil, faPlus, faTrashCan,} from '@fortawesome/free-solid-svg-icons'
import {computed, ref, watchEffect} from "vue";
import Wx from "@/components/Wx.vue";
import DropDownMenu from "@/components/DropDownMenu.vue";
import axios from 'axios';
import {onMounted} from "vue";
library.add(faChevronDown, faMagnifyingGlass, faPlus,faPencil, faTrashCan, faCircleInfo, faBars, )
const instance = ref([]);
const loading = ref(true);
const userData = ref([]);
const colors = ['red','blue','yellow','green','teal','black','accentred','grey','purple','orange','yellow','blue','purple',]
let showDropdown = ref(false);
const selectedRole = ref('');
const roles = ref([]);
let user = ref([]);
onMounted(async () => {
    try {
        const response = await axios.get('https://pfe.ramzi-issiakhem.com/api/v1/users/3');
        instance.value = response.data.data;
        const usersResponse = await axios.get('https://pfe.ramzi-issiakhem.com/api/v1/company/client/lines/3');
        userData.value = usersResponse.data.data;
        loading.value = false;
        for (let i = 0; i < response.data.data.length; i++) {
            user[i] = {
                nom: instance.value[i].nom,
                prenom: instance.value[i].prenom,
                position: instance.value[i].position,
                email: instance.value[i].email,
                phone: userData.value[i].numeroTelephone,
            };
        }
        const rolesSet = new Set();
        for (let i = 0; i < user.length; i++) {
            rolesSet.add(user[i].position);
        }

        // user.forEach((item) => {
        //     rolesSet.add(item.position);
        // });
        // Assign the list of roles to the roles array
        roles.value = Array.from(rolesSet);


    } catch (error) {
        alert(error);
        loading.value = false; // set loading to false in case of error
    }
});
function handleClickOutside(event) {
    if (
        showDropdown.value &&
        !event.target.closest('.dropdown-menu') &&
        !event.target.closest('.filter')
    ) {
        showDropdown.value = false;
    }
}
watchEffect(() => {
    if (showDropdown.value) {
        document.addEventListener('click', handleClickOutside);
    } else {
        document.removeEventListener('click', handleClickOutside);
    }
});
const search = ref('');
//change the below function to use the user array instead of the instance array
const filteredInstance = computed(() => {
    return instance.value.filter(item => {
        const nameMatch = item.nom.toLowerCase().includes(search.value.toLowerCase())
        const roleMatch = selectedRole.value === '' || item.role.nom === selectedRole.value.toLowerCase()
        return nameMatch && roleMatch
    })
})
// setTimeout(() => {console.log(user);}, 9000)





</script>
<style scoped>

.loading-spinner {
    border: 5px solid #f3f3f3; /* Light grey */
    border-top: 5px solid #DF0327; /* Blue */
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 2s linear infinite;
    display: block;
    margin: auto;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
.dropdown-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
}.dropdown-menu li {
     padding: 5px;
     cursor: pointer;
 }

.dropdown-menu li:hover {
    background-color: #f7f7f7;
}
*{
    font-family:Inter, sans-serif
}
thead tr{
    height: 50px;
    background-color: #E6E6E6;
}
thead{
    border-radius: 25px;
}
tbody tr td{
    border-bottom: 1px solid #CCCCCC;
    padding-inline: 10px;
}
tbody tr{
    height: 70px;
}
table{
    overflow: scroll;
    text-align: center;
    vertical-align: middle;
    min-width:90%
}
.whole{
    align-items: center;
    display: flex;
    flex-direction: column;
}
.image{
    width:40px;
    height: 40px;
    background-color: #DF0327;
    border-radius: 50%;
}
.image-name{
    display: flex;
    align-items: center;
    height: 70px;
}
.control-board {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-bottom: 20px;
    height: 80px;
    border-bottom: 1px solid #CCCCCC;
    align-items: center;
}

.chevron-down{
    color: #C4C4C4;
}
.second-half{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    height: 100%;
}
.search-field{
    border: none;
    outline: none;
    margin-left: 15px;
}
.search{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.add{
    border: none;
    background-color: #DF0327;
    color: white;
    height: 40px;
    width: 40px;
    border-radius: 50px;
    font-size: 20px;
    cursor: pointer;
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.add:hover{
    background-color: #868484;
    transition-duration: 0.2s;
}
tbody tr td{
    text-align: -webkit-center;
    overflow: auto;
    word-break: break-word;
    white-space: nowrap;
    /*text-overflow: ellipsis;*/
}
.name{
    margin-left: 20px;
}

</style>


