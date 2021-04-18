<template>
  <div>
    <div class="main-container">
      <aside>
        <Filters />
      </aside>
      <main>
        <div class="header-for-block">
          <span><i class="fab fa-product-hunt"></i>{{$t('dom.products')}}</span>
          <div>
            <span class="ordering" 
              @click.prevent="changeGrid">
              <i class="fas" :class="{
                'fa-bars': !GET_GRID,
                'fa-th': GET_GRID
                }">
              </i>
            </span>
          </div>
        </div>
        <template v-if="GET_GRID">
          <ul>
            <ProductList v-for="item in GET_RESULTS"
              :key="item.id"
              :product="item">
            </ProductList>
          </ul>
        </template>
        <template v-else>
          <div class="card_block">
            <Card v-for="item in GET_RESULTS"
              :key="item.id"
              :product="item">
            </Card>
          </div>
        </template>
      </main>
    </div>
    <Pagination />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ProductList from "~/components/ProductList"
import Card from '../../components/Card.vue'
import Filters from "@/components/Filters"
import Pagination from "@/components/Pagination"
  export default {
    name: "Products",
    components: {
      ProductList,
      Filters,
      Pagination,
      Card,
    },
    methods: {
      changeGrid() {
        this.SEND_GRID()
      },
      changeOrderingPrice() {
      },
      ...mapActions("commodity", [
        "SEND_DATA",
        "SEND_QUERY",
        "SEND_URL",
        "SEND_PAGE_NUMBER_CURRENT",
        "SEND_GRID",
		]),
    ...mapActions("breadcrumbs", ['SEND_ID', 'SEND_END_PAGE']),
	},
    computed: {
      ...mapGetters("commodity", [
        "GET_RESULTS",
        "GET_COUNT",
        "GET_NEXT",
        "GET_PREVIOUS",
        "GET_PAGE_NUMBER_NEXT",
        "GET_PAGE_NUMBER_PREV",
        "GET_PAGE_NUMBER_CURRENT",
        "GET_GRID",
      ]),
    },
    mounted() {
      const url = "/product/"
      this.SEND_URL(url)
      this.SEND_DATA()
      if (this.$route.query.category) {
        this.SEND_ID(Number(this.$route.query.category))
      } else {
      this.SEND_END_PAGE({name: this.$t('dom.products')})
    }
    },
  }
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';
.header-for-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ordering {
  cursor: pointer;
}
</style>