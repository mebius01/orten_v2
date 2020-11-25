<template>
  <div>
    <div class="main-container">
      <aside>
        <div class="header-for-block">
          <span>
            <i class="fas fa-filter"></i>Фильтры
          </span>
        </div>
          <Filters />
      </aside>
      <main>
        <div class="header-for-block">
          <span><i class="fab fa-product-hunt"></i>Товары</span>
          <div>
            <span class="ordering"
              @click="changeOrderingPrice">
              <i class="fas" :class="{
                'fa-chevron-down': !GET_GRID_OR_LIST,
                'fa-chevron-up': GET_GRID_OR_LIST
                }">
              </i>
            </span>
            <span class="ordering" 
              @click.prevent="changeListOrGrid">
              <i class="fas" :class="{
                'fa-bars': !GET_GRID_OR_LIST,
                'fa-th': GET_GRID_OR_LIST
                }">
              </i>
            </span>
          </div>
        </div>
        <template v-if="GET_GRID_OR_LIST">
          <div>
            <ProductList v-for="item in GET_PRODUCTS"
              :key="item.id"
              :product="item">
            </ProductList>
          </div>
        </template>
        <template v-else>
          <div class="card-grid">
            <Card v-for="item in GET_PRODUCTS"
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
import { mapActions, mapGetters, mapMutations } from 'vuex'
import ProductList from "~/components/ProductList"
import Card from '../../components/Card.vue'
import Filters from "../../components/Products/Filters"
import Pagination from "../../components/Products/Pagination"
  export default {
    name: "Products",
    components: {
      ProductList,
      Filters,
      Pagination,
      Card,
    },

    methods: {
      ...mapActions("products", ['SEND_PRODUCTS', 'SEND_GRID_OR_LIST']),
      ...mapMutations("products", ['SET_GRID_OR_LIST', 'SET_QUERY']),

      changeListOrGrid() {
        this.SEND_GRID_OR_LIST()
      },

      changeOrderingPrice() {
        console.log('ordering price');
      },

      getQuery(ordering) {
        let query = '?'
        // console.log();
        let route = this.$route
        for (let key in route.query) {
          query = query + `${key}=${route.query[key]}&`
          this.SET_QUERY(query)
          // console.log(query);
        }
      },

      init() {
        this.SEND_PRODUCTS()
        this.getQuery()
      }
    },
    computed: {
      ...mapGetters("products", ['GET_PRODUCTS', 'GET_GRID_OR_LIST']),
    },
    created() {
      this.init()
    },

    // async asyncData({$axios, route}) {
    //   let response = await $axios.$get(`http://127.0.0.1:8000/api/product/`)
    //   let count = response.count
    //   let next = response.next
    //   let previous = response.previous
    //   let products = response.results
      
    //   return {
    //     count,
    //     next,
    //     previous,
    //     products
    //   }
    // }
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