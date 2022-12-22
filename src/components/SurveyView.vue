<template>
    <v-app>
        <v-app-bar max-height="68px">
            <input type="text" v-model="item.title" @input="changeTitle" placeholder="제목을 입력해주세요"><button @click="deleteSurvey()">삭제하기</button>
        </v-app-bar>
        <v-content style="padding:5px;">
            <SurveySeleteViewVue v-if="item.type =='객관식'" :item="item" @addContentLastChild="addContent" @deleteContentLastChild="deleteContent"></SurveySeleteViewVue>
            <SurveyWriteViewVue v-if="item.type =='주관식'" :item="item" @changeQuestionTitleLastChild="changeQuestionTitle"></SurveyWriteViewVue>
            <SurveyVsSelViewVue v-if="item.type =='VS'" :item="item" @changeQuestionTitleLastChild="changeQuestionTitle"></SurveyVsSelViewVue>
        </v-content>
    </v-app>
</template>

<script>
import SurveySeleteViewVue from './SurveyMaketemplete/SurveySeleteView.vue';
import SurveyVsSelViewVue from './SurveyMaketemplete/SurveyVsSelView.vue';
import SurveyWriteViewVue from './SurveyMaketemplete/SurveyWriteView.vue';

export default {
    props: {
        item: {
            type: Object,
            default: () =>{
                title: '';
                content: '';
                selectMin : 0;
                selectMax : 0;
                type: '';
                questions : [
                    {
                        title : '',
                        contents :[]
                    }
                ]
            },
        },
    },
    components: {
        SurveySeleteViewVue,
        SurveyWriteViewVue,
        SurveyVsSelViewVue,
    },
    methods: {
        changeTitle() {
            this.$emit('titleFromChild',this.item.title);
        },
        deleteSurvey(){
            this.$emit('deleteSurveyChild');
        },
        addContent(){
            this.$emit('addContentChild')
        },
        deleteContent(obj){
            this.$emit('deleteContentChild',obj);
        },
        changeQuestionTitle(value){
            this.$emit('changeQuestionTitle',value);
        }
    },
}
</script>

<style>

</style>