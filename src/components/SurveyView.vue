<template>
    <v-app>
        <v-app-bar max-height="68px">
            <input type="text" v-model="item.title" @input="changeTitle" placeholder="제목을 입력해주세요"><button @click="deleteSurvey()">삭제하기</button>
        </v-app-bar>
        <v-content style="padding: 24px 256px 72px 13px;">
            투표 설명 {{ item.content }}<br/>
            <SurveySeleteViewVue v-if="item.type =='객관식'" :item="item" @addContentLastChild="addContent" @deleteContentLastChild="deleteContent"></SurveySeleteViewVue>
            <SurveyWriteViewVue v-if="item.type =='주관식'"></SurveyWriteViewVue>
            <SurveyVsSelViewVue v-if="item.type =='VS'"></SurveyVsSelViewVue>
        </v-content>
    </v-app>
</template>

<script>
import SurveySeleteViewVue from './templete/SurveySeleteView.vue';
import SurveyVsSelViewVue from './templete/SurveyVsSelView.vue';
import SurveyWriteViewVue from './templete/SurveyWriteView.vue';

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
            }
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
        }
    },
}
</script>

<style>

</style>