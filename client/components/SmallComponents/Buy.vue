<template>
<div>
  <form class="space-between buy">
    <div class="form_quantity">
      <!-- <button class="eye" @click.prevent="showPopUp = !showPopUp"><i class="fas fa-eye"></i></button> -->
      <button class="like" @click.prevent="addToLike(object)"><i class="far fa-heart"></i></button>
    </div>
    <div class="form_quantity">
      <button @click.prevent="plas" class="plas"><i class="fas fa-plus"></i></button><input class="quantity" name="quantity" min="1" v-model="quantity"><button @click.prevent="minus" class="minus"><i class="fas fa-minus"></i></button>
      <button class="apply" @click.prevent="putBasket(object)"><i class="fa fa-shopping-cart"></i></button>
    </div>
  </form>
  <PopUp v-if="showPopUp" @closePopUp='closePopUp'>
    <div slot="product">
        <!-- {{object}} -->
    </div>
  </PopUp>
</div>
</template>

<script>
import PopUp from "../../components/PopUp"
import {mapActions, mapGetters, mapMutations} from 'vuex'
  export default {
    components: {
      PopUp,
    },
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
        like: false,
        showPopUp: false,
      }
    },
    computed: {
      ...mapGetters("basket", ['GET_PRODUCTS']),
    },
    methods: {
      ...mapActions("basket", ['SHAKE_FOR_PRODUCTS']),
      ...mapMutations("basket", ['SET_INDEXED_PROD','SET_ADD_PRODUCT']),
      ...mapActions("like", ['ACTION_FOR_LIKE']),
    
    closePopUp(){
      this.closePopUp = false
    },

      addToLike(object) {
        if (object.like) {
          object.like = false
        }
        else {
          object.like = true
          this.ACTION_FOR_LIKE(object)
        }
        console.log(object.like);
      },
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
        let id = object.id
        let arr = this.GET_PRODUCTS
        let index = arr.findIndex(item => item.id === object.id)

        if (index >= 0) {
          let obj = this.GET_PRODUCTS[index]
          this.SET_INDEXED_PROD(
            {
            index: index,
            quantity: this.quantity + obj.quantity,
            total_cost: (this.quantity + obj.quantity) * obj.price
            }
          )
          this.quantity = 1
          this.SHAKE_FOR_PRODUCTS()

        } else if (index < 0) {
          object.quantity = this.quantity
          object.total_cost = this.quantity * object.price
          this.SET_ADD_PRODUCT(object)
          console.log("Add to Cart", object.id);
          this.quantity = 1
          this.SHAKE_FOR_PRODUCTS()
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

.buy {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // border: 1px solid;

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
  
  .apply {
    margin-left: 5px;
    padding: 5px 5px;
    height: 31px;
    
    background-color: white;
    color: $global_blue;
    text-decoration: none;
    outline: none;
    border: 1px solid $global_blue;
    i {
      margin-right: 3px;
    }
      &:hover{
      background-color: $global_blue;
      color:white;
    }
  }
  .like {
    @extend .apply;
    width: 31px;
    color: $color-red;
    border: 1px solid $color-red;
    i {
      margin: 0;
    }
    &:hover{
      background-color: $color-red;
      color:white;
    }
  }
  .eye {
    @extend .like;
    color: #7952B3;
    border: 1px solid #7952B3;
    &:hover{
      background-color: #7952B3;
      color:white;
    }
  }
}
.form_quantity {
  
}
  

</style>