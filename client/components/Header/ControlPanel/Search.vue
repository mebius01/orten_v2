<template>
  <div>
    <div class="search">
      <form role="search">
        <input type="text" placeholder="Search..." 
          v-model="search"
          @input="Query"
          />
      </form>
      <i class="btn_closse fas fa-times"
        v-if="search"
        @click="clossSearch">
      </i>
      <span class="overall_total" v-if="search">
        {{overall_total}}
      </span>
      <ul class="result" :class="{scale_up: search}" v-if="search">
          <template v-if="product">
            <ProductList
              v-for="item in products"
              :key="item.id"
              :product="item"
              @clossSearch="clossSearch">
            </ProductList>
          </template>
          <template v-if="service">
            <ServiceList
              v-for="item in services"
              :key="item.id"
              :service="item"
              @clossSearch="clossSearch">
            </ServiceList>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import ProductList from "~/components/ProductList"
import ServiceList from "~/components/ServiceList"
export default {
  name: 'Search',
  components: {
    ProductList,
    ServiceList
  },
    data() {
      return {
        search: '',
        overall_total: 0,
        products: [],
        services: [],
        statusError: '',
        product: {},
        service: {},
        polygraphy: {},
      };
    },
    methods: {
  //     async asyncData({$axios, params, route, env, app}) {
  //   const locale = app.i18n.locale
  //   const apiUrl = env.apiUrl
  //   const object = await $axios.$get(`${apiUrl}/${locale}/api/product/${params.slug}`)
  //   return {env, object}
  // }
      Query() {
        if (this.search.length > 3 ) {
          const locale = this.$i18n.locale
          const apiUrl = process.env.apiUrl
          this.$axios.get(`${apiUrl}/${locale}/api` + '/search/?search=' + this.search)
          .then(response => {
            let data = response.data
            this.products = data.results.product
            this.services = data.results.service
            this.polygraphy = data.results.polygraphy
            this.overall_total = data.overall_total
          })
          .catch(error => (this.statusError = error))
        }
        
      },
      clossSearch() {
        this.search = ''
      },
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';
@import '@/assets/animation.scss';


.search {
  width: 80vw;
  margin: 0 5px;
  position: relative;
  input {
    width: 100%;
    height: 32px;
    padding: 5px;
    outline: none;
    border: none;
  }
}
.btn_closse, .overall_total {
  position: absolute;
  right: 10px;
  top: 16px;
  cursor: pointer;
  color: $red_color;
  line-height: 0;
  letter-spacing: 0;
  font-size: 16px;
  }
.overall_total {
  right: 50px;
  color: $blue_color;
}
.result {
  position: absolute;
  top: 40px;
  height: 40vh;
  width: 80vw;
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.5);
  padding: 10px;
  overflow-y: scroll;
  background: rgb(255, 255, 255);
  z-index: 9;
}
@media (min-width:1440px) and (max-width: 2560px) {
  .search {
    width: 80vw;
  }
  .result {
    width: 80vw;
  }
}
@media (min-width:1024px) and (max-width: 1439px) {
  .search {
    width: 70vw;
  }
  .result {
    width: 70vw;
  }
}
@media (min-width:768px) and (max-width: 1023px) {
  .search {
    width: 70vw;
  }
  .result {
    width: 70vw;
  }
}
@media (min-width:425px) and (max-width: 767px) {
  .search {
    width: 50vw;
  }
  .result {
    width: 80vw;
    height: 70vh;
  }
}
@media (min-width:375px) and (max-width: 424px) {
  .search {
    width: 40vw;
  }
  .result {
    width: 80vw;
    height: 70vh;
  }
}
@media (min-width: 320px) and (max-width: 374px) {
  .search {
    width: 35vw;
  }
  .result {
    width: 80vw;
    height: 70vh;
  }
}

</style>