<template>
    <select class="round" v-model="selectedRole" @change="handleChange">
        <option value="">All</option>
        <option v-for="role in availableRoles" :value="role">{{ role }}</option>
    </select>
</template>

<script >
import {ref, computed, onMounted} from 'vue'
export default {
  props: {
    instance: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    const selectedRole = ref("");
    const availableRoles = computed(() => {
      const roles = new Set();
      props.instance.forEach((item) => roles.add(item.role.nom));
      return Array.from(roles);
    });

    function handleChange() {
      // Emit the selected role to the parent component
      // using the 'selectedRole' event
      if (selectedRole.value !== "") {
        emit("selectedRole", selectedRole.value);
      }
    }

    onMounted(() => {
      // You can perform any necessary initialization logic here
    });

    return {
      selectedRole,
      availableRoles,
      handleChange,
    };
  },
};
</script>

<style scoped>

select {

    background-color: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    display: inline-block;
    font: inherit;
    line-height: 1.5em;
    /*padding: 0.5em 3.5em 0.5em 1em;*/
    width: 150px;
    height: 40px;
    padding-left: 0.8em;
    -webkit-appearance: none;
}

select.round {
    background-image:
        linear-gradient(45deg, transparent 50%, gray 50%),
        linear-gradient(135deg, gray 50%, transparent 50%),
        radial-gradient(#ddd 70%, transparent 72%);
    background-position:
        calc(100% - 20px) calc(1em + 2px),
        calc(100% - 15px) calc(1em + 2px),
        calc(100% - .5em) .5em;
    background-size:
        5px 5px,
        5px 5px,
        1.5em 1.5em;
    background-repeat: no-repeat;
}








.filter-content {
    position: relative;
}
.dropdown-menu {
    position: absolute;
    top: 25%;
    width: clamp(10px, 9.5%, 150px);
    border-radius: 10px;
    z-index: 10000;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 5px;
}
.dropdown-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.dropdown-menu li {
    padding: 5px;
    cursor: pointer;
}
.dropdown-menu li:hover {
    background-color: #f7f7f7;
}
* {
    font-family: Inter, sans-serif
}
.filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /*width: 40%;*/
    width: clamp(250px, 40%, 350px);
    height: 100%;
}
.filter {
    width: clamp(100px, 35%, 150px);
    border: 1px solid #C4C4C4;
    border-radius: 8px;
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    height: 40%;
}
.chevron-down {
    color: #C4C4C4;
}


</style>