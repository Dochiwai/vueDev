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
            axios({
            method: "POST",
            url: '/api/login',
            data: {
                email : this.email,
                pw : this.pw
            },
            headers: {'Content-type': 'application/json'}
            }).then((res)=>{
                if(res.data.result === 200){
                    alert("어서오세요")
                    this.$store.commit('userLogined');
                }else if(res.data.result === 400){
                    alert("서버에 문제가 생겼으니 관리자에게 문의하세요")
                }
                else if(res.data.result === 500){
                    alert("아이디 혹은 비밀번호가 틀렸씨발")
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