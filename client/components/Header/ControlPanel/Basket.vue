<template>
  <div class="control_cart">
    <i class="fa fa-shopping-cart" @click="showPopUp = !showPopUp"></i>
    <span v-if="GET_COUNTER">{{GET_COUNTER}}</span>
    <PopUp v-if="showPopUp" @closePopUp='closePopUp'>
    <ul v-if="showPopUp" slot="basket">
      <li v-for="(item, index) in GET_PRODUCTS"
        :key="index">
        {{item.name}} : {{item.quantity}}шт : {{item.total_cost}}грн
      </li>
      <hr>
      <li>{{GET_FULL_COST}}грн</li>
    </ul>
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
    ...mapActions("basket", ['ACTION_FOR_PRODUCTS']),
    ...mapMutations("basket", ['SET_ADD_PRODUCT','SET_COUNTER','SET_FULL_COST']),
    closePopUp() {
      this.showPopUp = false
    }
  },
  computed: {
    ...mapGetters("basket", ['GET_PRODUCTS', 'GET_FULL_COST', 'GET_COUNTER'])
  },

  // mounted() {

  //   if (localStorage.basket_products) {
  //     // this.SET_MODIFY_PRODUCTS(JSON.parse(localStorage.getItem("basket_products")))
  //     for (const iterator of JSON.parse(localStorage.getItem("basket_products"))) {
  //       this.ACTION_FOR_PRODUCTS(iterator)
  //       // console.log(this.GET_PRODUCTS);
  //       // console.log(iterator);
  //     }
  //     // this.SET_MODIFY_PRODUCTS(JSON.parse(localStorage.getItem("basket_products")))
  //   }
  //   // if (localStorage.basket_counter) {
  //   //   // let basket_counter = localStorage.getItem("basket_counter")
  //   //   this.SET_COUNTER(Number(localStorage.getItem("basket_counter")))
  //   // }
  //   // if (localStorage.full_cost) {
  //   //   // let basket_full_cost = localStorage.getItem("basket_full_cost")
  //   //   this.SET_FULL_COST(Number(localStorage.getItem("basket_full_cost")))
  //   //   console.log(this.SET_FULL_COST);
  //   // }

  // },
  // watch: {
  //   GET_PRODUCTS() {
  //     localStorage.setItem("basket_products", JSON.stringify(this.GET_PRODUCTS));
  //     localStorage.setItem("basket_counter", this.GET_COUNTER);
  //     localStorage.setItem("basket_full_cost", this.GET_FULL_COST);
  //   }
  // }
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