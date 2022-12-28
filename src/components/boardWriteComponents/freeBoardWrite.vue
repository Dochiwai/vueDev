<template>
  <v-container>
    <v-text-field
      label="title"
      hide-details="auto"
      v-model="title"
    ></v-text-field>
    <div style="border: 1px solid; border-top:5px;">
      <textarea 
        placeholder="내용을 입력해주세요"
        style="width:100%; height:470px;resize:none;"
        v-model="content"
      ></textarea>
    </div>
    <v-btn
      text
      @click="save"
      >
      저장하기
    </v-btn>
  </v-container>
</template>

<script>
  const axios = require('axios')
  export default {
    data () {
      return {
        title : '',
        content : '',
      }
    },
    methods: {
      save() {
        axios({
          method: "POST",
          url: '/api/boardSave',
          data: {
              title : this.title,
              content : this.content
          },
          headers: {'Content-type': 'application/json'}
          }).then((res)=>{
              if(res.data.result === 200){
                  alert("등록되었습니다.")
                  location.href='/'
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