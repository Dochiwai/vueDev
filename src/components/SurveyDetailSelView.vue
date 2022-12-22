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
    <v-container fluid>
      <v-row align="center">
        <v-select
          :items="itemLengthToArray"
          v-model.number.lazy="item.selectMax"
          @change="changeMax"
          label="최대 선택 갯수 입력"
        >
        </v-select>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row align="center">
        <v-select
          :items="itemLengthToArray"
          @change="changeMin"
          v-model="item.selectMin"
          label="최소 선택 갯수 입력"
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
  watch: {/*
    'item.selectMax' : {
        handler(newValue,oldValue){
            console.log("watch new value = " + newValue + " , oldvalue = "+ oldValue);
            if(newValue < this.item.selectMin){
                console.log("watch if new value = " + newValue + " , oldvalue = "+ oldValue);
                this.changeMax(oldValue)
            }
        }
    },*/
    item: {
      handler(newValue, oldValue) {
        let len = this.item.questions[0].contents.length;
        if(this.item.selectMax > len){
            this.changeMax(len);
        }
        if(this.item.selectMin > len){
            this.changeMin(len);
        }

        if(len > 0){
            if(this.item.selectMax == 0){
                this.changeMax(1);
            }
            if(this.item.selectMin == 0){
                this.changeMin(1);
            }
        }
      },
      deep: true,
    },
  },
  methods: {
    changeMax(e) {
        console.log(" methods changeMax , changemax : " +e);
        this.$emit("changeMaxChild", 3);
    },
    changeMin(e) {
        this.$emit("changeMinChild", e);
    },
    changeType(e) {
      this.$emit("changeTypeChild", e);
    },
  },
  computed: {
    itemLengthToArray() {
        if(this.item.questions[0] != undefined){
             return Array.from(
                { length: this.item.questions[0].contents.length },
                (_, i) => i+1
            );
        }
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
