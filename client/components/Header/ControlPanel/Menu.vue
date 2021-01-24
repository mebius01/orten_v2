<template>
  <div class="menu">
    <span class="icon">
      <i class="fas fa-bars" title="Меню" @click="showPopUp = !showPopUp"></i>
    </span>
    <PopUp v-if="showPopUp" @closePopUp='closePopUp'>
      <div slot="menu">
        <ul>
          <li v-for="(item, index) in data" :key="index" @click="closePopUp">
            <template v-if="item.link">
              <a :href="item.link.href" exact>
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
      data: [
        {text: "Дом", link: {class: "", href: "/"}},
        {text: "Категории", link: {class: "", href: "/category"}},
        {text: "Товары", link: {class: "", href: "/product"}},
        {text: "Сервис", link: {class: "", href: "/service"}},
        {text: "Полиграфия", link: {class: "", href: "/polygraphy"}},
        {text: "Доставка и оплата", link: {class: "", href: "/delivery_payment"}},
        {text: "Кто мы", link: {class: "", href: "/about"}},
        {text: "Контакты", link: {class: "", href: "/contact"}},
      ],
      showPopUp: false,
    }
  },
  methods: {
    closePopUp() {
      this.showPopUp = false
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/color.scss';
@import '@/assets/main.scss';
@import '@/assets/animation.scss';


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
    }
  }
}
i {
  cursor: pointer;
  padding: 0;
  font-size: 26px;
  margin: 0 10px;
  &:hover {
    @extend .pulse;
  }
}
</style>