<template>
  <div class="card register">
    <h1>Sign Up</h1>
    <div class="form-group">
        <v-text-field v-model="email" type="email" class="form-control" :rules="email_rules" placeholder="Email" required />
        <v-text-field v-model="pw" type="password" class="form-control" :rules="rules" placeholder="Password" required />
        <v-text-field v-model="name" type="text" class="form-control" placeholder="name" required /> 
        <v-text-field v-model="phone" type="text" class="form-control" placeholder="phone" required /> 

        <v-btn elevation="2" @click="signUp">login</v-btn>
        <p style="margin-top:10px;">Already have an account? 
          <a href="#" @click="signUpChange">Sign in here</a>
        </p>
      </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      email: '',
      email_rules: [
        v => !!v || '이메일은 필수 입력사항입니다.',
        v => /^[a-zA-Z0-9]*$/.test(v) || '이메일은 영문+숫자만 입력 가능합니다.',
        v => !( v && v.length >= 20) || '이메일은 20자 이상 입력할 수 없습니다.'
      ],
      pw:'',
      name:'',
      phone:'',

    }
  },
  methods: {
    signUpChange() {
      this.$emit('signUpChangeChild')
    },
    signUp(){
      axios({
        method: "POST",
        url: '/api/signUp',
        data: {
            email : this.email,
            pw : this.pw,
            name : this.name,
            phone : this.phone,
        },
        headers: {'Content-type': 'application/json'}
        }).then((res)=>{
            alert("성공");
            console.log(res.data);
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