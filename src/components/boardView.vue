<template>
  <v-container>
    
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
                    this.board = res.result.board;
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

            }
        }
    },
}
</script>

<style>

</style>