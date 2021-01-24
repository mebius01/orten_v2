<template>
  <div class="card">
    <div class="card__action" v-if="product.action">Акция до {{product.end_action}}</div>
    <a class="card__link" :href="'/product/'+product.slug">
      <div class="card__img">
        <img v-if="product.image" class="card-img-top" :src="product.image" :alt="product.name">
				<img v-else class="card-img-top" src="/default-img.png" alt="default img">
      </div>
    </a>
      <div class="card__body">
				<a class="card__link" :href="'/product/'+product.slug">
					<h2 class="card__name color--blue">{{product.name}}</h2>
				</a>
        <p class="card__pn space-between">
          <span>Артикул:</span>
          <span>{{product.vendor_code}}</span>
        </p>
        <p class="card__vendor space-between">
          <span>Вендор:</span>
          <span>{{product.vendor}}</span>
        </p>
        <div class="card__price">
          <template v-if="product.action">
            <p class="space-between">
              <span>Цена:</span>
              <span class="card--text-crossed">{{product.price}}</span>
            </p>
            <p class="space-between">
              <span>Цена:</span>
              <span class="card--red-text">{{product.discount}}</span>
            </p>
          </template>
          <template v-else>
            <p class="space-between">
              <span>Цена:</span>
              <span class="card__price--text">{{product.price}}</span>
            </p>
          </template>
        </div>
      </div>
      <template v-if="product.available">
        <Buy :object="product"></Buy>
      </template>
      <template v-else>
        <p class="space-between" style="color:#d9534f">Нет в наличии</p>
      </template>
  </div>
</template>

<script>
import Buy from "~/components/SmallComponents/Buy"
import {mapGetters, mapActions, mapMutations} from 'vuex'
  export default {
    name: "Card",
    components: {
      Buy
    },
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
@import '@/assets/card.scss';
</style>