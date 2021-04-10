<template>
  <ul class="main_categories">
    <li v-for="(item, index) in $t('main_category.data')" :key="index">
      <a :href="item.href" :title="item.title" exact>{{item.text}}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "MainCategory",
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';
@import '@/assets/color.scss';
@media (min-width: 992px) and (max-width: 1199px){
    .main_categories {
        display: grid;
        grid-template-columns: auto auto auto auto auto;
    }
}
@media (min-width: 768px) and (max-width: 991px){
    .main_categories {
        display: grid;
        grid-template-columns: auto auto auto auto;
    }
}
@media (max-width: 767px){
    .main_categories {
        display: grid;
        grid-template-columns: auto auto auto;
    }
}
@media (max-width: 650px){
    .main_categories {
        display: none;
    }
}
@media (max-width: 480px){
    .main_categories {
        display: none;
    }
}
.main_categories {
  @extend .space-between;
  @extend .padding-12;
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