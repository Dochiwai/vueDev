<template>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">cnt</th>
            <th class="text-left">title</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in list"
            :key="item.name"
            @click="boardDetail(item.uid)"
          >
            <td>{{ item.view_cnt }}</td>
            <td>{{ item.title }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            default: [],
        },
    },
    methods: {
        boardDetail(value) {
            this.$router.push({
                name: "boardDetail",
                params: { uid: value },
            });
        }
    },
}
</script>

<style>

</style>