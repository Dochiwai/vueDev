<template>
  <v-btn @click="btnClick">
    {{ text }}
  </v-btn>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: ''
        },
    },
    methods: {
        btnClick() {
            this.$emit('btnClick');
        }
    },
}
</script>

<style>

</style>
