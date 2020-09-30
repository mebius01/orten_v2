<template>
  <div>
    <Header />
      <nuxt/>
    <Footer />
    <ToTop />
  </div>
</template>

<script>
import Header from "~/components/Header/Header.vue"
import Footer from "~/components/Footer/Footer.vue"
import ToTop from "~/components/SmallComponents/ToTop"
export default {
  components: {
    Header,
    Footer,
    ToTop
  }
}
</script>

<style lang="scss">
 @import '../assets/base'
</style>



