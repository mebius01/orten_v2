<template>
  <ul class="main_categories">
    <li v-for="(item, index) in data" :key="index">
      <a :title="item.title" :href="item.href" exact>{{item.text}}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "MainCategory",
  data() {
    return {
      data: [
        {text: "Ricoh", class: "", title: "", href: "/category/ricoh"},
        {text: "Konica Minolta", class: "", title: "", href: "/category/konica-minolta"},
        {text: "Цифровые дупликаторы", class: "", title: "", href: "/category/cifrovye-duplikatory"},
        {text: "ColorWay", class: "", title: "", href: "/category/colorway"},
        {text: "Сервисный Центр", class: "", title: "", href: "/category/servisnyj-centr"},
        {text: "Все для Принтеров и МФУ", class: "", title: "", href: "/category/licenzionnye-rashodnye-materialy"},
        {text: "Полиграфия", class: "", title: "", href: "/polygraphy"},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';
@import '@/assets/color.scss';
.main_categories {
  @extend .space-between;
  @extend .padding-12;
  @media (max-width: 700px) {
    display: none; //!!! fix
  }
    li {
      margin: 0 10px;
      a {
        @extend .link_style;
        border-bottom: white 2px solid;
        &:hover {
          border-bottom: $text_color 2px solid;
          transition: border-bottom 1s;
        }
      }
    }
  }
</style>