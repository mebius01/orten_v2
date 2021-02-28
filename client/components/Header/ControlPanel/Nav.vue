<template>
  <nav class="nav">
    <Menu />
    <Search />
    <Language />
    <Like />
    <Basket />
  </nav>
</template>

<script>
import Like from './Like'
import Basket from './Basket'
import Search from './Search'
import Language from './Language'
import Menu from './Menu'

export default {
  name: "Nav",
  components: {
    Search,
    Like,
    Basket,
    Language,
    Menu
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/color.scss';
@import '@/assets/main.scss';

nav {
  background-color: $green_color;
  @extend .space-between;
  @extend .padding-12;
}
</style>