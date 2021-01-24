<template>
  <div class="accordion">
    <div class="header-for-block"><i class="fas fa-filter"></i>Фильтры</div>
    <div class="filters">
      <form method="get">
        <div class="flex-row">
          <input type="text" name="min_price" placeholder="min 0">
          <input type="text" name="max_price" placeholder="max 99999">
        </div>
        <input type="hidden" name="category" v-if="pageProduct">
        <select name="format_fild" v-if="pageProduct">
          <option value="" disabled selected>Формат A0-A10</option>
          <option value="A0">A0</option>
          <option value="A1">A1</option>
          <option value="A2">A2</option>
          <option value="A3">A3</option>
          <option value="A4">A4</option>
          <option value="A5">A5</option>
          <option value="A6">A6</option>
          <option value="A7">A7</option>
          <option value="A8">A8</option>
          <option value="A9">A9</option>
          <option value="A10">A10</option>
        </select>
        <select name="color_fild" id="id_color_fild" v-if="pageProduct">
          <option value="" selected>BW/Color</option>
          <option value="BW">BW</option>
          <option value="Color">Color</option>
        </select>
        <input type="text" name="search" class="search" placeholder="Search..">
        <div class="flex-row">
          <input class="apply" type="submit">
          <input class="reset" type="reset">
        </div>
        <input type="checkbox" class="check-box" name="available" value="True" v-if="pageProduct">
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Filters",
    data() {
      return {
        pageProduct: this.$route.name === 'product',
        pageService: this.$route.name === 'service',
      }
    },
  }
</script>

<style lang="scss" scoped>
@import '../assets/color.scss';
@import '../assets/main.scss';
  input, select {
    color: $text_color;
    margin-bottom: 4px;
    width: 100%;
    height: 32px;
    padding: 5px;
    outline: none;
    border: 1px solid $green_color;
  }
  .flex-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      width: 49%;
      cursor: pointer;
    }
    .reset {
      border-color: $red_color;
      background-color: white;
      color: $red_color;
      &:hover {
        background-color: $red_color;
        color: white;
      }
    }
    .apply {
      border-color: $green_color;
      background-color: white;
      color: $green_color;
      &:hover {
        background-color: $green_color;
        color: white;
      }
    }
  }
  input[type='checkbox'] {
    width: 22px;
    height: 22px;
    cursor: pointer;

  }
  select { 
    display: block; ;
    appearance: none;
    background-color: #fff;  
  }
</style>