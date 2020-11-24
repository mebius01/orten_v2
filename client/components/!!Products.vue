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
  }
</script>