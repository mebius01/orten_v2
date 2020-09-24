<template>
  <header class="header">
    <div class="header-row">
      <div class="logo">
        <a class="logo__link" href="/">
          <img
            class="logo__img"
            src="/logo.png"
            alt="Ортен - розничный и оптовый интернет-магазин печатной и компьютерной техники в Николаеве"
            title="Копировальная техника и расходные материалы ★ Компьютеры и комплектующие ★ Полиграфическое оборудование и расходные материалы ★ Оперативная полиграфия ★ Диагностика и ремонт копировальной техники и компьютеров"
          />
        </a>
      </div>
      <div class="contact_g">
        <Menu />
        <Schedule />
        <Contact />
      </div>
    </div>
    <div class="two_header">
      <div class="ad">
        У зв'язку з посиленням карантинних мір
        <br />
        У суботу офіс тимчасово не працює.
      </div>
    </div>
    <MainCategory />
    <Nav />
    <!-- <nav class="nav">
      <div class="toggle">
        <i class="fa fa-bars menu"></i>
      </div>
      <div class="control">
        
        <div class="langdown"></div>
        <div class="control_search">
          

          <form role="search">
            <input type="text" placeholder="Search..." name="search" />
          </form>
        </div>
        <div class="control_cart">
          <a href="" title="Пока, что Ваша корзина пуста">
            <i class="fa fa-shopping-cart"></i>
            <span>0</span>
          </a>
        </div>
      </div>
    </nav> -->
    <ul class="breadcrumbs">
      <li>
        <a href="/"><i class="fas fa-home"></i></a>
      </li>
    </ul>
  </header>
</template>

<script>
import Schedule from '../components/Header/Schedule'
import Contact from '../components/Header/Contact'
import Menu from '../components/Header/Menu'
import MainCategory from '../components/Header/MainCategory'
import Nav from '../components/Header/ControlPanel/Nav'
export default {
  components: {
    Schedule,
    Contact,
    Menu,
    MainCategory,
    Nav,
  }
}
</script>
