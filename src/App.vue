<template>
  <div id="app">
     <TodoHeader></TodoHeader>
     <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
     <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem"></TodoList>
     <TodoFooter v-on:removeAll="removeAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';
import TodoInput from './components/TodoInput.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  data : function(){
    return {
      todoItems : []
    }
  },

  components : {
    TodoHeader,
    TodoList,
    TodoInput,
    TodoFooter,
  }
}
</script>

<style> 
body{
  text-align: center;
  background-color: #F6F6F6;

}
input{
  border-style: groove;
  width: 200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
