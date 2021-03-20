<template>
  <div>
    <div class="main-container">
      <aside>
        <Filters />
      </aside>
      <main>
        <div class="header-for-block">
          <span><i class="fas fa-cogs"></i>{{ $t('product.service') }}</span>
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
            <ServiceList v-for="item in GET_RESULTS"
              :key="item.id"
              :service="item">
            </ServiceList>
          </div>
        </template>
        <template v-else>
          <div class="card_block">
            <ServiceCard v-for="item in GET_RESULTS"
              :key="item.id"
              :service="item">
            </ServiceCard>
          </div>
        </template>
      </main>
    </div>
    <Pagination />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ServiceList from "@/components/ServiceList"
import ServiceCard from "@/components/ServiceCard"
import Filters from "@/components/Filters"
import Pagination from "@/components/Pagination"
  export default {
    name: "Services",
    components: {
      ServiceList,
      ServiceCard,
      Filters,
      Pagination
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
		const url = "/service/"
    this.SEND_URL(url)
    this.SEND_DATA()
	}
}
</script>

<style lang="scss" scoped>
.header-for-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ordering {
  cursor: pointer;
}
</style>