<template>
  <div class="card">
    <div class="card__action" v-if="product.action">{{$t('product.action')}} {{product.end_action}}</div>
    <nuxt-link class="card__link" :to="`/${this.$i18n.locale}/product/${product.slug}`"
    
    >
      <div class="card__img">
        <img v-if="product.image" class="card-img-top" :src="product.image" :alt="product.name">
				<img v-else class="card-img-top" src="/default-img.png" alt="default img">
      </div>
    </nuxt-link>
      <div class="card__body">
				<nuxt-link class="card__link" :to="`/${this.$i18n.locale}/product/${product.slug}`"
        
        >
					<h2 class="card__name color--blue">{{product.name}}</h2>
				</nuxt-link>
        <p class="card__pn space-between">
          <span>{{$t('product.vendor_code')}}:</span>
          <span>{{product.vendor_code}}</span>
        </p>
        <p class="card__vendor space-between">
          <span>{{$t('product.vendor')}}:</span>
          <span>{{product.vendor}}</span>
        </p>
        <div class="card__price">
          <template v-if="product.action">
            <p class="space-between">
              <span class="card--text-crossed">{{$t('product.price')}}:</span>
              <span class="card--text-crossed">{{product.price}}</span>
            </p>
            <p class="space-between">
              <span>{{$t('product.price')}}:</span>
              <span class="price">{{product.discount}}</span>
            </p>
          </template>
          <template v-else>
            <p class="space-between">
              <span>{{$t('product.price')}}:</span>
              <span class="card__price--text">{{product.price}}</span>
            </p>
          </template>
        </div>
      </div>
      <template v-if="product.available">
        <Buy :object="product"></Buy>
      </template>
      <template v-else>
        <p class="space-between" style="color:#d9534f">{{$t('product.no_product_list')}}</p>
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