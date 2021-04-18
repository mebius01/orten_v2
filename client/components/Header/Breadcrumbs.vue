
<template>
  <ul class="breadcrumbs">
    <li>
      <a :href="localePath('/')" exact replace>
        <i class="fas fa-home"></i>
      </a>
    </li>
    <li v-for="i in crumbs" :key="i.id" class="item_breadcrumbs">
      <template v-if="i.url">
        <a :href="i.url" exact replace>
          {{i.name}}
        </a>
      </template>
      <template v-else>
        <span>
          {{i.name}}
        </span>
      </template>
    </li>
    
  </ul>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'Breadcrumb',
  data() {
    return {
      slug: this.$route.params.slug,
      locale: this.$i18n.locale,
      categoryBySlug: [],
      item: {},
      category: []
    }
  },
  methods: {
    ...mapActions("breadcrumbs", ["SEND_CATEGORIES_ALL"]),
    // Проверка это иодель Product
    isProduct(arr) {
      return arr.product_count > 0
    },
    // Проверка это иодель Service
    isService(arr) {
      return arr.service_count > 0
    },
    // Проверка это иодель Polygraphy
    isPolygraphy(arr) {
      return arr.polygraphy_count > 0 
    },
    getFinalCategory(array, id) {
      array.forEach((el) => {
        if (el.id === id) {
          if (el.product_count) el.url = this.localePath({ name: 'product', query: { category: el.id } });
          if (el.service_count) el.url = this.localePath({ name: 'service', query: { category: el.id } });
          if (el.polygraphy_count) el.url = this.localePath({ name: 'polygraphy', query: { category: el.id } });
          if (!el.polygraphy_count && !el.service_count && !el.product_count)
            el.url = this.localePath({ name: 'category-slug', params: { slug: el.slug } })
          this.item = el
          return this.item;
        } else {
          if (el.children.length) {
            this.getFinalCategory(el.children, id);
          }
        }
      });
      return this.item;
    },
    getBreadcrumbs(arr, p, category){
      arr.push(
        {
          name: this.$t('dom.categories_list'),
          url: this.localePath({ name: 'category'}),
          level: -1
        }
      )
      arr.push(p);
      while (p.level >= 1) {
        arr.push(p);
        p = this.getFinalCategory(category, p.parent);
        arr.push(p);
      }
      return arr
    }

  },
  computed: {
    ...mapGetters("breadcrumbs", ['GET_ID', 'GET_CATEGORIES_ALL', 'GET_END_PAGE', 'GET_SLUG_ITEM']),
    crumbs () {
      if(process.browser){
        let breadcrumbs = [];
        let finalCategory;
        if (this.GET_ID) {
          finalCategory = this.getFinalCategory(this.GET_CATEGORIES_ALL, this.GET_ID)
          breadcrumbs = this.getBreadcrumbs(breadcrumbs, finalCategory, this.GET_CATEGORIES_ALL)
          const breadcrumbs2 = Object.values(breadcrumbs.reduce((acc, cur) => Object.assign(acc, { [cur.id]: cur }), {}))
          const breadcrumbs3 = breadcrumbs2.sort((a,b) => {
            return a.level - b.level
          })
          breadcrumbs3.push(this.GET_SLUG_ITEM)
          // const index = breadcrumbs3.length - 1
          // breadcrumbs3[index].url = null
          return breadcrumbs3
        } else {
          breadcrumbs.push(this.GET_END_PAGE)
          return breadcrumbs
        }
        
      }
    }
  },
  mounted() {
    this.SEND_CATEGORIES_ALL()
  },
}
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
        &::after {
        margin-right: 3px;
        cursor: default;
        content: "\002F";
        color: $text_color;
        margin-left: 3px;
      }
      }
    }
    .item_breadcrumbs {
      
    }
  }
</style>