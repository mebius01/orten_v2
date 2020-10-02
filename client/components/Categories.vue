<template>
  <aside>
    <div class="header-for-block" id="categories"><i class="fas fa-th-list"></i>Категории</div>
    <ul>
      <li v-for="item in OBJECT_LIST" :key="item.id" >{{item.name}} - {{item.parent}}</li>
    </ul>
  </aside>
</template>

<script>
// import axios from 'axios'
import {mapGetters, mapActions} from 'vuex'
  export default {
    computed: {
      ...mapGetters("categories", ['OBJECT_LIST'])
    },
    methods: {
      ...mapActions("categories", ['GET_OBJECT_LIST']),
    },
    mounted() {
      this.GET_OBJECT_LIST()
    },
    asyncData(context) {
      console.log(context);
    }
    // data() {
    //   return {
    //     object_list: [],
    //   }
    // },
    // mounted() {
    //   axios.get('http://127.0.0.1:8000/api/category/')
    //   .then(response => this.object_list = response)
    // },
  }
</script>

<style lang="scss" scoped>
$text-color: #2E4053;
$green-color: #85C987;
$global_blue: #428bca;
$color-red: #d9534f;

.padding-12 {
  padding: 12px 24px;
}
.link_style {
  text-decoration: none;
  color: $text-color;
  display: block;
}
.space-between {
  display: flex;
  justify-content: space-between;
}
.header-for-block {
  padding-left: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  color: $text-color;
  background-color: $green-color;

  i {
    margin-right: 5px;
  }
}
</style>