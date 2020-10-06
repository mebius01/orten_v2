<template>
  <form class="space-between">
    <div class="form_quantity">
      <button @click.prevent="plas" class="plas"><i class="fas fa-plus"></i></button><input class="quantity" name="quantity" min="1" v-model="quantity"><button @click.prevent="minus" class="minus"><i class="fas fa-minus"></i></button>
    </div>
    <button class="apply" @click.prevent="putBasket(object)"><i class="fa fa-shopping-cart"></i>Купить</button>
  </form>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
  export default {
    props: {
      object: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        quantity: 1,
        total_cost: null,
      }
    },
    computed: {
      ...mapGetters("basket", ['GET_PRODUCTS'])
    },
    methods: {
      ...mapActions("basket", ['ACTION_FOR_PRODUCTS']),
      minus() {
        if (this.quantity <= 1) {
          this.plas()
        }
        this.quantity--
      },
      plas() {
        this.quantity++
      },
      putBasket(object) {
        let arr = this.GET_PRODUCTS
        let obj_in_state = arr.find(item => item.id === object.id);
        if (obj_in_state) {
          console.log(obj_in_state.quantity);
        } else {
          object.quantity = this.quantity
          object.total_cost = this.quantity * object.price
          this.ACTION_FOR_PRODUCTS(object)
          console.log(object);
        }
        
      }
    },
  }
</script>

<style lang="scss" scoped>
$text-color: #2E4053;
$green-color: #85C987;
$global_blue: #428bca;
$color-red: #d9534f;

.space-between {
  display: flex;
  justify-content: space-between;
}
.apply {
  i {
    padding-right: 5px;
  }
}
.form_quantity {
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