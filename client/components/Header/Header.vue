<template>
  <header class="header">
    <div class="header-row">
      <div>
        <Logo />
      </div>
      <div class="menu-sched-contact">
        <Schedule />
        <Contact />
      </div>
    </div>
    <MainCategory />
    <Nav />
    <Breadcrumbs />
  </header>
</template>

<script>
import Logo from './Logo'
import Schedule from './Schedule'
import Contact from './Contact'
import MainCategory from './MainCategory'
import Nav from './ControlPanel/Nav'
import Breadcrumbs from './Breadcrumbs'
export default {
  name: "Header",
  components: {
    Logo,
    Schedule,
    Contact,
    MainCategory,
    Nav,
    Breadcrumbs,
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/color.scss';
@import '@/assets/main.scss';

.header {
  display: flex;
  flex-direction: column;

  .header-row {
    @extend .padding-12;
    @extend .space-between;
    @media (max-width: 650px) {
      flex-direction: column;
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
}
@media (min-width: 1200px){
  .header {
    grid-template-columns: auto 195px 230px;
  }
}
@media (min-width: 992px) and (max-width: 1199px){
    .header {
        grid-template-columns:auto 195px 230px;
    }

}
@media (min-width: 768px) and (max-width: 991px){
    .header {
        grid-template-columns: auto 195px 230px;
    }

}
@media (max-width: 767px){
    .header {
        grid-template-columns: auto 195px 230px;
    }

}
@media (max-width: 650px){
  .header {
    grid-template-columns: auto auto;
  }
  .column {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 16px;
  }
}
@media (max-width: 480px){
    .header {
        grid-template-columns: auto;
    }
}
</style>