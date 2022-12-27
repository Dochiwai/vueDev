<template>
    <v-row>
        <sidebarVue></sidebarVue>
        <v-col>
            <v-sheet
            min-height="70vh"
            rounded="lg"
            >
            <!--  -->
            </v-sheet>
        </v-col>
    </v-row>
</template>

<script>
import sidebarVue from './sidebar.vue'

export default {
    components: {
        sidebarVue,
    },
}
</script>

<style>

</style>