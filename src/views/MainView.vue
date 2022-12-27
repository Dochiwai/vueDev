<template>
  <v-container>
    <v-row>
      <sidebarVue/>
      <v-col>
        <v-sheet
          min-height="70vh"
          rounded="lg"
        >
          <!--  -->
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
import sidebarVue from '../components/sidebar.vue'
  
export default {
    components: {
      sidebarVue,
    },
}
</script>

<style>

</style>