<template>
  <li>
    <div class="content">
      <img :src="product.image" :alt="product.name">
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
      <span class="content__action" v-if="product.action">
        <i class="fas fa-splotch" style="margin-left:10px">
          Aкция до {{product.end_action}}
        </i>
      </span>
    </div>
    <div class="btn-gruop">
      <span class="vendor_code">PN: {{product.vendor_code}}</span>
      <span class="price" v-if="product.action">{{product.discount}}грн.</span>
      <span class="price" v-else>{{product.price}}грн.</span>
    </div>
    <!-- <Buy
    :product="product"
    ></Buy> -->
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
    data() {
      return {
        
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
$text-color: #2E4053;
$blue-color: #428bca;
$color-red: #d9534f;

.align-items {
  display: flex;
  align-items: center;
}
.padding-5 {
  padding: 5px 5px;
}
.link_style {
  text-decoration: none;
  color: $text-color;
  display: block;
}

  li {
    @extend .align-items;
    @extend .padding-5;
    justify-content: space-between;
    border-bottom: #85C987 1px solid;

    .content {
      @extend .align-items;
      justify-content: flex-start;
      width: 70%;
      &__vendor {
        font-size: 12px;
        font-weight: 600;
        @extend .padding-5;
      }
      &__available {
        @extend .padding-5;
      }
      &__action {
        font-size: 12px;
        font-weight: 400;
        color: $color-red;
        @extend .padding-5;
      }
      img {
        @extend .padding-5;
        width: 56px;
        height: 100%;
      }

      a {
        display: flex;
        padding: 0 5px;
        @extend .link_style;
        color: $blue-color;

      }
      // .available {
      //   @extend .padding-5;
      //   font-size: 16px;
      //   font-weight: 600;
      // }
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
      .vendor_code {
        @extend .padding-5;
        font-size: 12px;
      }
    }
    
  }
</style>