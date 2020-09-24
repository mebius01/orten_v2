<template>
  <ul class="schedule">
    <li v-for="(item, index) in data" :key="index">
      <i :class="item.class"></i>{{item.text}}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {class: "fas fa-door-open", text: "График работы", link: false},
        {class: "fas fa-clock", text: "Пн-Пт: 9:00 - 18:00", link: false},
        {class: "fas fa-utensils", text: "Пн-Пт: 12:00 - 12:30", link: false},
        {class: "fas fa-clock", text: "Сб: 9:00 - 14:00", link: false},
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
$text-color: #2E4053;
.link_style {
  text-decoration: none;
  color: $text-color;
  display: block;
}
ul {
  padding: 5px;
  border: 1px solid;
  margin: 0 5px;
    li {
      padding: 2px;
      i {
        margin-right: 5px;
      }
    }
    a {
      @extend .link_style;
    }
}
</style>