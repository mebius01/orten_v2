<template>
  <div>
    <div class="main-container">
      <aside>
        <div class="header-for-block"><i class="fas fa-filter"></i>Фильтры</div>
        <div class="accordion">
            <div class="filters">
              {{count}} {{next}} {{previous}}
              <form method="get">
                  <div class="min_max">
                    <input type="text" name="price__gt" placeholder="min 0">
                    <input type="text" name="price__lt" placeholder="max 99999">
                  </div>
                  <div>
                    <input type="text" name="ordering">                          
                  </div>
                  <div>
                    <input type="text" name="category">
                  </div>
                  <div>
                    <input type="text" name="vendor">
                  </div>
                  <div>
                    <input type="text" name="type_service">
                  </div>
                  <div>
                      <input type="text" name="type_product">
                  </div>
                  <div>
                      <input type="text" name="format_fild">
                  </div>
                  <div>
                      <input type="text" name="color_fild">
                  </div>
                  <div>
                      <input type="text" name="available">
                  </div>
                  <!-- {% if search %} -->
                      <div>
                          <label class="sr-only" for="search"></label>
                          <input type="text" name="search" class="search" placeholder="Search..">
                      </div>
                  <!-- {% endif %} -->
                  <div class="form-footer">
                      <input class="apply" type="submit">
                      <input class="reset" type="reset">
                      <!-- Фильтр<i class="fas fa-filter"></i>
                      Сброс<i class="fas fa-redo-alt pl-2"></i> -->
                  </div>
              </form>
          </div>
        </div>
      </aside>
      <main>
        <div class="header-for-block"><i class="fab fa-product-hunt"></i>Товары</div>
        <!-- <Products :products = "products"/> -->
        <template>
          <!-- <div class="card-grid"> -->
          <div>
            <ProductList v-for="item in products"
              :key="item.id"
              :product="item">
            </ProductList>
          </div>
        </template>
      </main>
    </div>
    <Pagination />
  </div>
</template>

<script>
import Card from "~/components/Card"
import Products from "~/components/Products"
import ProductList from "~/components/ProductList"
import Categories from "~/components/Categories"
import Pagination from "../../components/Pagination"
  export default {
    name: "Home",
    components: {
      Card,
      Products,
      ProductList,
      Categories,
      Pagination
    },
    async asyncData({$axios}) {
      let response = await $axios.$get("http://127.0.0.1:8000/api/product/")
      let count = response.count
      let next = response.next
      let previous = response.previous
      let products = response.results

      return {
        count,
        next,
        previous,
        products
      }
    }
  }
</script>

<style lang="scss" scoped>
$text-color: #2E4053;
$green-color: #85C987;
$global_blue: #428bca;
$color-red: #d9534f;

.padding-12 {
  padding: 12px 24px;
}
.link_style {
  text-decoration: none;
  color: $text-color;
  display: block;
}
.space-between {
  display: flex;
  justify-content: space-between;
}
.header-for-block {
  padding-left: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  color: $text-color;
  background-color: $green-color;

  i {
    margin-right: 5px;
  }
}
.accordion {
  padding-top: 5px;
  li {
    .node-count {
      color: $global_blue;
    }
    a {
      @extend .link_style;
      padding: 2px 0 2px 12px;
    }
  }
  .submenu {
    padding-left: 24px;
    li {
      a {
        @extend .link_style;
      }
    }
  }
  input, select {
    // @extend input[name=quantity];
    margin-bottom: 24px;
    width: 100%;
    // height: 32px;
  }
  .min_max {
    @extend .space-between;

    input {
    width: 40%;
    height: 32px;
    }
  }
  .form-footer{
    input {
      width: 40%;
      height: 32px;
      }
  }
}
.main-container {
  @extend .padding-12;
  display: grid;
  grid-template-columns: 30% auto;
  gap: 12px;

  @media (max-width: 767px) {
    grid-template-columns: 40% auto;
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
}

.accordion {
  padding-top: 5px;
  li {
    .node-count {
      color: $global_blue;
    }
    a {
      @extend .link_style;
      padding: 2px 0 2px 12px;
    }
  }
  .submenu {
    padding-left: 24px;
    li {
      a {
        @extend .link_style;
      }
    }
  }
  input, select {
    // @extend input[name=quantity];
    margin-bottom: 24px;
    width: 100%;
    // height: 32px;
  }
  .min_max {
    @extend .space-between;

    input {
    width: 40%;
    height: 32px;
    }
  }
  .form-footer{
    input {
      width: 40%;
      height: 32px;
      }
  }
}
</style>