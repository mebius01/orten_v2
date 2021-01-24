<template>
  <div class="control_cart">
    <span class="icon">
      <i class="fa fa-shopping-cart" @click="showPopUp = !showPopUp"></i>
      <span v-if="GET_COUNTER">{{GET_COUNTER}}</span>
    </span>
    <PopUp v-if="showPopUp && GET_COUNTER" @closePopUp='closePopUp'>
      <div slot="basket">
        <ul>
          <li v-for="(item, index) in GET_PRODUCTS" :key="index" >
            <div class="content">
              <img :src="item.image" :alt="item.name">
              <span class="content__vendor">{{item.vendor}}</span>
              <a :href="'/product/'+item.slug"
                :title="item.description">
                <span @click="closePopUp">{{item.name}}</span>
              </a>
              <!-- <span class="content__available">
                <i v-if="item.available" class="fas fa-check" style="color:green"></i>
                <i v-else class="fas fa-times" style="color:red"></i>
              </span> -->
              <!-- <span class="content__action" v-if="item.action">
                <i class="fas fa-splotch" style="margin-left:10px">
                  Aкция до {{item.end_action}}
                </i>
              </span> -->
            </div>
            <div class="btn-gruop">
              <span class="vendor_code">PN: {{item.vendor_code}}</span>
              <!-- <span class="price" v-if="item.action">{{item.discount}}грн.</span> -->
              <span class="price">{{item.price}} грн.</span>
              <form class="space-between buy">
                <div class="form_quantity">
                  <button @click.prevent="plus(item)" class="plas"><i class="fas fa-plus"></i></button>
                  <input class="quantity" :value="item.quantity">
                  <button @click.prevent="minus(item)" class="minus"><i class="fas fa-minus"></i></button>
                </div>
                <span class="total_cost">{{item.total_cost}} грн.</span>
                <button class="reset" @click.prevent="delProduct(item)"><i class="fas fa-trash-alt"></i></button>
              </form>
            </div>
          </li>
        </ul>
        <div class="full_cost">
          <span>Общая стоимость:</span>
          <span class="cost">{{GET_FULL_COST}} грн.</span>
        </div>
        <div class="checkout">
          <button class="proceed" @click.prevent="openCart">Оформить заказ</button>
        </div>
      </div>
    </PopUp>
  </div>
</template>

<script>
import PopUp from "@/components/PopUp"
import ProductList from "@/components/ProductList"
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  name: "Basket",
  components: {
    PopUp,
    ProductList
  },
  data() {
    return {
      showPopUp: false,
    }
  },
  methods: {
    ...mapActions("basket", ['SHAKE_FOR_PRODUCTS']),
    ...mapMutations("basket", ['SET_ADD_PRODUCT','SET_COUNTER','SET_FULL_COST','DELL_INDEXED_PROD','SET_INDEXED_PROD']),
    closePopUp() {
      this.showPopUp = false
    },
    plus(obj) {
      let arr = this.GET_PRODUCTS
      let index = arr.indexOf(obj)

      if (obj.quantity >= 1) {
        let obj = this.GET_PRODUCTS[index]
        this.SET_INDEXED_PROD(
          {
          index: index,
          quantity: obj.quantity+1,
          total_cost: (obj.quantity+1) * obj.price
          }
        )
        this.SHAKE_FOR_PRODUCTS()
      }
    },
    minus(obj) {
      let arr = this.GET_PRODUCTS
      let index = arr.indexOf(obj)

      if (obj.quantity >= 2) {
        let obj = this.GET_PRODUCTS[index]
        this.SET_INDEXED_PROD(
          {
          index: index,
          quantity: obj.quantity-1,
          total_cost: (obj.quantity-1) * obj.price
          }
        )
        this.SHAKE_FOR_PRODUCTS()
      } else if (obj.quantity == 1) {
        this.delProduct(obj)
        this.SHAKE_FOR_PRODUCTS()
      }
    },
    delProduct(obj) {
      let arr = this.GET_PRODUCTS
      let index = arr.indexOf(obj)
      this.DELL_INDEXED_PROD(index)
      this.SHAKE_FOR_PRODUCTS()
      console.log(index);
    },
    StoragClear() {
      localStorage.clear()
    },
    openCart() {
      this.$router.push('/cart')
      this.closePopUp()
    }
  },
  computed: {
    ...mapGetters("basket", ['GET_PRODUCTS', 'GET_FULL_COST', 'GET_COUNTER'])
  },

  mounted() {
    if (localStorage.basket_products) {
      for (const iterator of JSON.parse(localStorage.getItem("basket_products"))) {
        this.SET_ADD_PRODUCT(iterator)
        this.SHAKE_FOR_PRODUCTS()
      }
    }
  },
  watch: {
    GET_COUNTER() {
      localStorage.setItem("basket_products", JSON.stringify(this.GET_PRODUCTS));
      localStorage.setItem("basket_counter", this.GET_COUNTER);
      localStorage.setItem("basket_full_cost", this.GET_FULL_COST);
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/icon_header.scss";
.checkout{
  display: flex;
  justify-content: flex-end;
}
</style>