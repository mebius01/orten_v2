<template>
  <div class="main-container">
    <Aside />
		<main>
			<div class="header-for-block"><i class="fas fa-th-large"></i>{{object.name}}</div>
      <template>
        <div class="card_block">
          <CategoryCard v-for="item in object.children"
            :key="item.id"
            :item="item"
          />
        </div>
      </template>
		</main>
	</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Aside from "../../components/Aside"
import CategoryCard from "../../components/CategoryCard"
  export default {
    name: "CategorySlug",
    components: {
      Aside,
      CategoryCard
    },
    validate({ params }) {
      return /^[a-z0-9-]+$/.test(params.slug) // если params валидно
    },
    async asyncData({$axios, params, query, app, env }) {
      const locale = app.i18n.locale
      const apiUrl = env.apiUrl
      const object = await $axios.$get(`${apiUrl}/${locale}/api/category/${params.slug}`)
      return {object}
    },
    head() {
    return {
      title: `Ортен - ${this.object.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Ортен - розничный и оптовый интернет-магазин. Копировальная техника и расходные материалы ★ Компьютеры и комплектующие ★ Полиграфическое оборудование и расходные материалы ★ Оперативная полиграфия ★ Диагностика и ремонт копировальной техники и компьютеров ★  Ортен более 20 лет рынке копировальной техники и сервисного обслуживания'
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Ортен - розничный и оптовый интернет-магазин печатной и компьютерной техники в Украине'
        }
      ]
    }
  },
  computed: {
      ...mapGetters("categories", ['OBJECT_LIST'])
    },
  methods: {
    ...mapActions("categories", ['GET_OBJECT_LIST']),
    ...mapActions("breadcrumbs", ['SEND_ID']),
  },
  mounted() {
    this.SEND_ID(this.object.id)
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";
@import "@/assets/card.scss";
</style>