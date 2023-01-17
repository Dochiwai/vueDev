<template>
  <v-sheet
  min-height="70vh"
  width="100%"
  rounded="lg"
  >
      <v-text-field
        label="title"
        hide-details="auto"
        v-model="title"
      ></v-text-field>
      <v-file-input @change="fileSelect"/>
      <div style="border: 1px solid; border-top:5px;">
        <ckeditor 
          v-model="content" 
          height="500"
          :config="editorConfig">
        </ckeditor>
      </div>
      <v-btn
        text
        @click="save"
        >
        저장하기
      </v-btn>
  </v-sheet>
</template>

<script>
  const axios = require('axios')
  export default {
    created () {
      this.type = this.$route.params.type,
      this.email = this.$store.getters.getUserEmail
    },
    data () {
      return {
        title : '',
        content: '',
        type : '',
        email : '',
        editorConfig: {
          height: '500px',
          resize_enabled : false
        },
        uploadFile : '',
      }
    },
    methods: {
      fileSelect(file){
        this.uploadFile = file;
      },
      save() {
        let formData = new FormData();
        formData.append('title',this.title);
        formData.append('content',this.content);
        formData.append('type',this.type);
        formData.append('created_user',this.email);
        formData.append('file',this.uploadFile);
        axios({
          headers: {
            "Content-Type": "multipart/form-data",
          },
          url: '/api/boardSave',
          method: "POST",
          data: formData
          }).then((res)=>{
              if(res.data.result === 200){
                  alert("등록되었습니다.")
                  location.href='/boardList'
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