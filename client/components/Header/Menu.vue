<template>
  <div class="b-component">
    <p class="toggle" @click="toggleOn"><i class="fas fa-folder-minus icon"></i>Основное меню
    <i :class="chevron"></i>
    </p>
    <ul :class="toggleClass" v-if="toggle">
      <li v-for="(item, index) in data" :key="index">
        <template v-if="item.link">
          <nuxt-link :class="item.link.class" :to="item.link.href" exact>
            <i :class="item.class"></i>{{item.text}}
          </nuxt-link>
        </template>
        <template v-else>
            <i :class="item.class"></i>{{item.text}}
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {class: "fas fa-handshake", text: "Кто мы", link: {class: "", href: "/about"}},
        {class: "fas fa-folder-minus", text: "Категории", link: {class: "", href: "/category"}},
        {class: "fab fa-product-hunt", text: "Товары", link: {class: "", href: "/product"}},
        {class: "fas fa-cogs", text: "Сервис", link: {class: "", href: "/service"}},
        {class: "fas fa-print", text: "Полиграфия", link: {class: "", href: "/polygraphy"}},
        {class: "fas fa-cash-register", text: "Доставка и оплата", link: {class: "", href: "/pay"}},
      ],
      toggleClass: "fadeInDown",
      chevron:  "fas fa-chevron-down",
      toggle: false
    }
  },
  methods: {
    toggleOn: function() {
      if (this.toggle) {
        this.toggleClass = "fadeOutUp"
        this.chevron = "fas fa-chevron-down"
        setTimeout(() => this.toggle = false, 400);
      }
      if (!this.toggle) {
        this.toggleClass = "fadeInDown"
        this.chevron = "fas fa-chevron-up"
        this.toggle = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// Animation
.fadeInDown {
  animation-name: fadeInDown;
  animation-duration: 0.4s;
  animation-fill-mode: both;
  }
  @keyframes fadeInDown {
    0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
    }
    100% {
    opacity: 1;
    transform: none;
    }
  }
.fadeOutUp {
  animation-name: fadeOutUp;
  animation-duration: 0.4s;
  animation-fill-mode: both;
  }
  @keyframes fadeOutUp {
    0% {
    opacity: 1;
    }
    100% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
    }
  } 

  $text-color: #2E4053;
  .link_style {
    text-decoration: none;
    color: $text-color;
    display: block;
  }
  .nuxt-link-active {
    border-bottom: $text-color 2px solid;
  }
  .toggle {
    // border: 1px solid;
    padding: 2px;
    width: 200px;
    cursor: pointer;
  }
  .fa-chevron-up, .fa-chevron-down  {
    margin-left: 5px;
  }
  .icon {
    margin-right: 5px;
  }
  .b-component {
    margin-right: 10px;
  }
  ul {
    width: 200px;
    padding: 5px;
    position: fixed;
    background: rgb(255, 255, 255);
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.5);
    z-index: 9999;
    // border: 1px solid;
    margin-top: 10px;
      li {
        padding: 2px;
        i {
          margin-right: 5px;
        }
      }
      a {
        @extend .link_style;
        border-bottom: white 2px solid;
        &:hover {
          border-bottom: $text-color 2px solid;
          transition: border-bottom 1s;
        }
      }
  }
</style>