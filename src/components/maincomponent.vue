<template>
    <v-row>
      <v-col>
        <v-sheet
          min-height="70vh"
          rounded="lg"
        >
        <v-row
          class="mb-6"
          no-gutters
        >
          <v-col
            sm="5"
            md="6"
          >
            <v-card
              class="pa-2"
              outlined
              tile
              style="min-height: 330px;"
            >
              <v-app-bar-title>베스트 자유게시판</v-app-bar-title>
              <listTableVue v-bind:list="freeList"></listTableVue>
            </v-card>
          </v-col>
          <v-col
            sm="5"
            offset-sm="2"
            md="6"
            offset-md="0"
          >
            <v-card
              class="pa-2"
              outlined
              tile
              style="min-height: 330px;"
            >
            <v-app-bar-title>베스트 유머게시판</v-app-bar-title>
            <listTableVue v-bind:list="umerList"></listTableVue>
            </v-card>
          </v-col>
        </v-row>
        </v-sheet>
      </v-col>
    </v-row>
</template>

<script>
import listTableVue from './listTable.vue';
const axios = require("axios");

export default {
  components: {
    listTableVue
  },
  created() {
    axios({
      method: "POST",
      url: "/api/boardList",
      data: {
        type: 'F',
        page : 1,
      },
      headers: { "Content-type": "application/json" },
    }).then((res) => {
      if (res.data.result === 200) {
        this.freeList = res.data.boardList;
      }
    })

    axios({
      method: "POST",
      url: "/api/boardList",
      data: {
        type: 'U',
        page : 1,
      },
      headers: { "Content-type": "application/json" },
    }).then((res) => {
      if (res.data.result === 200) {
        this.umerList = res.data.boardList;
      }
    })
  },
  data() {
    return {
      freeList: [],
      umerList: [],
    };
  },
}
</script>

<style>

</style>