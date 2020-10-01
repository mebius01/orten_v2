<template>
  <form class="space-between">
    <div class="form_quantity">
      <button @click.prevent="plas" class="plas"><i class="fas fa-plus"></i></button><input class="quantity" name="quantity" min="1" v-model="value"><button @click.prevent="minus" class="minus"><i class="fas fa-minus"></i></button>
    </div>
    <button type="submit" class="apply"><i class="fa fa-shopping-cart"></i>Купить</button>
  </form>
</template>

<script>
  export default {
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