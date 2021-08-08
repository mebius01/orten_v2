<template>
  <div class="product">
    <div class="product__head">
      <template v-if="object.end_action">
        <h2>Акция до {{object.end_action}}</h2>
      </template>
      <h1>{{ object.name }}</h1>
    </div>
    <div class="product__img">
      <img v-if="object.image" :src="object.image" :alt="object.name" :title="object.name">
      <img v-else src="/default-img.png" alt="default img">
    </div>
    <div class="product__feature">
      <div class="specification">
          <p class="space-between">
              <span>Артикул:</span>
              <span>{{ object.vendor_code }}</span>
          </p>
          <p class="space-between">
              <span>{{ $t('product.manufacturer') }}:</span>
              <span>{{object.vendor}}</span>
          </p>
          <p class="space-between">
              <span>{{ $t('product.type_service') }}:</span>
              <span>{{object.type_service}}</span>
          </p>
          <div class="card__price">
              <p class="card--left-right">
                <span>{{ $t('product.price') }}:</span>
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
    <div class="product__description" v-if="object.description">
      <div class="descript" v-if="object.description">
        <strong>{{ $t('product.short_description') }}:</strong>
        {{ object.description }}
      </div>
      <div class="spec" v-if="object.specifications">
        <strong>{{ $t('product.specification') }}:</strong>
        <p v-html="object.specifications"></p>
      </div>
    </div>
  </div>
</template>

<script>
import PopUp from '../../components/PopUp'
import Contact from '../../components/Contact'
import Delivery from '../../components/Delivery'
import Pay from '../../components/Pay'
import { mapActions } from 'vuex'
export default {
  name: "ServiceSlug",
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
      baseUrl: null,
    }
  },
  head() {
    return {
      title: this.object.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.object.description
        }
      ]
    }
  },
  jsonld() {
    return {
      "@context": "https://schema.org/",
      "@type": "Service",
      "name": this.object.name,
      "image": this.object.image,
      "description": this.object.description,
      "brand": this.object.vendor,
      "sku": this.object.vendor_code,
      "mpn": this.object.vendor_code,
      "offers": {
      "@type": "Offer",
      // "url": this.env.apiUrl+this.$route.path,
      "priceCurrency": "UAH",
      "price": this.object.discount || this.object.price,
      "priceValidUntil": this.object.discount || this.object.price,
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
      }
    }
  },
  methods: {
    ...mapActions("breadcrumbs", ['SEND_ID','SEND_SLUG_ITEM']),
    openPopUp() {
      this.showPopUp = true;
    },
    closePopUp() {
      this.showPhone = false
      this.showPay = false
    }
  },
  mounted() {
    this.SEND_ID(this.object.category)
    this.SEND_SLUG_ITEM(this.object)
  },
  async asyncData({$axios, params, env, app}) {
    const locale = app.i18n.locale
    const apiUrl = env.apiUrl
    const object = await $axios.$get(`${apiUrl}/${locale}/api/service/${params.slug}`)
    return {object}
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.spec {
  margin-top: 20px;
}
.card--left-right {
  display: flex;
  justify-content: space-between;
  margin: 0;
  margin-bottom: 3px;
}
.card--text-crossed {
  text-decoration: line-through;
  font-size: 13px;
  font-weight: 700;
}
.card--red-text {
  color: rgb(252, 98, 91);
  font-size: 16px;
  font-weight: 700;
}
.card__price--text {
  font-size: 16px;
  font-weight: 700;
  padding: 2px 5px;
  background-color: rgba(252, 99, 91, 0.18);
}

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