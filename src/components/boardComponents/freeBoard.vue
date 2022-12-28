<template>
  <v-container>
    <span><h1>자유게시판</h1></span>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Calories
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in desserts"
            :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-pagination
        v-model="page"
        :length="6"
      ></v-pagination>
    <v-btn v-if="logined" @click="changeBoardType">
        글쓰기
    </v-btn>
  </v-container>

</template>

<script>
  export default {
    computed: {
      logined(){
        return this.$store.getters.isUserLogined
      }
    },
    methods: {
      changeBoardType() {
        location.href = '/boardList/WF'
      }
    },
    data () {
      return {
        page: 1,
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
      }
    },
  }
</script>

<style>

</style>