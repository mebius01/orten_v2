<template>
  <div class="main-container">
    <Aside />
		<main>
			<div class="header-for-block"><i class="fas fa-star"></i>{{$t('dom.actions')}}</div>
      <template>
        <div class="card_block">
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
import Card from "@/components/Card"
import Aside from "@/components/Aside"

  export default {
    name: "Home",
    components: {
      Card,
      Aside,
    },
    async asyncData({$axios, env, app}) {
      const locale = app.i18n.locale
      const apiUrl = env.apiUrl
      let response = await $axios.$get(`${apiUrl}/${locale}/api/product/`)
      let products = response.results
      return {
        products
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "@/assets/card.scss";
</style>