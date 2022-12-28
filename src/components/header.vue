<template>
    <v-app-bar
        app
        color="white"
        flat
      >
        <v-container class="py-0 fill-height">
          <v-avatar
            class="mr-10"
            color="grey darken-1"
            size="32"
            @click="onMain"
          ></v-avatar>
  
          <v-btn
            text
            @click="boardList"
          >
            Board
          </v-btn>

          <v-btn
            text
            @click="mypage"
          >
            MyPage
          </v-btn>
  
          <v-spacer></v-spacer>
          <v-btn text @click="logout">
            로그아웃
          </v-btn>
          <v-responsive max-width="260">
            <v-text-field
              dense
              flat
              hide-details
              rounded
              solo-inverted
            ></v-text-field>
          </v-responsive>
        </v-container>
      </v-app-bar>
</template>

<script>
export default {
    data: () => ({
    }),
    methods: {
      boardList() {
        location.href="/boardList"
      },
      mypage() {
        location.href="/myPage"
      },
      onMain(){
        location.href="/"
      },
      logout(){
        alert("로그아웃 되었습니다.")
        this.$store.commit('userLogout');
      }
    },
}
</script>

<style>

</style>