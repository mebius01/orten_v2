<template>
  <div class="main-container">
    <Categories />
		<main>
			<div class="header-for-block"><i class="fas fa-star"></i>Новинки и акции</div>
			<!-- <Products :products = "products"/> -->
      <template>
        <div class="card-grid">
          <Card v-for="item in products"
            :key="item.id"
            :product="item">
          </Card>
        </div>
      </template>
		</main>
	</div>
</template>

<script>
import Card from "../components/Card"
import Products from "~/components/Products"
import Categories from "~/components/Categories"
  export default {
    name: "Home",
    components: {
      Card,
      Products,
      Categories
    },
    async asyncData({$axios}) {
      let response = await $axios.$get("http://127.0.0.1:8000/api/product/")
      let products = response.results
      return {
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
</style>