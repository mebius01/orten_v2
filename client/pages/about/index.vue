<template>
   <div class="main-container">
    <Categories />
		<main>
			<div class="header-for-block"><i class="fas fa-exclamation-circle"></i>О нас</div>
        <h1>О нас</h1>
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
      title: "Ортен более 20 лет рынке копировальной техники и сервисного обслуживания",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Richo, Duplo, Konica Minolta, ColorWay - Купить в Николаеве, интернет-магазин Ортен ★ Ортен более 20 лет рынке копировальной техники и сервисного обслуживания"
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Ортен более 20 лет рынке копировальной техники и сервисного обслуживания'
        }
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../../assets/main.scss";
</style>
