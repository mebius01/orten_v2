<template>
  <nav class="nav">
    <Category />
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
import Category from './Category'

export default {
  components: {
    Search,
    Like,
    Basket,
    Language,
    Category
  }
}
</script>

<style lang="scss" scoped>
$text-color: #2E4053;
$green-color: #85C987;
$global_blue: #428bca;
.padding-12 {
  padding: 5px 24px;
}
.space-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  background-color: $green-color;
  @extend .space-between;
  @extend .padding-12;

}
</style>