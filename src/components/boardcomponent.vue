<template>
    <v-row>
        <sidebar-vue 
            @changeBoardTypeChild="changeBoardType"
        ></sidebar-vue>
        <v-col>
            <v-sheet
            min-height="70vh"
            rounded="lg"
            >
                <boardListVue :boardType="boardType"/>
            </v-sheet>
        </v-col>
    </v-row>
</template>

<script>
import boardListVue from './boardList.vue'
import sidebarVue from './sidebar.vue'

export default {
    components: {
        sidebarVue,
        boardListVue,
    },
    data() {
        return {
            boardType: 'F'
        }
    },
    methods: {
        changeBoardType(value){
            if(value == 'F'){
                this.boardType='F'
            }else if(value == 'U'){
                this.boardType='U'
            }else if(value == 'S'){
                this.boardType='S'
            }else{
                this.boardType="N"
            }
        }
    },
}
</script>

<style>

</style>