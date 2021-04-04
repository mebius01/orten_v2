<template>
  <div class="card">
    <nuxt-link class="card__link" :to="localePath({ name: 'service-slug', params: { slug: service.slug } })">
      <div class="card__img">
        <img v-if="service.image" class="card-img-top" :src="service.image" :alt="service.name">
				<img v-else class="card-img-top" src="/default-img.png" alt="default img">
      </div>
    </nuxt-link>
      <div class="card__body">
				<nuxt-link class="card__link" :to="localePath({ name: 'service-slug', params: { slug: service.slug } })">
					<h2 class="card__name color--blue">{{service.name}}</h2>
				</nuxt-link>
        <p class="card__vendor space-between">
          <span>Вендор:</span>
          <span>{{service.vendor}}</span>
        </p>
        <div class="card__price">
          <template>
            <p class="space-between">
              <span>Цена:</span>
              <span class="card__price--text">{{service.price}}</span>
            </p>
          </template>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'ServiceCard',
    props: {
    service: {
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
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/card.scss";
</style>