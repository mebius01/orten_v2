<template>
  <div class="card">
    <nuxt-link class="card__link" :to="link">
      <div class="card__img">
        <img class="card-img-top" :src="item.image" :alt="item.name">
      </div>
      <div class="card__body">
        <h2 class="card__name color--blue">{{item.name}}</h2>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'CategoryCard',
    props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      link: ''
    }
  },
  mounted() {
    const arr = this.item.children
    if (arr.length) {
      this.link = `/category/${this.item.slug}`
    } else {
      this.link = `/product/?category=${this.item.id}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/card.scss";
</style>