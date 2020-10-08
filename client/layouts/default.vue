<template>
  <div>
    <Header />
      <nuxt/>
    <Menu />
    <Footer />
    <ToTop />
  </div>
</template>

<script>
import Header from "~/components/Header/Header.vue"
import Footer from "~/components/Footer/Footer.vue"
import ToTop from "~/components/SmallComponents/ToTop"
import Menu from "../components/SmallComponents/Menu"
export default {
  components: {
    Header,
    Footer,
    ToTop,
    Menu
  }
}
</script>

<style lang="scss">
 @import '../assets/base'
</style>



