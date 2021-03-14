<template>
  <li>
    <div class="content">
      <img v-if="product.image" class="card-img-top" :src="product.image" :alt="product.name">
			<img v-else class="card-img-top" src="/default-img.png" alt="default img">
      <span class="content__vendor">{{product.vendor}}</span>
      <a :href="'/product/'+product.slug" 
        @click.prevent="openProduct(product)"
        :title="product.description">
        {{product.name}}
      </a>
      <span class="content__available">
        <i v-if="product.available" class="fas fa-check" style="color:green"></i>
        <i v-else class="fas fa-times" style="color:red"></i>
      </span>
    </div>
    <div class="btn-gruop">
      <div v-if="product.action" class="price-block">
        <span class="text-crossed">{{product.price}}грн.</span>
        <span class="price" :title="'Акция до ' + product.end_action">{{product.discount}}грн.</span>
      </div>
      <span class="price" v-else>{{product.price}}грн.</span>
      <div class="qty">
        <!-- <template v-if="product.available"> -->
          <Buy :object="product"></Buy>
        <!-- </template>
        <template v-else>
          <span style="color:#d9534f; white-space:nowrap">{{$t('product.no_product_list')}}</span>
        </template> -->
      </div>
    </div>
  </li>
</template>

<script>
import Buy from './SmallComponents/Buy'
  export default {
    name: "ProductList",
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
    },
    methods: {
      openProduct(product) {
        this.$emit('clossSearch');
        this.$router.push('/product/'+product.slug)
      },
    }
  }
</script>

<style lang="scss" scoped>
@import "@/assets/list.scss"
</style>