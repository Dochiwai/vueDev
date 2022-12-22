<template>
    <v-app style="background-color: azure;">
      <v-container>
          <v-app-bar>
              <span>1.</span> <input v-model="item.questions[0].title" type="text" style="width:100%;" readonly/>
          </v-app-bar>
      </v-container>
      <v-container v-for="(question) in item.questions" :key="question.title">
          <v-container style="background-color:white;" v-model="textVal">
              <v-textarea>

              </v-textarea>
          </v-container>
      </v-container>
      <v-container>
        <v-btn block @click="selected">
            완료
        </v-btn>
      </v-container>
    </v-app>
  </template>

<script>
export default {
    data() {
        return {
            textVal : {
                
            }
        }
    },
    props: {
        item: {
            type: Object,
            default: () => {

            }
        },
        index:{
            type:Number,
            default: () =>{

            }
        },
        answer:{
            type:Array
        }
    },
    methods: {
        selected() {
            let obj = {
                questionNo : this.index,
                userAnswer : this.textVal.target.value
            }
            this.$emit('persnalComplete',obj);
        }
    },
}
</script>

<style>

</style>