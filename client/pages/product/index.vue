<template>
  <div>
    <div class="main-container">
      <aside>
        <Filters />
      </aside>
      <main>
        <div class="header-for-block">
          <span><i class="fab fa-product-hunt"></i>Товары</span>
          <div>
            <span class="ordering"
              @click="changeOrderingPrice">
              <i class="fas" :class="{
                'fa-chevron-down': !GET_GRID,
                'fa-chevron-up': GET_GRID
                }">
              </i>
            </span>
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
          <div>
            <ProductList v-for="item in GET_RESULTS"
              :key="item.id"
              :product="item">
            </ProductList>
          </div>
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
        console.log('ordering price');
      },
		  ...mapActions("commodity", [
        "SEND_DATA",
        "SEND_QUERY",
        "SEND_URL",
        "SEND_PAGE_NUMBER_CURRENT",
        "SEND_GRID"
		  ]),
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
    created() {
      const query = this.$route.query
      const url = "/product/"
      this.SEND_QUERY(query)
      this.SEND_URL(url)
      this.SEND_DATA()
      
      if (!query.page){
        query.page = "1"
        this.SEND_PAGE_NUMBER_CURRENT(query.page)
      } else {
        this.SEND_PAGE_NUMBER_CURRENT(query.page)
      }
    }
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