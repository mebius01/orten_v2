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
              <nuxt-link :to="item.link.href" exact>
                {{item.text}}
              </nuxt-link>
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
$text-color: #2E4053;
$blue-color: #428bca;
$color-red: #d9534f;

.align-items {
  display: flex;
  align-items: center;
}
.padding-5 {
  padding: 5px 5px;
}
.link_style {
  text-decoration: none;
  color: $text-color;
  display: block;
}
.nuxt-link-active {
  border-bottom: $color-red 2px solid;
}
.pulse {
  animation-name: pulse;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-iteration-count: infinite
  }
  @keyframes pulse {
  0% {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  }
  50% {
  -webkit-transform: scale3d(1.5, 1.5, 1.5);
  transform: scale3d(1.5, 1.5, 1.5);
  }
  100% {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  }
  } 

ul {
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  li {
    margin: 10px 0;
    // border: 1px solid;
    text-align: center;

    a {
      width: 300px;
      font-size: 20px;
      line-height: 40px;
      display: inline-block;
      border-bottom: white 2px solid;
      @extend .link_style;

      &:hover {
          border-bottom: $text-color 2px solid;
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