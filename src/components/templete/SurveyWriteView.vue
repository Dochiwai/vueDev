<template>
  <v-app>
    <v-container>
        <v-app-bar>
            <span>1.</span> <input v-model="item.questions[0].title" type="text" style="width:100%;" @change="changeQeustionTitle" placeholder="제목을 입력해주세요"/>
        </v-app-bar>
    </v-container>
  </v-app>
</template>

<script>
export default {
  props: {
        item: {
            type: Object,
            default: ()=>{
                title: '';
                content: '';
                selectMin : 0;
                selectMax : 0;
                type: '';
                questions : [
                    {
                        title:'',
                        contents:[],
                    }
                ]
            }
        },
    },
  methods: {
    changeQeustionTitle(value) {
      this.$emit('changeQuestionTitleLastChild',value)
    }
  },
}
</script>

<style>

</style>