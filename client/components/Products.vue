<template>
  <div class="card-grid">
    <Card v-for="item in OBJECT_LIST"
      :key="item.id"
      :product="item">
    </Card>
  </div>
</template>

<script>
import Card from '~/components/Card'
import {mapGetters, mapActions} from 'vuex'
  export default {
    name: "Products",
    components: {
      Card
    },
    computed: {
      ...mapGetters("products", ['OBJECT_LIST'])
    },
    methods: {
      ...mapActions("products", ['GET_OBJECT_LIST']),
    },
    mounted() {
      this.GET_OBJECT_LIST()
    },
    async asyncData({$axios}) {
      let response = await $axios.$get("http://127.0.0.1:8000/api/product/")
      let products = response.data.results
      return {
        products
      }
    }
  }
</script>

<style lang="scss" scoped>
.card-grid {
  padding: 12px 5px;
}
</style>