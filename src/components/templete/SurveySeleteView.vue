<template>
  <v-app>
    <v-container>
        <v-app-bar>
            <span>1.</span> <input v-model="item.questions[0].title" type="text" style="width:100%;"/>
        </v-app-bar>
    </v-container>
    <v-container v-for="(question) in item.questions" :key="question.title">
        <v-container v-for="(content,i) in question.contents" :key="i">
            <span>{{ i + 1 }}.</span> <input v-model="question.contents[i]" type="text" placeholder="정답을 입력해주세요." />
            <button @click="deleteContent(i)">삭제</button>
        </v-container>
        <button @click="addContent()">답변 추가하기</button>
    </v-container>
  </v-app>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: ()=>{
                title: '';
                content: '';
                selectMin : 0;
                selectMax : 0;
                type: '';
                questions : [
                    {
                        title:'',
                        contents:[],
                    }
                ]
            }
        },
    },
    methods: {
        addContent() {
            this.$emit('addContentLastChild')
        },
        deleteContent(obj){
            this.$emit('deleteContentLastChild',obj);
        }
    },
}
</script>

<style>

</style>