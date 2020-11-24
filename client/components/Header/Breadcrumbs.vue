<template>
  <ul class="breadcrumbs">
    <li>
      <a href="/"><i class="fas fa-home"></i></a>
    </li>
    {{GET_OBJECT_LIST}}
    <!-- <li v-for="(item, index) in GET_OBJECT_LIST" :key="index">
      <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
    </li> -->
  </ul>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
  export default {
    name: "Breadcrumbs",
    computed: {
      ...mapGetters("breadcrumbs", ['GET_OBJECT_LIST']),
    },
  }
</script>

<style lang="scss" scoped>
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
        color: $green-color;
        margin-right: 3px;
        &::after {
          cursor: default;
          content: "\002F";
          color: $text-color;
          margin-left: 3px;
        }
      }
    }
  }
</style>