<template>
  <div class="main-container">
    <Aside />
		<main>
			<div class="header-for-block"><i class="fas fa-th-large"></i>{{$t('dom.categories_list')}}</div>
      <template>
        <div class="card_block">
          <CategoryCard v-for="item in OBJECT_LIST"
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
import Aside from "@/components/Aside"
import CategoryCard from "@/components/CategoryCard"
  export default {
    name: "Category",
    components: {
      Aside,
      CategoryCard
    },
    head() {
    return {
      title: "Ортен - Все категории",
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
      ...mapGetters("categories", ['OBJECT_LIST']),
  },
  methods: {
    ...mapActions("categories", ['GET_OBJECT_LIST']),
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/card.scss";
</style>