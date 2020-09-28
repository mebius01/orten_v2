<template>
  <div class="product">
    <div class="product__head">
        <h2>Акция до {{object.end_action}}</h2>
        <h1>{{ object.name }}</h1>
    </div>
    <div class="product__img">
        <img :src="object.image" :alt="object.name" :title="object.name">
    </div>
    <div class="product__feature">
      <div class="specification">
          <p class="space-between">
              <span>Артикул:</span>
              <span>{{ object.vendor_code }}</span>
          </p>
          <p class="space-between">
              <span>Производитель:</span>
              <span>{{object.vendor}}</span>
          </p>
          <p class="space-between">
              <span>Тип сервиса:</span>
              <span>{{object.type_service}}</span>
          </p>
          <div class="card__price">
              <p class="card--left-right">
                <span>Цена:</span>
                <span class="card__price--text">{{object.price}}</span>
              </p>
          </div>
      </div>
        
        <ul class="space-between modal">
            <li><i class="far fa-credit-card"></i></li>
            <li><i class="fas fa-truck"></i></li>
            <li><i class="fas fa-phone"></i></li>
        </ul>
    </div>
    <div class="product__description" v-if="object.description || object.specifications">
      <div class="descript" v-if="object.description">
        <strong>Краткое описание:</strong>
        {{ object.description }}
      </div>
      <div class="spec" v-if="object.specifications">
        <strong>Характеристика:</strong>
        {{ object.specifications}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  validate({ params }) {
  return /^[a-z0-9-]+$/.test(params.slug) // если params валидно
  },
  async asyncData({$axios, params }) {
    const object = await $axios.$get(`http://127.0.0.1:8000/api/service/${params.slug}`)
      return {object}
  }
}
</script>

<style lang="scss" scoped>
$text-color: #2E4053;
$green-color: #85C987;
$global_blue: #428bca;
$color_red: #fc6251;

.padding-12 {
  padding: 12px 24px;
}

.product{
  color: $text-color;
  @extend .padding-12;
  display: grid;
  gap:30px;
  grid-template-columns: auto 30% auto;
  grid-template-rows: auto;
  grid-template-areas: "head head head"
                      "img feature descript";
  
  @media (max-width: 680px) {
    grid-template-columns: 60% auto;
    grid-template-areas: "head head"
                        "img img"
                        "feature descript";
  }
  @media (max-width: 480px) {
    grid-template-columns: auto;
    grid-template-areas: "head"
                        "img"
                        "feature"
                        "descript";
  }

  .border-product {
    border-bottom: 1px solid $green-color;
  }
  &__head{
    grid-area: head;
    text-align: center;
    color: $global_blue;
    h2 {
      color: $color_red;
    }
  }
  &__img {
    grid-area: img;
    @extend .padding-12;
  }
  &__feature {
    grid-area: feature;
    @extend .padding-12;
    p {
      padding: 12px 0;
    }
    .modal {
      padding: 20px 0;
      i {
        color: $global_blue;
        cursor: pointer;
        font-size: 42px;
      }
    }
  }
  &__description {
    grid-area: descript;
    @extend .padding-12;
  }
}
</style>