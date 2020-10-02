<template>
  <ul>
    <li v-for="item in object_list.data" :key="item.id" >
      <ul>
        <li>{{item.name}} - {{item.parent}}</li>
      </ul>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        object_list: [],
      }
    },
    // mounted() {
    //   axios.get('http://127.0.0.1:8000/api/category/')
    //   .then(response => this.object_list = response)
    // },
  }
</script>

<style lang="scss" scoped>
  ul {
    margin-left: 10px;

    li {
      margin-left: 20px;
    }
  }
</style>