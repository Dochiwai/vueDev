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
    created () {
        console.log(window.performance.navigation.type)
    },
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
            }else{
                this.boardType='S'
            }
        }
    },
}
</script>

<style>

</style>