<template>
  <div class="menu">
    <span class="icon">
      <i class="fas fa-bars" title="Меню" @click="showPopUp = !showPopUp"></i>
    </span>
    <PopUp v-if="showPopUp" @closePopUp='closePopUp'>
      <div slot="menu">
        <ul>
          <li v-for="(item, index) in $t('menu.data')" :key="index" @click="closePopUp">
            <template v-if="item.link">
              <a :href="item.link.href" exact replace>
                {{item.text}}
              </a>
            </template>
            <template v-else>
              {{item.text}}
            </template>
          </li>
        </ul>
      </div>
    </PopUp>
  </div>
</template>

<script>
import PopUp from "../../PopUp"
export default {
  components: {
    PopUp
  },
  data() {
    return {
      showPopUp: false,
    }
  },
  methods: {
    closePopUp() {
      this.showPopUp = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';
@import '@/assets/icon_header.scss';

ul {
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  li {
    margin: 10px 0;
    text-align: center;

    a {
      width: 300px;
      font-size: 20px;
      line-height: 40px;
      display: inline-block;
      border-bottom: white 2px solid;
      @extend .link_style;

      &:hover {
          border-bottom: $text_color 2px solid;
          transition: border-bottom 1s;
        }
      
      .nuxt-link-active {
        border-bottom: $red_color 2px solid;
      }
    }
  }
}
</style>