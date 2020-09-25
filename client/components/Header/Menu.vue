<template>
  <ul class="menu">
    <li v-for="(item, index) in data" :key="index">
      <template v-if="item.link">
        <nuxt-link :class="item.link.class" :to="item.link.href" exact>
          <i :class="item.class"></i>{{item.text}}
        </nuxt-link>
      </template>
      <template v-else>
          <i :class="item.class"></i>{{item.text}}
      </template>
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
        {class: "fas fa-folder-minus", text: "Категории", link: {class: "", href: "/category"}},
        {class: "fab fa-product-hunt", text: "Товары", link: {class: "", href: "/product"}},
        {class: "fas fa-cogs", text: "Сервис", link: {class: "", href: "/service"}},
        {class: "fas fa-print", text: "Полиграфия", link: {class: "", href: "/poligraph"}},
        {class: "fas fa-cash-register", text: "Доставка и оплата", link: {class: "", href: "/pay"}},
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
.nuxt-link-active {
  border-bottom: $text-color 2px solid;
}
ul {
  padding: 5px;
  // border: 1px solid;
  // margin: 0 5px;
    li {
      padding: 2px;
      i {
        margin-right: 5px;
      }
    }
    a {
        @extend .link_style;
        border-bottom: white 2px solid;
        &:hover {
          border-bottom: $text-color 2px solid;
          transition: border-bottom 2s;
        }
    }
}
</style>