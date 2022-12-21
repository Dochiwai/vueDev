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
          @click="rememberMaxBefore"
          @change="changeMax"
          :items="itemLengthToArray"
          v-model="item.selectMax"
          label="최대 선택 갯수 입력"
        >
        </v-select>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row align="center">
        <v-select
          @click="rememberMinBefore"
          @change="changeMin"
          :items="itemLengthToArray"
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
      typeSelector: ["객관식", "객관식(다중)", "주관식", "VS", "슬라이드바"],
      beforeMaxData: 0,
      beforeMinData: 0,
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
  watch: {
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
    rememberMaxBefore(e){ 
        this.beforeMaxData = this.item.selectMax;
    },
    rememberMinBefore(e){ 
        this.beforeMinData = this.item.selectMin;
    },
    changeMax(e) {
        if(this.item.selectMin > e){
            alert("최소 선택 개수보다 더 작게 선택하지마")
            this.$emit("changeMaxChild", this.beforeMaxData);
        }else{
            this.$emit("changeMaxChild", e);
        }
    },
    changeMin(e) {
        if(this.item.selectMax < e){
            alert("최대 선택 개수보다 더 크게 선택하지마");
            this.item.selectMin = this.beforeMinData
        }else{
            this.$emit("changeMinChild", e);
        }
    },
    changeType(e) {
      this.$emit("changeTypeChild", e);
    },
  },
  computed: {
    itemLengthToArray() {
      return Array.from(
        { length: this.item.questions[0].contents.length },
        (_, i) => i+1
      );
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
