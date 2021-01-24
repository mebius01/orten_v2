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
      <!-- <span class="content__action" v-if="product.action">
        <i class="fas fa-splotch" style="margin-left:10px">
          Aкция до {{product.end_action}}
        </i>
      </span> -->
    </div>
    <div class="btn-gruop">
      <!-- <span class="vendor_code">PN: {{product.vendor_code}}</span> -->
      <span class="price" v-if="product.action" :title="product.end_action">{{product.discount}}грн.</span>
      <span class="price" v-else>{{product.price}}грн.</span>
      <div class="qty">
        <Buy :object="product"></Buy>
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
@import '@/assets/color.scss';
@import '@/assets/main.scss';

.align-items {
  display: flex;
  align-items: center;
}
.padding-5 {
  padding: 5px 5px;
}
.link_style {
  text-decoration: none;
  color: $text_color;
  display: block;
}

  li {
    @extend .align-items;
    @extend .padding-5;
    justify-content: space-between;
    border-bottom: #85C987 1px solid;

    .content {
      display: grid;
      gap: 5px;
      align-items: center;
      grid-template-columns: 70px 100px 540px 32px;
      &__vendor {
        justify-self: center;
        font-size: 12px;
        font-weight: 600;
      }
      a {
        @extend .link_style;
        color: $blue-color;
      }
      &__available {
        justify-self: center;
        display: inline-block;
      }
    }
    .btn-gruop {
      @extend .align-items;
      justify-content: flex-end;
      .price {
        @extend .padding-5;
        font-size: 16px;
        font-weight: 600;
        background-color: rgba(252, 99, 91, 0.18);
      }
      .qty {
        margin-left: 5px;
      }
    }
    
  }
</style>