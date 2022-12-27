<template>
  <v-app>
    <v-container v-if="survey.type == '객관식'" style="background-color:black;">
        <SurveyDoSelViewVue 
            :item="survey" 
            :index="index" 
            :answer="answer" 
            @persnalComplete="persnalComplete"></SurveyDoSelViewVue>
    </v-container>
    <v-container v-if="survey.type == '주관식'" style="background-color:black;">
        <SurveyDoWriteViewVue 
            :item="survey" 
            :index="index" 
            :answer="answer" 
            @persnalComplete="persnalComplete"></SurveyDoWriteViewVue>
    </v-container>
    <v-container v-if="survey.type == 'VS'" style="background-color:black;">
        <SurveyDoVsViewVue 
            :item="survey" 
            :index="index" 
            :answer="answer" 
            @persnalComplete="persnalComplete"></SurveyDoVsViewVue>
    </v-container>
  </v-app>
</template>

<script>
import SurveyDoSelViewVue from './SurveyDoingTemplete/SurveyDoSelView.vue'
import SurveyDoVsViewVue from './SurveyDoingTemplete/SurveyDoVsView.vue'
import SurveyDoWriteViewVue from './SurveyDoingTemplete/SurveyDoWriteView.vue'

export default {
    components: {
        SurveyDoSelViewVue,
        SurveyDoVsViewVue,
        SurveyDoWriteViewVue,
    },
    data(){
        return{
            index : 0,
            survey : this.item[0],
            userAns : []
        }
    },
    props: {
        item: {
        type: Array,
        default: () => {
                []
            },
        },
        answer:{
            type:Array,
        }
    },
    methods: {
        nextQuestion(){
            if(null != this.item[this.index + 1]){
                this.index += 1;
                this.survey = this.item[this.index];
            }else{
                this.$emit('previewCompleteChild',this.userAns);
            }
        },
        persnalComplete(obj) {
            this.userAns.push(obj);
            this.nextQuestion();
        }
    },
}
</script>

<style>

</style>