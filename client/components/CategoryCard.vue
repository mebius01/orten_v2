<template>
  <div class="card">
    <a class="card__link" :href="productlink || serviceLink || categoryLink || polygraphyLink">
      <div class="card__img">
        <img v-if="item.image" class="card-img-top" :src="item.image" :alt="item.name">
				<img v-else class="card-img-top" src="/default-img.png" alt="default img">
      </div>
      <div class="card__body">
        <h2 class="card__name color--blue">{{item.name}}</h2>
      </div>
    </a>
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
      productlink: null,
      serviceLink: null,
      polygraphyLink: null,
      categoryLink: null
    }
  },
  methods: {
    // Проверка это иодель Product
    isProduct(arr) {
      return arr.product_count > 0
    },
    // Проверка это иодель Service
    isService(arr) {
      return arr.service_count > 0
    },
    // Проверка это иодель Polygraphy
    isPolygraphy(arr) {
      return arr.polygraphy_count > 0 //|| arr.polygraphy_count > 0
    }
  },
  mounted() {
    const category = this.item

    if (category.children.length) {
      this.categoryLink = `/category/${this.item.slug}`
    }
    if (!category.children.length) {
      if (this.isProduct(category)) {
        this.productlink = `/product/?category=${this.item.id}`
      }
      if (this.isService(category)) {
        this.serviceLink =  `/service/?category=${this.item.id}`
      }
    }
    if (!category.children.length || this.isPolygraphy(category)) {
      this.polygraphyLink = `/polygraphy/`
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/card.scss";
</style>