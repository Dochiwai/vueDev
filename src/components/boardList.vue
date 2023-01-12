<template>
  <v-container>
    <span
      ><h1>{{ headName }}</h1></span
    >
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">cnt</th>
            <th class="text-left">good</th>
            <th class="text-left">bad</th>
            <th class="text-left">title</th>
            <th class="text-left">created_user</th>
            <th class="text-left">created_At</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in boardList"
            :key="item.name"
            @click="boardDetail(item.uid)"
          >
            <td>{{ item.view_cnt }}</td>
            <td>{{ item.good_cnt }}</td>
            <td>{{ item.bad_cnt  }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.created_user }}</td>
            <td>{{ item.created_at }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-pagination @input="pageMove" v-model="page" :length="pageLenght" total-visible="10"></v-pagination>
    <btnVue v-if="logined" :text="'글쓰기'" @btnClick="changeBoardType" />
  </v-container>
</template>

<script>
import btnVue from './btn.vue';
const axios = require("axios");

export default {
  props: {
    boardType: {
      type: String,
      default: "F",
    },
  },
  created() {
    let query = window.location.search;  
    let param = new URLSearchParams(query);     
    let type = param.get('type');
    let page = param.get('page');

    if( type != undefined || type != null){
      this.boardType = type; 
    }
    if(page != undefined || page != null){
      this.page = page;
    }else{
      this.page = 1;
    }

    axios({
      method: "POST",
      url: "/api/boardList",
      data: {
        type: this.boardType,
        page : 1,
      },
      headers: { "Content-type": "application/json" },
    })
      .then((res) => {
        if (res.data.result === 200) {
          this.boardList = res.data.boardList;
          if((res.data.totalCnt / 10) > 0){
            this.pageLenght = (res.data.totalCnt / 10) + 1;
          }else{
            this.pageLenght = (res.data.totalCnt / 10)
          }
        } else if (res.data.result === 400) {
          alert("서버에 문제가 생겼으니 관리자에게 문의하세요");
        } else if (res.data.result === 500) {
          alert("서버에 문제가 생겼으니 관리자에게 문의하세요");
        }
      })
      .catch((error) => {
        alert("문제가 생겼으니 관리자에게 문의하세요");
      });
  },
  watch: {
    boardType(newValue, oldValue) {
      if (newValue == "F") {
        this.headName = "자유게시판";
      } else if (newValue == "U") {
        this.headName = "유머게시판";
      } else if (newValue == "S"){
        this.headName = "노래게시판"
      } else {
        this.headName = "응가";
      }
      history.pushState(null,null,'boardList?page=1&type='+newValue); 
      
      axios({
        method: "POST",
        url: "/api/boardList",
        data: {
          type: this.boardType,
        },
        headers: { "Content-type": "application/json" },
      })
        .then((res) => {
          if (res.data.result === 200) {
            this.boardList = res.data.boardList;
            if((res.data.totalCnt / 10) > 0){
              this.pageLenght = (res.data.totalCnt / 10) + 1;
            }else{
              this.pageLenght = (res.data.totalCnt / 10)
            }
          } else if (res.data.result === 400) {
            alert("서버에 문제가 생겼으니 관리자에게 문의하세요");
          } else if (res.data.result === 500) {
            alert("서버에 문제가 생겼으니 관리자에게 문의하세요");
          }
        })
        .catch((error) => {
          alert("문제가 생겼으니 관리자에게 문의하세요");
        });
    },
  },
  computed: {
    logined() {
      return this.$store.getters.isUserLogined;
    },
  },
  methods: {
    changeBoardType() {
      this.$router.push({
        name: "boardFreeWrite",
        params: { type: this.boardType },
      });
    },
    boardDetail(value) {
      this.$router.push({
        name: "boardDetail",
        params: { uid: value },
      });
    },
    pageMove(page){
      this.page = page;
      axios({
        method: "POST",
        url: "/api/boardList",
        data: {
          type: this.boardType,
          page: this.page,
        },
        headers: { "Content-type": "application/json" },
      })
        .then((res) => {
          if (res.data.result === 200) {
            this.boardList = res.data.boardList;
            history.pushState(null,null,'boardList?page='+this.page+'&type='+this.boardType); 
          } else if (res.data.result === 400) {
            alert("서버에 문제가 생겼으니 관리자에게 문의하세요");
          } else if (res.data.result === 500) {
            alert("서버에 문제가 생겼으니 관리자에게 문의하세요");
          }
        })
        .catch((error) => {
          alert("문제가 생겼으니 관리자에게 문의하세요");
        });
    }
  },
  destroyed () {
    
  },
  data() {
    return {
      page: 1,
      pageLenght: 10,
      boardList: [],
      headName: "자유게시판",
    };
  },
  components: {
    btnVue,
  },
};
</script>

<style></style>
