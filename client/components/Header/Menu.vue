<template>
  <ul class="menu">
    <li v-for="(item, index) in data" :key="index">
      <a :class="item.link.class" :href="item.link.href">
        <i :class="item.class"></i>{{item.text}}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {class: "fas fa-folder-minus", text: "Меню", link: false},
        {class: "fas fa-handshake", text: "Кто мы", link: {class: "", href: "/about"}},
        {class: "fas fa-folder-minus", text: "Категории", link: {class: "", href: ""}},
        {class: "fab fa-product-hunt", text: "Товары", link: {class: "", href: ""}},
        {class: "fas fa-cogs", text: "Сервис", link: {class: "", href: ""}},
        {class: "fas fa-print", text: "Полиграфия", link: {class: "", href: ""}},
        {class: "fas fa-cash-register", text: "Доставка и оплата", link: {class: "", href: ""}},
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
      border-bottom: white 1px solid;
      &:hover {
        border-bottom: $text-color 1px solid;
        transition: border-bottom 2s;
      }
    }
}
</style>