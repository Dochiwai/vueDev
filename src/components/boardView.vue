<template>
  <v-container>
    <v-app-bar-title>1. gd</v-app-bar-title>
    <v-content style="min-height: 500px;">
        ㅎㅇㅎㅇ
    </v-content>
    <v-container style="text-align-last: center;">
        <v-btn @click="good">good 3</v-btn>
        <v-btn @click="bad">bad  3</v-btn>
        <v-container>
            <v-btn @click="back">뒤로가기</v-btn>
        </v-container>
    </v-container>
  </v-container>
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
        }
    },
    methods: {
        good() {
            axios({
            method: "POST",
            url: '/api/board/' + this.board.uid  + '/good',
            data: {
                uid : uid , 
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
                uid : uid , 
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