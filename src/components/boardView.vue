<template>
    <v-sheet
    min-height="70vh"
    width="100%"
    rounded="lg"
    >
    <v-container>
        <v-app-bar-title>{{ board.uid }}. {{ board.title }}</v-app-bar-title>
        <v-content style="min-height: 500px;">
            {{board.content}}
        </v-content>
        <v-container style="text-align-last: center;">
            <v-btn v-if="loginedUser" @click="goodBad('G')">good {{ board.good }}</v-btn>
            <v-btn v-if="loginedUser" @click="goodBad('B')">bad  {{ board.bad }}</v-btn>
            <v-container>
                <v-btn @click="back">뒤로가기</v-btn>
                <v-btn @click="modify(board.uid)">수정하기</v-btn>
                <v-btn @click="remove">삭제하기</v-btn>
            </v-container>
        </v-container>
    </v-container>
    <replyComponentVue/>
  </v-sheet>
</template>

<script>
import replyComponentVue from './replyComponent.vue';

const axios = require("axios");
export default {
    components: {
        replyComponentVue,
    },
    created () {
        const uid = this.$route.params.uid;
        console.log(uid);
        axios({
            method: "POST",
            url: '/api/boardView/' + uid,
            data: {
                uid : uid , 
            },
            headers: {'Content-type': 'application/json'}
            }).then((res)=>{
                if(res.data.result === 200){
                    this.board = res.data.board;
                }else if(res.data.result === 400){
                    alert("서버에 문제가 생겼으니 관리자에게 문의하세요")
                }
                else if(res.data.result === 500){
                    alert("서버에 문제가 생겼으니 관리자에게 문의하세요")
                }
            }).catch(error=>{
                alert("문제가 생겼으니 관리자에게 문의하세요")
            });
    },
    data() {
        return {
            board : {
            },
            loginedUser : this.$store.getters.getUserEmail                                                                  
        }
    },
    methods: {
        goodBad(value) {
        axios({
            method: "POST",
            url: '/api/board/goodBad',
            data: {
                mother_uid : this.board.uid , 
                created_user : this.loginedUser,
                good_bad : value,
            },
            headers: {'Content-type': 'application/json'}
            }).then((res)=>{
                if(res.data.result === 200){
                    if(value == 'G'){
                        alert("좋아요!")
                        this.board.good = res.data.cnt.good_cnt;
                    }else{
                        alert("싫어요")
                        this.board.bad = res.data.cnt.bad_cnt;
                    }
                }if(res.data.result === 400){
                    if(value == 'G'){
                        alert('이미 좋아요를 눌렀습니다.')
                    }else{
                        alert('이미 싫어요를 눌렀습니다.')
                    }
                }else if(res.data.result === 500){
                    alert("서버에 문제가 생겼으니 관리자에게 문의하세요")
                }
            }).catch(error=>{
                alert("문제가 생겼으니 관리자에게 문의하세요")
            });           
        },
        back() {
            
        },
        remove(){
            const uid = this.$route.params.uid;
            if(confirm("정말 삭제하시겠습니까??") == true){
            axios({
            method: "POST",
            url: '/api/boardDelete/' + uid,
            data: {
                uid : uid , 
            },
            headers: {'Content-type': 'application/json'}
            }).then((res)=>{
                if(res.data.result === 200){
                    alert("삭제되었습니다")
                    location.href='/boardList'
                }else if(res.data.result === 400){
                    alert("서버에 문제가 생겼으니 관리자에게 문의하세요")
                }
                else if(res.data.result === 500){
                    alert("서버에 문제가 생겼으니 관리자에게 문의하세요")
                }
            }).catch(error=>{
                alert("문제가 생겼으니 관리자에게 문의하세요")
            });
        }else{
            return;
        }
        },
        modify(value){
            if(confirm("수정하시겠습니까??") == true){
             this.$router.push({
                   name: "boardModify",
                   params: { uid: value },
             }).catch(()=>{});
            }else{
             return;
         }
        },
    },
}
</script>

<style>

</style>