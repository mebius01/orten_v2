<template>
  <div class="main-container">
    <Aside />
		<main>
			<div class="header-for-block"><i class="fas fa-truck"></i>Доставка и оплата</div>
      <template>
        <Pay />
        <Delivery />
      </template>
		</main>
	</div>
</template>

<script>
import Pay from "../../components/Pay"
import Delivery from "../../components/Delivery"
import Aside from "../../components/Aside"
  export default {
    components: {
      Pay,
      Delivery,
      Aside
    },
    head() {
    return {
      title: "Доставка и оплата товаров и услуг от компании Ортен",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Richo, Duplo, Konica Minolta, ColorWay - Купить в Николаеве, интернет-магазин Ортен ★ Ортен более 20 лет рынке копировальной техники и сервисного обслуживания'
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Доставка и оплата товаров и услуг от компании Ортен'
        }
      ]
    }
  }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/main.scss"
</style>