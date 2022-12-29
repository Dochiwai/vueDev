<template>
  <v-container>
    <span><h1>자유게시판</h1></span>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              cnt
            </th>
            <th class="text-left">
              good
            </th>
            <th class="text-left">
              bad
            </th>
            <th class="text-left">
              title
            </th>
            <th class="text-left">
              created_user
            </th>
            <th class="text-left">
              created_At
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in boardList"
            :key="item.name"
            @click="boardDetail(item.uid)"
          >
            <td>{{ item.cnt }}</td>
            <td>{{ item.good }}</td>
            <td>{{ item.bad }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.created_user }}</td>
            <td>{{ item.created_at }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-pagination
        v-model="page"
        :length="6"
      ></v-pagination>
    <v-btn v-if="logined" @click="changeBoardType">
        글쓰기
    </v-btn>
  </v-container>

</template>

<script>
  const axios = require('axios');
  export default {
    created () {
      axios({
        method: "POST",
        url: '/api/boardList',
        data: {
            type : 'F' , 
        },
        headers: {'Content-type': 'application/json'}
        }).then((res)=>{
            if(res.data.result === 200){
                this.boardList = res.result.boardList;
            }else if(res.data.result === 400){
                alert("서버에 문제가 생겼으니 관리자에게 문의하세요")
            }
            else if(res.data.result === 500){
                alert("서버에 문제가 생겼으니 관리자에게 문의하세요")
            }
        }).catch(error=>{
            alert("문제가 생겼으니 관리자에게 문의하세요")
        });
    },
    computed: {
      logined(){
        return this.$store.getters.isUserLogined
      }
    },
    methods: {
      changeBoardType() {
        this.$router.push({
            name: "boardFreeWrite",
            params:{type:'F'}
        });
      },
      boardDetail(value){
        this.$router.push({
            name: "boardDetail",
            params: {uid : value}
        });
      }
    },
    data () {
      return {
        page: 1,
        boardList: [
          {
            uid : 1,
            good:0,
            bad : 0,
            cnt : 0,
            title : 'gd',
            created_user:'dd',
            created_at : 'ff',
          }
        ],
      }
    },
  }
</script>

<style>

</style>