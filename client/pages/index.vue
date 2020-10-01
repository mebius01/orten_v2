<template>
  <div class="card-grid">
    <Card v-for="item in this.$store.state.products.object_list"
      :key="item.id"
      :product="item">
    </Card>
    <!-- {{object_list}} -->
  </div>
</template>

<script>
import Card from '../components/Card'
import {mapGetters, mapActions} from 'vuex'
  export default {
    name: "Products",
    components: {
      Card
    },
    data() {
      return {
        object_list: this.$store.state.products.object_list
      }
    },
    methods: {
      ...mapActions("products", ['GET_OBJECT_LIST']),
      // ...mapGetters("products", ['OBJECT_LIST'])
    },
    mounted() {
      this.GET_OBJECT_LIST()
    },
    // async asyncData({$axios}) {
    // const object_list = await $axios.$get('http://127.0.0.1:8000/api/product/')
    //   return {object_list}
    // }
  }
</script>

<style lang="scss" scoped>
.padding-12 {
  padding: 12px 24px;
}
.card-grid {
  @extend .padding-12;
}
</style>