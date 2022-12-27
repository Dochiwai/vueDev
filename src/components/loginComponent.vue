<template>
    <div class="card login">
        <h1>Sign In</h1>
        <div class="form-group">
            <v-text-field v-model="email" type="email" label="Email" required />
            <v-text-field v-model="pw" type="password" label="Password" required />
            <v-btn elevation="2" @click="login">login</v-btn>
            
            <p style="margin-top:10px;">Don't have an account? 
                <a href="#" @click="signUpChange">Sign up here</a>
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
            pw:'',
        }
    },
    methods: {
        signUpChange() {
            this.$emit('signUpChangeChild');
        },
        login(){
            if(this.email == ''){
                alert("이메일을 입력해주세요")
                return false;
            }
            if(this.pw === ''){
                alert("비밀번호를 입력해주세요")
                return false;
            }
            axios({
            method: "POST",
            url: '/api/login',
            data: {
                email : this.email,
                pw : this.pw
            },
            headers: {'Content-type': 'application/json'}
            }).then((res)=>{
                alert("성공");
                this.$emit('loginOkChild');
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