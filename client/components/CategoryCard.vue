<template>
  <div class="card">
    <a class="card__link"
      :href="productLink || serviceLink || categoryLink || polygraphyLink"
      @click.prevent="clickCategory(item)">
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
import {mapActions} from 'vuex'
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
      productLink: null,
      serviceLink: null,
      polygraphyLink: null,
      categoryLink: null
    }
  },
  methods: {
    ...mapActions("commodity", ["SEND_CATEGORY", "SEND_DATA", "SEND_URL"]),
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
      return arr.polygraphy_count > 0 
    },
    //-------------
    clickCategory(item){
      if (item.children.length) {
        const url = `/category/${this.item.slug}`
        this.SEND_URL(url)
        this.$router.push({path: url})
      }
      if (!item.children.length) {
        if (this.isProduct(item)) {
          const url = "/product/"
          this.SEND_URL(url)
          this.SEND_CATEGORY(item.id)
          this.$router.push({path: url, query: {category: item.id}})
        }
        if (this.isService(item)) {
          const url = "/service/"
          this.SEND_URL(url)
          this.SEND_CATEGORY(item.id)
          this.$router.push({path: url, query: {category: item.id}})
        }
        if (this.isPolygraphy(item)) {
          const url =  `/polygraphy/`
          this.SEND_URL(url)
          this.SEND_CATEGORY(null)
          this.$router.push({path: url})
        }
      }
      this.SEND_DATA()
    },
  },
  mounted() {
    const category = this.item
    if (category.children.length) {
      this.categoryLink = `/category/${this.item.slug}`
    }
    if (!category.children.length) {
      if (this.isProduct(category)) {
        this.productLink = `/product/?category=${this.item.id}`
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