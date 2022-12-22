<template>
    <v-app style="background-color: azure;">
      <v-container>
          <v-app-bar>
              <span>1.</span> <input v-model="item.questions[0].title" type="text" style="width:100%;" readonly/>
          </v-app-bar>
      </v-container>
      <v-container v-for="(question) in item.questions" :key="question.title">
          <v-container v-for="(content,i) in question.contents" :key="i">
              <span>{{ i + 1 }}.{{ question.contents[i] }}</span>  <v-checkbox name="checked" :value = "i"></v-checkbox>
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
            let query = 'input[name="checked"]:checked';
            let sel = document.querySelectorAll(query);
            let selValue = []; 
            sel.forEach((e) => {
                selValue.push(e.value);
            });

            if(selValue.length > this.item.selectMax){
                alert(this.item.selectMax + '개 이하만 골라주세영')
                return false;
            }
            if(selValue.length < this.item.selectMin){
                alert(this.item.selectMin + '개 이상 골라주세영')
                return false;
            }

            let obj = {
                questionNo : this.index,
                userAnswer : selValue
            }
            console.log(obj);
            this.$emit('persnalComplete',obj);
        }
    },
}
</script>

<style>

</style>