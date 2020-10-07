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
                @click.prevent="openProduct(product)"
                :title="item.description">
                {{item.name}}
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
          <button class="return">Вкрнуться</button>
          <button class="proceed">Оформить заказ</button>
        </div>
        <!-- <li v-for="(item, index) in GET_PRODUCTS"
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
        </ul> -->
          <!-- <button @click="StoragClear">localStorage.clear()</button> -->
      </div>
    </PopUp>
  </div>
</template>

<script>
import PopUp from "../../PopUp"
import ProductList from "../../ProductList"
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

.icon {
  position: relative;

  i {
    cursor: pointer;
    padding: 0;
    font-size: 26px;
    margin: 0 10px;
  }
  span {
    position: absolute;
    top: -20px;
    right: -5px;
    border-radius: 5px;
    padding: 0 5px;
    // font-size: 12px;
    color: white;
    background: #F68A8A;
  }
}

// item
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
  ul {
    padding: 20px;
  }
  li {
    @extend .align-items;
    @extend .padding-5;
    justify-content: space-between;
    border-bottom: #85C987 1px solid;

    .content {
      @extend .align-items;
      justify-content: flex-start;
      width: 65%;
      &__vendor {
        font-size: 12px;
        font-weight: 600;
        width: 120px;
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
      .qty {
        margin-left: 5px;
      }
    }

  }
.buy {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 5px;

  .form_quantity {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .plas, .minus{
      margin: 0;
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
    .quantity{
      height: 31px;
      width: 31px;
      background-color: white;
      color: $text-color;
      font-weight: 600;
      font-size: 20px;
      text-align: center;
      border: none;
      outline: none;
    }
  }
  .total_cost {
    margin-left: 5px;
    width: 100px;
    background-color: white;
    color: $text-color;
    font-weight: 600;
    // font-size: 20px;
    text-align: center;
    border: none;
    outline: none;
  }
  .reset{
    margin-left: 5px;
    height: 31px;
    width: 31px;
    text-decoration: none;
    border: none;
    text-align: center;
    color: $color-red;
      background-color: white;
      border: $color-red 1px solid;
      &:hover{
        background-color: $color-red;
        color: white;
        
      }
  }
}
.full_cost {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $text-color;
  font-weight: 600;
  font-size: 20px;
  
  .cost {
    padding: 5px 0;
    border-bottom: $green_color 1px solid;
  }
}
.checkout {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  button {
    width: 30vw;
  }
  .proceed {
    margin-left: 5px;
    height: 31px;
    text-decoration: none;
    border: none;
    text-align: center;
    color: $green_color;
      background-color: white;
      border: $green_color 1px solid;
      &:hover{
        background-color: $green_color;
        color: white;
        
      }
  }
  .return {
    margin-left: 5px;
    height: 31px;
    text-decoration: none;
    border: none;
    text-align: center;
    color: $blue-color;
      background-color: white;
      border: $blue-color 1px solid;
      &:hover{
        background-color: $blue-color;
        color: white;
        
      }
    
  }
}
</style>