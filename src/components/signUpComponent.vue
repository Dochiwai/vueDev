<template>
  <div class="card register">
    <h1>Sign Up</h1>
    <div class="form-group">
        <v-text-field v-model="email" type="email" class="form-control" :rules="email_rules" placeholder="Email" required />
        <v-text-field v-model="pw" type="password" class="form-control" :rules="pw_rules" placeholder="Password" required />
        <v-text-field v-model="nickname" type="text" class="form-control" placeholder="nickname" required /> 
        <v-text-field v-model="name" type="text" class="form-control" placeholder="name" required /> 
        <v-text-field v-model="phone" type="text" class="form-control" placeholder="phone" required /> 

        <v-btn elevation="2" @click="signUp">signUp</v-btn>
        <p style="margin-top:10px;">Already have an account? 
          <a href="#" @click="signUpChange">Sign in here</a>
        </p>
      </div>
  </div>
</template>

<script>
const axios = require("axios");
const validatePassword = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/
const validateEmail = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-Za-z0-9\\-]+/
export default {
  data() {
    return {
      email: '',
      email_rules: [
        v => !!v || '이메일은 필수 입력사항입니다.',
        v => validateEmail.test(v) || '이메일은 형식을 지켜주세요.',
        v => !( v && v.length < 5) || '이메일은 5자 이상 입력해주세요.',
        v => !( v && v.length >= 30) || '이메일은 30자 이상 입력할 수 없습니다.'
      ],
      pw:'',
      pw_rules: [
        v => !!v || '비밀번호는 필수 입력사항입니다.',
        v => validatePassword.test(v) || '특수문자 / 문자 / 숫자 포함 형태의 8~16자리 이내의 암호 정규식을 지켜주세요.',
      ],
      name:'',
      phone:'',
    }
  },
  methods: {
    signUpChange() {
      this.$emit('signUpChangeChild')
    },
    signUp(){
      if(this.email == '' || !(validateEmail.test(this.email))){
        alert("이메일 형식을 정확히 입력해주세요");
        return false;
      }
      if(this.pw == '' || !(validatePassword.test(this.pw))){
        alert("비밀번호 형식을 정확히 입력해주세요");
        return false;
      }
      if(this.name == ''){
        alert("이름을 입력해주세요")
        return false;
      }
      if(this.phone == ''){
        alert("핸드폰 번호를 입력해주세요")
        return false;
      }
      axios({
        method: "POST",
        url: '/api/signUp',
        data: {
            email : this.email,
            pw : this.pw,
            nickname : this.nickname,
            name : this.name,
            phone : this.phone,
        },
        headers: {'Content-type': 'application/json'}
        }).then((res)=>{
            if(res.data.result === 200){
              alert("회원가입 감사합니다..")
              location.href="/"
            }else if (res.data.result === 500){
              alert("이미 사용중인 아이디입니다.")
            }
        }).catch(error=>{
            console.log("실패");
            console.log(error);
        });
    }
  },
}
</script>

<style>

</style>