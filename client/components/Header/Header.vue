<template>
  <header class="header">
    <div class="header-row">
      <div class="logo">
        <nuxt-link class="logo__link" to="/">
          <img
            class="logo__img"
            src="/logo.png"
            alt="Ортен - розничный и оптовый интернет-магазин печатной и компьютерной техники в Николаеве"
            title="Копировальная техника и расходные материалы ★ Компьютеры и комплектующие ★ Полиграфическое оборудование и расходные материалы ★ Оперативная полиграфия ★ Диагностика и ремонт копировальной техники и компьютеров"
          />
        </nuxt-link>
      </div>
      <div class="menu-sched-contact">
        <Schedule />
        <Contact />
      </div>
    </div>
    <!-- <div class="two_header">
      <div class="ad">
        У зв'язку з посиленням карантинних мір. У суботу офіс тимчасово не працює.
      </div>
    </div> -->
    <MainCategory />
    <Nav />
    <Breadcrumbs />
  </header>
</template>

<script>
import Schedule from './Schedule'
import Contact from './Contact'
import MainCategory from './MainCategory'
import Nav from './ControlPanel/Nav'
import Breadcrumbs from './Breadcrumbs'
export default {
  components: {
    Schedule,
    Contact,
    MainCategory,
    Nav,
    Breadcrumbs,
  }
}
</script>


<style lang="scss" scoped>
.padding-12 {
  padding: 12px 24px;
}
.space-between {
  display: flex;
  justify-content: space-between;
}
.header {
  display: flex;
  flex-direction: column;

  .header-row {
    @extend .padding-12;
    @extend .space-between;
    @media (max-width: 650px) {
      flex-direction: column;
    }
    .logo__img {
      width: 160px;
      height: auto;
    }
    .menu-sched-contact {
      @extend .space-between;
      @media (max-width: 650px) {
        padding: 12px 0;
      }
      @media (max-width: 480px) {
        flex-direction: column;
      }
    }
  }
  .ad {
    padding: 12px 80px;
    text-align: center;
    border: 1px dashed red;
  }
}
</style>