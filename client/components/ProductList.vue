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
@import '@/assets/main.scss';
@import "@/assets/card.scss";

li {
  @extend .align-items;
  @extend .padding-5;
  justify-content: space-between;
  border-bottom: #85C987 1px solid;

  @media (min-width:768px) and (max-width: 1023px) {
    flex-direction: column;
  }
  @media (min-width:425px) and (max-width: 767px) {
    flex-direction: column;

  }
  @media (min-width:375px) and (max-width: 424px) {
    flex-direction: column;

  }
  @media (min-width: 320px) and (max-width: 374px) {
    flex-direction: column;
  }
  .content {
    display: grid;
    gap: 5px;
    align-items: center;
    width: 100%;
    margin-right: 10px;
    grid-template-columns: 70px 100px auto 32px;

    @media (min-width:320px) and (max-width: 767px) {
      .card-img-top {
        width: 100px;
        height: auto;
      }
      grid-template-columns: 1fr;
    }

    &__vendor {
      font-size: 12px;
      font-weight: 600;
    }
    a {
      @extend .link_style;
      color: $blue-color;

    }
    &__available {
      justify-self: end;
      display: inline-block;
    }
  }
  .btn-gruop {
    @extend .align-items;
    justify-content: flex-end;
    justify-content: space-between;

    @media (min-width:320px) and (max-width: 1024px) {
      width: 100%;
    }
        
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