<template>
  <div>
    <button @click.prevent="plas" class="plas">+</button>
    <input class="quantity" name="quantity" min="1" :value="value">
    <button @click.prevent="minus" class="minus">-</button>
  </div>
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
  .quantity{
    height: 31px;
    width: 31px;
    text-decoration: none;
    background-color: white;
    text-align: center;
    // border: 1px $green-color solid;
    // outline: none;
  }
  .plas, .minus{
    height: 31px;
    width: 31px;
    text-decoration: none;
    border: none;
    text-align: center;
  }
  .plas{
    color: white;
    background-color: $green-color;
    &:hover{
      border: 1px solid;
      background-color: white;
      color: $green-color;
    }
  }
  .minus{
    color: white;
    background-color: $color-red;
    &:hover{
      border: 1px solid;
      background-color: white;
      color: $color-red;
    }
  }
</style>