<template>
  <ul class="main_categories">
    <li v-for="(item, index) in data" :key="index">
      <a :class="item.class" :title="item.title" :href="item.href">{{item.text}}</a>
    </li>
    
  </ul>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {text: "Ricoh", class: "", title: "", href: ""},
        {text: "Konica Minolta", class: "", title: "", href: ""},
        {text: "Цифровые дупликаторы", class: "", title: "", href: ""},
        {text: "ColorWay", class: "", title: "", href: ""},
        {text: "Сервисный Центр", class: "", title: "", href: ""},
        {text: "Все для Принтеров и МФУ", class: "", title: "", href: ""},
        {text: "Полиграфия", class: "", title: "", href: ""},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$text-color: #2E4053;
.padding-12 {
  padding: 12px 24px;
}
.space-between {
  display: flex;
  justify-content: space-between;
}
.link_style {
  text-decoration: none;
  color: $text-color;
  display: block;
}
.main_categories {
  // border: 1px solid;
  @extend .space-between;
  @extend .padding-12;
  @media (max-width: 700px) {
    display: none; //!!! fix
  }
    li {
      a {
        @extend .link_style;
        border-bottom: white 2px solid;
        &:hover {
          border-bottom: $text-color 2px solid;
          transition: border-bottom 2s;
        }
      }
    }
  }
</style>