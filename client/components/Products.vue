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
    asyncData(context) {
      console.log(context);
    }
  }
</script>

<style lang="scss" scoped>
// .padding-12 {
//   padding: 12px 24px;
// }
.card-grid {
  padding: 12px 5px;
}
</style>