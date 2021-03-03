<template>
  <div class="product">
    <div class="product__head">
      <h2 style="color:#fc6251" v-if="object.action">Акция до {{object.end_action}}</h2>
      <br>
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
              <span>Производитель:</span>
              <span>{{object.vendor}}</span>
          </p>
          <p class="space-between">
              <span>Тип товара:</span>
              <span>{{object.type_product}}</span>
          </p>
          <div class="card__price">
            <template v-if="object.action">
              <p class="card--left-right">
                <span class="card--text-crossed">Цена:</span>
                <span class="card--text-crossed">{{object.price}}</span>
              </p>
              <p class="card--left-right">
                <span>Цена:</span>
                <span class="card__price--text">{{object.discount}}</span>
              </p>
            </template>
            <template v-else>
              <p class="card--left-right">
                <span>Цена:</span>
                <span class="card__price--text">{{object.price}}</span>
              </p>
            </template>
          </div>
      </div>
      <ul class="space-between modal">
        <li @click="showPay = true"><i class="far fa-credit-card"></i></li>
        <li @click="showDelivery = true"><i class="fas fa-truck"></i></li>
        <li @click="showPhone = true"><i class="fas fa-phone"></i></li>
      </ul>
      <template v-if="object.available">
        <Buy :object="object"></Buy>
      </template>
      <p style="color:red; text-align: center" v-else>
        <span>
          В данный момент этот товар отсутствует,
          но Вы можете сделать заказ и
          получить детальную информацию о возможности поставки.
        </span>
      </p>
  </div>
    <div class="product__description" v-if="object.description || object.specifications">
      <div class="descript" v-if="object.description">
        <strong>Краткое описание:</strong>
        <p>{{ object.description }}</p>
      </div>
      <div class="spec" v-if="object.specifications">
        <strong>Характеристика:</strong>
        <p v-html="object.specifications"></p>
      </div>
    </div>

    <PopUp v-if="showPhone" @closePopUp='closePopUp'>
    <div slot="phone">
      <Contact />
    </div>
    </PopUp>

    <PopUp v-if="showDelivery" @closePopUp='closePopUp'>
    <div slot="delivery">
      <Delivery />
    </div>
    </PopUp>

    <PopUp v-if="showPay" @closePopUp='closePopUp'>
    <div slot="pay">
      <Pay />
    </div>
    </PopUp>
  <div>
  </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Buy from '../../components/SmallComponents/Buy'
import PopUp from '../../components/PopUp'
import Contact from '../../components/Contact'
import Delivery from '../../components/Delivery'
import Pay from '../../components/Pay'
export default {
  name: "ProductSlug",
  scrollToTop: false,
  components: {
    Buy,
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
      showDelivery: false,
      breadcrumb: null,
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
      "@type": "Product",
      "name": this.object.name,
      "image": this.object.image,
      "description": this.object.description,
      "brand": this.object.vendor ,
      "sku": this.object.vendor_code,
      "mpn": this.object.vendor_code,
      "offers": {
      "@type": "Offer",
      "url": this.env.baseUrl+this.$route.path,
      "priceCurrency": "UAH",
      "price": this.object.discount || this.object.price,
      "priceValidUntil": this.object.discount || this.object.price,
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
      }
    }
  },
  methods: {
    ...mapActions("breadcrumbs", ['SEND_DATA']),
    openPopUp() {
      this.showPopUp = true;
    },
    closePopUp() {
      this.showPhone = false
      this.showPay = false
      this.showDelivery = false
    }
  },
  async asyncData({$axios, params, route, env, app, redirect}) {
    const locale = app.i18n.locale
    const apiUrl = env.apiUrl
    try {
      const object = await $axios.$get(`${apiUrl}/${locale}/api/product/${params.slug}`)
      return {env, object}
    } catch (error) {
      return redirect("/error");
    }
    
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/main.scss";
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