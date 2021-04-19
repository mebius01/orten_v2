<template>
  <div class="main-container">
    <Aside />
		<main class="card_block">
			<div class="header-for-block"><i class="fas fa-truck"></i>{{ $t('dom.delivery_payment') }}</div>
      <template>
        <Delivery />
        <Pay />
      </template>
		</main>
	</div>
</template>

<script>
import Pay from "../../components/Pay"
import Delivery from "../../components/Delivery"
import Aside from "../../components/Aside"
import {mapActions} from 'vuex'
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
    },
    methods: {
      ...mapActions("breadcrumbs", ["SEND_END_PAGE"]),
    },
    mounted() {
      this.SEND_END_PAGE({name: this.$t('dom.delivery_payment'), url:this.localePath({ name: 'delivery_payment'}), level: -1})
    },
  }
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";
.card_block {
  gap: 5px;
  grid-template-columns: repeat(1, 1fr);
  // grid-auto-rows: 5px;
  // grid-auto-flow: row dense;
}
.card {
  h4 {
    padding-top: 10px;
    padding-bottom: 5px;
    // text-align: center;
    text-transform: uppercase;
  }
  ul {
    display: inline-block;
    margin-top: 8px;
    li {
      padding: 5px;
      margin-left: 15px;
      border-bottom: 1px solid $green_color;
    }
  }
}
</style>