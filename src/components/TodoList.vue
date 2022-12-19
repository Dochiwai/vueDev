<template>
  <div>
    <ul>
      <li v-bind:key="todoItem" v-for="(todoItem,index) in this.$store.state.todoItmes" >
        {{todoItem}} <button v-on:click="todoItemsDelete(todoItem,index)">삭제</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods :{
    todoItemsDelete(todoItem,index){
      this.$store.commit('removeOneItem',{todoItem,index});
    }
  }
}
</script>

<style>
li{
  list-style: none;
}
</style>