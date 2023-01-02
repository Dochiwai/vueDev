<template>
    <v-col cols="2">
        <v-sheet rounded="lg">
            <v-list color="transparent">
                <v-list-item
                link
                v-for="item in type"
                v-bind:key="item.uid"
                @click="changeBoardType(item.type)"
                >
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ item.name }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-sheet>
    </v-col>
</template>

<script>
const axios = require("axios");
export default {
    created () {
        this.getBoardType();
    },
    data() {
        return {
            type : [],
        }
    },
    methods: {
        changeBoardType(value) {
            this.$emit('changeBoardTypeChild',value)
        },
        getBoardType(){
            axios({
            method: "POST",
            url: '/api/boardType',
            headers: {'Content-type': 'application/json'}
            }).then((res)=>{
                if(res.data.result === 200){
                    this.type = res.data.list;
                }
            }).catch(error=>{
                console.log("실패");
                console.log(error);
            });
        }
    },
}
</script>

<style>

</style>