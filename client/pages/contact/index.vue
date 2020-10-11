<template>
  <div class="main-container">
    <Categories />
		<main>
			<div class="header-for-block"><i class="fas fa-id-card-alt"></i>Контакты</div>
      <template>
        <Contact />
      </template>
		</main>
	</div>
</template>

<script>
import Contact from "../../components/Contact"
import Categories from "../../components/Categories"
  export default {
    components: {
      Contact,
      Categories
    },
    head() {
    return {
      title: "Контакты компании Ортен",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Richo, Duplo, Konica Minolta, ColorWay - Купить в Николаеве, интернет-магазин Ортен ★ Ортен более 20 лет рынке копировальной техники и сервисного обслуживания'
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Контакты компании Ортен'
        }
      ]
    }
  }
  }
</script>

<style lang="scss" scoped>
@import "../../assets/main.scss";
</style>