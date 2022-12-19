<template>
  <div id="app">
    <Header></Header>
    <!-- 라우터 화면이 아래에 출력 -->
    <router-link to="/input">입력</router-link>
    <router-link to="/list">목록</router-link>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/TodoFooter.vue';
import Header from './components/TodoHeader.vue';

export default {
  components : {
    Header,
    Footer
  }
}
</script>

<style>

</style>