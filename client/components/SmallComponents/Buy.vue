<template>
  <div class="buy">
    <Notification 
			:success="success"
		/>
    <div class="form_quantity">
      <button class="like" @click.prevent="addToLike(object)"><i class="far fa-heart"></i></button>
    </div>
    <div class="form_quantity">
      <template  v-if="object.available">
        <button @click.prevent="plas" class="plas"><i class="fas fa-plus"></i></button>
        <input class="quantity" name="quantity" min="1" v-model="quantity">
        <button @click.prevent="minus" class="minus"><i class="fas fa-minus"></i></button>
        <button class="apply" @click.prevent="putBasket(object)"><i class="fa fa-shopping-cart"></i></button>
      </template>
      <template v-else>
        <button disabled class="plas disabled"><i class="fas fa-plus"></i></button>
        <input disabled class="quantity" name="quantity" min="1" value="1">
        <button disabled class="minus disabled"><i class="fas fa-minus"></i></button>
        <button disabled class="apply disabled"><i class="fa fa-shopping-cart"></i></button>
      </template>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
import Notification from "@/components/Notification"
  export default {
    name: 'Buy',
    components: {
      Notification
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
        success: null,
      }
    },
    computed: {
      ...mapGetters("basket", ['GET_PRODUCTS']),
    },
    methods: {
      notification(object){
        this.success = `${object.name} - Додано в кошик!`
        setTimeout(()=> {
					this.success = null
				}, 3000);
      },
      ...mapActions("basket", ['SHAKE_FOR_PRODUCTS']),
      ...mapActions("like", ['ACTION_FOR_LIKE']),
      ...mapMutations("basket", ['SET_INDEXED_PROD','SET_ADD_PRODUCT']),

      addToLike(object) {
        if (object.like) {
          object.like = false
        }
        else {
          object.like = true
          this.ACTION_FOR_LIKE(object)
        }
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
      getDiscount(object){
        if (object.action) {
          return object.discount
        } else {
          return object.price
        }
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
            total_cost: (this.quantity + obj.quantity) * this.getDiscount(obj)
            }
          )
          this.quantity = 1
          this.SHAKE_FOR_PRODUCTS()

        } else if (index < 0) {
          object.quantity = this.quantity
          object.total_cost = this.quantity * this.getDiscount(object)
          this.SET_ADD_PRODUCT(object)
          this.quantity = 1
          this.SHAKE_FOR_PRODUCTS()
        }
        this.notification(object)
      }
    },
  }
</script>

<style lang="scss" scoped>
@import '@/assets/color.scss';
@import '@/assets/main.scss';

.buy {
  margin: 6px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
      color: $green_color;
      background-color: white;
      border: $green_color 1px solid;
      &:hover{
        background-color: $green_color;
        color: white;
      }
    }
    .minus{
      color: $red_color;
      background-color: white;
      border: $red_color 1px solid;
      &:hover{
        background-color: $red_color;
        color: white;
        
      }
    }
    .quantity{
      height: 31px;
      width: 31px;
      background-color: white;
      color: $text_color;
      font-weight: 600;
      font-size: 20px;
      text-align: center;
      border: none;
      outline: none;
    }
    .disabled {
      color: rgb(66, 66, 66);
      background-color: gray;
      border: gray 1px solid;
      &:hover{
        background-color: gray;
        color: rgb(66, 66, 66);
      }
    }
  }
  
  .apply {
    margin-left: 5px;
    padding: 5px 5px;
    height: 31px;
    
    background-color: white;
    color: $blue_color;
    text-decoration: none;
    outline: none;
    border: 1px solid $blue_color;
    i {
      margin-right: 3px;
    }
      &:hover{
      background-color: $blue_color;
      color:white;
    }
  }
  .like {
    @extend .apply;
    margin: 0 5px;
    width: 31px;
    color: $red_color;
    border: 1px solid $red_color;
    i {
      margin: 0;
    }
    &:hover{
      background-color: $red_color;
      color:white;
    }
  }
  .like_true {
    @extend .apply;
    width: 31px;
    color: white;
    background-color: $red_color;
    border: 1px solid $red_color;
    i {
      margin: 0;
    }
    &:hover{
      background-color: white;
      color: $red_color;
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


</style>