<!--<template>-->

<!--    <div class="wholedisplay">-->
<!--        &lt;!&ndash;      <div class="mix">&ndash;&gt;-->
<!--        <div class="role-and-circles">-->
<!--            <div class="horizontal">-->
<!--                &lt;!&ndash;button tae list a gauche&ndash;&gt;-->
<!--                <button class="chevron">-->
<!--                    <font-awesome-icon icon="fas fa-chevron-left" class="icon"/></button>-->
<!--                &lt;!&ndash;  role&ndash;&gt;-->
<!--                <div class="role-list" >-->
<!--                    &lt;!&ndash;        id kan loading&ndash;&gt;-->
<!--                    <div v-if="loading" v-for="two in [1,2]" class="role" style="opacity: 40%;">-->
<!--                        <div class="role-header">-->
<!--                            <div class="hea">-->
<!--                                <span id="edit">Edit</span>-->
<!--                                <span class="role-name">Role </span>-->
<!--                            </div>-->
<!--                            <div class="actions-square">-->
<!--                                <div class="actions-content"> Actions</div>-->
<!--                                <font-awesome-icon icon="fas fa-chevron-down" class="chevron-down"/>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="emplo">-->
<!--                            <div class="whole">-->
<!--                                <div class="header">&lt;!&ndash; row &ndash;&gt;-->
<!--                                    <div class="title">Employees</div>-->
<!--                                    <div class="option" >View All</div>-->
<!--                                </div>-->
<!--                                <div class="list"> &lt;!&ndash; column &ndash;&gt;-->
<!--                                    <div class="rectangle" v-for="one in [1,2,3]" style="background-color: #F9F9F9; opacity: 40%">&lt;!&ndash; row &ndash;&gt;-->
<!--                                        <div class="image"-->
<!--                                             :style="{  'background-color': carcolors[one] }" style="opacity: 20%"></div>-->
<!--                                        <div class="rectangle-info"> &lt;!&ndash; column &ndash;&gt;-->
<!--                                            <div class="name" style="color: #A0A0A0">-->
<!--                                                Name-->
<!--                                            </div>-->
<!--                                            <div class="info">-->
<!--                                                Role-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div class="edit" >Edit</div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->





<!--                    &lt;!&ndash;ida makach loading, sma cbn&ndash;&gt;-->
<!--                    <div class="role" v-else v-for="role in roless" :key="role.id_user">-->
<!--                        <div class="role-header">-->
<!--                            <div class="hea">-->
<!--                                <span id="edit" @click="editRole">Edit</span>-->
<!--                                <EditRolePopup :role="role" :editRolePopupIsShown="!editRolePopupIsShown"  @cancelFunction="()=>{editRolePopupIsShown = !editRolePopupIsShown}" />-->

<!--                                <span v-if="role.nom" class="role-name">{{ role.nom }}</span>-->
<!--                                <span v-else class="role-name" style="color: #747171">Role </span>-->
<!--                            </div>-->
<!--                            &lt;!&ndash;      <div class="actions-square">&ndash;&gt;-->
<!--                            <select class="actions-content-active" style="text-align: center;" >-->
<!--                                <option value="" selected disabled hidden> Actions</option>-->

<!--                                <option v-for="rolet in roless" :value="role" disabled>{{ rolet.nom }}</option>-->

<!--                            </select>-->


<!--                            &lt;!&ndash;      </div>&ndash;&gt;-->
<!--                        </div>-->
<!--                        <div class="emplo">-->
<!--                            <div class="whole">-->
<!--                                <div class="header">&lt;!&ndash; row &ndash;&gt;-->
<!--                                    <div class="title">Employees</div>-->
<!--                                    <div class="option"  @click="ViewAll">View All</div>-->
<!--                                </div>-->
<!--                                <div class="list"> &lt;!&ndash; column &ndash;&gt;-->
<!--                                    &lt;!&ndash;                    ida kan laoding:&ndash;&gt;-->
<!--                                    <div class="rectangle" v-if="loading" v-for="one in [1,2,3]" style="background-color: #F9F9F9; opacity: 40%">&lt;!&ndash; row &ndash;&gt;-->
<!--                                        <div class="image"-->
<!--                                             :style="{  'background-color': carcolors[one] }" style="opacity: 20%"></div>-->
<!--                                        <div class="rectangle-info"> &lt;!&ndash; column &ndash;&gt;-->
<!--                                            <div class="name" style="color: #A0A0A0">-->
<!--                                                Name-->
<!--                                            </div>-->
<!--                                            <div class="info">-->
<!--                                                Role-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div class="edit" >Edit</div>-->
<!--                                    </div>-->

<!--                                    &lt;!&ndash;ida makach loading&ndash;&gt;-->
<!--                                    <div class="rectangle" v-else v-for="car in employees" :key="car.id_user">&lt;!&ndash; row &ndash;&gt;-->
<!--                                        <div class="image"-->
<!--                                             :style="{  'background-color': carcolors[car.id_user]}"></div>-->
<!--                                        <div class="rectangle-info"> &lt;!&ndash; column &ndash;&gt;-->
<!--                                            <div class="name" v-if="car.nom">-->
<!--                                                {{ car.nom}}-->
<!--                                            </div>-->
<!--                                            <div class="name" v-else>-->
<!--                                                Name-->
<!--                                            </div>-->
<!--                                            <div class="info" v-if="car.role.nom">-->
<!--                                                {{ car.role.nom }}-->
<!--                                            </div>-->
<!--                                            <div class="info" v-else>-->
<!--                                                Role-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div class="edit" @click="editEmployee">Edit</div>-->
<!--                                        <EditEmployeePopup :employee="car" :isShown="!isShown"  @cancelFunction="()=>{isShown = !isShown}" />-->

<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                &lt;!&ndash;  button tae list a droite&ndash;&gt;-->
<!--                <button class="chevron">-->
<!--                    <font-awesome-icon icon="fas fa-chevron-right" class="icon"/></button>-->
<!--            </div>-->
<!--            <div class="index">-->
<!--                <div class="circle"></div>-->
<!--                <div class="circle"></div>-->
<!--                <div class="circle"></div>-->
<!--            </div>-->
<!--        </div>-->

<!--        &lt;!&ndash;  index tae ama page rak&ndash;&gt;-->
<!--        &lt;!&ndash;button tae create role yji lt7t flwst&ndash;&gt;-->
<!--        <div class="button">-->
<!--            <button class="loginbutton" @click="createRole">-->
<!--                Create role-->
<!--            </button>-->
<!--        </div>-->




<!--&lt;!&ndash;        <swiper :modules="modules" :space-between="20" :loop="true" :pagination="{clickable:true, dynamicBullets: true,}" :autoplay="{delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: true}" :slides-per-view="2"&ndash;&gt;-->
<!--&lt;!&ndash;                :centered-slides="true" :fade="true"&ndash;&gt;-->
<!--&lt;!&ndash;        >&ndash;&gt;-->
<!--&lt;!&ndash;            <swiper-slide v-for="text in swiperTextBase" :key="text.description">&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="swiper-text">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="swiper-text-content">&ndash;&gt;-->
<!--&lt;!&ndash;                        <div class="swiper-text-title">&ndash;&gt;-->
<!--&lt;!&ndash;                            {{text.title}}&ndash;&gt;-->
<!--&lt;!&ndash;                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                        <div class="swiper-text-description">&ndash;&gt;-->
<!--&lt;!&ndash;                            {{text.description}}&ndash;&gt;-->
<!--&lt;!&ndash;                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;            </swiper-slide>&ndash;&gt;-->

<!--&lt;!&ndash;        </swiper>&ndash;&gt;-->
<!--        &lt;!&ndash;      </div>&ndash;&gt;-->
<!--    </div>-->
<!--    <div ref="popup" style="display: none;">-->
<!--        <div class="popup" style="display: flex; flex-direction: column">-->
<!--            <div class="popup-content">-->
<!--                <div class="header">-->
<!--                    <h2>Create Role</h2>-->
<!--                </div>-->
<!--                <div class="content">-->
<!--                    <form @submit.prevent="saveEmployee" style="height: 80%; width: 100%;">-->
<!--                        <div class="fields">-->
<!--                            <div class="form-group" >-->
<!--                                <label for="name">Role Name {{name}}</label>-->
<!--                                <input id="name" type="text" v-model="name"  required>-->
<!--                                &lt;!&ndash;                                                         ^          &ndash;&gt;-->
<!--                                &lt;!&ndash;            v-model="oneInstance.nom"   &ndash;&gt;-->
<!--                            </div>-->
<!--                            <div class="form-group">-->
<!--                                <label for="other-fields">Description {{description}}</label>-->
<!--                                <input id="other-fields"     v-model="description"   >-->
<!--                                &lt;!&ndash;                                                         ^          &ndash;&gt;-->
<!--                                &lt;!&ndash;            v-model="oneInstance.prenom"   &ndash;&gt;-->
<!--                            </div>-->
<!--                            <div class="form-group" style="width: 80%">-->

<!--                                <label >Actions</label>-->
<!--                                                                <multiselect-->
<!--                                                                    :multiple="true"-->
<!--                                                                    :close-on-select="false"-->
<!--                                                                    :clear-on-select="false"-->
<!--                                                                    :preserve-search="true"-->
<!--                                                                    placeholder="Pick some"-->
<!--                                                                    label="name"-->
<!--                                                                    track-by="name"-->
<!--                                                                    :preselect-first="true"-->
<!--                                                                />-->

                                <!--                                <label class="typo__label">Simple select / dropdown</label>-->
<!--                                <multiselect-->
<!--                                        v-model="value"-->
<!--                                        :options="options"-->
<!--                                        :multiple="true"-->
<!--                                        :close-on-select="false"-->
<!--                                        :clear-on-select="false"-->
<!--                                        placeholder="Actions"-->
<!--                                        label="name"-->
<!--                                        track-by="name"-->
<!--                                        :searchable="false"-->
<!--                                        selectLabel="Add Action"-->
<!--                                        selectedLabel="Added"-->
<!--                                        deselectLabel="Remove Action"-->
<!--                                >-->

<!--                                </multiselect>-->

<!--                                &lt;!&ndash;                                                         ^          &ndash;&gt;-->
<!--                                &lt;!&ndash;            v-model="oneInstance.role.nom"   &ndash;&gt;-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="buttons">-->
<!--&lt;!&ndash;&ndash;&gt;-->
<!--                            <button type="button" class="cancel-button" @click="hideCreateRole()">Cancel</button>-->
<!--                            <button type="submit" class="save-button" @click="saveEmployee">Save</button>-->
<!--                        </div>-->
<!--                    </form>-->
<!--&lt;!&ndash;&ndash;&gt;-->
<!--&lt;!&ndash;&ndash;&gt;-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->


<!--    <div ref="viewAllPopUp" style="display: none;">-->
<!--        <div class="popup" style="display: flex; flex-direction: column;  position: fixed;-->
<!--    top: 0;-->
<!--    left: 0;-->
<!--    width: 100%;-->
<!--    height: 100%;-->
<!--    background-color: rgba(0,0,0,0.7);-->
<!--    z-index: 999;-->
<!--    justify-content: center;-->
<!--    align-items: center;">-->
<!--            <div class="popup-content" style=" background-color: #fff;-->
<!--    width: 80%;-->
<!--    max-width: 600px;-->
<!--    height: clamp(300px, 70%, 700px);-->
<!--    padding: 20px;-->
<!--    border-radius: 10px;">-->
<!--                <div class="list-of-employees-popup" style="display: flex; flex-direction: column; height: clamp(200px,80%, 500px); width: 100%">-->
<!--                    <div class="title" style="overflow: hidden;-->
<!--    word-break: break-word;-->
<!--    font-size: 22px;-->
<!--    font-weight: bold;">Employees</div>-->
<!--                    <div class="list" style=""> &lt;!&ndash; column &ndash;&gt;-->
<!--                        <div class="rectangle"  v-for="car in employees" :key="car.id_user">&lt;!&ndash; row &ndash;&gt;-->
<!--                            <div class="image"-->
<!--                                 :style="{  'background-color': carcolors[car.id_user]}"></div>-->
<!--                            <div class="rectangle-info"> &lt;!&ndash; column &ndash;&gt;-->
<!--                                <div class="name" v-if="car.nom">-->
<!--                                    {{ car.nom}}-->
<!--                                </div>-->
<!--                                <div class="name" v-else>-->
<!--                                    Name-->
<!--                                </div>-->
<!--                                <div class="info" v-if="car.role.nom">-->
<!--                                    {{ car.role.nom }}-->
<!--                                </div>-->
<!--                                <div class="info" v-else>-->
<!--                                    Role-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="edit" @click="editEmployeeinPopUp">Edit</div>-->
<!--                        </div>-->

<!--                    </div>-->
<!--                </div>-->

<!--                <div class="buttons">-->
<!--                    <button class="cancel-button" @click="hideViewAllPopup()" >-->
<!--                        Cancel</button>-->
<!--                </div>-->
<!--            </div>-->

<!--        </div>-->
<!--    </div>-->

<!--</template>-->

<!--<script setup>-->
<!--import { library } from '@fortawesome/fontawesome-svg-core'-->
<!--import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'-->
<!--import { faUser,faHeadset,faLocationDot, faGlobe, faEye, faEyeSlash, faChevronLeft, faChevronRight, faPlus, faChevronDown, } from '@fortawesome/free-solid-svg-icons'-->
<!--import axios from '@/utils/axiosCustom';-->
<!--import {onMounted, ref, watchEffect} from "vue";-->
<!--import Multiselect from 'vue-multiselect'-->
<!--import EditEmployeePopup from "@/components/EditEmployeePopup.vue";-->
<!--import EditRolePopup from "@/components/EditRolePopup.vue";-->
<!--library.add(faUser, faHeadset, faLocationDot,faGlobe,faChevronLeft,faChevronRight,faPlus,faChevronDown,)-->
<!--// const modules = [Autoplay, Pagination];-->
<!--const carcolors = ['red','blue','yellow','green','yellow','purple','blue','darkgrey','grey','purple','yellow','blue','purple',]-->
<!--const instance = ref([]);-->
<!--const employees = ref([]);-->
<!--const roless = ref([]);-->
<!--const loading = ref(true); // add a loading state-->
<!--const popup = ref(null);-->
<!--const isShown = ref(false);-->
<!--const editRolePopupIsShown = ref(false);-->
<!--function editEmployeeinPopUp() {-->
<!--    hideViewAllPopup();-->
<!--    isShown.value = true;-->
<!--}-->
<!--function editEmployee() {-->
<!--    isShown.value = true;-->
<!--}-->

<!--function editRole() {-->
<!--    editRolePopupIsShown.value = true;-->
<!--}-->

<!--onMounted(async () => {-->
<!--    try {-->
<!--        const response = await axios.get('https://pfe.ramzi-issiakhem.com/api/v1/user/role/1');-->
<!--        instance.value = response.data.data;-->
<!--        const responseemployees = await axios.get('https://pfe.ramzi-issiakhem.com/api/v1/users/3');-->
<!--        employees.value = responseemployees.data.data;-->
<!--        const rolesResponse = await axios.get('https://pfe.ramzi-issiakhem.com/api/v1/company/roles/4');-->
<!--        roless.value = rolesResponse.data.data;-->
<!--        loading.value = false;-->
<!--    } catch (error) {-->
<!--        console.log(error);-->
<!--        loading.value = false;-->
<!--    }-->
<!--});-->
<!--function createRole() {-->
<!--    if (popup.value.style.display === 'none') {-->
<!--        popup.value.style.display = 'block';-->
<!--        popupvaluestyledisplay = popup.value.style.display;-->
<!--    } else {-->
<!--        popup.value.style.display = 'none';-->
<!--        popupvaluestyledisplay = popup.value.style.display;-->

<!--    }-->
<!--}-->
<!--function hideCreateRole() {-->
<!--    if (popup.value.style.display === 'block') {-->
<!--        popup.value.style.display = 'none';-->
<!--    } else {-->
<!--        popup.value.style.display = 'block';-->
<!--    }-->
<!--}-->
<!--const value = ref([]);-->
<!--const options = ref([]);-->
<!--options.value = [-->
<!--    { name: 'Create User'},-->
<!--    { name: 'Edit Roles'},-->
<!--    { name: 'View List of Employees'},-->
<!--    { name: 'Create Contract'},-->
<!--    {name: 'Add Phone Line'}-->
<!--]-->
<!--let popupvaluestyledisplay;-->
<!--//i want to collapse the createrole when i click outside of it but i don't know how to do it-->

<!--let name = ref('');-->
<!--let description= ref('');-->

<!--function saveEmployee() {-->
<!--     // name.value = document.getElementById("name").value;-->
<!--     // description.value = document.getElementById("other-fields").value;-->
<!--    let  actions = value.value;-->
<!--    console.log(name,description,actions);-->
<!--    // axios.post('https://pfe.ramzi-issiakhem.com/api/v1/user/role/1', {-->
<!--    //     name: name,-->
<!--    //     description: description,-->
<!--    //     actions: actions,-->
<!--    // })-->
<!--    //     .then(function (response) {-->
<!--    //         console.log(response);-->
<!--    //     })-->
<!--    //     .catch(function (error) {-->
<!--    //         console.log(error);-->
<!--    //     });-->
<!--}-->

<!--const viewAllPopUp = ref(null);-->
<!--function ViewAll() {-->
<!--    if (viewAllPopUp.value.style.display === 'none') {-->
<!--        viewAllPopUp.value.style.display = 'block';-->
<!--    } else {-->
<!--        viewAllPopUp.value.style.display = 'none';-->
<!--    }-->
<!--}-->
<!--function hideViewAllPopup() {-->
<!--    if (viewAllPopUp.value.style.display === 'block') {-->
<!--        viewAllPopUp.value.style.display = 'none';-->
<!--    } else {-->
<!--        viewAllPopUp.value.style.display = 'block';-->
<!--    }-->
<!--}-->

<!--</script>-->
<!--<style src="../node_modules/vue-multiselect/dist/vue3-multiselect.css"></style>-->
<template>

  <div class="thewhole">
<!--    if loading-->
    <vueper-slides v-if="loading"
                   :arrows-outside="false"
                   :breakpoints="breakpoints"
                   :bullets-outside="true"
                   :dragging-distance="200"
                   :gap="0"
                   :infinite="true"
                   :slide-ratio="1 / 2.8"
                   :touchable="false"
                   :visible-slides="2"
                   class="no-shadow"
                   slide-multiple
                   transition-speed="450"
                   style="opacity: 0.3"
    >
      <template #arrow-left>
        <button class="chevron">
          <font-awesome-icon class="icon" icon="fas fa-chevron-left"/>
        </button>
      </template>
      <template #arrow-right>
        <button class="chevron">
          <font-awesome-icon class="icon" icon="fas fa-chevron-right"/>
        </button>
      </template>
      <template #bullet="{ active, slideIndex, index }">
        <i v-if="active">
          <font-awesome-icon class="circle-active" icon="fa-solid fa-circle" style="color: #DF0327"/>
        </i>

        <i v-else>
          <font-awesome-icon class="circle" icon="fa-regular fa-circle" style="color: #DF0327"/>

        </i>
      </template>

      <vueper-slide
          v-for="(role,index) in [1,2,3,4,5,6]"
          :key="index"
      >
        <template #content>
          <div class="vueperslide__content-wrapper" style="flex-direction: row;height: 100%; ">

            <div class="role">
              <div class="role-header">
                <div class="hea">
                  <span id="edit">Edit</span>
                  <span class="role-name" style="color: #747171">Role </span>
                </div>

                <select class="actions-content-active" style="text-align: center;" >
                  <option value="" selected disabled hidden> Actions</option>
                </select>


              </div>
              <div class="emplo">
                <div class="whole">
                  <div class="header">
                    <div class="title">Employees</div>
                    <div class="option"  >View All</div>
                  </div>
                  <div class="list">
                    <div class="rectangle" v-for="(car,jindex) in [1,2]" :key="jindex">

                      <v-avatar :style="{  'background-color': carcolors[jindex+2*index]}" size="45"></v-avatar>
                      <div class="rectangle-info"> <!-- column -->
                        <div class="name">
                          Name
                        </div>
                        <div class="info">
                          Role
                        </div>
                      </div>
                      <div class="edit" >Edit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </template>
      </vueper-slide>

    </vueper-slides>
<!--else not loading-->
    <vueper-slides v-else
    :arrows-outside="false"
    :breakpoints="breakpoints"
    :bullets-outside="true"
    :dragging-distance="200"
    :gap="0"
    :infinite="true"
    :slide-ratio="1 / 2.8"
    :touchable="false"
    :visible-slides="2"
    class="no-shadow"
    slide-multiple
    transition-speed="450"
>
<template #arrow-left>
  <button class="chevron">
    <font-awesome-icon class="icon" icon="fas fa-chevron-left"/>
  </button>
</template>
<template #arrow-right>
  <button class="chevron">
    <font-awesome-icon class="icon" icon="fas fa-chevron-right"/>
  </button>
</template>
<template #bullet="{ active, slideIndex, index }">
  <i v-if="active">
    <font-awesome-icon class="circle-active" icon="fa-solid fa-circle" style="color: #DF0327"/>
  </i>

  <i v-else>
    <font-awesome-icon class="circle" icon="fa-regular fa-circle" style="color: #DF0327"/>

  </i>
</template>

<vueper-slide
    v-for="role in roless"
    :key="role.id"
>


  <template #content>
    <div class="vueperslide__content-wrapper" style="flex-direction: row;height: 100%;">

      <div class="role" >
        <div class="role-header">
          <div class="hea">
            <span id="edit" @click="editRole">Edit</span>
            <EditRolePopup :role="role" :editRolePopupIsShown="!editRolePopupIsShown"  @cancelFunction="()=>{editRolePopupIsShown = !editRolePopupIsShown}" />
            <span v-if="role.nom" class="role-name">{{ role.nom }}</span>
            <span v-else class="role-name" style="color: #747171">Role </span>
          </div>

          <select class="actions-content-active" style="text-align: center;" >
            <option value="" selected disabled hidden> Actions</option>

            <option v-for="rolet in roless" :value="role" disabled>{{ rolet.nom }}</option>
          </select>


        </div>


        <div class="emplo">
          <div class="whole">
            <div class="header">
              <div class="title">Employees</div>
              <div class="option" @click="ViewAll" >View All</div>
            </div>
            <div class="list">
              <div class="rectangle" v-for="car in employees" :key="car.id_user" >
                <!--                                        <div class="image"-->

                <!--                                        ></div>-->

                <v-avatar v-if="car.role.nom === role.nom" :style="{  'background-color': carcolors[car.id_user]}" size="45">
                    <span class="text-h6" style="color: white">
                        {{car.nom?.charAt(0).toUpperCase()}}{{car.prenom?.charAt(0).toUpperCase()}}
                    </span>
                  <!--                    dakhl span n7ot hdik first letter of each name-->
                </v-avatar>
                <div v-if="car.role.nom === role.nom" class="rectangle-info" > <!-- column -->
                  <div class="name" v-if="car.nom && car.prenom">
                    {{ car.nom}}
                  </div>
                  <div class="name" v-else>
                    Name
                  </div>
                  <div class="info" v-if="car.role.nom">
                    {{ car.role.nom }}
                  </div>
                  <div class="info" v-else>
                    Role
                  </div>
                </div>

                <div class="edit" @click="editEmployee" v-if="car.role.nom === role.nom">Edit</div>
                <EditEmployeePopup :employee="car" :isShown="!isShown"  @cancelFunction="()=>{isShown = !isShown}" />
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </template>
</vueper-slide>

</vueper-slides>
<div class="button" style="width: 100%; display: flex; justify-content: center; height: 10%; align-items: center">
<button v-if="loading" class="loginbutton" style="opacity: 0.3">
  Create role
</button>
<button v-else class="loginbutton" @click="createRole">
  Create role
</button>

</div>
  </div>


  <div ref="viewAllPopUp" style="display: none;">
    <div class="popup" style="display: flex; flex-direction: column;  position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.7);
      z-index: 999;
      justify-content: center;
      align-items: center;">
      <div class="popup-content" style=" background-color: #fff;
      width: 80%;
      max-width: 600px;
      height: clamp(300px, 70%, 700px);
      padding: 20px;
      border-radius: 10px;">
        <div class="list-of-employees-popup" style="display: flex; flex-direction: column; height: clamp(200px,80%, 500px); width: 100%">
          <div class="title" style="overflow: hidden;
      word-break: break-word;
      font-size: 22px;
      font-weight: bold;">Employees</div>
          <div class="list" style="width: 100%; height: 90%"> <!-- column -->
            <div class="rectangle"  v-for="car in employees" :key="car.id_user"><!-- row -->
              <!--              <div v-if="car.role.nom === role.nom" class="image"-->
              <div  class="image"
                    :style="{  'background-color': carcolors[car.id_user]}"></div>
              <!--              <div v-if="car.role.nom === role.nom" class="rectangle-info"> &lt;!&ndash; column &ndash;&gt;-->
              <div  class="rectangle-info"> <!-- column -->
                <div class="name" v-if="car.nom">
                  {{ car.nom}}
                </div>
                <div class="name" v-else>
                  Name
                </div>
                <div class="info" v-if="car.role.nom">
                  {{ car.role.nom }}
                </div>
                <div class="info" v-else>
                  Role
                </div>
              </div>
              <!--              <div v-if="car.role.nom === role.nom" class="edit" @click="editEmployeeinPopUp">Edit</div>-->
              <div class="edit" @click="editEmployeeinPopUp">Edit</div>
            </div>

          </div>
        </div>

        <div class="buttons">
          <button class="cancel-button" @click="hideViewAllPopup()" >
            Cancel</button>
        </div>
      </div>

    </div>
  </div>
<!--  create role popup-->
  <div ref="popup" style="display: none;">
    <div class="popup" style="display: flex; flex-direction: column">
      <div class="popup-content">
        <div class="header">
          <h2>Create Role</h2>
        </div>
        <div class="content">
          <form @submit.prevent="saveEmployee" style="height: 80%; width: 100%;">
            <div class="fields">
              <div class="form-group" >
                <label for="name">Role Name </label>
                <input id="name" type="text" v-model="name"  required>
                <!--                                                         ^          -->
                <!--            v-model="oneInstance.nom"   -->
              </div>
              <div class="form-group">
                <label for="other-fields">Description </label>
                <input id="other-fields"     v-model="description"   >
                <!--                                                         ^          -->
                <!--            v-model="oneInstance.prenom"   -->
                </div>
              <div class="form-group" style="width: 80%">

                <label >Actions</label>
                <multiselect
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
              <!---->
              <button type="button" class="cancel-button" @click="hideCreateRole()">Cancel</button>
              <button type="submit" class="save-button" >Save</button>
            </div>
          </form>
          <!---->
          <!---->
        </div>
      </div>
    </div>
  </div>


</template>

<script setup>
import {VueperSlides, VueperSlide} from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import
{
  faChevronRight,
  faChevronLeft,
  faCircle,
  faUser,
  faHeadset,
  faLocationDot, faGlobe, faPlus, faChevronDown
}
from "@fortawesome/free-solid-svg-icons";
import {faCircle as faCircleRegular} from "@fortawesome/free-regular-svg-icons";
import axios from '@/utils/axiosCustom';
import {onMounted, ref, watchEffect} from "vue";
import Multiselect from 'vue-multiselect'
import EditEmployeePopup from "@/views/customer/Employees/EditEmployeePopup.vue";
import EditRolePopup from "@/views/customer/Roles/EditRolePopup.vue";
import {clientCompanyId, localStorageUser} from "@/utils/localStorageData";
library.add(faChevronLeft, faChevronRight, faCircle, faCircleRegular, faUser, faHeadset, faLocationDot,faGlobe,faPlus,faChevronDown)

const breakpoints = {
  1400: {
    slideRatio: 1 / 2.7,
    visibleSlides: 2
  },
  900: {
    slideRatio: 1 / 2.4,
    visibleSlides: 2
  },
  600: {
    slideRatio: 1 / 0.5,
    visibleSlides: 2
  },
  1100: {
    slideRatio: 1 / 2.1,
    visibleSlides: 2
  },

  1900: {
    slideRatio: 1 / 2.5,
    visibleSlides: 3
  }

}


const carcolors = [
  'red','blue','yellow','green','yellow','purple','blue','darkgrey','grey','purple','yellow','blue','purple','red','blue','yellow','green','yellow','purple','blue','darkgrey','grey','purple','yellow','blue','purple','red','blue','yellow','green','yellow','purple','blue','darkgrey','grey','purple','yellow','blue','purple','red','blue','yellow','green','yellow','purple','blue','darkgrey','grey','purple','yellow','blue','purple','red','blue','yellow','green','yellow','purple','blue','darkgrey','grey','purple','yellow','blue','purple','red','blue','yellow','green','yellow','purple','blue','darkgrey','grey','purple','yellow','blue','purple','red','blue','yellow','green','yellow','purple','blue','darkgrey','grey','purple','yellow','blue','purple','red','blue','yellow','green','yellow','purple','blue','darkgrey','grey','purple','yellow','blue','purple','red','blue','yellow','green','yellow','purple','blue','darkgrey','grey','purple','yellow','blue','purple','red','blue','yellow','green','yellow','purple','blue','darkgrey','grey','purple','yellow','blue','purple','red','blue','yellow','green','yellow','purple','blue','darkgrey','grey','purple','yellow','blue','purple','red','blue','yellow','green','yellow','purple','blue','darkgrey','grey','purple','yellow','blue','purple','red','blue','yellow','green','yellow','purple','blue','darkgrey','grey','purple','yellow','blue','purple','red','blue','yellow','green','yellow','purple','blue','darkgrey','grey','purple','yellow','blue','purple','red','blue','yellow','green','yellow','purple','blue','darkgrey','grey','purple','yellow','blue','purple','red','blue','yellow','green','yellow','purple','blue','darkgrey','grey','purple','yellow','blue','purple','red','blue','yellow','green','yellow','purple','blue','darkgrey','grey','purple','yellow','blue','purple','red','blue','yellow','green','yellow','purple','blue','darkgrey','grey','purple','yellow','blue','purple',]
const instance = ref([]);
const employees = ref([]);
const roless = ref([]);
const loading = ref(true); // add a loading state
const popup = ref(null);
const isShown = ref(false);
const editRolePopupIsShown = ref(false);
function editEmployeeinPopUp() {
  hideViewAllPopup();
  isShown.value = true;
}
function editEmployee() {
  isShown.value = true;
}

function editRole() {
  editRolePopupIsShown.value = true;
}

onMounted(async () => {
  try {
    const responseemployees = await axios.get(`https://pfe.ramzi-issiakhem.com/api/v1/users/${clientCompanyId}`); //TODO roles marahmch ytafichaw
    employees.value = responseemployees.data.data;
    const rolesResponse = await axios.get(`https://pfe.ramzi-issiakhem.com/api/v1/company/roles/${localStorageUser.role.id_entreprise}`);
    roless.value = rolesResponse.data.data;
    loading.value = false;
  } catch (error) {
    console.log(error);
    loading.value = false;
  }
});
// setTimeout(() => {
//   console.log(roless.value)
// }, 9000)

function createRole() {
  if (popup.value.style.display === 'none') {
    popup.value.style.display = 'block';
    popupvaluestyledisplay = popup.value.style.display;
  } else {
    popup.value.style.display = 'none';
    popupvaluestyledisplay = popup.value.style.display;

  }
}
function hideCreateRole() {
  if (popup.value.style.display === 'block') {
    popup.value.style.display = 'none';
  } else {
    popup.value.style.display = 'block';
  }
}
const value = ref([]);
const options = ref([]);
options.value = [
  { name: 'Create User'},
  { name: 'Edit Roles'},
  { name: 'View List of Employees'},
  { name: 'Create Contract'},
  {name: 'Add Phone Line'}
]
let popupvaluestyledisplay;
//i want to collapse the createrole when i click outside of it but i don't know how to do it

let name = ref('');
let description= ref('');
const actions = [1];


async function saveEmployee() {
  try {
    // const companyId = localStorageUser.role.id_entreprise; // Specify the company ID
    const companyId = clientCompanyId; // Specify the company ID

    const data = {
      nom: name.value,
      description: description.value,
      actions: [1],
    };
    const response = await axios.post(`https://pfe.ramzi-issiakhem.com/api/v1/company/role/add/${companyId}`, data);
    // Handle the response as needed
    console.log(response.data);
    // Clear the form fields
    name.value = '';
    description.value = '';
    // actions.value = [1];
    // Perform any additional logic or UI updates
    hideCreateRole();
  } catch (error) {
    console.log(error);
  }
}

// function saveEmployee() {
//   // name.value = document.getElementById("name").value;
//   // description.value = document.getElementById("other-fields").value;
//   let  actions = value.value;
//   console.log(name,description,actions);
//   // axios.post('https://pfe.ramzi-issiakhem.com/api/v1/user/role/1', {
//   //     name: name,
//   //     description: description,
//   //     actions: actions,
//   // })
//   //     .then(function (response) {
//   //         console.log(response);
//   //     })
//   //     .catch(function (error) {
//   //         console.log(error);
//   //     });
// }

const viewAllPopUp = ref(null);
function ViewAll() {
  if (viewAllPopUp.value.style.display === 'none') {
    viewAllPopUp.value.style.display = 'block';
  } else {
    viewAllPopUp.value.style.display = 'none';
  }
}
function hideViewAllPopup() {
  if (viewAllPopUp.value.style.display === 'block') {
    viewAllPopUp.value.style.display = 'none';
  } else {
    viewAllPopUp.value.style.display = 'block';
  }
}

</script>


<style scoped>
/*@import "../boxiconscss/boxicons.min.css";*/

.thewhole{
  display: flex;
  flex-direction: column;
  height: 90%;
}
.edit{
    align-self: start;
    padding: 1%;
    color: #DF0327;
    font-weight: bold;
    cursor: pointer;
}
input{
    width: 80%;
    height: 40px;
    border: 1px solid #e8e8e8;
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
select:hover{
    border: 2px solid #C4C4C4;
    border-radius: 10px;
}


.actions-content-active {
  text-align: center;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  border: 2px solid #C4C4C4;
  border-radius: 10px;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
}

.actions-content-active:hover{
    border: 2px solid #C4C4C4;
    border-radius: 10px;
}





.whole {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 120%;
  align-items: center;
}


.header {
  display: flex;
  justify-content: space-between;
  width: 90%;
}

.rectangle {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #F9F9F9;
  padding: 10px 5px;
  height: 60px;
  margin: 10px 0;
  border-radius: 10px;
}


.rectangle-info {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 80%;
  /*width: clamp(15px,10px,10px); */
  align-items: flex-start;
}



.image {
  width: 50px;
  height: 40px;
  background-color: #DF0327;
  border-radius: 20%;
}

.edit {
  align-self: start;
  padding: 1%;
  color: #DF0327;
  font-weight: bold;
  cursor: pointer;
}


.info {
  color: #A0A0A0;
  font-size: 100%;
  overflow: hidden;
  word-break: break-word;
}


.name {
  font-size: 120%;
  overflow: hidden;
  word-break: break-word;
}


.title {
  overflow: hidden;
  word-break: break-word;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.option {
  color: #DF0327;
  font-size: 120%;
  font-weight: bold;
  cursor: pointer;
}


.list {
  display: flex;
  flex-direction: column;
  /*justify-content: space-around;*/
  overflow-y: scroll;
  position: relative;
  height: clamp(150px, 60%, 100%);
  width: 90%;
  /*background-color: #22B573;*/
  word-break: break-word;
  white-space: nowrap;
  padding-right: 10px;
}
.list::-webkit-scrollbar-track {
    background: #ffffff;
    /* color of the scrollbar track */
}
.list::-webkit-scrollbar-thumb {
    background-color: rgba(134, 132, 132, 0.1); /* color of the scrollbar thumb */
    border-radius: 5px; /* round the corners of the thumb */
}
.list::-webkit-scrollbar-thumb:hover {
    background-color: #DF0327;
    /* color of the scrollbar thumb on hover */
}
.list::-webkit-scrollbar {
    width: 4px; /* width of the scrollbar */
    /*height: 4px;*/
    /*position: absolute;*/

}
.wholedisplay{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /*height: 550px;*/
    height: clamp(475px,90%,900px);
    justify-content: flex-start;
}
.role-and-circles{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: clamp(470px,80%,800px);
}
.horizontal{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    /*width: 900px;*/
    width: clamp(1000px,100%,1200px);
    /*height: 400px;*/
    height: clamp(400px,70%,900px);
}
.role-list{
    width: clamp(700px,70%,900px);

    /*width: 700px;*/
    /*height: 450px;*/
    height: clamp(430px,100%,900px);
    display: flex;
    justify-content: space-between;
}





.role {
  text-align: center;
  background-color: white;
  /*width: 47%;*/
  /*width: clamp(280px,56%,350px);*/
  width: clamp(290px, 20vw, 350px);
  border: #c4c4c4 solid;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: clamp(395px, 90%, 600px);
}


.role-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  height: 55%;
  justify-content: space-around;
  width: 80%;
}

.hea {
  display: flex;
  flex-direction: column;
  width: 100%;
}

#edit {
  color: #DF0327;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
  align-self: end;
}


.role-name{
    font-size: 25px;
    font-weight: bold;
}


.emplo {
  height: 60%;
  width: 100%;
}




.chevron-down{
    color: #C4C4C4;
}
.actions-square{
    width: 120px;
    border: 2px solid #C4C4C4;
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    font-family: 'Inter', sans-serif;
}


.loginbutton {
  border: 1px solid white;
  background-color: #DF0327;
  height: 50px;
  width: 130px;
  cursor: pointer;
  color: white;
  border-radius: 14px;
  font-family: inherit;
  font-size: inherit;
}
.loginbutton:hover{
  background-color: #6B7280;
    transition-duration: 0.3s;
}

.index{
  display: flex;
    width: 50px;
    justify-content: space-between;
    margin-top: 30px;
}

.circle {
  border: none;
  background-color: #DF0327;
  color: white;
  height: 7px;
  width: 7px;
  border-radius: 90px;
  cursor: pointer;

}
.circle-active {
  border: none;
  background-color: #DF0327;
  color: white;
  height: 7px;
  width: 7px;
  border-radius: 90px;
  cursor: pointer;
  scale: 2;
  transition-duration: 0.2s;
}

.circle:hover{
  scale: 2.4;
    transition-duration: 0.2s;
}

.chevron {
  border: none;
  background-color: #DF0327;
  color: white;
  height: 35px;
  width: 35px;
  border-radius: 35px;
  /*padding: 4px;*/
  /*font-size: 9px;*/
  cursor: pointer;
  align-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
}


.chevron:hover{
  background-color: #6B7280;
    transition-duration: 0.3s;
    scale: 1.5;
}

</style>
