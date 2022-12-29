<template>
    <v-row>
      <v-col style="text-align: center;">
        <v-sheet
          min-height="70vh"
          rounded="lg"
        >
        <v-container>
        </v-container>
        </v-sheet>
      </v-col>
    </v-row>
</template>

<script>
const axios = require('axios');
export default {
  created () {
    const userEmail = this.$store.getters.getUserEmail;
    
    ;
  },
  data() {
    return {
      user: {
        email : "email@naver.com",
        name : "name",
        phone : "phone",
        memo : "memo",
      }
    }
  },
  methods: {
    save() {
      
    }
  },
}
</script>

<style>

</style>