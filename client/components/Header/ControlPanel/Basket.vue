<template>
  <div class="control_cart">
    <i class="fa fa-shopping-cart" @click="showPopUp = !showPopUp"></i>
    <span v-if="GET_COUNTER">{{GET_COUNTER}}</span>
    <PopUp v-if="showPopUp" @closePopUp='closePopUp'>
      <div v-if="showPopUp" slot="basket">
        <ul>
          <li v-for="(item, index) in GET_PRODUCTS"
            :key="index">
            {{item.name}}  {{item.price}}
            <button @click="minus(item)">---</button>
            {{item.quantity}}
            <button @click="plus(item)">+++</button>
            {{item.total_cost}}
            <button @click="delProduct(item)">Del</button>
          </li>
          <hr>
          <li>{{GET_FULL_COST}}грн</li>
        </ul>
          <button @click="StoragClear">localStorage.clear()</button>
      </div>
    </PopUp>
  </div>
</template>

<script>
import PopUp from "../../PopUp"
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  name: "Basket",
  components: {
    PopUp,
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

      if (obj.quantity >= 1 || obj.quantity != 0) {
        let obj = this.GET_PRODUCTS[index]
        this.SET_INDEXED_PROD(
          {
          index: index,
          quantity: obj.quantity-1,
          total_cost: (obj.quantity-1) * obj.price
          }
        )
        this.SHAKE_FOR_PRODUCTS()
      } else if (obj.quantity == 0) {
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
  }
}
</script>

<style lang="scss" scoped>
$text_color: #2E4053;
$green_color: #85C987;
$global_blue: #428bca;
$color_red: #d9534f;

span {
  position: relative;
  top: -20px;
  right: 20px;
  border-radius: 5px;
  padding: 0 5px;
  // font-size: 12px;
  color: white;
  background: #F68A8A;
}
i {
  cursor: pointer;
  padding: 0;
  font-size: 26px;
  margin: 0 10px;
}
</style>