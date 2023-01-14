<template>
  <v-sheet
  min-height="70vh"
  width="100%"
  rounded="lg"
  >
      <v-text-field
        label="title"
        hide-details="auto"
        v-model="board.title"
      ></v-text-field>
      <input type="file" id="file">
      <div style="border: 1px solid; border-top:5px;">
        <ckeditor 
          v-model="board.content" 
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
      const uid = this.$route.params.uid;
      console.log(uid);
      this.email = this.$store.getters.getUserEmail
      axios({
          method: "POST",
          url: '/api/getBoard/' + uid ,
          data: {
              uid : uid
          },
          headers: {'Content-type': 'application/json'}
          }).then((res)=>{
              if(res.data.result === 200){
                  this.board = res.data.board
              }else{
                  // alert("문제가 생겼으니 관리자에게 문의하세요")
              }
          }).catch(error=>{
              // alert("문제가 생겼으니 관리자에게 문의하세요")
          });
    },
    data () {
      return {
        board: {
        },
        editorConfig: {
          height: '500px',
          resize_enabled : false
        },
      }
    },
    methods: {
      save() {
        const uid = this.$route.params.uid;
        let file = document.getElementById('file');
        axios({
          method: "POST",
          url: '/api/modifySave',
          data: {
              uid : this.board.uid,
              title : this.board.title,
              content : this.board.content,
              updated_at : this.board.updated_at,
              file : file,
          },
          headers: {'Content-type': 'application/json'}
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