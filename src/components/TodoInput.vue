<template>
  <div>
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <button @click="addTodo">add</button>
  </div>
</template>

<script>
export default {
  data (){
    return{
      newTodoItem : "",
    }
  },
  methods:{
    addTodo() {
      if(this.newTodoItem === ''){
        alert('값을 입력해주세요!')
        return ;
      }
      // this.$emit('addTodoItem',this.newTodoItem)
      this.$store.commit('addOneItem',this.newTodoItem)
      this.clearInput();
    },
    clearInput(){
      this.newTodoItem="";
    },
  },
}
</script>

<style scoped>
inut:focus{
  outline: none;
}
</style>