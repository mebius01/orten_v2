<template>
  <ul class="main_categories">
    <li v-for="(item, index) in $t('mainCategory.data')" :key="index">
      <a :title="item.title" :href="item.href" exact>{{item.text}}</a>
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