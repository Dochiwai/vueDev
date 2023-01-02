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
            <td></td>
            <td></td>
            <td>{{ item.title }}</td>
            <td>{{ item.created_user }}</td>
            <td>{{ item.created_at }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-pagination v-model="page" :length="pageLenght" total-visible="10"></v-pagination>
    <v-btn v-if="logined" @click="changeBoardType"> 글쓰기 </v-btn>
  </v-container>
</template>

<script>
const axios = require("axios");
export default {
  props: {
    boardType: {
      type: String,
      default: "F",
    },
  },
  created() {
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
      } else {
        this.headName = "응가";
      }
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
  },
  destroyed () {
    console.log('gd')
  },
  data() {
    return {
      page: 4,
      pageLenght: 10,
      boardList: [],
      headName: "자유게시판",
    };
  },
};
</script>

<style></style>
