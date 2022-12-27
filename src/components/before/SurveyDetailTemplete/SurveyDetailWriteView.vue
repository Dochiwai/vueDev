<template>
    <v-app>
      <v-container fluid>
        <v-row align="center">
          <v-select
            @change="changeType"
            :items="typeSelector"
            v-model="item.type"
            label="타입을 선택해주세요"
          >
          </v-select>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        typeSelector: ["객관식", "주관식", "VS" ],
      };
    },
    props: {
      item: {
        type: Object,
        default: () => {
          (title = ""),
            (content = ""),
            (selectMin = 0),
            (selectMax = 0),
            (type = ""),
            (questions = [
              {
                title: "",
                contents: [],
              },
            ]);
        },
      },
    },
    methods: {
        changeType(e) {
        this.$emit("changeTypeChild", e);
        },
    },
  };
  </script>
  
  <style>
  .v-text-field.v-text-field--solo .v-input__control {
    min-height: 10px;
  }
  .v-input
    .v-input--is-label-active
    .v-input--is-dirty
    .theme--light
    .v-text-field
    .v-text-field--is-booted
    .v-select {
    height: 10px;
  }
  </style>
  