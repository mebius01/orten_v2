
<template>
  <ul class="breadcrumbs">
    <!-- <li><a href="/"><i class="fas fa-home"></i></a></li>
    <li><a class="item_breadcrumbs" href="/product/">Товары</a></li>
    <li><a class="item_breadcrumbs" href="/category/colorway/">ColorWay</a></li>
    <li><a class="item_breadcrumbs" href="/product/?category=85">Картриджи лазерные ColorWay</a></li>
    <li class="item_breadcrumbs">Картридж ColorWay CANON PGI-470Bk PIXMA MG5740/MG6840 Black</li> -->

  </ul>
</template>

<script>
</script>

<style lang="scss" scoped>
@import '@/assets/color.scss';
@import '@/assets/main.scss';

.breadcrumbs {
    @extend .padding-12;
    display: flex;
    font-size: 14px;
    @media (max-width: 640px) {
      flex-direction: column;
    }
    li {
      a {
        @extend .link_style;
        color: $blue_color;
      }
    }
    .item_breadcrumbs {
      &::before {
        margin-right: 3px;
        cursor: default;
        content: "\002F";
        color: $text_color;
        margin-left: 3px;
      }
    }
  }
</style>