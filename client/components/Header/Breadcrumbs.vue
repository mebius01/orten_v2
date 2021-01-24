
<template>
  <ul class="breadcrumbs">
    <!-- {{GET_LIST}} -->
    <!-- <li v-for="(item, index) in breadcrumbs" :key="index" >
      {{item}}
    </li> -->
    <!-- {{GET_LIST}} -->
    <!-- <li>
      <a href="/"><i class="fas fa-home"></i></a>
    </li>
    <li><a class="item_breadcrumbs" href="/product/">Товары</a></li>
    <li><a class="item_breadcrumbs" href="/category/colorway/">ColorWay</a></li>
    <li><a class="item_breadcrumbs" href="/product/?category=85">Картриджи лазерные ColorWay</a></li>
    <li class="item_breadcrumbs">Картридж ColorWay CANON PGI-470Bk PIXMA MG5740/MG6840 Black</li> -->

  </ul>
</template>

<script>
// import {mapGetters, mapActions} from 'vuex'
//   export default {
//     name: "Breadcrumbs",
//     data() {
//       return {
//         breadcrumbs: [],
//         count: 0,
//       }
//     },
//     computed: {
//       ...mapGetters("breadcrumbs", ["GET_LIST"]),
//     },
//     methods: {
//       getCategoryTree(id){
//         this.$axios.get(`/category_id/${id}`)
//           .then(res => {
//             const data = res.data
//             this.count = this.count +1
//             this.$set(this.breadcrumbs, this.count, data)
//             if (data.parent) {
//               this.getCategoryTree(`${data.parent}`)
//             }
//           })
//       },
//       getCategoryId(){
//         const route = this.$route
//         this.$axios.get(`${route.fullPath}`)
//         .then(res => {
//           const data = { name: res.data.name, slug: res.data.slug, category: res.data.category }
//           this.$set(this.breadcrumbs, this.count, data)
//           this.count = this.count +1
//           const categoryId = data.category
//           this.getCategoryTree(categoryId)
//         })
//       },
//     },
//     created() {
//     const route = this.$route
//     this.getCategoryId()
//     this.$set(this.breadcrumbs, this.count, route.fullPath);
//     }
//   }
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
        color: $green_color;
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