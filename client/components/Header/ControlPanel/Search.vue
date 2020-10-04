<template>
  <div>
    <div class="search">
      <form role="search">
        <input type="text" placeholder="Search..." 
          v-model="search"
          @input="Query"
          />
      </form>
      <i class="btn-closse fas fa-times"
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
import axios from 'axios'
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
      };
    },
    methods: {
      Query() {
        if (this.search.length > 3 ) {
          axios.get('http://127.0.0.1:8000/api/search/?format=json&search='+this.search)
          .then(response => {
            let data = response.data
            this.products = data.results.product
            this.services = data.results.service
            this.overall_total = data.overall_total
          })
          .catch(error => (this.statusError = error))
        }
        
      },
      clossSearch() {
        this.search = ''
        // this.animationClass = "scale_down"
        // setTimeout(() => this.search = '', 400);
      },
    },
}
</script>

<style lang="scss" scoped>
.scale_up {
	animation: scale_up 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
@keyframes scale_up {
  0% {
    transform: scaleY(0.1);
    transform-origin: 100% 0%;
  }
  100% {
    transform: scaleY(1);
    transform-origin: 100% 0%;
  }
}

.scale_down {
	animation: scale_down 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes scale_down {
  0% {
    transform: scaleY(1);
    transform-origin: 100% 0%;
  }
  100% {
    transform: scaleY(0.1);
    transform-origin: 100% 0%;
  }
}



.align-items {
  display: flex;
  align-items: center;
}
.padding-5 {
  padding: 5px;
}
$text-color: #2E4053;
$blue-color: #428bca;
.link_style {
  text-decoration: none;
  color: $text-color;
  display: block;
}

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
.btn-closse, .overall_total {
  position: absolute;
  right: 10px;
  top: 16px;
  cursor: pointer;
  color: #fd5050;
  line-height: 0;
  letter-spacing: 0;
  font-size: 16px;
  }
.overall_total {
  right: 50px;
  // font-size: 16px;
  color: $blue-color;
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

  // li {
  //   @extend .align-items;
  //   @extend .padding-5;
  //   justify-content: space-between;
  //   border-bottom: #85C987 1px solid;

  //   .content {
  //     @extend .align-items;
  //     justify-content: flex-start;
  //     width: 70%;

  //     img {
  //       @extend .padding-5;
  //       width: 56px;
  //       height: 100%;
  //     }

  //     a {
  //       display: flex;
  //       @extend .padding-5;
  //       @extend .link_style;
  //       color: $blue-color;

  //     }
  //     .available {
  //       @extend .padding-5;
  //       font-size: 16px;
  //       font-weight: 600;
  //     }
  //   }
  //   .btn-gruop {
  //     @extend .align-items;
  //     justify-content: flex-end;

  //     .price {
  //       @extend .padding-5;
  //       font-size: 16px;
  //       font-weight: 600;
  //       background-color: rgba(252, 99, 91, 0.18);
  //     }
  //     .vendor_code {
  //       @extend .padding-5;
  //       font-size: 12px;
  //     }
  //   }
    
  // }
}
</style>