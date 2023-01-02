<template>
    <v-row>
      <v-col style="text-align: center;">
        <v-sheet
          min-height="70vh"
          rounded="lg"
          style="text-align: -webkit-center;"
        >
          <v-app-bar-title>
            MYPAGE
          </v-app-bar-title>
          <v-app-bar height="1px"></v-app-bar>
          <v-app-bar-title>
            Email
          </v-app-bar-title>
          <v-text-field style="width:50%" label="useing Email. this is readonly. if you click this component, Nothing is happening" value="asdf" readonly></v-text-field>
          <v-app-bar-title>
            password
          </v-app-bar-title>
          <v-text-field style="width:50%" label="if you want change password, input new password" value=""></v-text-field>
          <v-app-bar-title>
            RePassword
          </v-app-bar-title>
          <v-text-field style="width:50%" label="if you want change password, again input new password" value=""></v-text-field>
          <v-app-bar-title>
            name
          </v-app-bar-title>
          <v-text-field style="width:50%" label="if you want change name, input please" value="이름"></v-text-field>
          <v-app-bar-title>
            phone
          </v-app-bar-title>
          <v-text-field style="width:50%" label="if you want change phone, input please" value="폰번"></v-text-field>
          <v-btn @click="save">저장</v-btn>
        </v-sheet>
      </v-col>
    </v-row>
</template>

<script>
const axios = require('axios');
export default {
  created () {
    const userEmail = this.$store.getters.getUserEmail;
    this.email= userEmail;
    axios({
    method: "POST",
    url: '/api/boardSave',
    data: {
        email : this.email,
    },
    headers: {'Content-type': 'application/json'}
    }).then((res)=>{
        if(res.data.result === 200){
          this.user = res.data.user
        }else{
            alert("문제가 생겼으니 관리자에게 문의하세요")
        }
    }).catch(error=>{
        alert("문제가 생겼으니 관리자에게 문의하세요")
          });
  },
  data() {
    return {
      email: '',
      user: {}
    }
  },
  methods: {
    save() {
      axios({
        method: "POST",
        url: '/api/mypageSave',
        data: {
            email : this.email,
        },
        headers: {'Content-type': 'application/json'}
        }).then((res)=>{
            if(res.data.result === 200){
                alert("저장되었습니다.")
            }else{
                alert("문제가 생겼으니 관리자에게 문의하세요")
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