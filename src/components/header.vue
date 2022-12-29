<template>
    <v-app-bar
        app
        color="white"
        flat
      >
        <v-container class="py-0 fill-height">
          <v-avatar
            class="mr-10"
            color="grey darken-1"
            size="32"
            @click="onMain"
          ></v-avatar>
  
          <v-btn
            text
            @click="boardList"
          >
            Board
          </v-btn>

          <v-btn
            text
            @click="mypage"
          >
            MyPage
          </v-btn>
  
          <v-spacer></v-spacer>
          <v-btn text @click="logout">
            로그아웃
          </v-btn>
          <v-responsive max-width="260">
            <v-text-field
              dense
              flat
              hide-details
              rounded
              solo-inverted
            ></v-text-field>
          </v-responsive>
        </v-container>
      </v-app-bar>
</template>

<script>
const axios = require('axios')
export default {
    data: () => ({
    }),
    methods: {
      boardList() {
        location.href="/boardList"
      },
      mypage() {
        this.$router.push({
            name: "mypage",
        }).catch(()=>{});
      },
      onMain(){
        this.$router.push({
            name: "main",
        }).catch(()=>{});
      },
      logout(){
        axios({
          method: "POST",
          url: '/api/logout',
          data: {},
          headers: {'Content-type': 'application/json'}
          }).then((res)=>{
              if(res.data.result === 200){
                alert("안녕히가세요")
                this.$store.commit('userLogout');
              }else{
                alert("문제가 발생했습니다... 다시 시도해주세요")
              }
          }).catch(error=>{
              alert("문제가 생겼으니 관리자에게 문의하세요")
          });
        
      }
    },
}
</script>

<style>

</style>