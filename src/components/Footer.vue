<script setup>
const icons =  ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram',];
const links = ['https://www.facebook.com/OoredooDZ/', 'https://twitter.com/ooredoodz', 'https://www.linkedin.com/company/ooredoo-algerie/', 'https://www.instagram.com/ooredooalgerie/'];
</script>

<template>
    <v-layout>
    <v-footer   style=""
            class="bg-grey-darken-3 text-center d-flex flex-column "
    >
        <div>
            <v-btn
                    v-for="(icon,index) in icons"
                    :key="icon"
                    class="mx-4"
                    :icon="icon"
                    variant="text"
                    target="_blank"
                    :href="links[index]"
            ></v-btn>
        </div>
        <br>
        <div class="pt-0">
            <strong> About Tassyir</strong> <br><br>
            Tassyir is an innovative online platform designed to empower businesses by providing a comprehensive set of tools for managing both your business operations and employees. With Tassyir, you can streamline your workflow, enhance productivity, and simplify complex business processes.        </div>

        <br>
        <v-divider></v-divider>

        <div>
            {{ new Date().getFullYear() }} — <strong>Tassyir</strong>
        </div>
        <br>

    </v-footer>
    </v-layout>
</template>

<style scoped>

</style>