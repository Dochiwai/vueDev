<template>

  <v-app id="inspire">
    <v-container v-if="doingTrigger == false">
      <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>
    <v-navigation-drawer v-model="drawer" app width="300">
      <v-sheet color="grey lighten-5" height="72" width="100%"></v-sheet>
      <v-list class="pl-14" shaped>
        <v-list-item
          v-for="item in itemList"
          :key="item.title"
          @click="changeSruvey(item)"
          >
          <v-list-item-content>
            <v-list-item-title>
              <span v-if="item.title != ''">{{ item.title }}</span>
              <span v-else>제목을 입력해주세요</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-sheet color="grey lighten-5" height="72" width="100%">
        <button @click="addSurvey">추가하기</button>
      </v-sheet>
      <v-sheet color="grey lighten-5" height="72" width="100%">
        <button @click="previewSruvey">미리보기</button>
      </v-sheet>
      <v-sheet color="grey lighten-5" height="72" width="100%">
        <button @click="saveSurvey">저장하기</button>
      </v-sheet>
    </v-navigation-drawer>

    <v-navigation-drawer app clipped right>
      <v-list>
        <SurveyDetailSelViewVue 
        v-if="detailTrigger && this.survey.type == '객관식'"
        :item="survey"
        @changeMaxChild="changeMax"
        @changeMinChild="changeMin"
        @changeTypeChild="changeType"
        >
        </SurveyDetailSelViewVue>

        <SurveyDetailWriteViewVue 
        v-if="detailTrigger && this.survey.type == '주관식'"
        :item="survey"
        @changeTypeChild="changeType"
        >
        </SurveyDetailWriteViewVue>

        <SurveyDetailVSViewVue 
        v-if="detailTrigger && this.survey.type == 'VS'"
        :item="survey"
        @changeTypeChild="changeType"
        >
        </SurveyDetailVSViewVue>
      </v-list>
    </v-navigation-drawer>

    <v-main style="padding : 50px;">
      <div>
        <SurveyViewVue
        v-if="detailTrigger"
        :item="survey"
        @titleFromChild="changeTitle"
        @deleteSurveyChild="deleteSurvey"
        @addContentChild="addContent"
        @deleteContentChild="deleteContent"
        ></SurveyViewVue>
      </div>
    </v-main>

    <v-footer app color="transparent" height="72" inset>
      <v-text-field
        background-color="grey lighten-1"
        dense
        flat
        hide-details
        rounded
        solo
      ></v-text-field>
    </v-footer>
    </v-container>
    <v-container v-if="doingTrigger == true">
        <SurveyDoViewVue 
          :item="itemList" 
          @previewCompleteChild="previewComplete"
          :answer="answer"
        ></SurveyDoViewVue>
    </v-container>
  </v-app>
</template>

<script>
import SurveyDoViewVue from '@/components/SurveyDoView.vue';
import SurveyDetailSelViewVue from '../components/SurveyDetailSelView.vue';
import SurveyDetailVSViewVue from '../components/SurveyDetailVSView.vue';
import SurveyDetailWriteViewVue from '../components/SurveyDetailWriteView.vue';
import SurveyViewVue from "../components/SurveyView.vue";

export default {
  name: "App",
  components: {
    SurveyViewVue,
    SurveyDetailSelViewVue,
    SurveyDetailWriteViewVue,
    SurveyDetailVSViewVue,
    SurveyDoViewVue,
  },
  data() {
    return {
      detailTrigger : false,
      doingTrigger : false,
      itemList: [
        {
          title: "Atitle",
          content: "Acontent",
          selectMin : 1,
          selectMax : 3,
          type: "객관식",
          questions : [
            {
              title:'지금 무슨 생각을 하고 계신가요?',
              contents:[
                '집에가고싶다',
                '배고프다',
                '아무생각이없다'
              ],
            }
          ]
        },  
        {
          title: "Btitle",
          content: "Bcontent",
          selectMin : 0,
          selectMax : 0,
          type: "주관식",
          questions : [
           {
              title:'그래서 무슨생각하냐구요',
              contents:[],
            }
          ]
        },
        {
          title: "Ctitle",
          content: "Ccontent",
          selectMin : 0,
          selectMax : 0,
          type: "주관식",
          questions : [
            {
              title:'제발 알려주세요',
              contents:[],
            }
          ]
        },
      ],
      survey : undefined,
      answer : [
      ]
    };
  },
  methods: {
    createSurvey(){
      let newSurvey = {
          title: "",
          content: "",
          selectMin : 0,
          selectMax : 0,
          type: "",
          questions : [
            {
              title:'',
              contents:[],
            }
          ]
        }
      return newSurvey; 
    },
    changeSruvey(obj) {
      this.survey = obj;
      this.detailTrigger = true;
    },
    addSurvey(){
      let newSurvey = this.createSurvey();
      this.changeSruvey(newSurvey);
      this.itemList.push(newSurvey);
    },
    changeTitle(value) {
      const index = this.itemList.indexOf(this.survey);
      if (index !== -1) {
        this.itemList[index].title = value;
      }
    },
    deleteSurvey(){
      const index = this.itemList.indexOf(this.survey);

      this.itemList.splice(index,1);
      if(index === 0){
        this.changeSruvey(this.itemList[index])
      }else{
        this.changeSruvey(this.itemList[index - 1])
      }
      if(this.itemList.length <= 0){
        let newSurvey = this.createSurvey();
        this.changeSruvey(newSurvey);
        this.detailTrigger=false
      }
    },
    changeMax(value){
      console.log( "app vue value " +value)
      const index = this.itemList.indexOf(this.survey);
      this.itemList[index].selectMax = value;
    },
    changeMin(value){
      const index = this.itemList.indexOf(this.survey);
      this.itemList[index].selectMin = value;
    },
    changeType(value){
      const index = this.itemList.indexOf(this.survey);
      let title = this.itemList[index].title;
      let survey = this.createSurvey();
      this.itemList[index] = survey
      this.itemList[index].type = value;
      this.itemList[index].title = title;
      this.changeSruvey(this.itemList[index]);
    },
    addContent(){
      const index = this.itemList.indexOf(this.survey);
      let target = this.itemList[index].questions[0].contents;
      target.push('');
    },
    deleteContent(obj){
      const index = this.itemList.indexOf(this.survey);
      this.itemList[index].questions[0].contents.splice(obj,1)
    },
    changeQuestionTitle(value){
      const index = this.itemList.indexOf(this.survey);
      this.itemList[index].questions[0].title = value;
    },
    previewSruvey(){
      this.doingTrigger = true;
    },
    previewComplete(array){
      this.answer = array;
      this.doingTrigger = false;
      console.log(array);
    },
    saveSurvey(){
      const axios = require('axios')
      console.log(this.itemList)
      let stringify =JSON.stringify(this.itemList);
      let json = JSON.parse(stringify)
      axios.post('/api/questionSave',{
          list : json
      }).then((res)=>{
        console.log(res)
      })  
    }
  },
};
</script>
