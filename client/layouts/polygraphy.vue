<template>
  <div class="polygraphy">
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from "~/components/Header/Header.vue"
import Footer from "~/components/Footer/Footer.vue"
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
  .polygraphy {
    background: rgba(255, 239, 210, 0.856);
  }
</style>