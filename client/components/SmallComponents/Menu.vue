<template>
  <div>
    <ul>
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
    }
  },
  }
</script>

<style lang="scss" scoped>
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
    transform: rotate(270deg);
    padding: 2px;
    // width: 200px;
    cursor: pointer;
    position: fixed;
    top: 320px;
    left: -80px;
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
    display: none;
    // justify-content: space-between;
    // align-items: center;
    // width: calc(100vw - 40px);
    padding: 5px;
    position: fixed;
    top: 250px;
    right: 20px;
    background: rgba(255, 255, 255, 0);
    // box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.5);
    z-index: 999;
    // border: 1px solid;
    margin-top: 10px;
      li {
        // display: flex;
        // justify-content: space-between;
        // align-items: center;
        background: white;
        margin: 10px 0;
        padding: 5px 10px;
        border: #2E4053 1px solid;
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