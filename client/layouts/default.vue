<template>
  <div>
    <Header />
      <nuxt/>
      <Categories />
    <Footer />
    <ToTop />
  </div>
</template>

<script>
import Header from "~/components/Header/Header.vue"
import Footer from "~/components/Footer/Footer.vue"
import ToTop from "~/components/SmallComponents/ToTop"
import Categories from "../components/Category/Categories"
export default {
  components: {
    Header,
    Footer,
    ToTop,
    Categories
  }
}
</script>

<style lang="scss">
 @import '../assets/base'
</style>



