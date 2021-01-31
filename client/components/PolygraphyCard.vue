<template>
  <div class="card">
    <a class="card__link" :href="'/polygraphy/'+item.slug">
      <div class="card__img">
        <img v-if="item.image" class="card-img-top" :src="item.image" :alt="item.name">
				<img v-else class="card-img-top" src="/default-img.png" alt="default img">
      </div>
      <a class="card__link" :href="'/polygraphy/'+item.slug">
			<h2 class="card__name color--blue">{{item.name}}</h2>
			</a>
    </a>
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
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {
    const r = this.$route.params
    console.log(this.item);
    console.log(r);
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/card.scss";
</style>