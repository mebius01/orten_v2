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
            <span class="pointer" @click.prevent="listOrgrid">
              <i class="fas" :class="{'fa-bars': !GET_GRID_OR_LIST, 'fa-th': GET_GRID_OR_LIST}"></i>
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
    data() {
      return {
        list: false,
      }
    },
    methods: {
      ...mapActions("products", ['SEND_PRODUCTS']),
      ...mapMutations("products", ['SET_GRID_OR_LIST', 'SET_QUERY']),
      listOrgrid() {
        this.list = !this.list
        this.SET_GRID_OR_LIST(this.list)
      },
      getQuery() {
        let query = '?'
        // console.log();
        let route = this.$route
        for (let key in route.query) {
          query = query + `${key}=${route.query[key]}&`
          this.SET_QUERY(query)
          console.log(query);
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
    //   this.SEND_PRODUCTS()
      // let query = '?'
      // for (let key in route.query) {
      //   query = query + `${key}=${route.query[key]}&`
      //   console.log(query);
      // }
      // let response = await $axios.$get(`http://127.0.0.1:8000/api/product/${query}`)
      // let count = response.count
      // let next = response.next
      // let previous = response.previous
      // let products = response.results
      
      // return {
      //   count,
      //   next,
      //   previous,
      //   products
      // }
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
.pointer {
  cursor: pointer;
}
// $text-color: #2E4053;
// $green-color: #85C987;
// $global_blue: #428bca;
// $color-red: #d9534f;

// .padding-12 {
//   padding: 12px 24px;
// }
// .link_style {
//   text-decoration: none;
//   color: $text-color;
//   display: block;
// }
// .space-between {
//   display: flex;
//   justify-content: space-between;
// }
// .header-for-block {
//   padding-left: 8px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   height: 30px;
//   color: $text-color;
//   background-color: $green-color;

//   i {
//     margin-right: 5px;
//   }
// }

// .main-container {
//   @extend .padding-12;
//   display: grid;
//   grid-template-columns: 30% auto;
//   gap: 12px;

//   @media (max-width: 767px) {
//     grid-template-columns: 40% auto;
//   }
//   @media (max-width: 650px) {
//     grid-template-columns: 1fr 1fr;
//   }
//   @media (max-width: 480px) {
//     grid-template-columns: 1fr;
//     padding: 0;
//   }
// }

// .accordion {
//   padding-top: 5px;
//   li {
//     .node-count {
//       color: $global_blue;
//     }
//     a {
//       @extend .link_style;
//       padding: 2px 0 2px 12px;
//     }
//   }
//   .submenu {
//     padding-left: 24px;
//     li {
//       a {
//         @extend .link_style;
//       }
//     }
//   }
//   input, select {
//     // @extend input[name=quantity];
//     margin-bottom: 24px;
//     width: 100%;
//     // height: 32px;
//   }
//   .min_max {
//     @extend .space-between;

//     input {
//     width: 40%;
//     height: 32px;
//     }
//   }
//   .form-footer{
//     input {
//       width: 40%;
//       height: 32px;
//       }
//   }
// }
</style>