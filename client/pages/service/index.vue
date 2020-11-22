<template>
  <div>
    <div class="main-container">
      <aside>
        <div class="header-for-block"><i class="fas fa-filter"></i>Фильтры</div>
          <Filters />
      </aside>
      <main>
        <div class="header-for-block"><i class="fas fa-cogs"></i>Сервис</div>
        <template>
          <div>
            <ServiceList v-for="item in services"
              :key="item.id"
              :service="item">
            </ServiceList>
          </div>
        </template>
      </main>
    </div>
    <Pagination />
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
import ServiceList from "~/components/ServiceList"
import Filters from "../../components/Products/Filters"
import Pagination from "../../components/Products/Pagination"
  export default {
    name: "Services",
    components: {
      ServiceList,
      Filters,
      Pagination
    },
    async asyncData({$axios, route}) {
      let response = await $axios.$get("http://127.0.0.1:8000/api/service/")
      let count = response.count
      let next = response.next
      let previous = response.previous
      let services = response.results

      console.log('Print params in produc/index', route.query);
      
      return {
        count,
        next,
        previous,
        services
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