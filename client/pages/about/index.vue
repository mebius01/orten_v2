<template>
  <div class="main-container">
    <Aside />
    <main v-html="$t('about.data')"></main>
  </div>
</template>

<script>
import Aside from "@/components/Aside"
  export default {
    components: {
      Aside
    },
  head() {
    return {
      title: this.$i18n.t('about.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$i18n.t('about.description')
        },
        {
          hid: 'title',
          name: 'title',
          content: this.$i18n.t('about.title')
        }
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
@import "@/assets/main.scss";
</style>
