<template>
    <v-row>
        <sidebarVue @changeBoardTypeChild="changeBoardType"></sidebarVue>
        <v-col>
            <v-sheet
            min-height="70vh"
            rounded="lg"
            >
                <freeBoardVue v-if="boardType == 'F'"></freeBoardVue>
                <yumerBoardVue v-if="boardType == 'Y'"></yumerBoardVue>
                <unggoBoardVue v-if="boardType == 'U'"></unggoBoardVue>
            </v-sheet>
        </v-col>
    </v-row>
</template>

<script>
import freeBoardVue from './boardComponents/freeBoard.vue'
import unggoBoardVue from './boardComponents/unggoBoard.vue'
import yumerBoardVue from './boardComponents/yumerBoard.vue'
import sidebarVue from './sidebar.vue'

export default {
    components: {
        sidebarVue,
        freeBoardVue,
        yumerBoardVue,
        unggoBoardVue,
    },
    data() {
        return {
            boardType: 'F'
        }
    },
    methods: {
        changeBoardType(value) {
            this.boardType = value
        }
    },
}
</script>

<style>

</style>