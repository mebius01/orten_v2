<template>
  <div class="main-container">
    <Categories />
		<main>
			<div class="header-for-block"><i class="fas fa-th-large"></i>Список Категорий</div>
      <template>
        <h1>Categoryes</h1>
      </template>
		</main>
	</div>
</template>

<script>
import Categories from "../../components/Categories"
  export default {
    components: {
      Categories
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
  }
  }
</script>

<style lang="scss" scoped>
@import "../../assets/main.scss";

  .b {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: 65px;
    margin: 0 auto;
  }
</style>