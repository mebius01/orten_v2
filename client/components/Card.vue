<template>
  <div class="card">
    <div class="card__action" v-if="product.action">Акция до {{product.end_action}}</div>
    <nuxt-link class="card__link" :to="'/product/'+product.slug">
      <div class="card__img">
        <img class="card-img-top" :src="product.image" :alt="product.name">
      </div>
    </nuxt-link>
      <div class="card__body">
				<nuxt-link class="card__link" :to="'/product/'+product.slug">
					<h2 class="card__name color--blue">{{product.name}}</h2>
				</nuxt-link>
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
    <form class="space-between">
      <div class="form_quantity">
      <button @click.prevent="plas" class="plas"><i class="fas fa-plus"></i></button><input class="quantity" name="quantity" min="1" v-model="value"><button @click.prevent="minus" class="minus"><i class="fas fa-minus"></i></button>
      </div>
      <button @click.prevent="submit(product)" class="apply"><i class="fa fa-shopping-cart"></i>Купить</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Card",
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
        value: 1
      }
    },
    methods: {
      minus() {
        if (this.value <= 1) {
          this.plas()
        }
        this.value--
      },
      plas() {
        this.value++
			},
			submit(product) {
				product.quantity = this.value
				console.log(product);
				this.value = 1
			}
    },
  }
</script>

<style lang="scss" scoped>
$text-color: #2E4053;
$green-color: #85C987;
$global_blue: #428bca;
$color-red: #d9534f;

.shadow {
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.5);
}
.shadow-hover {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.61);
}
.space-between {
  display: flex;
  justify-content: space-between;
}
.apply {
  i {
    padding-right: 5px;
  }
}
.link_style {
  text-decoration: none;
  color: $text-color;
  display: block;
}
.card {
  position: relative;
  @extend .shadow;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    @extend .shadow-hover;
  }
  p {
    padding: 2px 0;
  }
  a {
    @extend .link_style;
  }
  &__action {
    width: 90%;
    height: 30px;
    background: #fa6262;
    position: absolute;
    top: 50px;
    left: -50px;
    text-align: center;
    line-height: 30px;
    color: white;
    opacity: 0.5;
    transform: rotate(-45deg);
  }
  &__name {
    margin-top: 12px;
    text-transform: uppercase;
    font-size: 16px;
    text-align: center;
  }
  &__body {
    margin: 5px 0;
  }
  }
  .card--left-right {
    display: flex;
    justify-content: space-between;
    margin: 0;
    margin-bottom: 3px;
  }
  .card--text-crossed  {
    text-decoration: line-through;
    font-size: 13px;
    font-weight: 700;
  }
  .card--red-text {
  color: rgb(252,98,91);
  font-size: 16px;
  font-weight: 700;
  }
  .card__price--text {
    font-size: 16px;
    font-weight: 700;
    padding: 2px 5px;
    background-color: rgba(252, 99, 91, 0.18);
  }
  .quantity{
  display: inline-block;
  margin: 0;
  height: 31px;
  width: 35px;
  background-color: white;
  color: $text-color;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  border: none;
  outline: none;
  }
  .plas, .minus{
  height: 31px;
  width: 31px;
  text-decoration: none;
  border: none;
  text-align: center;
  }
  .plas{
  color: $green-color;
  background-color: white;
  border: $green-color 1px solid;
  &:hover{
    background-color: $green-color;
    color: white;
  }
  }
  .minus{
  color: $color-red;
  background-color: white;
  border: $color-red 1px solid;
  &:hover{
    background-color: $color-red;
    color: white;
    
  }
  }
</style>