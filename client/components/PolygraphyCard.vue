<template>
  <div class="card">
    <nuxt-link class="card__link" :to="localePath({ name: 'polygraphy-slug', params: { slug: item.slug } })">
      <div class="card__img">
        <img v-if="item.icon" class="card-img-top" :src="item.icon" :alt="item.name">
				<img v-else class="card-img-top" src="/default-img.png" alt="default img">
      </div>
    </nuxt-link>
      <nuxt-link class="card__link" :to="localePath({ name: 'polygraphy-slug', params: { slug: item.slug } })">
			<h2 class="card__name color--blue">{{item.name}}</h2>
			</nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'PolygraphyCard',
    props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/card.scss";
</style>