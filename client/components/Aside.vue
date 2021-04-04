<template>
  <aside>
    <div class="header-for-block" id="categories"><i class="fas fa-th-list"></i>{{$t('dom.categories')}}</div>
    <ul class="accordion">
      <li class="root" v-for="(item, index) in OBJECT_LIST"
        :key="item.id"
        @click="showChildList(index)"
        >
      <template v-if="item.id !== 182">
        <i class="fas fa-stream"></i>{{item.name}}
      <ul class="child" v-if="childList === index">
        <li v-for="i in item.children" :key="i.id">
          <template>
            <nuxt-link v-if="i.product_count" :to="localePath({ name: 'product', query: { category: i.id } })" >
              {{i.name}}  <span class="count">{{i.product_count}}</span>
            </nuxt-link>
            <!-- <a v-if="i.product_count" :href="`/${$i18n.locale}/product?category=${i.id}`" @click.prevent="clickCategory(i)">
              {{i.name}}  <span class="count">{{i.product_count}}</span>
            </a> -->

            <!-- <a v-else-if="i.service_count" :href="`/${$i18n.locale}/service?category=${i.id}`" @click.prevent="clickCategory(i)">
              {{i.name}}  <span class="count">{{i.service_count}}</span>
            </a>  -->
            <nuxt-link v-else-if="i.service_count" :to="localePath({ name: 'service', query: { category: i.id } })">
              {{i.name}}  <span class="count">{{i.service_count}}</span>
            </nuxt-link>
          </template>
        </li>
      </ul>
      </template>
      </li>
    </ul>
  </aside>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
  export default {
    name: "Aside",
    data() {
      return {
        childList: null,
        link: ''
      }
    },
    computed: {
      ...mapGetters("categories", ['OBJECT_LIST'])
    },
    methods: {
      ...mapActions("categories", ['GET_OBJECT_LIST']),
      ...mapActions("commodity", ["SEND_CATEGORY", "SEND_DATA", "SEND_URL"]),
      showChildList(index) {
        this.childList = (this.childList === index) ? null : index;
      },
      // clickCategory(i){
      //   if (i.product_count) {
      //     const url = "/product/"
      //     this.SEND_URL(url)
      //     this.$router.push({path: `/${this.$i18n.locale}/product`, query: {category: i.id}})
      //   }
      //   if (i.service_count) {
      //     const url = "/service/"
      //     this.SEND_URL(url)
      //     this.$router.push({path: `/${this.$i18n.locale}/service`, query: {category: i.id}})
      //   }
      //   this.SEND_CATEGORY(i.id)
      //   this.SEND_DATA()
      // }
    },
    mounted() {
      this.GET_OBJECT_LIST()
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';
@import '@/assets/color.scss';

.accordion {
  padding-top: 5px;
  .root {
    border-bottom: white 1px solid;
    color: $text_color;
    background-color: $green_color;
    cursor: pointer;

    i {
      margin: 7px 8px;
    }
  }
  .child {
    background: white;
    padding: 10px;
  }
  li {
    .node-count {
      color: $blue_color;
    }
    a {
      @extend .link_style;
      display: flex;
      justify-content: space-between;
      padding: 3px 12px;
      border-bottom: $green_color 1px solid;
      .count {
        color: $blue_color;
      }
    }
  }
}

</style>