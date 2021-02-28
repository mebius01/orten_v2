<template>
  <div class="langdown">
    <span class="icon">
      <i class="fas fa-globe-europe"></i>
      <span>{{this.$i18n.locale}}</span>
      <span class="none"
      href="#"
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      @click.prevent.stop="changeLocale">{{ locale.name }}
    </span>
    </span>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      locale: this.$i18n.locale
    }
  },
  methods: {
    changeLocale() {
      this.$i18n.setLocale(this.$i18n.locale === 'ru' ? 'uk' : 'ru')
      location.reload()
      // this.$nuxt.refresh()
      // window.location.reload(true)
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/icon_header.scss";
@import "@/assets/color.scss";

.langdown {
  span {
    display: block;
    cursor: pointer;
  }
  .icon {
    .none {
      display: none;
    }
    &:hover {
      .none {
        background-color: $blue_color;
        display: block;
      }
    }
  }

}
</style>