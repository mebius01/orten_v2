<template>
  <ul class="contact">
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
        {class: "fa fa-home", text: "г. Николаев пр. Мира, 5", link: {class: "", href: "https://www.google.com/maps/place/%D0%9E%D1%80%D1%82%D1%8D%D0%BD,+%D0%9E%D0%9E%D0%9E/@46.952503,32.040273,15z/data=!4m2!3m1!1s0x0:0x4784e49173525ad2?ved=2ahUKEwiLnpXuiPLfAhXNqIsKHWxSBAYQ_BIwCnoECAUQCA"}},
        {class: "fas fa-envelope", text: "orten_office@ukr.net", link: {class: "", href: "mailto:orten_office@ukr.net"}},
        {class: "fas fa-phone", text: "(0512) 56-65-39", link: {class: "", href: "tel:+380512566539"}},
        {class: "fas fa-mobile", text: "(050) 318-40-64", link: {class: "", href: "tel:+380503184064"}},
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