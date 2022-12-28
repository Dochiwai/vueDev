<template>
    <v-row>
        <sidebarVue></sidebarVue>
        <v-col>
            <v-sheet
            min-height="70vh"
            rounded="lg"
            >
                <router-view></router-view>
            </v-sheet>
        </v-col>
    </v-row>
</template>

<script>
import freeBoardVue from './boardComponents/freeBoard.vue'
import unggoBoardVue from './boardComponents/unggoBoard.vue'
import yumerBoardVue from './boardComponents/yumerBoard.vue'
import freeBoardWriteVue from './boardWriteComponents/freeBoardWrite.vue'
import sidebarVue from './sidebar.vue'

export default {
    components: {
        sidebarVue,
        freeBoardVue,
        yumerBoardVue,
        unggoBoardVue,
        freeBoardWriteVue,
    },
    data() {
        return {
            boardType: 'F'
        }
    },
    methods: {
    },
}
</script>

<style>

</style>