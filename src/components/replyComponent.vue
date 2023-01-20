<template>
      <v-sheet
  width="100%"
  rounded="lg"
  >     <div style="border: 1px solid; border-top:5px;">
        <ckeditor 
          v-model="comment" 
          height="10"
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
    created (){
      this.email = this.$store.getters.getUserEmail
      this.uid = this.$route.params.uid
    },
    data(){
      return{
        comment : '',
        email : '',
        mother_uid : '',
        editorConfig:{
          height:'300px',
          resize_enabled : false
        },
      }
    },
    methods: {
      save() {
        axios({
          url: '/api/commentSave',
          method: "POST",
          data: {
            comment : this.comment,
            created_user : this.email,
            mother_uid : this.uid
          },
          headers: {
            'Content-type': 'application/json',
          },
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