<template>
  <div class="product">
    <div class="product__head">
      <template v-if="object.end_action">
        <h2>Акция до {{object.end_action}}</h2>
      </template>
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
        <li @click="showPay = true"><i class="far fa-credit-card"></i></li>
        <li @click="showPhone = true"><i class="fas fa-phone"></i></li>
      </ul>
      <PopUp v-if="showPhone" @closePopUp='closePopUp'>
      <div slot="phone">
        <Contact />
      </div>
      </PopUp>

      <PopUp
        v-if="showPay"
        @closePopUp='closePopUp'>
      <div slot="pay">
        <Pay />
      </div>
      </PopUp>
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
import PopUp from '../../components/PopUp'
import Contact from '../../components/Contact'
import Delivery from '../../components/Delivery'
import Pay from '../../components/Pay'
export default {
  components: {
    PopUp,
    Contact,
    Delivery,
    Pay
  },
  validate({ params }) {
  return /^[a-z0-9-]+$/.test(params.slug) // если params валидно
  },
  data() {
    return {
      showPay: false,
      showPhone: false,
    }
  },
  methods: {
    openPopUp() {
      this.showPopUp = true;
    },
    closePopUp() {
      this.showPhone = false
      this.showPay = false
    }
  },
  async asyncData({$axios, params }) {
    const object = await $axios.$get(`http://127.0.0.1:8000/api/service/${params.slug}`)
      return {object}
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/main.scss";

.product{
  color: $text_color;
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
    border-bottom: 1px solid $green_color;
  }
  &__head{
    grid-area: head;
    text-align: center;
    color: $blue_color;
    h2 {
      color: $red_color;
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
      @extend .border-product
    }
    .modal {
      padding: 12px 0;
      @extend .border-product;
      i {
        color: $blue_color;
        cursor: pointer;
        font-size: 32px;
      }
    }
    form {
      padding: 12px 0;
    }
  }
  &__description {
    grid-area: descript;
    @extend .padding-12;
  }
}
</style>