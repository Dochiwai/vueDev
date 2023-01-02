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
            <v-btn v-if="loginedUser" @click="good">good {{ board.good }}</v-btn>
            <v-btn v-if="loginedUser" @click="bad">bad  {{ board.bad }}</v-btn>
            <v-container>
                <v-btn @click="back">뒤로가기</v-btn>
            </v-container>
        </v-container>
    </v-container>
  </v-sheet>
</template>

<script>
const axios = require("axios");
export default {
    created () {
        const uid = this.$route.params.uid;
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
        good() {
            axios({
            method: "POST",
            url: '/api/board/' + this.board.uid  + '/good',
            data: {
                uid : this.board.uid , 
                email : this.loginedUser,
            },
            headers: {'Content-type': 'application/json'}
            }).then((res)=>{
                if(res.data.result === 200){
                    alert("좋아요!")
                    this.board.good += 1;
                }else if(res.data.result === 500){
                    alert("서버에 문제가 생겼으니 관리자에게 문의하세요")
                }
            }).catch(error=>{
                alert("문제가 생겼으니 관리자에게 문의하세요")
            });           
        },
        bad() {
            axios({
            method: "POST",
            url: '/api/board/' + this.board.uid  + '/bad',
            data: {
                uid : this.board.uid , 
                email : this.loginedUser,
            },
            headers: {'Content-type': 'application/json'}
            }).then((res)=>{
                if(res.data.result === 200){
                    alert("싫어요...")
                    this.board.bad += 1;
                }else if(res.data.result === 500){
                    alert("서버에 문제가 생겼으니 관리자에게 문의하세요")
                }
            }).catch(error=>{
                alert("문제가 생겼으니 관리자에게 문의하세요")
            });            
        },
        back() {
            
        },
    },
}
</script>

<style>

</style>