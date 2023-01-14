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
        <v-text-field style="width:50%" 
          v-model="user.email" 
          label="useing Email. this is readonly. if you click this component, Nothing is happening" 
          readonly></v-text-field>
        <v-app-bar-title>
          password
        </v-app-bar-title>
        <v-text-field
          v-model="user.password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          :rules="pw_rules"
          label="if you want change password,input new password"
          counter
          @click:append="show1 = !show1"
          style="width:50%"
        ></v-text-field>
        <v-app-bar-title>
          RePassword
        </v-app-bar-title>
        <v-text-field
          v-model="repassword"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          :rules="pw_rules"
          label="if you want change password,input new password"
          counter
          @click:append="show1 = !show1"
          style="width:50%"
        ></v-text-field>
        <v-app-bar-title>
          nickname
        </v-app-bar-title>
        <v-text-field style="width:50%" v-model="user.nickname" label="if you want change nickname, input please"></v-text-field>
        <v-app-bar-title>
          name
        </v-app-bar-title>
        <v-text-field style="width:50%" v-model="user.name" label="if you want change name, input please"></v-text-field>
        <v-app-bar-title>
          phone
        </v-app-bar-title>
        <v-text-field style="width:50%" v-model="user.phone" label="if you want change phone, input please"></v-text-field>
        <v-app-bar-title>
          profile
        </v-app-bar-title>
        <v-app-bar-title>
        <input multiple @change="onInputImage()" type="file" id="file">
      </v-app-bar-title>
        <v-btn @click="save">저장</v-btn>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
const axios = require('axios');
const validatePassword = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/
const validateEmail = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-Za-z0-9\\-]+/
export default {
created () {
  const userEmail = this.$store.getters.getUserEmail;
  axios({
  method: "POST",
  url: '/api/getUser',
  data: {
      email : userEmail,
  },
  headers: {'Content-type': 'application/json'}
  }).then((res)=>{
      if(res.data.result === 200){
        this.user = res.data.user
      }else{
         // alert("문제가 생겼으니 관리자에게 문의하세요")
      }
  }).catch(error=>{
      //alert("문제가 생겼으니 관리자에게 문의하세요")
  });
},
data() {
  return {
    user: {},
    repassword:'',
    show1: false,
    pw_rules: [
      v => validatePassword.test(v) || '특수문자 / 문자 / 숫자 포함 형태의 8~16자리 이내의 암호 정규식을 지켜주세요.',
    ],
  }
},
methods: {
  save() {
    if(this.user.password != '' && !(validatePassword.test(this.user.password))){
      alert("비밀번호 형식을 정확히 입력해주세요");
      return false;
    }
    if(this.repassword != '' && !(validatePassword.test(this.repassword))){
      alert("재입력한 비밀번호 형식을 정확히 입력해주세요");
      return false;
    }
    if(this.user.password != this.repassword){
      alert("비밀번호가 같지 않습니다!")
      return false;
    }

    axios({
      method: "POST",
      url: '/api/mypageSave',
      data: {
          email : this.user.email,
          password : this.user.password,
          nickname : this.user.nickname,
          phone : this.user.phone,
          name : this.user.name,
          file : '',
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