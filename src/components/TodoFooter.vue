<template>
  <div>
    <button @click="clearTodo">Clear all</button>
  </div>
</template>

<script>
export default {
  methods : {
    clearTodo(){
      this.$store.commit('removeAll');
    }
  },
}
</script>

<style scoped>
  
</style>