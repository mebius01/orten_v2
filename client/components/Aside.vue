<template>
  <aside>
    <div class="header-for-block" id="categories"><i class="fas fa-th-list"></i>Категории</div>
    <ul class="accordion">
      <li class="root" v-for="(item, index) in OBJECT_LIST"
        :key="item.id"
        @click="showChildList(index)"
        >
      <i class="fas fa-bars"></i>{{item.name}}
      <ul class="child" v-if="childList === index">
        <li v-for="i in item.children" :key="i.id">
          <template v-if="i.product_count">
            <nuxt-link :to="'/product/?category='+i.id">
              {{i.name}}  <span class="count">{{i.product_count}}</span>
            </nuxt-link>          
          </template>
          <template v-else>
            <nuxt-link :to="'/service/?category='+i.id">
              {{i.name}}  <span class="count">{{i.service_count}}</span>
            </nuxt-link>          
          </template>
        </li>
      </ul>
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
      showChildList(index) {
        this.childList = (this.childList === index) ? null : index;
      }
    },
    mounted() {
      this.GET_OBJECT_LIST()
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/main.scss';
.hidden {
  display: none;
}
.initial {
  display: block;
}

.accordion {
  padding-top: 5px;
  .root {
    border-bottom: white 1px solid;
    color: $text-color;
    background-color: $green-color;
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
      color: $global_blue;
    }
    a {
      @extend .link_style;
      display: flex;
      justify-content: space-between;
      padding: 3px 12px;
      border-bottom: $green-color 1px solid;
      .count {
        color: $global_blue;
      }
    }
  }
}

</style>