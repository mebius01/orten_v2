<template>
  <div class="b-component">
    <p class="toggle" @click="toggleOn"><i class="fas fa-address-card icon"></i>Наши контакты
      <i :class="chevron"></i>
    </p>
    <ul :class="toggleClass" v-if="toggle">
      <li v-for="(item, index) in data" :key="index">
        <template v-if="item.link">
          <a :class="item.link.class" :href="item.link.href" target="_blank">
            <i :class="item.class"></i>{{item.text}}
          </a>
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
        // {class: "fas fa-address-card", text: "Наши контакты", link: false},
        {class: "fa fa-home", text: "г. Николаев пр. Мира, 5", link: {class: "", href: "https://www.google.com/maps/place/%D0%9E%D1%80%D1%82%D1%8D%D0%BD,+%D0%9E%D0%9E%D0%9E/@46.952503,32.040273,15z/data=!4m2!3m1!1s0x0:0x4784e49173525ad2?ved=2ahUKEwiLnpXuiPLfAhXNqIsKHWxSBAYQ_BIwCnoECAUQCA"}},
        {class: "fas fa-envelope", text: "orten_office@ukr.net", link: {class: "", href: "mailto:orten_office@ukr.net"}},
        {class: "fas fa-phone", text: "(0512) 56-65-39", link: {class: "", href: "tel:+380512566539"}},
        {class: "fas fa-mobile", text: "(050) 318-40-64", link: {class: "", href: "tel:+380503184064"}},
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
    width: 230px;
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
    width: 230px;
    padding: 5px;
    position: fixed;
    background: rgb(255, 255, 255);
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.5);
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