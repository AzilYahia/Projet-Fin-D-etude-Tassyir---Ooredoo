<template>
    <div class="whole">
        <div class="control-board">
            <div class="search">
                <font-awesome-icon icon="fas fa-magnifying-glass" class="chevron-down"/>
                <input type="text" placeholder="Search settings" CLASS="search-field">
            </div>
        </div>
        <div class="setting-filler">
      <div class="settings">
          <div class="settings-row">
              <div class="setting-name">
              <font-awesome-icon icon="fas fa-globe" class="chevron-down"/>
              Language:
          </div>
          <div class="setting-description">
                  English
          </div>
      </div>
          <div class="settings-row">
              <div class="setting-name">
                  <font-awesome-icon icon="fas fa-bars" class="chevron-down"/>
                  Option:
              </div>
              <div class="setting-description">
                  <div class="setting-description-filler">
                  <font-awesome-icon icon="fas fa-toggle-on" class="chevron-down"/>
                  </div>
              </div>
          </div>
          <div class="settings-row">
              <div class="setting-name">
                  <font-awesome-icon icon="fas fa-globe" class="chevron-down"/>
                  Language:
              </div>
              <div class="setting-description">
                  English
              </div>
          </div>
          <div class="settings-row">
              <div class="setting-name">
                  <font-awesome-icon icon="fas fa-bars" class="chevron-down"/>
                  Option:
              </div>
              <div class="setting-description">
                  <div class="setting-description-filler">
                      <font-awesome-icon icon="fas fa-toggle-off" class="chevron-down" id="red"/>
                  </div>
              </div>
          </div>
      </div>
    </div>
    </div>


</template>
<script setup>

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faBars,
    faChevronDown,
    faCircleInfo,
    faMagnifyingGlass,
    faPencil,
    faPlus,
    faTrashCan,
    faGlobe,
    faToggleOn,
    faToggleOff,


} from '@fortawesome/free-solid-svg-icons'
library.add(faChevronDown, faMagnifyingGlass, faPlus,faPencil, faTrashCan, faCircleInfo, faBars,faGlobe,faToggleOn,
    faToggleOff, )
</script>

<style scoped>
#red{
    color: #DF0A2D;
}
.setting-description-filler .chevron-down{
    color: #22B573;
}
.setting-description-filler{
    width: 70px;
}
.setting-filler{
    width: 90%;
}
.settings{
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
width: 300px
}
.settings-row .setting-name .chevron-down{
    margin-right: 10px;
    font-size: 20px;
}
.setting-description{
    /*margin-left: 80px;*/
}
.setting-name{
    font-weight: bold;
    display: flex;
    align-items: center;

}
.settings-row{
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    color:#A0A0A0;
    height: 65px;
    align-items: center;

}
.control-board {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-bottom: 20px;
    height: 80px;
    /*background-color: #DF0327;*/
    border-bottom: 1px solid #CCCCCC;
    align-items: center;
}.whole{
     /*width: 90%;*/
     align-items: center;
     display: flex;
     flex-direction: column;
 }
.chevron-down{
    color: #C4C4C4;
}
table{

      overflow: scroll;
      text-align: center;
      vertical-align: middle;
      min-width:90%
      /*width: 90%;*/
  }*{
       font-family:Inter, sans-serif
   }
thead tr{
    height: 50px;
    background-color: #E6E6E6;
}
thead{
    border-radius: 25px;
}

tbody tr{
    height: 70px;

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
</style>