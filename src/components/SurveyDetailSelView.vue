<template>
    <v-app>
        <v-container fluid>
            <v-row align="center">
                <v-select
                    @change="changeType"
                    :items = "typeSelector"
                    v-model = "item.type"
                    label="타입을 선택해주세요"
                >
                </v-select> 
            </v-row>
        </v-container>
        <v-container fluid>
            <v-row align="center">
                <v-select
                    @change="changeMax"
                    :items = "maxSelector"
                    v-model = "item.selectMax"
                    label="최대 선택 갯수 입력"
                >
                </v-select> 
            </v-row>
        </v-container>
        <v-container fluid>
            <v-row align="center">
                <v-select
                    @change="changeMin"
                    :items = "minSelector"
                    v-model = "item.selectMin"
                    label="최소 선택 갯수 입력"
                >
                </v-select> 
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            typeSelector :[
                '객관식','객관식(다중)','주관식','VS','슬라이드바'
            ],
            maxSelector:[],
            minSelector:[]
        }
    },
    watch: {
        contents : function(){
            console.log('gd')
        }
    },
    props: {
        item: {
            type: Object,
            default: () =>{
                title= "",
                content= "",
                selectMin = 0,
                selectMax = 0,
                type= "",
                questions = [
                    {
                    title:'',
                    contents:[],
                    }
                 ]
            }
        },
    },
    methods: {
        changeMax(e) {
            this.$emit('changeMaxChild',e);
        },
        changeMin(e){
            thie.$emit('changeMinChild',e);
        },
        changeType(e){
            this.$emit('changeTypeChild',e);
        },

    },
}
</script>

<style>
.v-text-field.v-text-field--solo .v-input__control{
    min-height: 10px;
}
.v-input .v-input--is-label-active .v-input--is-dirty .theme--light .v-text-field .v-text-field--is-booted .v-select{
    height : 10px
}
</style>