<template>
  <aside>
    <div class="header-for-block" id="categories"><i class="fas fa-th-list"></i>Категории</div>
    <ul class="accordion">
      <li class="root" v-for="(item, index) in OBJECT_LIST"
        :key="item.id"
        @click="showChildList(index)"
        >
      <i class="fas fa-stream"></i>{{item.name}}
      <ul class="child" v-if="childList === index">
        <li v-for="i in item.children" :key="i.id">
          <template v-if="i.product_count">
            <a :href="'/product/?category='+i.id">
              {{i.name}}  <span class="count">{{i.product_count}}</span>
            </a>          
          </template>
          <template v-else>
            <a :href="'/service/?category='+i.id">
              {{i.name}}  <span class="count">{{i.service_count}}</span>
            </a>          
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
@import '@/assets/main.scss';
@import '@/assets/color.scss';

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